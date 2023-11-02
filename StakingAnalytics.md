### substrate-etl.polkadot_analytics.validators0

```
WITH
  unnested AS (
  SELECT
    address_ss58 AS nominator,
    era,
    ts,
    JSON_EXTRACT_SCALAR(TARGET, '$') AS TARGET
  FROM
    `substrate-etl.crypto_polkadot.stakings0`,
    UNNEST(JSON_EXTRACT_ARRAY(pv, '$.targets')) AS TARGET
  WHERE
    storage = "Nominators" ),
  aggregated AS (
  SELECT
    TARGET AS validator,
    era,
    ts,
    ARRAY_AGG(nominator) AS nominators,
    COUNT(*) AS nominatorCnt
  FROM
    unnested
  GROUP BY
    validator,
    era,
    ts ),
  eraRaw AS (
  SELECT
    era,
    ts,
    SUM(validator_staking_rewards)/COUNT(*) AS avg_validator_staking_rewards,
    SUM(validator_staking_rewards) total_era_rewards,
    COUNT(*) AS active_validator_cnt,
  FROM
    `substrate-etl.crypto_polkadot.stakings0`
  WHERE
    storage = "ErasStakers"
    AND validator_total IS NOT NULL
  GROUP BY
    era,
    ts ),
  validators AS (
  SELECT
    v.era,
    v.ts,
    address_ss58 AS validator,
  IF
    (validator_total IS NULL, FALSE, TRUE) AS validator_is_active,
    validator_total,
    validator_own,
    validator_commission,
    validator_reward_shares,
    validator_reward_points,
    validator_staking_rewards,
  IF
    (validator_staking_rewards IS NULL, NULL, 365 * validator_staking_rewards / validator_total ) AS validator_staking_apr,
  IF
    (validator_staking_rewards IS NULL, NULL, 365 * (1 - validator_commission) * validator_staking_rewards / validator_total ) AS validator_effective_staking_apr
  FROM
    `substrate-etl.crypto_polkadot.stakings0` AS v
  WHERE
    storage = "ErasStakers" ),
  validator_augmented AS (
  SELECT
    v.*,
    e.avg_validator_staking_rewards,
  IF
    (v.validator_staking_rewards IS NULL, NULL, 365 * (1 - v.validator_commission) * e.avg_validator_staking_rewards / v.validator_total ) AS validator_normalized_staking_apr
  FROM
    validators v
  LEFT JOIN
    eraRaw e
  ON
    v.era = e.era
    AND v.ts = e.ts ),
  joined AS (
  SELECT
    a.validator,
    a.era,
    a.ts,
    va.validator_is_active,
    va.validator_total,
    va.validator_own,
    va.validator_commission,
    va.validator_reward_shares,
    va.validator_reward_points,
    va.validator_staking_rewards,
    va.validator_staking_apr,
    va.validator_effective_staking_apr,
    va.validator_normalized_staking_apr,
    a.nominatorCnt,
    a.nominators
  FROM
    aggregated a
  LEFT JOIN
    validator_augmented AS va
  ON
    a.validator = va.validator
    AND a.era = va.era
    AND a.ts = va.ts )
SELECT
  *
FROM
  joined
```
### substrate-etl.polkadot_analytics.nominators0

```
WITH
  nominators AS (
  SELECT
    JSON_EXTRACT_SCALAR(other, '$.who') AS nominator,
    address_ss58 AS validator,
    era,
    ts,
    CAST(JSON_EXTRACT_SCALAR(other, '$.value') AS FLOAT64) AS delegated_amount,
  FROM
    `substrate-etl.crypto_polkadot.stakings0`,
    UNNEST(JSON_EXTRACT_ARRAY(JSON_EXTRACT(pv, '$.others'))) AS other
  WHERE
    storage = "ErasStakers"),
  eraRaw AS (
  SELECT
    era,
    ts,
    SUM(validator_staking_rewards)/COUNT(*) AS avg_validator_staking_rewards,
    SUM(validator_staking_rewards) total_era_rewards,
    COUNT(*) AS active_validator_cnt,
  FROM
    `substrate-etl.crypto_polkadot.stakings0`
  WHERE
    storage = "ErasStakers"
    AND validator_total IS NOT NULL
  GROUP BY
    era,
    ts ),
  validators AS (
  SELECT
    v.era,
    v.ts,
    address_ss58 AS validator,
  IF
    (validator_total IS NULL, FALSE, TRUE) AS validator_is_active,
    validator_total,
    validator_own,
    validator_commission,
    validator_reward_shares,
    validator_reward_points,
    IFNULL(validator_staking_rewards, 0) validator_staking_rewards,
  IF
    (validator_staking_rewards IS NULL, NULL, 365 * validator_staking_rewards / validator_total ) AS validator_staking_apr,
  IF
    (validator_staking_rewards IS NULL, NULL, 365 * (1 - validator_commission) * validator_staking_rewards / validator_total ) AS validator_effective_staking_apr
  FROM
    `substrate-etl.crypto_polkadot.stakings0` AS v
  WHERE
    storage = "ErasStakers" ),
  validator_augmented AS (
  SELECT
    v.*,
    e.avg_validator_staking_rewards,
  IF
    (v.validator_staking_rewards IS NULL, 0, 365 * (1 - v.validator_commission) * e.avg_validator_staking_rewards / v.validator_total ) AS validator_normalized_staking_apr
  FROM
    validators v
  LEFT JOIN
    eraRaw e
  ON
    v.era = e.era
    AND v.ts = e.ts ),
  nominators_active AS (
  SELECT
    n.ts,
    n.era,
    n.nominator,
    n.validator,
    n.delegated_amount,
    n.delegated_amount / va.validator_total AS nominator_shares,
    va.validator_staking_rewards* (n.delegated_amount / va.validator_total) AS nominator_staking_rewards,
    va.validator_commission,
    #va.validator_reward_shares,
    #va.validator_reward_points,
    #va.validator_staking_rewards
  FROM
    nominators AS n
  LEFT JOIN
    validator_augmented AS va
  ON
    n.validator = va.validator
    AND n.era = va.era
    AND n.ts = va.ts ),
  nominators_full AS (
  SELECT
    address_ss58 AS nominator,
    JSON_EXTRACT_SCALAR(TARGET, '$') AS validator,
    era,
    ts,
  FROM
    `substrate-etl.crypto_polkadot.stakings0`,
    UNNEST(JSON_EXTRACT_ARRAY(pv, '$.targets')) AS TARGET
  WHERE
    storage = "Nominators" )
SELECT
  *
FROM
  nominators_active;
```

