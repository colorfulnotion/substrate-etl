# substrate-etl.polkadot_analytics.active_poolmembers0
Query:
```
WITH SortedActivity AS (
  SELECT
    address_ss58,
    nominationpools_id,
    ts,
    member_bonded,
    IF(member_bonded >= 100, 1, 0) as is_active,
    LAG(member_bonded, 1) OVER (PARTITION BY address_ss58, nominationpools_id ORDER BY ts DESC) as prev_day_bonded
  FROM `substrate-etl.polkadot_analytics.poolmembers0`
),
Breaks AS (
  SELECT
    address_ss58,
    nominationpools_id,
    ts,
    is_active,
    member_bonded,
    -- Detect the transition from inactive (< 100) to active (>= 100)
    IF(prev_day_bonded < 100 AND member_bonded >= 100, 1, 0) as is_start_of_active_period
  FROM SortedActivity
),
-- Mark periods of activity by incrementing a counter every time a new active period starts
MarkedPeriods AS (
  SELECT
    address_ss58,
    nominationpools_id,
    ts,
    is_active,
    member_bonded,
    SUM(is_start_of_active_period) OVER (PARTITION BY address_ss58, nominationpools_id ORDER BY ts) as active_period_group
  FROM Breaks
),
-- Find the timestamp of the start of the latest active period
LatestActivePeriodStart AS (
  SELECT
    address_ss58,
    nominationpools_id,
    MIN(ts) as start_of_latest_active_period
  FROM MarkedPeriods
  WHERE active_period_group = (
    SELECT MAX(active_period_group)
    FROM MarkedPeriods sub
    WHERE sub.address_ss58 = MarkedPeriods.address_ss58
      AND sub.nominationpools_id = MarkedPeriods.nominationpools_id
      AND sub.is_active = 1
  )
  GROUP BY address_ss58, nominationpools_id
),
-- Calculate the average member_bonded for the latest active period
AverageBondedDuringActivePeriod AS (
  SELECT
    mp.address_ss58,
    mp.nominationpools_id,
    AVG(mp.member_bonded) as avg_member_bonded
  FROM MarkedPeriods mp
  JOIN LatestActivePeriodStart lap ON mp.address_ss58 = lap.address_ss58
    AND mp.nominationpools_id = lap.nominationpools_id
    AND mp.ts >= lap.start_of_latest_active_period
  WHERE mp.is_active = 1
  GROUP BY mp.address_ss58, mp.nominationpools_id
)
-- Select final data
SELECT
  lap.address_ss58,
  lap.nominationpools_id,
  TIMESTAMP_DIFF(CURRENT_TIMESTAMP(), lap.start_of_latest_active_period, DAY) as active_days,
  ab.avg_member_bonded
FROM LatestActivePeriodStart lap
JOIN AverageBondedDuringActivePeriod ab ON lap.address_ss58 = ab.address_ss58
  AND lap.nominationpools_id = ab.nominationpools_id
ORDER BY active_days DESC;
```
