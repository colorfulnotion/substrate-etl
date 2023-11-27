# Frequency Summary (Monthly)

_Source_: [frequency.polkaholic.io](https://frequency.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2091



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-11-01 to 2023-11-27](/polkadot/2091-frequency/2023-11-30.md) | 2,388,375 | 2,573,240 | 184,838 | 104,250 | 6 | 135 | - 28 (0.02%) |   
| [2023-10-01 to 2023-10-31](/polkadot/2091-frequency/2023-10-31.md) | 2,167,490 | 2,388,374 | 220,885 | 70,075 | 7 | 140 | -   |   
| [2023-09-01 to 2023-09-30](/polkadot/2091-frequency/2023-09-30.md) | 1,954,066 | 2,167,489 | 213,424 | 43,063 | 6 | 125 | -   |   
| [2023-08-01 to 2023-08-31](/polkadot/2091-frequency/2023-08-31.md) | 1,732,648 | 1,954,065 | 221,418 | 244 | 6 | 121 | -   |   
| [2023-07-01 to 2023-07-31](/polkadot/2091-frequency/2023-07-31.md) | 1,513,469 | 1,732,647 | 219,179 | 302 | 8 | 118 | -   |   
| [2023-06-01 to 2023-06-30](/polkadot/2091-frequency/2023-06-30.md) | 1,299,337 | 1,513,468 | 214,132 | 97 | 8 | 118 | -   |   
| [2023-05-01 to 2023-05-31](/polkadot/2091-frequency/2023-05-31.md) | 1,077,706 | 1,299,336 | 221,631 | 553 | 9 | 118 | -   |   
| [2023-04-01 to 2023-04-30](/polkadot/2091-frequency/2023-04-30.md) | 863,257 | 1,077,705 | 214,449 | 173 | 9 | 35 | -   |   
| [2023-03-01 to 2023-03-31](/polkadot/2091-frequency/2023-03-31.md) | 649,378 | 863,256 | 213,879 | 86 | 8 | 29 | -   |   
| [2023-02-01 to 2023-02-28](/polkadot/2091-frequency/2023-02-28.md) | 450,021 | 649,377 | 199,357 | 58 | 7 | 22 | -   |   
| [2023-01-01 to 2023-01-31](/polkadot/2091-frequency/2023-01-31.md) | 233,132 | 450,020 | 216,889 | 15 | 6 | 21 | -   |   
| [2022-12-01 to 2022-12-31](/polkadot/2091-frequency/2022-12-31.md) | 11,895 | 233,131 | 221,237 |  | 6 | 21 | -   |   
| [2022-11-29 to 2022-11-30](/polkadot/2091-frequency/2022-11-30.md) | 1 | 11,894 | 11,894 |  | 6 | 21 | -   |   

## Tables:

* _Blocks_: `bigquery-public-data.crypto_polkadot.blocks2091` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `bigquery-public-data.crypto_polkadot.extrinsics2091` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `bigquery-public-data.crypto_polkadot.events2091` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `bigquery-public-data.crypto_polkadot.transfers2091` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `bigquery-public-data.crypto_polkadot.balances2091` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `bigquery-public-data.crypto_polkadot.accountsactive2091` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `bigquery-public-data.crypto_polkadot.accountspassive2091` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `bigquery-public-data.crypto_polkadot.accountsnew2091` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `bigquery-public-data.crypto_polkadot.accountsreaped2091` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `bigquery-public-data.crypto_polkadot.assets` (filter on `2091`) - [Schema](/schema/assets.json)
* _XCM Assets_: `bigquery-public-data.crypto_polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `bigquery-public-data.crypto_polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `bigquery-public-data.crypto_polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `bigquery-public-data.crypto_polkadot.blocks2091` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2091.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2091.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
