# Crust Shadow substrate-etl Summary (Monthly)

_Source_: [shadow.polkaholic.io](https://shadow.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2012



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-03-01 to 2023-03-22](/kusama/2012-shadow/2023-03-31.md) | 2,432,097 | 2,580,144 | 148,048 | 124 | 7 | 3,210 | -   |   
| [2023-02-01 to 2023-02-28](/kusama/2012-shadow/2023-02-28.md) | 2,234,526 | 2,432,096 | 197,571 | 486 | 9 | 3,205 | -   |   
| [2023-01-01 to 2023-01-31](/kusama/2012-shadow/2023-01-31.md) | 2,016,763 | 2,234,525 | 217,763 | 201 | 7 | 1,728 | -   |   
| [2022-12-01 to 2022-12-31](/kusama/2012-shadow/2022-12-31.md) | 1,807,325 | 2,016,762 | 209,438 | 166 | 6 | 1,716 | -   |   
| [2022-11-01 to 2022-11-30](/kusama/2012-shadow/2022-11-30.md) | 1,602,760 | 1,807,324 | 204,565 | 158 | 7 | 1,695 | -   |   
| [2022-10-01 to 2022-10-31](/kusama/2012-shadow/2022-10-31.md) | 1,394,845 | 1,602,759 | 207,915 | 177 | 7 | 1,503 | -   |   
| [2022-09-01 to 2022-09-30](/kusama/2012-shadow/2022-09-30.md) | 1,206,061 | 1,394,844 | 188,784 | 154 | 7 | 1,487 | -   |   
| [2022-08-01 to 2022-08-31](/kusama/2012-shadow/2022-08-31.md) | 1,033,108 | 1,206,060 | 172,953 | 276 | 8 | 1,478 | -   |   
| [2022-07-01 to 2022-07-31](/kusama/2012-shadow/2022-07-31.md) | 861,600 | 1,033,107 | 171,508 | 324 | 9 | 1,451 | -   |   
| [2022-06-01 to 2022-06-30](/kusama/2012-shadow/2022-06-30.md) | 682,866 | 861,599 | 178,734 | 92 | 6 | 1,431 | -   |   
| [2022-05-01 to 2022-05-31](/kusama/2012-shadow/2022-05-31.md) | 517,841 | 682,865 | 165,025 | 201 | 8 | 1,408 | -   |   
| [2022-04-01 to 2022-04-30](/kusama/2012-shadow/2022-04-30.md) | 404,383 | 517,840 | 113,458 | 319 | 9 | 1,360 | -   |   
| [2022-03-01 to 2022-03-31](/kusama/2012-shadow/2022-03-31.md) | 271,989 | 404,382 | 132,394 | 65 | 5 | 1,317 | -   |   
| [2022-02-01 to 2022-02-28](/kusama/2012-shadow/2022-02-28.md) | 143,179 | 271,988 | 128,810 | 23 | 4 | 14 | -   |   
| [2022-01-09 to 2022-01-31](/kusama/2012-shadow/2022-01-31.md) | 1 | 143,178 | 143,178 | 21 | 4 | 21 | -   |   

## substrate-etl Tables:

* _Blocks_: `substrate-etl.kusama.blocks2012` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.kusama.extrinsics2012` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.kusama.events2012` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.kusama.transfers2012` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.kusama.balances2012` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.kusama.accountsactive2012` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.kusama.accountspassive2012` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.kusama.accountsnew2012` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.kusama.accountsreaped2012` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.kusama.assets` (filter on `2012`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.kusama.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.kusama.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.kusama.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.kusama.blocks2012` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2012.json](https://cdn.polkaholic.io/substrate-etl/kusama/2012.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
