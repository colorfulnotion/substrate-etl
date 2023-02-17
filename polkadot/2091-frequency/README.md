# Frequency substrate-etl Summary (Monthly)

_Source_: [frequency.polkaholic.io](https://frequency.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2091



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-17](/polkadot/2091-frequency/2023-02-28.md) | 450,021 | 569,081 | 119,061 | none  | 33 | 1 | 27 | - | 
| [2023-01-01 to 2023-01-31](/polkadot/2091-frequency/2023-01-31.md) | 233,132 | 450,020 | 216,889 | none  | 15 |  | 27 | - | 
| [2022-12-01 to 2022-12-31](/polkadot/2091-frequency/2022-12-31.md) | 11,895 | 233,131 | 221,237 | none  |  |  | 27 | - | 
| [2022-11-29 to 2022-11-30](/polkadot/2091-frequency/2022-11-30.md) | 1 | 11,894 | 11,894 | none  |  |  | 27 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.polkadot.blocks2091` group by monthDT order by monthDT desc```

