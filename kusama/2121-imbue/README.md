# Imbue Network substrate-etl Summary (Monthly)

_Source_: [imbue.polkaholic.io](https://imbue.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2121
Status: Only partial index available: Archive node unavailable


| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-03-01 to 2023-03-23](/kusama/2121-imbue/2023-03-31.md) | 1,536,075 | 1,691,477 | 155,403 | 8 |  | 333 | -   |   
| [2023-02-01 to 2023-02-28](/kusama/2121-imbue/2023-02-28.md) | 1,379,486 | 1,536,074 | 156,589 | 34 |  | 336 | -   |   
| [2023-01-01 to 2023-01-31](/kusama/2121-imbue/2023-01-31.md) | 1,205,104 | 1,379,485 | 172,369 | 45 |  | 330 | - 2,013 (1.15%) |   
| [2022-12-01 to 2022-12-31](/kusama/2121-imbue/2022-12-31.md) | 993,760 | 1,205,103 | 209,925 | 12 | 2 | 323 | - 1,419 (0.67%) |   
| [2022-11-01 to 2022-11-30](/kusama/2121-imbue/2022-11-30.md) | 782,277 | 993,759 | 211,483 | 152 |  | 321 | -   |   
| [2022-10-01 to 2022-10-31](/kusama/2121-imbue/2022-10-31.md) | 566,267 | 782,276 | 216,010 | 57 | 1 | 308 | -   |   
| [2022-09-01 to 2022-09-30](/kusama/2121-imbue/2022-09-30.md) | 366,397 | 566,266 | 199,870 | 4 | 1 | 4 | -   |   
| [2022-08-01 to 2022-08-31](/kusama/2121-imbue/2022-08-31.md) | 191,885 | 366,396 | 174,512 |  | 2 | 4 | -   |   
| [2022-07-01 to 2022-07-31](/kusama/2121-imbue/2022-07-31.md) | 23,330 | 191,884 | 168,555 |  | 2 | 4 | -   |   
| [2022-06-27 to 2022-06-30](/kusama/2121-imbue/2022-06-30.md) | 1 | 23,329 | 23,329 |  | 2 | 4 | -   |   

## substrate-etl Tables:

* _Blocks_: `substrate-etl.kusama.blocks2121` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.kusama.extrinsics2121` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.kusama.events2121` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.kusama.transfers2121` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.kusama.balances2121` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.kusama.accountsactive2121` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.kusama.accountspassive2121` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.kusama.accountsnew2121` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.kusama.accountsreaped2121` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.kusama.assets` (filter on `2121`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.kusama.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.kusama.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.kusama.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.kusama.blocks2121` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2121.json](https://cdn.polkaholic.io/substrate-etl/kusama/2121.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
