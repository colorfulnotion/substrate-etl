# BridgeHub Summary (Monthly)

_Source_: [bridgehub.polkaholic.io](https://bridgehub.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 1002



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2024-01-01 to 2024-01-29](/polkadot/1002-bridgehub/2024-01-31.md) | 1,662,432 | 1,862,122 | 178,331 |  |  | 19 | - 21,360 (10.70%) |   
| [2023-12-01 to 2023-12-31](/polkadot/1002-bridgehub/2023-12-31.md) | 1,462,258 | 1,642,484 | 47,722 | 1 |  | 19 | -  **BROKEN** (73.52%) |   
| [2023-11-01 to 2023-11-30](/polkadot/1002-bridgehub/2023-11-30.md) | 1,240,235 | 1,447,969 | 78,761 | 1 |  | 17 | -  **BROKEN** (62.09%) |   
| [2023-10-01 to 2023-10-31](/polkadot/1002-bridgehub/2023-10-31.md) | 1,011,644 | 1,211,632 | 71,571 |  |  | 17 | -  **BROKEN** (64.21%) |   
| [2023-09-01 to 2023-09-30](/polkadot/1002-bridgehub/2023-09-30.md) | 818,549 | 933,126 | 42,926 |  |  | 17 | -  **BROKEN** (62.54%) |   
| [2023-08-01 to 2023-08-31](/polkadot/1002-bridgehub/2023-08-31.md) | 582,852 | 768,416 | 49,655 | 11 |  | 17 | -  **BROKEN** (73.24%) |   
| [2023-07-01 to 2023-07-31](/polkadot/1002-bridgehub/2023-07-31.md) | 374,912 | 575,672 | 71,696 | 3 |  | 10 | -  **BROKEN** (64.29%) |   
| [2023-06-01 to 2023-06-30](/polkadot/1002-bridgehub/2023-06-30.md) | 175,097 | 353,365 | 64,153 |  |  | 1 | -  **BROKEN** (64.01%) |   
| [2023-05-12 to 2023-05-31](/polkadot/1002-bridgehub/2023-05-31.md) | 10,827 | 139,437 | 57,165 |  |  |  | -  **BROKEN** (55.55%) |   

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
