# Tanganika Summary (Monthly)

_Source_: [tanganika.polkaholic.io](https://tanganika.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2116
Status: Only partial index available: Archive node unavailable


| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-05-01 to 2023-05-22](/kusama/2116-tanganika/2023-05-31.md) | 1,956,317 | 2,105,364 | 149,048 | 1,001 | 2 | 3,888 | -   |   
| [2023-04-01 to 2023-04-30](/kusama/2116-tanganika/2023-04-30.md) | 1,750,822 | 1,956,316 | 205,495 | 3,170 | 3 | 3,885 | -   |   
| [2023-03-01 to 2023-03-31](/kusama/2116-tanganika/2023-03-31.md) | 1,542,640 | 1,750,821 | 208,105 | 2,925 |  | 3,623 | - 77 (0.04%) |   
| [2023-02-08 to 2023-02-28](/kusama/2116-tanganika/2023-02-28.md) | 1,401,932 | 1,542,639 | 140,708 | 1,922 | 3 |  | -   |   
| [2023-01-23 to 2023-01-24](/kusama/2116-tanganika/2023-01-31.md) | 1,283,096 | 1,296,404 | 13,309 | 149 |  |  | -  **BROKEN**  |   
| [2022-12-01 to 2022-12-13](/kusama/2116-tanganika/2022-12-31.md) | 935,791 | 1,009,889 | 74,036 | 1,090 | 34 | 3,213 | -  **BROKEN** (0.09%) |   
| [2022-11-01 to 2022-11-30](/kusama/2116-tanganika/2022-11-30.md) | 770,800 | 935,790 | 162,603 | 2,508 | 13 | 3,057 | - 2,388 (1.45%) |   
| [2022-10-01 to 2022-10-31](/kusama/2116-tanganika/2022-10-31.md) | 557,446 | 770,799 | 213,354 | 2,405 | 39 | 3,033 | -   |   
| [2022-09-01 to 2022-09-30](/kusama/2116-tanganika/2022-09-30.md) | 363,896 | 557,445 | 193,550 | 1,421 | 31 | 2,749 | -   |   
| [2022-08-01 to 2022-08-31](/kusama/2116-tanganika/2022-08-31.md) | 201,235 | 363,895 | 162,661 | 1,024 | 24 | 2,617 | -   |   
| [2022-07-01 to 2022-07-31](/kusama/2116-tanganika/2022-07-31.md) | 22,739 | 201,234 | 178,496 | 114 | 10 | 2,473 | -   |   
| [2022-06-27 to 2022-06-30](/kusama/2116-tanganika/2022-06-30.md) | 1 | 22,738 | 22,738 | 22 | 8 | 2,470 | -   |   

## Tables:

* _Blocks_: `bigquery-public-data.crypto_kusama.blocks2116` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `bigquery-public-data.crypto_kusama.extrinsics2116` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `bigquery-public-data.crypto_kusama.events2116` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `bigquery-public-data.crypto_kusama.transfers2116` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `bigquery-public-data.crypto_kusama.balances2116` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `bigquery-public-data.crypto_kusama.accountsactive2116` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `bigquery-public-data.crypto_kusama.accountspassive2116` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `bigquery-public-data.crypto_kusama.accountsnew2116` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `bigquery-public-data.crypto_kusama.accountsreaped2116` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `bigquery-public-data.crypto_kusama.assets` (filter on `2116`) - [Schema](/schema/assets.json)
* _XCM Assets_: `bigquery-public-data.crypto_kusama.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `bigquery-public-data.crypto_kusama.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `bigquery-public-data.crypto_kusama.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `bigquery-public-data.crypto_kusama.blocks2116` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2116.json](https://cdn.polkaholic.io/substrate-etl/kusama/2116.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