### substrate-etl.polkadot_analytics.nominationpools0

```
WITH
  np AS (
  SELECT
    address_ss58 AS stash_ss58,
    era,
    ts,
    nominationpools_id,
    nominationpools_total,
    nominationpools_member_cnt,
    IFNULL(nominationpools_commission, 0) nominationpools_commission,
    JSON_EXTRACT_SCALAR(pv, '$.state') AS state,
    CAST(JSON_EXTRACT_SCALAR(nominationpools_rewardpools, '$.lastRecordedRewardCounter') AS FLOAT64) AS lastRecordedRewardCounter,
    CAST(JSON_EXTRACT_SCALAR(nominationpools_rewardpools, '$.lastRecordedTotalPayouts') AS FLOAT64) AS lastRecordedTotalPayouts,
    CAST(JSON_EXTRACT_SCALAR(nominationpools_rewardpools, '$.totalCommissionClaimed') AS FLOAT64) AS totalCommissionClaimed,
    CAST(JSON_EXTRACT_SCALAR(nominationpools_rewardpools, '$.totalCommissionPending') AS FLOAT64) AS totalCommissionPending,
    CAST(JSON_EXTRACT_SCALAR(nominationpools_rewardpools, '$.totalRewardsClaimed') AS FLOAT64) AS totalRewardsClaimed,
    JSON_EXTRACT_SCALAR(pv, '$.roles.bouncer') AS bouncer,
    JSON_EXTRACT_SCALAR(pv, '$.roles.depositor') AS depositor,
    JSON_EXTRACT_SCALAR(pv, '$.roles.nominator') AS nominator,
    JSON_EXTRACT_SCALAR(pv, '$.roles.root') AS root
  FROM
    `substrate-etl.crypto_polkadot.stakings0`
  WHERE
    section = "NominationPools"
    AND storage = "BondedPools"
    AND TIMESTAMP_TRUNC(ts, DAY) >= TIMESTAMP("2022-10-30") ),
  np_reward AS (
  SELECT
    nominator AS stash_ss58,
    era,
    ts,
    SUM(delegated_amount) AS delegated_amount,
    SUM(nominator_staking_rewards) AS staking_rewards,
  FROM
    `substrate-etl.polkadot_analytics.nominators0`
  WHERE
    TIMESTAMP_TRUNC(ts, DAY) >= TIMESTAMP("2022-10-30")
  GROUP BY
    nominator,
    era,
    ts )
SELECT
  np.*,
  np_reward.delegated_amount,
  np_reward.staking_rewards * (1 - np.nominationpools_commission) staking_rewards,
  np_reward.staking_rewards * np.nominationpools_commission AS pool_fee,
  365 * np_reward.staking_rewards * (1 - np.nominationpools_commission) / np_reward.delegated_amount AS staking_effective_apr
FROM
  np
LEFT JOIN
  np_reward
ON
  np.stash_ss58 = np_reward.stash_ss58
  AND np.era = np_reward.era
  AND np.ts = np_reward.ts ;
```

### substrate-etl.polkadot_analytics.poolmembers0

```
WITH
  member_bond AS (
  SELECT
    address_ss58,
    address_pubkey,
    ts,
    era,
    nominationpools_id,
    member_bonded,
    member_share,
    CAST(JSON_EXTRACT_SCALAR(pv, '$.lastRecordedRewardCounter') AS FLOAT64) AS member_lastRecordedRewardCounter,
    LAG(member_bonded) OVER (PARTITION BY address_ss58 ORDER BY era ASC) AS prev_member_bonded,
  FROM
    `substrate-etl.crypto_polkadot.stakings0`
  WHERE
    section = "NominationPools"
    AND storage = "PoolMembers"
    AND TIMESTAMP_TRUNC(ts, DAY) >= TIMESTAMP("2022-10-20") ),
  member AS (
  SELECT
    address_ss58,
    address_pubkey,
    ts,
    era,
    nominationpools_id,
    member_bonded,
    member_bonded - IFNULL(prev_member_bonded, 0) AS member_bonded_extra,
    member_share,
    member_lastRecordedRewardCounter
  FROM
    member_bond )
SELECT
  member.* EXCEPT(member_lastRecordedRewardCounter,
    address_pubkey),
  member_share * np.staking_rewards AS member_staking_rewards,
  member_share * np.pool_fee AS member_pool_fee,
  np.nominationpools_commission,
  (np.lastRecordedRewardCounter - member.member_lastRecordedRewardCounter) / 10000000000000 AS unclaimed_rewards,
FROM
  member
LEFT JOIN
  `substrate-etl.polkadot_analytics.nominationpools0` AS np
ON
  member.nominationpools_id = np.nominationpools_id
  AND member.era = np.era
  AND member.ts = np.ts;
```
