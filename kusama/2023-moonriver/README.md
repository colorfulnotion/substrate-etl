# Moonriver substrate-etl Summary (Monthly)

_Source_: [moonriver.polkaholic.io](https://moonriver.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2023



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-20](/kusama/2023-moonriver/2023-02-28.md) | 3,526,185 | 3,661,803 | 135,507 | 112 (0.08%) | 1,910 | 61 | 589,559 | - | 
| [2023-01-01 to 2023-01-31](/kusama/2023-moonriver/2023-01-31.md) | 3,309,107 | 3,526,184 | 217,078 |   | 2,955 | 58 | 586,948 | - | 
| [2022-12-01 to 2022-12-31](/kusama/2023-moonriver/2022-12-31.md) | 3,100,104 | 3,309,106 | 209,003 |   | 2,950 | 56 | 583,988 | - | 
| [2022-11-01 to 2022-11-30](/kusama/2023-moonriver/2022-11-30.md) | 2,893,806 | 3,100,103 | 206,298 |   | 3,074 | 61 | 580,205 | - | 
| [2022-10-01 to 2022-10-31](/kusama/2023-moonriver/2022-10-31.md) | 2,678,168 | 2,893,805 | 215,638 |   | 2,134 | 43 | 573,764 | - | 
| [2022-09-01 to 2022-09-30](/kusama/2023-moonriver/2022-09-30.md) | 2,480,900 | 2,678,167 | 197,268 |   | 2,341 | 39 | 570,319 | - | 
| [2022-08-01 to 2022-08-31](/kusama/2023-moonriver/2022-08-31.md) | 2,299,970 | 2,480,899 | 180,930 |   | 3,291 | 38 | 565,833 | - | 
| [2022-07-01 to 2022-07-31](/kusama/2023-moonriver/2022-07-31.md) | 2,121,690 | 2,299,969 | 178,280 |   | 2,199 | 36 | 562,043 | - | 
| [2022-06-01 to 2022-06-30](/kusama/2023-moonriver/2022-06-30.md) | 1,935,610 | 2,121,689 | 186,080 |   | 1,968 | 26 | 554,882 | - | 
| [2022-05-01 to 2022-05-31](/kusama/2023-moonriver/2022-05-31.md) | 1,765,262 | 1,935,609 | 170,348 |   | 2,671 | 25 | 545,575 | - | 
| [2022-04-01 to 2022-04-30](/kusama/2023-moonriver/2022-04-30.md) | 1,660,607 | 1,765,261 | 104,655 |   | 3,199 | 58 | 535,712 | - | 
| [2022-03-01 to 2022-03-31](/kusama/2023-moonriver/2022-03-31.md) | 1,539,200 | 1,660,606 | 121,407 |   | 8,482 | 115 | 527,605 | - | 
| [2022-02-01 to 2022-02-28](/kusama/2023-moonriver/2022-02-28.md) | 1,411,886 | 1,539,199 | 127,314 |   | 10,456 | 147 | 512,381 | - | 
| [2022-01-01 to 2022-01-31](/kusama/2023-moonriver/2022-01-31.md) | 1,203,998 | 1,411,885 | 207,888 |   | 23,071 | 234 | 486,033 | - | 
| [2021-12-01 to 2021-12-31](/kusama/2023-moonriver/2021-12-31.md) | 996,844 | 1,203,997 | 207,154 |   | 25,877 | 229 | 394,131 | - | 
| [2021-11-01 to 2021-11-30](/kusama/2023-moonriver/2021-11-30.md) | 829,171 | 996,843 | 167,673 |   | 4,797,730 | 401 | 314,700 | - | 
| [2021-10-01 to 2021-10-31](/kusama/2023-moonriver/2021-10-31.md) | 635,165 | 829,170 | 194,006 |   | 2,225,368 | 416 | 144,369 | - | 
| [2021-09-01 to 2021-09-30](/kusama/2023-moonriver/2021-09-30.md) | 437,778 | 635,164 | 197,387 |   | 2,722,438 | 508 | 121,301 | - | 
| [2021-08-01 to 2021-08-31](/kusama/2023-moonriver/2021-08-31.md) | 226,357 | 437,777 | 211,421 |   | 679,093 | 38 | 10,457 | - | 
| [2021-07-01 to 2021-07-31](/kusama/2023-moonriver/2021-07-31.md) | 10,200 | 226,356 | 216,157 |   | 475,672 | 7 | 120 | - | 
| [2021-06-29 to 2021-06-30](/kusama/2023-moonriver/2021-06-30.md) | 1 | 10,199 | 10,199 |   | 7 |  | 61 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.kusama.blocks2023` group by monthDT order by monthDT desc
```



Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2023.json](https://cdn.polkaholic.io/substrate-etl/kusama/2023.json) | See [Definitions](/DEFINITIONS.md) for details
