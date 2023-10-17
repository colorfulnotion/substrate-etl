# bigquery-public-data.crypto_polkadot.tracereference0
Query:
```
SELECT
  t.address_ss58,
  t.address_pubkey,
  t.section,
  t.storage,
  t.block_number,
  t.trace_id,
  t.extrinsic_id,
  e.`hash` as extrinsic_hash,
  e.section as ext_section,
  e.method as ext_method,
  t.k,
  t.v,
  t.pv,
  CAST(JSON_VALUE(t.pv, '$.consumers') AS INT64) AS consumers,
  CAST(JSON_VALUE(t.pv, '$.providers') AS INT64) AS providers,
  CAST(JSON_VALUE(t.pv, '$.sufficients') AS INT64) AS sufficients,
  (JSON_VALUE(t.pv, '$.flags')) AS flags,
  free,
  reserved,
  frozen
FROM
  `substrate-etl.crypto_polkadot.traces0` AS t
LEFT JOIN
  `substrate-etl.crypto_polkadot.extrinsics0` AS e ON t.extrinsic_id = e.extrinsic_id
WHERE
  t.section = 'System'
  AND t.storage = 'Account'
  AND DATE(t.ts) >= DATE_SUB(CURRENT_DATE(), INTERVAL 7 DAY);
```


# bigquery-public-data.crypto_polkadot.reservereference0
Query:
```
WITH tracer AS (
    SELECT
        address_ss58,
        address_pubkey,
        trace_id,
        extrinsic_id,
        extrinsic_hash,
        ext_section,
        ext_method,
        SPLIT(trace_id, '-')[OFFSET(1)] AS t_index,
        block_number,
        reserved,
        frozen,
    FROM `substrate-etl.crypto_polkadot.tracereference0`
),
tracer_with_prev_values AS (
    SELECT
        *,
        LAG(reserved) OVER(PARTITION BY address_pubkey ORDER BY CAST(block_number AS INT64), CAST(t_index AS INT64)) AS prev_reserved,
        LAG(frozen) OVER(PARTITION BY address_pubkey ORDER BY CAST(block_number AS INT64), CAST(t_index AS INT64)) AS prev_frozen,
        CASE
            WHEN reserved != LAG(reserved) OVER(PARTITION BY address_pubkey ORDER BY CAST(block_number AS INT64), CAST(t_index AS INT64)) THEN 1
            ELSE 0
        END AS reserved_change,
        CASE
            WHEN frozen != LAG(frozen) OVER(PARTITION BY address_pubkey ORDER BY CAST(block_number AS INT64), CAST(t_index AS INT64)) THEN 1
            ELSE 0
        END AS frozen_change
    FROM tracer
),
tracer_with_prev_trace_id AS (
    SELECT *,
        CASE
            WHEN reserved_change = 1 THEN LAG(trace_id) OVER(PARTITION BY address_pubkey, reserved_change ORDER BY CAST(block_number AS INT64), CAST(t_index AS INT64))
            ELSE NULL
        END AS prev_reserved_change,
        CASE
            WHEN frozen_change = 1 THEN LAG(trace_id) OVER(PARTITION BY address_pubkey, frozen_change ORDER BY CAST(block_number AS INT64), CAST(t_index AS INT64))
            ELSE NULL
        END AS prev_frozen_change
    FROM tracer_with_prev_values
)

SELECT *,
  CASE
    WHEN reserved_change = 1 AND frozen_change != 1 THEN 'reserved'
    WHEN frozen_change = 1 AND reserved_change != 1 THEN 'frozen'
    ELSE 'none'
  END AS change_type
FROM tracer_with_prev_trace_id
WHERE (reserved_change = 1 OR frozen_change = 1)
ORDER BY reserved_change DESC, address_pubkey, CAST(block_number AS INT64), CAST(t_index AS INT64);
```




