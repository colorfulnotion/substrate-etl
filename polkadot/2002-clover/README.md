# Clover substrate-etl Summary (Monthly)

_Source_: [clover.polkaholic.io](https://clover.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2002



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-17](/polkadot/2002-clover/2023-02-28.md) | 2,764,805 | 2,881,906 | 112,288 | 4,814 (4.11%) | 3 |  | 4,089 | - | 
| [2023-01-01 to 2023-01-31](/polkadot/2002-clover/2023-01-31.md) | 2,544,050 | 2,764,804 | 220,755 | none  | 7 | 2 | 4,063 | - | 
| [2022-12-01 to 2022-12-31](/polkadot/2002-clover/2022-12-31.md) | 2,323,983 | 2,544,049 | 220,067 | none  | 23 | 9 | 3,984 | - | 
| [2022-11-01 to 2022-11-30](/polkadot/2002-clover/2022-11-30.md) | 2,110,681 | 2,323,982 | 213,302 | none  | 41 | 4 | 3,868 | - | 
| [2022-10-01 to 2022-10-31](/polkadot/2002-clover/2022-10-31.md) | 1,891,383 | 2,110,680 | 219,298 | none  | 40 | 6 | 3,797 | - | 
| [2022-09-01 to 2022-09-30](/polkadot/2002-clover/2022-09-30.md) | 1,682,814 | 1,891,382 | 208,569 | none  | 78 | 15 | 3,719 | - | 
| [2022-08-01 to 2022-08-31](/polkadot/2002-clover/2022-08-31.md) | 1,475,051 | 1,682,813 | 207,763 | none  | 39 | 7 | 3,651 | - | 
| [2022-07-01 to 2022-07-31](/polkadot/2002-clover/2022-07-31.md) | 1,274,633 | 1,475,050 | 200,418 | none  | 200 | 6 | 3,475 | - | 
| [2022-06-01 to 2022-06-30](/polkadot/2002-clover/2022-06-30.md) | 1,084,160 | 1,274,632 | 190,473 | none  | 108 | 9 | 3,285 | - | 
| [2022-05-01 to 2022-05-31](/polkadot/2002-clover/2022-05-31.md) | 883,881 | 1,084,159 | 200,279 | none  | 108 | 4 | 1,071 | - | 
| [2022-04-01 to 2022-04-30](/polkadot/2002-clover/2022-04-30.md) | 686,905 | 883,880 | 196,976 | none  | 158 | 3 | 379 | - | 
| [2022-03-01 to 2022-03-31](/polkadot/2002-clover/2022-03-31.md) | 482,985 | 686,904 | 203,920 | none  | 66 | 2 | 157 | - | 
| [2022-02-01 to 2022-02-28](/polkadot/2002-clover/2022-02-28.md) | 301,022 | 482,984 | 181,963 | none  | 57 | 1 | 49 | - | 
| [2022-01-01 to 2022-01-31](/polkadot/2002-clover/2022-01-31.md) | 93,137 | 301,021 | 207,885 | none  | 35 | 1 | 21 | - | 
| [2021-12-18 to 2021-12-31](/polkadot/2002-clover/2021-12-31.md) | 1 | 93,136 | 93,136 | none  |  |  | 7 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.polkadot.blocks2002` group by monthDT order by monthDT desc```

