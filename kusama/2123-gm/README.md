# GM Parachain substrate-etl Summary (Monthly)

_Source_: [gm.polkaholic.io](https://gm.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2123
Status: Only partial index available: Onboarding


| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-14](/kusama/2123-gm/2023-02-28.md) | 892,317 | 951,869 | 45,095 | 14,458 (24.28%) | 294 | 3 | 9,102 | - | 
| [2023-01-01 to 2023-01-31](/kusama/2123-gm/2023-01-31.md) | 740,806 | 892,316 | 121,740 | 29,771 (19.65%) | 521 | 3 | 9,100 | - | 
| [2022-12-01 to 2022-12-31](/kusama/2123-gm/2022-12-31.md) | 581,227 | 740,805 | 3,943 | 155,636 (97.53%) | 15 |  | 9,097 | - | 
| [2022-11-01 to 2022-11-30](/kusama/2123-gm/2022-11-30.md) | 419,791 | 581,226 | 94,775 | 66,661 (41.29%) | 2,350 | 7 | 9,092 | - | 
| [2022-10-01 to 2022-10-31](/kusama/2123-gm/2022-10-31.md) | 254,949 | 419,790 | 28,964 | 135,878 (82.43%) | 779 | 3 | 9,083 | - | 
| [2022-09-01 to 2022-09-30](/kusama/2123-gm/2022-09-30.md) | 85,830 | 254,948 | 2,425 | 166,694 (98.57%) | 964 | 4 | 9,025 | - | 
| [2022-08-15 to 2022-08-31](/kusama/2123-gm/2022-08-31.md) | 1 | 85,829 | 2,275 | 83,554 (97.35%) | 14 |  | 45 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.kusama.blocks2123` group by monthDT order by monthDT desc```