# bigquery-public-data.crypto_polkadot.accountreference0
Query:
```
WITH
  tracer AS (
  SELECT
    address_ss58,
    address_pubkey,
    trace_id,
    extrinsic_id,
    extrinsic_hash,
    ext_section,
    ext_method,
    SPLIT(trace_id, '-')[
  OFFSET
    (1)] AS t_index,
    block_number,
    consumers,
    providers,
    sufficients,
  FROM
    `substrate-etl.crypto_polkadot.tracereference0` ),
  tracer_with_prev_values AS (
  SELECT
    *,
    LAG(consumers) OVER(PARTITION BY address_pubkey ORDER BY CAST(block_number AS INT64),
      CAST(t_index AS INT64)) AS prev_consumers,
    LAG(providers) OVER(PARTITION BY address_pubkey ORDER BY CAST(block_number AS INT64),
      CAST(t_index AS INT64)) AS prev_providers,
    LAG(sufficients) OVER(PARTITION BY address_pubkey ORDER BY CAST(block_number AS INT64),
      CAST(t_index AS INT64)) AS prev_sufficients,
    CASE
      WHEN consumers != LAG(consumers) OVER(PARTITION BY address_pubkey ORDER BY CAST(block_number AS INT64), CAST(t_index AS INT64)) THEN 1
    ELSE
    0
  END
    AS consumers_change,
    CASE
      WHEN providers != LAG(providers) OVER(PARTITION BY address_pubkey ORDER BY CAST(block_number AS INT64), CAST(t_index AS INT64)) THEN 1
    ELSE
    0
  END
    AS providers_change,
    CASE
      WHEN sufficients != LAG(sufficients) OVER(PARTITION BY address_pubkey ORDER BY CAST(block_number AS INT64), CAST(t_index AS INT64)) THEN 1
    ELSE
    0
  END
    AS sufficients_change
  FROM
    tracer ),
  tracer_with_prev_trace_id AS (
  SELECT
    *,
    CASE
      WHEN consumers_change = 1 THEN LAG(trace_id) OVER(PARTITION BY address_pubkey, consumers_change ORDER BY CAST(block_number AS INT64), CAST(t_index AS INT64))
    ELSE
    NULL
  END
    AS prev_consumers_change,
    CASE
      WHEN providers_change = 1 THEN LAG(trace_id) OVER(PARTITION BY address_pubkey, providers_change ORDER BY CAST(block_number AS INT64), CAST(t_index AS INT64))
    ELSE
    NULL
  END
    AS prev_providers_change,
    CASE
      WHEN sufficients_change = 1 THEN LAG(trace_id) OVER(PARTITION BY address_pubkey, sufficients_change ORDER BY CAST(block_number AS INT64), CAST(t_index AS INT64))
    ELSE
    NULL
  END
    AS prev_sufficients_change
  FROM
    tracer_with_prev_values )
SELECT
  *,
  CASE
  #WHEN (consumers_change + providers_change + sufficients_change) > 1 THEN 'multi'
    WHEN consumers_change = 1 AND providers_change != 1 AND sufficients_change != 1 THEN 'consumer'
    WHEN providers_change = 1
  AND consumers_change != 1
  AND sufficients_change != 1 THEN 'provider'
    WHEN sufficients_change = 1 AND consumers_change != 1 AND providers_change != 1 THEN 'sufficient'
    WHEN consumers_change = 1
  AND providers_change = 1
  AND sufficients_change != 1 THEN 'consumer, provider'
    WHEN consumers_change = 1 AND sufficients_change = 1 AND providers_change != 1 THEN 'consumer, sufficient'
    WHEN providers_change = 1
  AND sufficients_change = 1
  AND consumers_change != 1 THEN 'provider, sufficient'
    WHEN consumers_change = 1 AND providers_change = 1 AND sufficients_change = 1 THEN 'consumer, provider, sufficient'
  ELSE
  'none'
END
  AS change_type
FROM
  tracer_with_prev_trace_id
WHERE
  (consumers_change = 1
    OR providers_change = 1
    OR sufficients_change = 1)
ORDER BY
  consumers_change DESC,
  address_pubkey,
  CAST(block_number AS INT64),
  CAST(t_index AS INT64);
```
