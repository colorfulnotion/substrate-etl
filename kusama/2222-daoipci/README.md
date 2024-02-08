# DAO IPCI Summary (Monthly)

_Source_: [daoipci.polkaholic.io](https://daoipci.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2222



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2024-02-01 to 2024-02-08](/kusama/2222-daoipci/2024-02-29.md) | 3,153,125 | 3,200,205 | 47,081 |  |  | 901 | -   |   
| [2024-01-01 to 2024-01-31](/kusama/2222-daoipci/2024-01-31.md) | 2,954,462 | 3,153,124 | 198,663 | 1 |  | 901 | -   |   
| [2023-12-01 to 2023-12-31](/kusama/2222-daoipci/2023-12-31.md) | 2,750,388 | 2,954,461 | 204,074 | 3 |  | 901 | -   |   
| [2023-11-01 to 2023-11-30](/kusama/2222-daoipci/2023-11-30.md) | 2,543,180 | 2,750,387 | 207,208 | 383 |  | 900 | -   |   
| [2023-10-01 to 2023-10-31](/kusama/2222-daoipci/2023-10-31.md) | 2,322,521 | 2,543,179 | 220,659 |  |  | 899 | -   |   
| [2023-09-01 to 2023-09-30](/kusama/2222-daoipci/2023-09-30.md) | 2,110,851 | 2,322,520 | 211,670 | 1 |  | 900 | -   |   
| [2023-08-01 to 2023-08-31](/kusama/2222-daoipci/2023-08-31.md) | 1,888,282 | 2,110,850 | 222,569 | 7 |  | 900 | -   |   
| [2023-07-01 to 2023-07-31](/kusama/2222-daoipci/2023-07-31.md) | 1,665,627 | 1,888,281 | 222,655 | 32 |  | 898 | -   |   
| [2023-06-01 to 2023-06-30](/kusama/2222-daoipci/2023-06-30.md) | 1,450,850 | 1,665,626 | 214,777 |  |  | 892 | -   |   
| [2023-05-01 to 2023-05-31](/kusama/2222-daoipci/2023-05-31.md) | 1,236,481 | 1,450,849 | 214,369 |  |  | 892 | -   |   
| [2023-04-01 to 2023-04-30](/kusama/2222-daoipci/2023-04-30.md) | 1,025,799 | 1,236,480 | 210,682 | 1 |  | 892 | -   |   
| [2023-03-01 to 2023-03-31](/kusama/2222-daoipci/2023-03-31.md) | 805,699 | 1,025,798 | 220,100 | 10 |  | 891 | -   |   
| [2023-02-01 to 2023-02-28](/kusama/2222-daoipci/2023-02-28.md) | 606,518 | 805,698 | 199,181 | 58 | 1 | 890 | -   |   
| [2023-01-09 to 2023-01-31](/kusama/2222-daoipci/2023-01-31.md) | 447,086 | 606,517 | 159,432 | 2 |  | 890 | -   |   
| [2022-12-01 to 2022-12-13](/kusama/2222-daoipci/2022-12-31.md) | 365,650 | 447,085 | 81,436 | 10 |  | 890 | -   |   
| [2022-11-01 to 2022-11-30](/kusama/2222-daoipci/2022-11-30.md) | 153,070 | 365,649 | 212,580 | 82 | 1 | 890 | -   |   
| [2022-10-10 to 2022-10-31](/kusama/2222-daoipci/2022-10-31.md) | 1 | 153,069 | 153,069 | 18 | 1 | 885 | -   |   

## Tables:

* _Blocks_: `bigquery-public-data.crypto_kusama.blocks2222` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `bigquery-public-data.crypto_kusama.extrinsics2222` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `bigquery-public-data.crypto_kusama.events2222` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `bigquery-public-data.crypto_kusama.transfers2222` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `bigquery-public-data.crypto_kusama.balances2222` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `bigquery-public-data.crypto_kusama.accountsactive2222` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `bigquery-public-data.crypto_kusama.accountspassive2222` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `bigquery-public-data.crypto_kusama.accountsnew2222` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `bigquery-public-data.crypto_kusama.accountsreaped2222` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `bigquery-public-data.crypto_kusama.assets` (filter on `2222`) - [Schema](/schema/assets.json)
* _XCM Assets_: `bigquery-public-data.crypto_kusama.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `bigquery-public-data.crypto_kusama.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `bigquery-public-data.crypto_kusama.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `bigquery-public-data.crypto_kusama.blocks2222` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2222.json](https://cdn.polkaholic.io/substrate-etl/kusama/2222.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
