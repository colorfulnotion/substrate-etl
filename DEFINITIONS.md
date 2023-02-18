# Substrate-etl Definitions

_Note: These are tentative, and may be revised based on community feedback._

To support precise transparent definitions of all data summarized within substrate-etl report summaries (and used in polkaholic.io)
(see [All metrics are imperfect, but many are useful. Let’s make them more available](https://forum.polkadot.network/t/all-metrics-are-imperfect-but-many-are-useful-lets-make-them-more-available/1858/4)),
we attempt to define terms used in this repo both in English and through BigQuery on the substrate-etl datasets.

The open source approach taken here is of _transparency_ and _reproducibility_: with exact BigQuery computations, anyone can reproduce any datapoint and improve any definition with adjustments to query form.  

## Account Metrics (Substrate)

* _Active Accounts_ (Substrate): Accounts that have signed an extrinsic on a Substrate chain 
* _System Accounts_ (Substrate): Accounts that have participated in consensus and produced a block
* _Passive Accounts_ (Substrate): Accounts that aren't active but have any balance changes for any asset (native or non-native asset, within chain or cross-chain). This can include proxy and multisig accounts, remote execution triggered by other accounts, transfer recipients (including crowdloan and staking rewards distribution), and balance deductions (e.g., pre-authorized transferFrom/proxy called by other active accounts).

The above definitions are mechanized in `substrate-etl` BigQuery below.  The following computes _Active Accounts_, _System Accounts_ and _Passive Accounts_ for the Kusama relay chain for February 1, 2023 using the following public data:

* `substrate-etl.kusama.extrinsics0`
* `substrate-etl.kusama.blocks0`
* `substrate-etl.kusama.transfers0`

The counts of each are shown in the report summaries.  To compose for
any other chain or date, simply replace `0` with a paraID (e.g. `2023`
for [Moonriver](/kusama/2023-moonriver)), adjust the relay chain from `kusama` to `polkadot`
if appropriate, and the date `2023-02-01` with another date in the
queries below.

### Active account (User + System):

```
SELECT address_ss58,
       address_pubkey,
       max(accountType) AS accountType,
       Max(blockTime) AS last_active_ts
FROM
  (WITH activeUserAccount AS
     (SELECT signer_ss58 AS address_ss58,
             signer_pub_key AS address_pubkey,
             "User" AS accountType,
             Max(block_time) AS block_time
      FROM `substrate-etl.kusama.extrinsics0`
      WHERE DATE(block_time) = "2023-02-01"
        AND signed = TRUE
      GROUP BY address_ss58,
               address_pubkey),
        activeSystemAccount AS
     (SELECT author_ss58 AS address_ss58,
             author_pub_key AS address_pubkey,
             "System" AS accountType,
             Max(block_time) AS block_time
      FROM `substrate-etl.kusama.blocks0`
      WHERE DATE(block_time) = "2023-02-01"
      GROUP BY address_ss58,
               address_pubkey) SELECT address_ss58,
                                      address_pubkey,
                                      max(accountType) AS accountType,
                                      Max(block_time) AS blockTime
   FROM activeSystemAccount
   GROUP BY address_ss58,
            address_pubkey
   UNION ALL
     (SELECT address_ss58,
             address_pubkey,
             max(accountType) AS accountType,
             Max(block_time) AS blockTime
      FROM activeUserAccount
      GROUP BY address_ss58,
               address_pubkey))
GROUP BY address_ss58,
         address_pubkey
```

### Passive Account

```
WITH ActiveAccount AS
  (SELECT address_ss58,
          max(accountType) AS accountType
   FROM
     (WITH activeUserAccount AS
        (SELECT signer_ss58 AS address_ss58,
                signer_pub_key AS address_pubkey,
                "User" AS accountType,
                Max(block_time) AS block_time
         FROM `substrate-etl.kusama.extrinsics0`
         WHERE DATE(block_time) = "2023-02-01"
           AND signed = TRUE
         GROUP BY address_ss58,
                  address_pubkey),
           activeSystemAccount AS
        (SELECT author_ss58 AS address_ss58,
                author_pub_key AS address_pubkey,
                "System" AS accountType,
                Max(block_time) AS block_time
         FROM `substrate-etl.kusama.blocks0`
         WHERE DATE(block_time) = "2023-02-01"
         GROUP BY address_ss58,
                  address_pubkey) SELECT address_ss58,
                                         address_pubkey,
                                         max(accountType) AS accountType,
                                         Max(block_time) AS blockTime
      FROM activeSystemAccount
      GROUP BY address_ss58,
               address_pubkey
      UNION ALL
        (SELECT address_ss58,
                address_pubkey,
                max(accountType) AS accountType,
                Max(block_time) AS blockTime
         FROM activeUserAccount
         GROUP BY address_ss58,
                  address_pubkey))
   GROUP BY address_ss58,
            address_pubkey),
     TransferAccount AS
  (SELECT address_ss58,
          address_pubkey,
          Max(block_time) AS block_time
   FROM
     (SELECT to_ss58 AS address_ss58,
             to_pub_key AS address_pubkey,
             Max(block_time) AS block_time
      FROM `substrate-etl.kusama.transfers2004`
      WHERE DATE(block_time) = "2023-02-01"
      GROUP BY address_ss58,
               address_pubkey
      UNION ALL SELECT from_ss58 AS address_ss58,
                       from_pub_key AS address_pubkey,
                       Max(block_time) AS block_time
      FROM `substrate-etl.kusama.transfers0`
      WHERE DATE(block_time) = "2023-02-01"
      GROUP BY address_ss58,
               address_pubkey)
   GROUP BY address_ss58,
            address_pubkey)
SELECT address_ss58,
       address_pubkey,
       Max(block_time) AS last_passive_ts
FROM TransferAccount
WHERE address_ss58 not in
    (SELECT address_ss58
     FROM ActiveAccount)
  AND address_ss58 IS NOT NULL
GROUP BY address_ss58,
         address_pubkey
ORDER BY address_pubkey;
```

