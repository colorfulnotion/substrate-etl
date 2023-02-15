# Dora Factory substrate-etl Summary (Monthly)

_Source_: [dorafactory.polkaholic.io](https://dorafactory.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2115



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-15](/kusama/2115-dorafactory/2023-02-28.md) | 1,364,746 | 1,447,525 | 82,780 | none  | 9 |  | 372 | - | 
| [2023-01-01 to 2023-01-31](/kusama/2115-dorafactory/2023-01-31.md) | 1,183,033 | 1,364,745 | 181,713 | none  | 14 |  | 372 | - | 
| [2022-12-01 to 2022-12-31](/kusama/2115-dorafactory/2022-12-31.md) | 1,006,303 | 1,183,032 | 176,730 | none  | 10 |  | 373 | - | 
| [2022-11-01 to 2022-11-30](/kusama/2115-dorafactory/2022-11-30.md) | 831,862 | 1,006,302 | 174,441 | none  | 18 |  | 373 | - | 
| [2022-10-01 to 2022-10-31](/kusama/2115-dorafactory/2022-10-31.md) | 652,187 | 831,861 | 179,675 | none  | 44 | 1 | 373 | - | 
| [2022-09-01 to 2022-09-30](/kusama/2115-dorafactory/2022-09-30.md) | 481,123 | 652,186 | 171,064 | none  | 15 |  | 371 | - | 
| [2022-08-01 to 2022-08-31](/kusama/2115-dorafactory/2022-08-31.md) | 322,638 | 481,122 | 158,485 | none  | 42 | 1 | 371 | - | 
| [2022-07-01 to 2022-07-31](/kusama/2115-dorafactory/2022-07-31.md) | 166,140 | 322,637 | 156,498 | none  | 50 | 1 | 370 | - | 
| [2022-06-01 to 2022-06-30](/kusama/2115-dorafactory/2022-06-30.md) | 1,626 | 166,139 | 164,514 | none  | 23 |  | 370 | - | 
| [2022-05-31 to 2022-05-31](/kusama/2115-dorafactory/2022-05-31.md) | 1 | 1,625 | 1,625 | none  |  |  | 4 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.kusama.blocks2115` group by monthDT order by monthDT desc```

