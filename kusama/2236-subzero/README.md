# subzero substrate-etl Summary (Monthly)

_Source_: [subzero.polkaholic.io](https://subzero.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2236



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-20](/kusama/2236-subzero/2023-02-28.md) | 341,779 | 479,679 | 137,901 |   |  |  | 9 | - | 
| [2023-01-01 to 2023-01-31](/kusama/2236-subzero/2023-01-31.md) | 127,025 | 341,778 | 214,754 |   |  |  | 9 | - | 
| [2022-12-13 to 2022-12-31](/kusama/2236-subzero/2022-12-31.md) | 1 | 127,024 | 127,024 |   |  |  | 9 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.kusama.blocks2236` group by monthDT order by monthDT desc
```



Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2236.json](https://cdn.polkaholic.io/substrate-etl/kusama/2236.json) | See [Definitions](/DEFINITIONS.md) for details
