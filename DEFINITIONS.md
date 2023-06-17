# Substrate-etl Definitions

_Note: These are tentative, and may be revised based on community feedback._

To support precise transparent definitions of all data summarized within substrate-etl report summaries (and used in polkaholic.io)
(see [All metrics are imperfect, but many are useful. Let’s make them more available](https://forum.polkadot.network/t/all-metrics-are-imperfect-but-many-are-useful-lets-make-them-more-available/1858/4)),
we attempt to define terms used in this repo both in English and through BigQuery on the substrate-etl datasets.

The open source approach taken here is of _transparency_ and _reproducibility_: with exact BigQuery computations, anyone can reproduce any datapoint and improve any definition with adjustments to query form.  

## Polkaholic.io Index 

The Polkaholic Indexing process results in BigQuery tables representing:
1. blocks, extrinsics, events, transfers (e.g. `substrate-etl.kusama.blocks0`, `substrate-etl.kusama.extrinsics0`, `substrate-etl.kusama.events0`, `substrate-etl.kusama.transfers0`)  -- derived by decoding every finalized block 
2. active accounts (e.g. `substrate-etl.kusama.accountsactive0`) and passive accounts (`substrate-etl.kusama.accountspassive0`) -- derived from combining the above tables, as described in **Account Metrics**
3. balances (e.g. `substrate-etl.kusama.balances0`) - derived from each chains native balances (`system.accounts`) and non-native (assets or tokens or some other pallet) at the end of the day
4. new accounts (e.g. `substrate-etl.kusama.accountsnew0`) and reaped accounts (`substrate-etl.kusama.accountsreaped0`) -- derived from daily differences in the `balances` tables

All data is based on UTC -- where the indexing process results in a load at the conclusion of
each UTC day (starting at 4pm PT, completed by 7pm).  In practice,
some data is filled in and a secondary load is done within 24-72 hours
with automated Github Actions to generate summary reports.

Both `polkadot` and `kusama` datasets is held in a public BigQuery `substrate-etl` project accessible through Google Cloud Platform and further contains:

5. XCM Transfers (e.g. `substrate-etl.polkadot.xcmtransfers` `substrate-etl.kusama.xcmtransfers`)

In addition, the combination of both relay chains are aggregated in a 3rd data `substrate-etl.dotsama` dataset, summarized [here](/SUMMARY.md) and escribed in **Dotsama Metrics**.

## Account Metrics (Substrate chain)

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

### Active accounts (User + System):

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

The list of passive accounts is kept in the following date-partitioned table, built using the query form above:

* `substrate-etl.{relayChain}.accountsactive{paraID}`

for all chains e.g. for Polkadot and Karura:

* `substrate-etl.polkadot.accountsactive0`
* `substrate-etl.kusama.accountsactive2000`

The **# of Active Accounts** is computed using the above table in [`update_blocklog`](https://github.com/colorfulnotion/polkaholic/blob/b1e2d4bf9dd280d20c7621ff0cd518dec2669d69/substrate/substrateetl.js#L2710) for all chains with archive nodes.

### Passive Accounts

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
      FROM `substrate-etl.kusama.transfers0`
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

The list of passive accounts is kept in the following date-partitioned tables, built using the query form above:

* `substrate-etl.{relayChain}.accountspassive{paraID}`

for all chains e.g. for Polkadot and Karura

* `substrate-etl.polkadot.accountspassive0`
* `substrate-etl.karura.accountspassive2000`

The **# of Passive Accounts** metric is computed in [`update_blocklog`](https://github.com/colorfulnotion/polkaholic/blob/b1e2d4bf9dd280d20c7621ff0cd518dec2669d69/substrate/substrateetl.js#L2711) for all chains with archive nodes.

### Addresses with Balances

The list of addresses with balances is kept in the following date-partitioned table:

* `substrate-etl.{relayChain}.balances{paraID}`

for all chains e.g. for Polkadot and Karura:

* `substrate-etl.polkadot.balances0`
* `substrate-etl.kusama.balances2000`

The **# of Addresses with Balances** metric is computed in [`load_bqlogfn`](https://github.com/colorfulnotion/polkaholic/blob/b1e2d4bf9dd280d20c7621ff0cd518dec2669d69/substrate/substrateetl.js#L516) after loading the balances table for all chains.
 
### New Accounts 

The list of accounts that are newly present in one day and were not present on the previous day is kept in the following date-partitioned tables:

* `substrate-etl.{relayChain}.accountsnew{paraID}`

for all chains e.g. for Polkadot and Karura:

* `substrate-etl.polkadot.accountsnew0`
* `substrate-etl.kusama.accountsnew2000`

It is computed using the `balances` table.  Note an account can be "new" multiple times in a day range, e.g. new on day N, reaped on day N+1, new again on day N+2.

The **# of New Accounts** metric is computed using the above table in [`update_blocklog`](https://github.com/colorfulnotion/polkaholic/blob/b1e2d4bf9dd280d20c7621ff0cd518dec2669d69/substrate/substrateetl.js#L2708) for all chains with archive nodes.
 
### Reaped Accounts

The list of accounts that are newly present in one day and were not present on the previous day is kept in the following date-partitioned table:

* `substrate-etl.{relayChain}.accountsreaped{paraID}`

for all chains e.g. for Polkadot and Karura:

* `substrate-etl.polkadot.accountsreaped0`
* `substrate-etl.kusama.accountsreaped2000`

It is computed using the `balances` table.  Note an account can be "reaped" multiple times in a day range, e.g. reaped on day N, new on day N+1, reaped again on day N+2.

The **# of Reaped Accounts** metric is computed using the above tables in
[`update_blocklog`](https://github.com/colorfulnotion/polkaholic/blob/b1e2d4bf9dd280d20c7621ff0cd518dec2669d69/substrate/substrateetl.js#L2709)
for all chains.

### Extrinsics

The **# of Signed Extrinsics** is computed using the following table using the column `signed` using [`update_blocklog`](https://github.com/colorfulnotion/polkaholic/blob/b1e2d4bf9dd280d20c7621ff0cd518dec2669d69/substrate/substrateetl.js#L2699) for all chains:

* `substrate-etl.{relayChain}.extrinsics{paraID}`

### Events

The **# of Events** metric is computed using the following table, and includes events from both signed and unsigned extrinsics using [`update_blocklog`](https://github.com/colorfulnotion/polkaholic/blob/b1e2d4bf9dd280d20c7621ff0cd518dec2669d69/substrate/substrateetl.js#L2700):

* `substrate-etl.{relayChain}.events{paraID}`


### Transfers

The **# of Transfers** metric is computed using the following table, and includes transfers from both signed and unsigned extrinsics using [`update_blocklog`](https://github.com/colorfulnotion/polkaholic/blob/b1e2d4bf9dd280d20c7621ff0cd518dec2669d69/substrate/substrateetl.js#L2701)

* `substrate-etl.{relayChain}.transfers{paraID}`

*Important:* Because some parachains include duplicate events for the
 same underlying transfer, a best effort was made to dedup events to
 only include one event.  Further details concerning XCM Transfers
 will be provided.

## XCM Transfers

The process of matching XCM Transfers between an origination chain and a destination chain with topics will be detailed further in Q3 2023.

**Important:** Because some parachains do not provide archive nodes (see "Issues"), only tables from chains that provide archive nodes can be included.  If new archive nodes become available for these
chains, the above datasets may be adjusted.

The above is computed with [`dump_networkmetrics`](https://github.com/colorfulnotion/polkaholic/blob/b1e2d4bf9dd280d20c7621ff0cd518dec2669d69/substrate/substrateetl.js#L1810-L1920)
once all chains have completed that can be ignored (marked with an "Ignore" flag).  Some chains without archive nodes must be ignored (generally these are new chains) as a condition in the above
aggregation.  Otherwise this is initiated once all chains are marked as Audited or AuditRequired.





