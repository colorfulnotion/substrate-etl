# Calamari substrate-etl Summary (Monthly)

_Source_: [calamari.polkaholic.io](https://calamari.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2084
Status: Only partial index available: Archive node unavailable


| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-21](/kusama/2084-calamari/2023-02-28.md) | 3,003,783 | 3,147,454 | 143,672 |   | 7,104 | 208 | 35,322 | - | 
| [2023-01-01 to 2023-01-31](/kusama/2084-calamari/2023-01-31.md) | 2,788,075 | 3,003,782 | 215,305 | 403 (0.19%) | 9,136 | 186 | 35,178 | - | 
| [2022-12-01 to 2022-12-31](/kusama/2084-calamari/2022-12-31.md) | 2,580,305 | 2,788,074 | 207,770 |   | 6,992 | 141 | 34,660 | - | 
| [2022-11-01 to 2022-11-30](/kusama/2084-calamari/2022-11-30.md) | 2,371,242 | 2,580,304 | 209,063 |   | 14,070 | 193 | 33,847 | - | 
| [2022-10-01 to 2022-10-31](/kusama/2084-calamari/2022-10-31.md) | 2,160,434 | 2,371,241 | 210,808 |   | 16,343 | 268 | 28,835 | - | 
| [2022-09-01 to 2022-09-30](/kusama/2084-calamari/2022-09-30.md) | 1,981,248 | 2,160,433 | 177,275 | 1,911 (1.07%) | 2,056 | 38 | 26,650 | - | 
| [2022-08-01 to 2022-08-31](/kusama/2084-calamari/2022-08-31.md) | 1,807,739 | 1,981,247 | 173,509 |   | 4,281 | 83 | 26,608 | - | 
| [2022-07-01 to 2022-07-31](/kusama/2084-calamari/2022-07-31.md) | 1,632,776 | 1,807,738 | 174,963 |   | 1,857 | 34 | 23,637 | - | 
| [2022-06-01 to 2022-06-30](/kusama/2084-calamari/2022-06-30.md) | 1,449,875 | 1,632,775 | 182,901 |   | 1,864 | 39 | 23,393 | - | 
| [2022-05-01 to 2022-05-31](/kusama/2084-calamari/2022-05-31.md) | 1,284,799 | 1,449,874 | 165,076 |   | 2,527 | 44 | 23,205 | - | 
| [2022-04-01 to 2022-04-30](/kusama/2084-calamari/2022-04-30.md) | 1,168,896 | 1,284,798 | 115,903 |   | 4,718 | 96 | 23,020 | - | 
| [2022-03-01 to 2022-03-31](/kusama/2084-calamari/2022-03-31.md) | 1,035,144 | 1,168,895 | 133,752 |   | 4,743 | 68 | 22,506 | - | 
| [2022-02-01 to 2022-02-28](/kusama/2084-calamari/2022-02-28.md) | 899,020 | 1,035,143 | 136,124 |   | 2,742 | 50 | 21,029 | - | 
| [2022-01-01 to 2022-01-31](/kusama/2084-calamari/2022-01-31.md) | 684,053 | 899,019 | 214,967 |   | 64,367 | 139 | 20,603 | - | 
| [2021-12-01 to 2021-12-31](/kusama/2084-calamari/2021-12-31.md) | 479,100 | 684,052 | 204,953 |   | 5,677 | 90 | 19,907 | - | 
| [2021-11-01 to 2021-11-30](/kusama/2084-calamari/2021-11-30.md) | 295,587 | 479,099 | 183,513 |   | 38,322 | 657 | 19,205 | - | 
| [2021-10-01 to 2021-10-31](/kusama/2084-calamari/2021-10-31.md) | 98,021 | 295,586 | 197,566 |   | 7 |  | 13 | - | 
| [2021-09-16 to 2021-09-30](/kusama/2084-calamari/2021-09-30.md) | 1 | 98,020 | 98,020 |   |  |  | 9 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.kusama.blocks2084` group by monthDT order by monthDT desc
```



Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2084.json](https://cdn.polkaholic.io/substrate-etl/kusama/2084.json) | See [Definitions](/DEFINITIONS.md) for details
