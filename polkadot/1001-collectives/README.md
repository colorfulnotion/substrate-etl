# Collectives Summary (Monthly)

_Source_: [collectives.polkaholic.io](https://collectives.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 1001



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-12-01 to 2023-12-12](/polkadot/1001-collectives/2023-12-31.md) | 2,664,914 | 2,738,568 | 73,655 | 74 | 12 | 70 | -   |   
| [2023-11-01 to 2023-11-30](/polkadot/1001-collectives/2023-11-30.md) | 2,451,087 | 2,664,913 | 213,827 | 140 | 15 | 68 | -   |   
| [2023-10-01 to 2023-10-31](/polkadot/1001-collectives/2023-10-31.md) | 2,230,755 | 2,451,086 | 220,332 | 134 | 15 | 62 | -   |   
| [2023-09-01 to 2023-09-30](/polkadot/1001-collectives/2023-09-30.md) | 2,016,110 | 2,230,754 | 214,645 | 46 | 14 | 57 | -   |   
| [2023-08-01 to 2023-08-31](/polkadot/1001-collectives/2023-08-31.md) | 1,794,841 | 2,016,109 | 221,269 | 121 | 11 | 53 | -   |   
| [2023-07-01 to 2023-07-31](/polkadot/1001-collectives/2023-07-31.md) | 1,572,477 | 1,794,840 | 222,364 | 156 | 7 | 46 | -   |   
| [2023-06-01 to 2023-06-30](/polkadot/1001-collectives/2023-06-30.md) | 1,358,410 | 1,572,476 | 214,067 | 21 | 5 | 26 | -   |   
| [2023-05-01 to 2023-05-31](/polkadot/1001-collectives/2023-05-31.md) | 1,137,025 | 1,358,409 | 221,385 | 1 | 4 | 14 | -   |   
| [2023-04-01 to 2023-04-30](/polkadot/1001-collectives/2023-04-30.md) | 923,029 | 1,137,024 | 213,996 |  | 4 | 14 | -   |   
| [2023-03-01 to 2023-03-31](/polkadot/1001-collectives/2023-03-31.md) | 709,673 | 923,028 | 213,356 | 6 | 4 | 14 | -   |   
| [2023-02-01 to 2023-02-28](/polkadot/1001-collectives/2023-02-28.md) | 510,350 | 709,672 | 199,323 | 2 | 4 | 11 | -   |   
| [2023-01-01 to 2023-01-31](/polkadot/1001-collectives/2023-01-31.md) | 289,061 | 510,349 | 221,289 | 2 | 4 | 10 | -   |   
| [2022-12-01 to 2022-12-31](/polkadot/1001-collectives/2022-12-31.md) | 68,033 | 289,060 | 221,028 | 16 | 4 | 10 | -   |   
| [2022-11-21 to 2022-11-30](/polkadot/1001-collectives/2022-11-30.md) | 1 | 68,032 | 68,032 | 2 | 4 | 4 | -   |   

## Tables:

* _Blocks_: `bigquery-public-data.crypto_polkadot.blocks1001` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `bigquery-public-data.crypto_polkadot.extrinsics1001` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `bigquery-public-data.crypto_polkadot.events1001` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `bigquery-public-data.crypto_polkadot.transfers1001` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `bigquery-public-data.crypto_polkadot.balances1001` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `bigquery-public-data.crypto_polkadot.accountsactive1001` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `bigquery-public-data.crypto_polkadot.accountspassive1001` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `bigquery-public-data.crypto_polkadot.accountsnew1001` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `bigquery-public-data.crypto_polkadot.accountsreaped1001` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `bigquery-public-data.crypto_polkadot.assets` (filter on `1001`) - [Schema](/schema/assets.json)
* _XCM Assets_: `bigquery-public-data.crypto_polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `bigquery-public-data.crypto_polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `bigquery-public-data.crypto_polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `bigquery-public-data.crypto_polkadot.blocks1001` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/1001.json](https://cdn.polkaholic.io/substrate-etl/polkadot/1001.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
