# BridgeHub Summary (Monthly)

_Source_: [bridgehub.polkaholic.io](https://bridgehub.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 1002



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2024-01-01 to 2024-01-29](/polkadot/1002-bridgehub/2024-01-31.md) | 1,704,837 | 1,862,122 | 157,286 |  |  | 19 | -   |   
| [2023-12-01 to 2023-12-31](/polkadot/1002-bridgehub/2023-12-31.md) | 1,462,258 | 1,622,898 | 13,341 |  |  | 19 | -  **BROKEN** (91.70%) |   
| [2023-11-01 to 2023-11-30](/polkadot/1002-bridgehub/2023-11-30.md) | 1,247,379 | 1,447,969 | 28,617 |  |  | 17 | -  **BROKEN** (85.73%) |   
| [2023-10-01 to 2023-10-31](/polkadot/1002-bridgehub/2023-10-31.md) | 1,026,004 | 1,211,632 | 42,915 |  |  | 17 | -  **BROKEN** (76.88%) |   
| [2023-09-01 to 2023-09-30](/polkadot/1002-bridgehub/2023-09-30.md) | 818,549 | 868,624 | 21,435 |  |  | 17 | -  **BROKEN** (57.20%) |   
| [2023-08-01 to 2023-08-31](/polkadot/1002-bridgehub/2023-08-31.md) | 625,927 | 633,105 | 7,179 |  |  | 17 | -  **BROKEN**  |   
| [2023-07-01 to 2023-07-31](/polkadot/1002-bridgehub/2023-07-31.md) | 374,912 | 554,120 | 21,515 |  |  | 10 | -  **BROKEN** (87.99%) |   
| [2023-06-01 to 2023-06-30](/polkadot/1002-bridgehub/2023-06-30.md) | 210,770 | 353,365 | 28,573 |  |  | 1 | -  **BROKEN** (79.96%) |   
| [2023-05-12 to 2023-05-31](/polkadot/1002-bridgehub/2023-05-31.md) | 60,906 | 139,437 | 28,576 |  |  |  | -  **BROKEN** (63.61%) |   

## Tables:

* _Blocks_: `bigquery-public-data.crypto_polkadot.blocks1002` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `bigquery-public-data.crypto_polkadot.extrinsics1002` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `bigquery-public-data.crypto_polkadot.events1002` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `bigquery-public-data.crypto_polkadot.transfers1002` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `bigquery-public-data.crypto_polkadot.balances1002` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `bigquery-public-data.crypto_polkadot.accountsactive1002` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `bigquery-public-data.crypto_polkadot.accountspassive1002` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `bigquery-public-data.crypto_polkadot.accountsnew1002` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `bigquery-public-data.crypto_polkadot.accountsreaped1002` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `bigquery-public-data.crypto_polkadot.assets` (filter on `1002`) - [Schema](/schema/assets.json)
* _XCM Assets_: `bigquery-public-data.crypto_polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `bigquery-public-data.crypto_polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `bigquery-public-data.crypto_polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `bigquery-public-data.crypto_polkadot.blocks1002` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/1002.json](https://cdn.polkaholic.io/substrate-etl/polkadot/1002.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
