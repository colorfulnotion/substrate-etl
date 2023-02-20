# DAO IPCI substrate-etl Summary (Monthly)

_Source_: [daoipci.polkaholic.io](https://daoipci.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2222



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-20](/kusama/2222-daoipci/2023-02-28.md) | 606,518 | 747,227 | 140,710 |   | 7 |  | 890 | - | 
| [2023-01-09 to 2023-01-31](/kusama/2222-daoipci/2023-01-31.md) | 447,086 | 606,517 | 159,432 |   | 2 |  | 890 | - | 
| [2022-12-01 to 2022-12-13](/kusama/2222-daoipci/2022-12-31.md) | 365,650 | 447,085 | 81,436 |   | 10 |  | 890 | - | 
| [2022-11-01 to 2022-11-30](/kusama/2222-daoipci/2022-11-30.md) | 153,070 | 365,649 | 212,580 |   | 82 | 1 | 890 | - | 
| [2022-10-10 to 2022-10-31](/kusama/2222-daoipci/2022-10-31.md) | 1 | 153,069 | 153,069 |   | 18 | 2 | 885 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.kusama.blocks2222` group by monthDT order by monthDT desc
```



Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2222.json](https://cdn.polkaholic.io/substrate-etl/kusama/2222.json) | See [Definitions](/DEFINITIONS.md) for details
