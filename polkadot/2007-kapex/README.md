# Kapex substrate-etl Summary (Monthly)

_Source_: [kapex.polkaholic.io](https://kapex.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2007



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-21](/polkadot/2007-kapex/2023-02-28.md) | 975,590 | 1,124,400 | 148,811 |   | 8 |  | 1,054 | - | 
| [2023-01-01 to 2023-01-31](/polkadot/2007-kapex/2023-01-31.md) | 755,417 | 975,589 | 220,173 |   | 54 | 1 | 1,052 | - | 
| [2022-12-01 to 2022-12-31](/polkadot/2007-kapex/2022-12-31.md) | 536,184 | 755,416 | 219,233 |   |  |  | 3 | - | 
| [2022-11-01 to 2022-11-30](/polkadot/2007-kapex/2022-11-30.md) | 322,459 | 536,183 | 213,725 |   |  |  | 3 | - | 
| [2022-10-01 to 2022-10-31](/polkadot/2007-kapex/2022-10-31.md) | 101,902 | 322,458 | 220,557 |   |  |  | 3 | - | 
| [2022-09-16 to 2022-09-30](/polkadot/2007-kapex/2022-09-30.md) | 1 | 101,901 | 101,901 |   |  |  | 3 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.polkadot.blocks2007` group by monthDT order by monthDT desc
```



Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2007.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2007.json) | See [Definitions](/DEFINITIONS.md) for details
