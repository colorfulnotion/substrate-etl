# GM Parachain substrate-etl Summary (Monthly)

_Source_: [gm.polkaholic.io](https://gm.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2123
Status: Only partial index available: Onboarding


| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-13](/substrate-etl/kusama/2123-gm/2023-02-28.md) | 892,317 | 951,869 | 32,449 | 27,104 (45.51%) | 157 | 2 | 9,102 | - | 
| [2023-01-01 to 2023-01-31](/substrate-etl/kusama/2123-gm/2023-01-31.md) | 740,806 | 892,316 | 83,098 | 68,413 (45.15%) | 300 | 2 | 9,100 | - | 
| [2022-12-01 to 2022-12-31](/substrate-etl/kusama/2123-gm/2022-12-31.md) | 581,227 | 740,805 | 2,603 | 156,976 (98.37%) | 7 |  | 9,097 | - | 
| [2022-11-01 to 2022-11-30](/substrate-etl/kusama/2123-gm/2022-11-30.md) | 419,791 | 581,226 | 94,775 | 66,661 (41.29%) | 2,350 | 7 | 9,092 | - | 
| [2022-10-01 to 2022-10-31](/substrate-etl/kusama/2123-gm/2022-10-31.md) | 254,949 | 419,790 | 27,230 | 137,612 (83.48%) | 674 | 3 | 9,083 | - | 
| [2022-09-01 to 2022-09-30](/substrate-etl/kusama/2123-gm/2022-09-30.md) | 85,830 | 254,948 |  | 169,119 (100.00%) |  |  | 9,025 | - | 
| [2022-08-15 to 2022-08-31](/substrate-etl/kusama/2123-gm/2022-08-31.md) | 1 | 85,829 |  | 85,829 (100.00%) |  |  | 45 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.kusama.blocks2123` group by monthDT order by monthDT desc```

