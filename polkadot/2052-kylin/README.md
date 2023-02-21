# Kylin substrate-etl Summary (Monthly)

_Source_: [kylin.polkaholic.io](https://kylin.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2052
Status: Only partial index available: Network endpoint unreliable


| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-21](/polkadot/2052-kylin/2023-02-28.md) | 602,893 | 676,552 | 73,660 |   | 50 | 2 | 1,108 | - | 
| [2023-01-01 to 2023-01-31](/polkadot/2052-kylin/2023-01-31.md) | 472,512 | 602,892 | 130,381 |   | 106 | 3 | 1,108 | - | 
| [2022-12-01 to 2022-12-31](/polkadot/2052-kylin/2022-12-31.md) | 335,848 | 472,511 | 136,664 |   | 101 | 3 | 1,106 | - | 
| [2022-11-01 to 2022-11-30](/polkadot/2052-kylin/2022-11-30.md) | 227,968 | 335,847 | 107,880 |   | 110 | 3 | 1,105 | - | 
| [2022-10-01 to 2022-10-31](/polkadot/2052-kylin/2022-10-31.md) | 116,721 | 227,967 | 111,247 |   | 160 | 4 | 1,104 | - | 
| [2022-09-01 to 2022-09-30](/polkadot/2052-kylin/2022-09-30.md) | 9,549 | 116,720 | 107,172 |   | 220 | 3 | 1,067 | - | 
| [2022-08-29 to 2022-08-31](/polkadot/2052-kylin/2022-08-31.md) | 1 | 9,548 | 9,548 |   |  |  | 3 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.polkadot.blocks2052` group by monthDT order by monthDT desc
```



Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2052.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2052.json) | See [Definitions](/DEFINITIONS.md) for details
