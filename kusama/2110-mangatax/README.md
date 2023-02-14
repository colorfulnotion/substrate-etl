# Mangatax substrate-etl Summary (Monthly)

_Source_: [mangatax.polkaholic.io](https://mangatax.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2110
Status: Only partial index available: Reindexing


| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-13](/substrate-etl/kusama/2110-mangatax/2023-02-28.md) | 1,640,995 | 1,727,295 | 43,403 | 42,898 (49.71%) | 1,145 | 28 | 1,705 | - | 
| [2023-01-01 to 2023-01-31](/substrate-etl/kusama/2110-mangatax/2023-01-31.md) | 1,436,133 | 1,640,994 | 73,822 | 131,040 (63.97%) | 4,674 | 28 | 1,651 | - | 
| [2022-12-01 to 2022-12-31](/substrate-etl/kusama/2110-mangatax/2022-12-31.md) | 1,240,087 | 1,436,132 | 66,859 | 129,187 (65.90%) | 3,957 | 22 | 1,476 | - | 
| [2022-11-01 to 2022-11-30](/substrate-etl/kusama/2110-mangatax/2022-11-30.md) | 1,042,543 | 1,240,086 | 99,788 | 97,756 (49.49%) | 3,350 | 31 | 1,449 | - | 
| [2022-10-01 to 2022-10-31](/substrate-etl/kusama/2110-mangatax/2022-10-31.md) | 830,803 | 1,042,542 | 36,752 | 174,988 (82.64%) | 1,010 | 9 | 1,395 | - | 
| [2022-09-01 to 2022-09-30](/substrate-etl/kusama/2110-mangatax/2022-09-30.md) | 636,727 | 830,802 | 74,201 | 119,875 (61.77%) | 2,805 | 25 | 1,339 | - | 
| [2022-08-01 to 2022-08-31](/substrate-etl/kusama/2110-mangatax/2022-08-31.md) | 473,310 | 636,726 | 24,584 | 138,833 (84.96%) | 865 | 10 | 1,262 | - | 
| [2022-07-01 to 2022-07-31](/substrate-etl/kusama/2110-mangatax/2022-07-31.md) | 326,257 | 473,309 | 73,316 | 73,737 (50.14%) | 984 | 13 | 1,180 | - | 
| [2022-06-01 to 2022-06-30](/substrate-etl/kusama/2110-mangatax/2022-06-30.md) | 199,153 | 326,256 | 66,688 | 60,416 (47.53%) | 2,459 | 34 | 1,158 | - | 
| [2022-05-01 to 2022-05-31](/substrate-etl/kusama/2110-mangatax/2022-05-31.md) | 61,315 | 199,152 | 75,861 | 61,977 (44.96%) | 35 |  | 12 | - | 
| [2022-04-12 to 2022-04-30](/substrate-etl/kusama/2110-mangatax/2022-04-30.md) | 1 | 61,314 | 60,863 | 451 (0.74%) | 12 |  | 8 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.kusama.blocks2110` group by monthDT order by monthDT desc```

