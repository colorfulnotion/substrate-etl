# Mangatax substrate-etl Summary (Monthly)

_Source_: [mangatax.polkaholic.io](https://mangatax.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2110
Status: Only partial index available: Onboarding


| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-24](/kusama/2110-mangatax/2023-02-28.md) | 1,640,995 | 1,800,810 | 54,430 | 1,526 | 36 | 1,760 | - 105,386 (65.94%) |   
| [2023-01-01 to 2023-01-31](/kusama/2110-mangatax/2023-01-31.md) | 1,436,133 | 1,640,994 | 73,822 | 4,674 | 49 | 1,651 | - 131,040 (63.97%) |   
| [2022-12-01 to 2022-12-31](/kusama/2110-mangatax/2022-12-31.md) | 1,240,087 | 1,436,132 | 66,859 | 3,957 |  | 1,476 | - 129,187 (65.90%) |   
| [2022-11-01 to 2022-11-30](/kusama/2110-mangatax/2022-11-30.md) | 1,042,543 | 1,240,086 | 99,788 | 3,350 |  | 1,449 | - 97,756 (49.49%) |   
| [2022-10-01 to 2022-10-31](/kusama/2110-mangatax/2022-10-31.md) | 830,803 | 1,042,542 | 36,752 | 1,010 |  | 1,395 | - 174,988 (82.64%) |   
| [2022-09-01 to 2022-09-30](/kusama/2110-mangatax/2022-09-30.md) | 636,727 | 830,802 | 74,201 | 2,805 |  | 1,339 | - 119,875 (61.77%) |   
| [2022-08-01 to 2022-08-31](/kusama/2110-mangatax/2022-08-31.md) | 473,310 | 636,726 | 24,584 | 865 |  | 1,262 | - 138,833 (84.96%) |   
| [2022-07-01 to 2022-07-31](/kusama/2110-mangatax/2022-07-31.md) | 326,257 | 473,309 | 73,316 | 984 |  | 1,180 | - 73,737 (50.14%) |   
| [2022-06-01 to 2022-06-30](/kusama/2110-mangatax/2022-06-30.md) | 199,153 | 326,256 | 66,688 | 2,459 |  | 1,158 | - 60,416 (47.53%) |   
| [2022-05-01 to 2022-05-31](/kusama/2110-mangatax/2022-05-31.md) | 61,315 | 199,152 | 75,861 | 35 |  | 12 | - 61,977 (44.96%) |   
| [2022-04-12 to 2022-04-30](/kusama/2110-mangatax/2022-04-30.md) | 1 | 61,314 | 60,863 | 12 |  | 8 | - 451 (0.74%) |   

## substrate-etl Tables:

* _Blocks_: `substrate-etl.kusama.blocks2110` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.kusama.extrinsics2110` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.kusama.events2110` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.kusama.transfers2110` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.kusama.balances2110` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.kusama.accountsactive2110` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.kusama.accountspassive2110` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.kusama.accountsnew2110` (date-partitioned by `ts`)  - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.kusama.accountsreaped2110` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.kusama.assets` (filter on `2110`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.kusama.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.kusama.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.kusama.blocks2110` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2110.json](https://cdn.polkaholic.io/substrate-etl/kusama/2110.json) | See [Definitions](/DEFINITIONS.md) for details
