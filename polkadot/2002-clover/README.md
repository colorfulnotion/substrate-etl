# Clover substrate-etl Summary (Monthly)

_Source_: [clover.polkaholic.io](https://clover.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2002



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-23](/polkadot/2002-clover/2023-02-28.md) | 2,764,805 | 2,922,077 | 157,273 | 5 | 5 | 4,118 | -   |   
| [2023-01-01 to 2023-01-31](/polkadot/2002-clover/2023-01-31.md) | 2,544,050 | 2,764,804 | 220,755 | 7 | 5 | 4,063 | -   |   
| [2022-12-01 to 2022-12-31](/polkadot/2002-clover/2022-12-31.md) | 2,323,983 | 2,544,049 | 220,067 | 23 | 6 | 3,984 | -   |   
| [2022-11-01 to 2022-11-30](/polkadot/2002-clover/2022-11-30.md) | 2,110,681 | 2,323,982 | 213,302 | 41 |  | 3,868 | -   |   
| [2022-10-01 to 2022-10-31](/polkadot/2002-clover/2022-10-31.md) | 1,891,383 | 2,110,680 | 219,298 | 40 | 6 | 3,797 | -   |   
| [2022-09-01 to 2022-09-30](/polkadot/2002-clover/2022-09-30.md) | 1,682,814 | 1,891,382 | 208,569 | 78 | 6 | 3,719 | -   |   
| [2022-08-01 to 2022-08-31](/polkadot/2002-clover/2022-08-31.md) | 1,475,051 | 1,682,813 | 207,763 | 39 | 6 | 3,651 | -   |   
| [2022-07-01 to 2022-07-31](/polkadot/2002-clover/2022-07-31.md) | 1,274,633 | 1,475,050 | 200,418 | 200 | 8 | 3,475 | -   |   
| [2022-06-01 to 2022-06-30](/polkadot/2002-clover/2022-06-30.md) | 1,084,160 | 1,274,632 | 190,473 | 108 | 7 | 3,285 | -   |   
| [2022-05-01 to 2022-05-31](/polkadot/2002-clover/2022-05-31.md) | 883,881 | 1,084,159 | 200,279 | 108 | 7 | 1,071 | -   |   
| [2022-04-01 to 2022-04-30](/polkadot/2002-clover/2022-04-30.md) | 686,905 | 883,880 | 196,976 | 158 | 3 | 379 | -   |   
| [2022-03-01 to 2022-03-31](/polkadot/2002-clover/2022-03-31.md) | 482,985 | 686,904 | 203,920 | 66 | 1 | 157 | -   |   
| [2022-02-01 to 2022-02-28](/polkadot/2002-clover/2022-02-28.md) | 301,022 | 482,984 | 181,963 | 57 | 1 | 49 | -   |   
| [2022-01-01 to 2022-01-31](/polkadot/2002-clover/2022-01-31.md) | 93,137 | 301,021 | 207,885 | 35 | 1 | 21 | -   |   
| [2021-12-18 to 2021-12-31](/polkadot/2002-clover/2021-12-31.md) | 1 | 93,136 | 93,136 |  | 1 | 7 | -   |   

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.polkadot.blocks2002` group by monthDT order by monthDT desc
```



Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2002.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2002.json) | See [Definitions](/DEFINITIONS.md) for details
