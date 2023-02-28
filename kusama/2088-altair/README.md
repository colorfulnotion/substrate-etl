# Altair substrate-etl Summary (Monthly)

_Source_: [altair.polkaholic.io](https://altair.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2088



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-27](/kusama/2088-altair/2023-02-28.md) | 2,416,885 | 2,595,634 | 178,750 | 989 | 32 | 29,455 | -   |   
| [2023-01-01 to 2023-01-31](/kusama/2088-altair/2023-01-31.md) | 2,219,295 | 2,416,884 | 197,590 | 1,270 | 35 | 29,408 | -   |   
| [2022-12-01 to 2022-12-31](/kusama/2088-altair/2022-12-31.md) | 2,020,464 | 2,219,294 | 198,831 | 1,544 |  | 29,354 | -   |   
| [2022-11-01 to 2022-11-30](/kusama/2088-altair/2022-11-30.md) | 1,834,463 | 2,020,463 | 186,001 | 1,213 |  | 29,264 | -   |   
| [2022-10-01 to 2022-10-31](/kusama/2088-altair/2022-10-31.md) | 1,646,489 | 1,834,462 | 187,974 | 1,269 |  | 29,215 | -   |   
| [2022-09-01 to 2022-09-30](/kusama/2088-altair/2022-09-30.md) | 1,471,997 | 1,646,488 | 174,492 | 1,538 |  | 29,140 | -   |   
| [2022-08-01 to 2022-08-31](/kusama/2088-altair/2022-08-31.md) | 1,310,983 | 1,471,996 | 161,014 | 2,295 |  | 29,085 | -   |   
| [2022-07-01 to 2022-07-31](/kusama/2088-altair/2022-07-31.md) | 1,154,655 | 1,310,982 | 156,328 | 2,357 |  | 22,390 | -   |   
| [2022-06-01 to 2022-06-30](/kusama/2088-altair/2022-06-30.md) | 1,061,018 | 1,154,654 | 93,637 | 974 |  | 22,206 | -   |   
| [2022-05-01 to 2022-05-31](/kusama/2088-altair/2022-05-31.md) | 977,312 | 1,061,017 | 83,706 | 943 |  | 22,136 | -   |   
| [2022-04-01 to 2022-04-30](/kusama/2088-altair/2022-04-30.md) | 915,097 | 977,311 | 62,215 | 2,236 |  | 22,027 | -   |   
| [2022-03-01 to 2022-03-31](/kusama/2088-altair/2022-03-31.md) | 840,047 | 915,096 | 75,050 | 3,470 |  | 21,631 | -   |   
| [2022-02-01 to 2022-02-28](/kusama/2088-altair/2022-02-28.md) | 743,672 | 840,046 | 96,375 | 6,800 |  | 21,277 | -   |   
| [2022-01-01 to 2022-01-31](/kusama/2088-altair/2022-01-31.md) | 554,725 | 743,671 | 188,947 | 1,070 |  | 20,704 | -   |   
| [2021-12-01 to 2021-12-31](/kusama/2088-altair/2021-12-31.md) | 355,076 | 554,724 | 199,649 | 1,311 | 16 | 20,225 | -   |   
| [2021-11-01 to 2021-11-30](/kusama/2088-altair/2021-11-30.md) | 203,157 | 355,075 | 151,919 | 1,177 |  | 17,251 | -   |   
| [2021-10-01 to 2021-10-31](/kusama/2088-altair/2021-10-31.md) | 9,926 | 203,156 | 193,229 | 1,393 |  | 11,590 | - 2 (0.00%) |   
| [2021-09-29 to 2021-09-30](/kusama/2088-altair/2021-09-30.md) | 1 | 9,925 | 9,925 | 7 |  | 10 | -   |   

## substrate-etl Tables:

* _Blocks_: `substrate-etl.kusama.blocks2088` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.kusama.extrinsics2088` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.kusama.events2088` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.kusama.transfers2088` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.kusama.balances2088` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.kusama.accountsactive2088` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.kusama.accountspassive2088` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.kusama.accountsnew2088` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.kusama.accountsreaped2088` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.kusama.assets` (filter on `2088`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.kusama.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.kusama.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.kusama.blocks2088` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2088.json](https://cdn.polkaholic.io/substrate-etl/kusama/2088.json) | See [Definitions](/DEFINITIONS.md) for details
