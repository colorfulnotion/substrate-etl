# BridgeHub substrate-etl Summary (Monthly)

_Source_: [bridgehub.polkaholic.io](https://bridgehub.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 1002



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-15](/kusama/1002-bridgehub/2023-02-28.md) | 86,880 | 192,252 | 105,373 | none  |  |  | 4 | - | 
| [2023-01-19 to 2023-01-31](/kusama/1002-bridgehub/2023-01-31.md) | 1 | 86,879 | 86,879 | none  |  |  | 4 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.kusama.blocks1002` group by monthDT order by monthDT desc```

