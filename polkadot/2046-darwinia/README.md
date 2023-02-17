# Darwinia substrate-etl Summary (Monthly)

_Source_: [darwinia.polkaholic.io](https://darwinia.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2046



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-17](/polkadot/2046-darwinia/2023-02-28.md) | 838,210 | 926,687 | 88,233 | 245 (0.28%) | 9 |  | 22 | - | 
| [2023-01-01 to 2023-01-31](/polkadot/2046-darwinia/2023-01-31.md) | 669,202 | 838,209 | 169,008 | none  | 2 |  | 22 | - | 
| [2022-12-01 to 2022-12-31](/polkadot/2046-darwinia/2022-12-31.md) | 487,030 | 669,201 | 182,172 | none  | 7 |  | 22 | - | 
| [2022-11-01 to 2022-11-30](/polkadot/2046-darwinia/2022-11-30.md) | 316,864 | 487,029 | 170,166 | none  | 25 |  | 21 | - | 
| [2022-10-01 to 2022-10-31](/polkadot/2046-darwinia/2022-10-31.md) | 145,349 | 316,863 | 171,515 | none  | 58 | 2 | 21 | - | 
| [2022-09-01 to 2022-09-30](/polkadot/2046-darwinia/2022-09-30.md) | 10,392 | 145,348 | 134,957 | none  | 12 |  | 10 | - | 
| [2022-08-29 to 2022-08-31](/polkadot/2046-darwinia/2022-08-31.md) | 1 | 10,391 | 10,391 | none  |  |  | 8 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.polkadot.blocks2046` group by monthDT order by monthDT desc```

