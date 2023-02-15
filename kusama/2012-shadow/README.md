# Crust Shadow substrate-etl Summary (Monthly)

_Source_: [shadow.polkaholic.io](https://shadow.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2012



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-15](/kusama/2012-shadow/2023-02-28.md) | 2,234,526 | 2,338,675 | 104,150 | none  | 393 | 8 | 3,188 | - | 
| [2023-01-01 to 2023-01-31](/kusama/2012-shadow/2023-01-31.md) | 2,016,763 | 2,234,525 | 217,763 | none  | 201 | 3 | 1,728 | - | 
| [2022-12-01 to 2022-12-31](/kusama/2012-shadow/2022-12-31.md) | 1,807,325 | 2,016,762 | 209,438 | none  | 166 | 2 | 1,716 | - | 
| [2022-11-01 to 2022-11-30](/kusama/2012-shadow/2022-11-30.md) | 1,602,760 | 1,807,324 | 204,565 | none  | 158 | 3 | 1,695 | - | 
| [2022-10-01 to 2022-10-31](/kusama/2012-shadow/2022-10-31.md) | 1,394,845 | 1,602,759 | 207,915 | none  | 177 | 3 | 1,503 | - | 
| [2022-09-01 to 2022-09-30](/kusama/2012-shadow/2022-09-30.md) | 1,206,061 | 1,394,844 | 188,784 | none  | 154 | 3 | 1,487 | - | 
| [2022-08-01 to 2022-08-31](/kusama/2012-shadow/2022-08-31.md) | 1,033,108 | 1,206,060 | 172,953 | none  | 276 | 4 | 1,478 | - | 
| [2022-07-01 to 2022-07-31](/kusama/2012-shadow/2022-07-31.md) | 861,600 | 1,033,107 | 171,508 | none  | 324 | 5 | 1,451 | - | 
| [2022-06-01 to 2022-06-30](/kusama/2012-shadow/2022-06-30.md) | 682,866 | 861,599 | 178,734 | none  | 92 | 2 | 1,431 | - | 
| [2022-05-01 to 2022-05-31](/kusama/2012-shadow/2022-05-31.md) | 517,841 | 682,865 | 165,025 | none  | 201 | 4 | 1,408 | - | 
| [2022-04-01 to 2022-04-30](/kusama/2012-shadow/2022-04-30.md) | 404,383 | 517,840 | 113,458 | none  | 319 | 5 | 1,360 | - | 
| [2022-03-01 to 2022-03-31](/kusama/2012-shadow/2022-03-31.md) | 271,989 | 404,382 | 132,394 | none  | 65 | 1 | 1,317 | - | 
| [2022-02-01 to 2022-02-28](/kusama/2012-shadow/2022-02-28.md) | 143,179 | 271,988 | 128,810 | none  | 23 |  | 14 | - | 
| [2022-01-09 to 2022-01-31](/kusama/2012-shadow/2022-01-31.md) | 1 | 143,178 | 143,178 | none  | 21 |  | 21 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.kusama.blocks2012` group by monthDT order by monthDT desc```

