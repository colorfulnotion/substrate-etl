# Imbue Network substrate-etl Summary (Monthly)

_Source_: [imbue.polkaholic.io](https://imbue.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2121
Status: Only partial index available: Archive node unavailable


| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-21](/kusama/2121-imbue/2023-02-28.md) | 1,379,486 | 1,484,882 | 105,300 | 97 (0.09%) | 12 |  | 336 | - | 
| [2023-01-01 to 2023-01-31](/kusama/2121-imbue/2023-01-31.md) | 1,205,104 | 1,379,485 | 172,363 | 2,019 (1.16%) | 45 | 1 | 330 | - | 
| [2022-12-01 to 2022-12-31](/kusama/2121-imbue/2022-12-31.md) | 993,760 | 1,205,103 | 209,925 | 1,419 (0.67%) | 12 |  | 323 | - | 
| [2022-11-01 to 2022-11-30](/kusama/2121-imbue/2022-11-30.md) | 782,277 | 993,759 | 211,483 |   | 152 | 5 | 321 | - | 
| [2022-10-01 to 2022-10-31](/kusama/2121-imbue/2022-10-31.md) | 566,267 | 782,276 | 216,010 |   | 57 | 2 | 308 | - | 
| [2022-09-01 to 2022-09-30](/kusama/2121-imbue/2022-09-30.md) | 366,397 | 566,266 | 199,870 |   | 4 |  | 4 | - | 
| [2022-08-01 to 2022-08-31](/kusama/2121-imbue/2022-08-31.md) | 191,885 | 366,396 | 174,512 |   |  |  | 4 | - | 
| [2022-07-01 to 2022-07-31](/kusama/2121-imbue/2022-07-31.md) | 23,330 | 191,884 | 168,555 |   |  |  | 4 | - | 
| [2022-06-27 to 2022-06-30](/kusama/2121-imbue/2022-06-30.md) | 1 | 23,329 | 23,329 |   |  |  | 4 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.kusama.blocks2121` group by monthDT order by monthDT desc
```



Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2121.json](https://cdn.polkaholic.io/substrate-etl/kusama/2121.json) | See [Definitions](/DEFINITIONS.md) for details
