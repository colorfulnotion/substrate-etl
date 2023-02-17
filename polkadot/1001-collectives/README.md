# Collectives substrate-etl Summary (Monthly)

_Source_: [collectives.polkaholic.io](https://collectives.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 1001



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-17](/polkadot/1001-collectives/2023-02-28.md) | 510,350 | 628,760 | 118,411 | none  | 1 |  | 19 | - | 
| [2023-01-01 to 2023-01-31](/polkadot/1001-collectives/2023-01-31.md) | 289,061 | 510,349 | 221,289 | none  | 2 |  | 18 | - | 
| [2022-12-01 to 2022-12-31](/polkadot/1001-collectives/2022-12-31.md) | 68,033 | 289,060 | 221,028 | none  | 16 |  | 17 | - | 
| [2022-11-21 to 2022-11-30](/polkadot/1001-collectives/2022-11-30.md) | 1 | 68,032 | 68,032 | none  | 2 |  | 8 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.polkadot.blocks1001` group by monthDT order by monthDT desc```

