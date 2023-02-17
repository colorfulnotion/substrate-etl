# Parallel substrate-etl Summary (Monthly)

_Source_: [parallel.polkaholic.io](https://parallel.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2012



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-17](/polkadot/2012-parallel/2023-02-28.md) | 2,799,332 | 2,915,288 | 115,698 | 259 (0.22%) | 93,862 | 394 | 47,136 | - | 
| [2023-01-01 to 2023-01-31](/polkadot/2012-parallel/2023-01-31.md) | 2,578,329 | 2,799,331 | 221,003 | none  | 183,405 | 433 | 46,950 | - | 
| [2022-12-01 to 2022-12-31](/polkadot/2012-parallel/2022-12-31.md) | 2,357,760 | 2,578,328 | 220,569 | none  | 176,326 | 435 | 46,490 | - | 
| [2022-11-01 to 2022-11-30](/polkadot/2012-parallel/2022-11-30.md) | 2,143,686 | 2,357,759 | 214,074 | none  | 217,849 | 575 | 46,079 | - | 
| [2022-10-01 to 2022-10-31](/polkadot/2012-parallel/2022-10-31.md) | 1,923,316 | 2,143,685 | 220,370 | none  | 206,404 | 604 | 45,325 | - | 
| [2022-09-01 to 2022-09-30](/polkadot/2012-parallel/2022-09-30.md) | 1,712,060 | 1,923,315 | 211,256 | none  | 216,681 | 624 | 44,262 | - | 
| [2022-08-01 to 2022-08-31](/polkadot/2012-parallel/2022-08-31.md) | 1,495,864 | 1,712,059 | 216,196 | none  | 144,996 | 472 | 42,069 | - | 
| [2022-07-01 to 2022-07-31](/polkadot/2012-parallel/2022-07-31.md) | 1,283,353 | 1,495,863 | 212,511 | none  | 118,099 | 471 | 40,712 | - | 
| [2022-06-01 to 2022-06-30](/polkadot/2012-parallel/2022-06-30.md) | 1,080,082 | 1,283,352 | 203,271 | none  | 142,598 | 576 | 39,211 | - | 
| [2022-05-01 to 2022-05-31](/polkadot/2012-parallel/2022-05-31.md) | 865,409 | 1,080,081 | 214,673 | none  | 175,486 | 704 | 38,284 | - | 
| [2022-04-01 to 2022-04-30](/polkadot/2012-parallel/2022-04-30.md) | 664,185 | 865,408 | 201,224 | none  | 46,475 | 370 | 36,783 | - | 
| [2022-03-01 to 2022-03-31](/polkadot/2012-parallel/2022-03-31.md) | 466,488 | 664,184 | 197,697 | none  | 8,732 | 234 | 35,544 | - | 
| [2022-02-01 to 2022-02-28](/polkadot/2012-parallel/2022-02-28.md) | 295,557 | 466,487 | 170,931 | none  | 4,792 | 90 | 34,447 | - | 
| [2022-01-01 to 2022-01-31](/polkadot/2012-parallel/2022-01-31.md) | 92,106 | 295,556 | 203,451 | none  | 2,972 | 2 | 29,475 | - | 
| [2021-12-18 to 2021-12-31](/polkadot/2012-parallel/2021-12-31.md) | 1 | 92,105 | 92,105 | none  | 1 |  | 7 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.polkadot.blocks2012` group by monthDT order by monthDT desc```

