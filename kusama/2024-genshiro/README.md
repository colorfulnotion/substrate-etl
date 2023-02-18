# Genshiro substrate-etl Summary (Monthly)

_Source_: [genshiro.polkaholic.io](https://genshiro.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2024



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-16 to 2023-02-18](/kusama/2024-genshiro/2023-02-28.md) |  |  |  | none  |  |  | 26 | - | 
| [2023-01-01 to 2023-01-10](/kusama/2024-genshiro/2023-01-31.md) | 2,057,920 | 2,122,495 | 64,464 | 112 (0.17%) | 4 |  | 25 | - | 
| [2022-12-01 to 2022-12-31](/kusama/2024-genshiro/2022-12-31.md) | 1,858,070 | 2,057,919 | 199,850 | none  | 35 | 1 | 25 | - | 
| [2022-11-30 to 2022-11-30](/kusama/2024-genshiro/2022-11-30.md) | 1,852,351 | 1,858,069 | 5,719 | none  |  |  | 25 | - | 
| [2022-10-01 to 2022-10-31](/kusama/2024-genshiro/2022-10-31.md) | 1,656,662 | 1,852,350 | 195,689 | none  | 62 | 1 | 25 | - | 
| [2022-09-01 to 2022-09-30](/kusama/2024-genshiro/2022-09-30.md) | 1,468,939 | 1,656,661 | 187,723 | none  | 52 | 1 | 24 | - | 
| [2022-08-01 to 2022-08-31](/kusama/2024-genshiro/2022-08-31.md) | 1,296,614 | 1,468,938 | 172,325 | none  | 104 | 1 | 24 | - | 
| [2022-07-01 to 2022-07-31](/kusama/2024-genshiro/2022-07-31.md) | 1,126,691 | 1,296,613 | 169,923 | none  | 30 | 1 | 24 | - | 
| [2022-06-01 to 2022-06-30](/kusama/2024-genshiro/2022-06-30.md) | 949,677 | 1,126,690 | 177,014 | none  | 18 |  | 24 | - | 
| [2022-05-01 to 2022-05-31](/kusama/2024-genshiro/2022-05-31.md) | 786,673 | 949,676 | 163,004 | none  | 85 | 1 | 24 | - | 
| [2022-04-01 to 2022-04-30](/kusama/2024-genshiro/2022-04-30.md) | 672,663 | 786,672 | 114,010 | none  | 25 | 1 | 23 | - | 
| [2022-03-01 to 2022-03-31](/kusama/2024-genshiro/2022-03-31.md) | 540,619 | 672,662 | 132,044 | none  | 34 | 1 | 23 | - | 
| [2022-02-01 to 2022-02-28](/kusama/2024-genshiro/2022-02-28.md) | 407,116 | 540,618 | 133,503 | none  |  |  | 20 | - | 
| [2022-01-01 to 2022-01-31](/kusama/2024-genshiro/2022-01-31.md) | 208,306 | 407,115 | 198,810 | none  |  |  | 20 | - | 
| [2021-12-01 to 2021-12-31](/kusama/2024-genshiro/2021-12-31.md) | 18,756 | 208,305 | 189,550 | none  | 2 |  | 20 | - | 
| [2021-11-27 to 2021-11-30](/kusama/2024-genshiro/2021-11-30.md) | 1 | 18,755 | 18,755 | none  |  |  | 20 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.kusama.blocks2024` group by monthDT order by monthDT desc```

