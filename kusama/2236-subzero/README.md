# subzero Summary (Monthly)

_Source_: [subzero.polkaholic.io](https://subzero.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2236
Status: Endpoint not reachable


| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-12-01 to 2023-12-29](/kusama/2236-subzero/2023-12-31.md) | 2,085,535 | 2,218,711 | 133,177 |  | 4 | 11 | -   |   
| [2023-11-15 to 2023-11-30](/kusama/2236-subzero/2023-11-30.md) | 2,006,943 | 2,085,534 | 78,592 |  | 4 | 11 | -   |   
| [2023-10-01 to 2023-10-04](/kusama/2236-subzero/2023-10-31.md) | 1,988,964 | 2,006,942 | 17,979 |  | 4 | 11 | -   |   
| [2023-09-01 to 2023-09-30](/kusama/2236-subzero/2023-09-30.md) | 1,797,162 | 1,988,963 | 191,802 | 26 | 4 | 11 | -   |   
| [2023-08-01 to 2023-08-31](/kusama/2236-subzero/2023-08-31.md) | 1,575,179 | 1,797,161 | 221,983 |  | 3 | 6 | -   |   
| [2023-07-01 to 2023-07-31](/kusama/2236-subzero/2023-07-31.md) | 1,353,306 | 1,575,178 | 221,873 |  | 3 | 6 | -   |   
| [2023-06-01 to 2023-06-30](/kusama/2236-subzero/2023-06-30.md) | 1,140,782 | 1,353,305 | 212,524 |  | 3 | 6 | -   |   
| [2023-05-01 to 2023-05-31](/kusama/2236-subzero/2023-05-31.md) | 936,493 | 1,140,781 | 204,289 | 1 | 3 | 6 | -   |   
| [2023-04-01 to 2023-04-30](/kusama/2236-subzero/2023-04-30.md) | 733,279 | 936,492 | 203,214 |  | 1 | 6 | -   |   
| [2023-03-01 to 2023-03-31](/kusama/2236-subzero/2023-03-31.md) | 537,211 | 733,278 | 196,068 |  |  | 6 | -   |   
| [2023-02-01 to 2023-02-28](/kusama/2236-subzero/2023-02-28.md) | 341,779 | 537,210 | 195,432 |  | 3 | 6 | -   |   
| [2023-01-01 to 2023-01-31](/kusama/2236-subzero/2023-01-31.md) | 127,025 | 341,778 | 214,754 |  | 3 | 6 | -   |   
| [2022-12-13 to 2022-12-31](/kusama/2236-subzero/2022-12-31.md) | 1 | 127,024 | 127,024 |  | 3 | 6 | -   |   

## Tables:

* _Blocks_: `bigquery-public-data.crypto_kusama.blocks2236` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `bigquery-public-data.crypto_kusama.extrinsics2236` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `bigquery-public-data.crypto_kusama.events2236` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `bigquery-public-data.crypto_kusama.transfers2236` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `bigquery-public-data.crypto_kusama.balances2236` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `bigquery-public-data.crypto_kusama.accountsactive2236` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `bigquery-public-data.crypto_kusama.accountspassive2236` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `bigquery-public-data.crypto_kusama.accountsnew2236` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `bigquery-public-data.crypto_kusama.accountsreaped2236` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `bigquery-public-data.crypto_kusama.assets` (filter on `2236`) - [Schema](/schema/assets.json)
* _XCM Assets_: `bigquery-public-data.crypto_kusama.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `bigquery-public-data.crypto_kusama.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `bigquery-public-data.crypto_kusama.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `bigquery-public-data.crypto_kusama.blocks2236` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2236.json](https://cdn.polkaholic.io/substrate-etl/kusama/2236.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
