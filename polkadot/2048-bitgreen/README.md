# Bitgreen substrate-etl Summary (Monthly)

_Source_: [bitgreen.polkaholic.io](https://bitgreen.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2048



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-16](/polkadot/2048-bitgreen/2023-02-28.md) | 91,749 | 195,538 | 103,790 | none  | 27 | 1 | 200 | - | 
| [2023-01-17 to 2023-01-31](/polkadot/2048-bitgreen/2023-01-31.md) | 1 | 91,748 | 91,748 | none  | 6 | 1 | 179 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.polkadot.blocks2048` group by monthDT order by monthDT desc```

