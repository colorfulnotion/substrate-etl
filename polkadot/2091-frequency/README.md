# Frequency substrate-etl Summary (Monthly)

_Source_: [frequency.polkaholic.io](https://frequency.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2091



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-24](/polkadot/2091-frequency/2023-02-28.md) | 450,021 | 617,105 | 167,085 | 44 | 6 | 28 | -   |   
| [2023-01-01 to 2023-01-31](/polkadot/2091-frequency/2023-01-31.md) | 233,132 | 450,020 | 216,889 | 15 | 6 | 27 | -   |   
| [2022-12-01 to 2022-12-31](/polkadot/2091-frequency/2022-12-31.md) | 11,895 | 233,131 | 221,237 |  |  | 27 | -   |   
| [2022-11-29 to 2022-11-30](/polkadot/2091-frequency/2022-11-30.md) | 1 | 11,894 | 11,894 |  |  | 27 | -   |   

## substrate-etl Tables:

* _Blocks_: `substrate-etl.polkadot.blocks2091` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.polkadot.extrinsics2091` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.polkadot.events2091` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.polkadot.transfers2091` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.polkadot.balances2091` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.polkadot.accountsactive2091` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.polkadot.accountspassive2091` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.polkadot.accountsnew2091` (date-partitioned by `ts`)  - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.polkadot.accountsreaped2091` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.polkadot.assets` (filter on `2091`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.polkadot.blocks2091` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2091.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2091.json) | See [Definitions](/DEFINITIONS.md) for details
