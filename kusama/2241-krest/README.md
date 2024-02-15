# Krest Summary (Monthly)

_Source_: [krest.polkaholic.io](https://krest.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2241
Status: Crawling initiated


| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2024-02-01 to 2024-02-15](/kusama/2241-krest/2024-02-29.md) | 1,682,943 | 1,778,365 | 95,423 | 6,343 |  |  | -   |   
| [2024-01-01 to 2024-01-31](/kusama/2241-krest/2024-01-31.md) | 1,483,120 | 1,682,942 | 199,823 | 5,647 |  |  | -   |   
| [2023-12-01 to 2023-12-31](/kusama/2241-krest/2023-12-31.md) | 1,280,752 | 1,483,119 | 202,368 | 2,466 |  |  | -   |   
| [2023-11-01 to 2023-11-30](/kusama/2241-krest/2023-11-30.md) | 1,077,219 | 1,280,751 | 203,533 | 9,076 |  |  | -   |   
| [2023-10-01 to 2023-10-31](/kusama/2241-krest/2023-10-31.md) | 863,617 | 1,077,218 | 213,602 | 3,904 |  |  | -   |   
| [2023-09-01 to 2023-09-30](/kusama/2241-krest/2023-09-30.md) | 659,528 | 863,616 | 204,089 | 2,665 | 2 |  | -   |   
| [2023-08-01 to 2023-08-31](/kusama/2241-krest/2023-08-31.md) | 438,256 | 659,527 | 221,272 | 216 | 28 |  | -   |   
| [2023-07-01 to 2023-07-31](/kusama/2241-krest/2023-07-31.md) | 222,736 | 438,255 | 215,520 |  |  |  | -   |   
| [2023-06-01 to 2023-06-30](/kusama/2241-krest/2023-06-30.md) | 10,377 | 222,735 | 212,061 | 44 |  |  | - 298 (0.14%) |   
| [2023-05-26 to 2023-05-31](/kusama/2241-krest/2023-05-31.md) | 1 | 10,376 | 10,376 | 1 |  |  | -   |   

## Tables:

* _Blocks_: `bigquery-public-data.crypto_kusama.blocks2241` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `bigquery-public-data.crypto_kusama.extrinsics2241` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `bigquery-public-data.crypto_kusama.events2241` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `bigquery-public-data.crypto_kusama.transfers2241` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `bigquery-public-data.crypto_kusama.balances2241` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `bigquery-public-data.crypto_kusama.accountsactive2241` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `bigquery-public-data.crypto_kusama.accountspassive2241` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `bigquery-public-data.crypto_kusama.accountsnew2241` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `bigquery-public-data.crypto_kusama.accountsreaped2241` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `bigquery-public-data.crypto_kusama.assets` (filter on `2241`) - [Schema](/schema/assets.json)
* _XCM Assets_: `bigquery-public-data.crypto_kusama.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `bigquery-public-data.crypto_kusama.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `bigquery-public-data.crypto_kusama.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `bigquery-public-data.crypto_kusama.blocks2241` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2241.json](https://cdn.polkaholic.io/substrate-etl/kusama/2241.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
