# Equilibrium substrate-etl Summary (Monthly)

_Source_: [equilibrium.polkaholic.io](https://equilibrium.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2011



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-20](/polkadot/2011-equilibrium/2023-02-28.md) | 1,641,356 | 1,779,600 | 138,245 |   | 2,046 | 77 | 9,310 | - | 
| [2023-01-01 to 2023-01-31](/polkadot/2011-equilibrium/2023-01-31.md) | 1,420,268 | 1,641,355 | 221,088 |   | 1,842 | 36 | 8,987 | - | 
| [2022-12-01 to 2022-12-31](/polkadot/2011-equilibrium/2022-12-31.md) | 1,200,017 | 1,420,267 | 220,251 |   | 1,501 | 31 |  | - | 
| [2022-11-01 to 2022-11-30](/polkadot/2011-equilibrium/2022-11-30.md) | 1,052,777 | 1,200,016 | 147,240 |   | 1,040 | 27 | 7,491 | - | 
| [2022-10-01 to 2022-10-31](/polkadot/2011-equilibrium/2022-10-31.md) | 867,209 | 1,052,776 | 185,568 |   | 1,126 | 36 | 7,532 | - | 
| [2022-09-01 to 2022-09-30](/polkadot/2011-equilibrium/2022-09-30.md) | 669,640 | 867,208 | 197,569 |   | 1,299 | 43 | 7,522 | - | 
| [2022-08-01 to 2022-08-31](/polkadot/2011-equilibrium/2022-08-31.md) | 463,575 | 669,639 | 206,065 |   | 1,650 | 52 | 7,514 | - | 
| [2022-07-01 to 2022-07-31](/polkadot/2011-equilibrium/2022-07-31.md) | 323,132 | 463,574 | 140,443 |   | 1,395 | 45 | 7,402 | - | 
| [2022-06-01 to 2022-06-30](/polkadot/2011-equilibrium/2022-06-30.md) | 226,944 | 323,131 | 96,188 |   | 1,429 | 48 | 3,836 | - | 
| [2022-05-01 to 2022-05-31](/polkadot/2011-equilibrium/2022-05-31.md) | 132,018 | 226,943 | 94,926 |   | 1,489 | 48 | 807 | - | 
| [2022-04-01 to 2022-04-30](/polkadot/2011-equilibrium/2022-04-30.md) | 38,051 | 132,017 | 93,967 |   |  |  | 21 | - | 
| [2022-03-19 to 2022-03-31](/polkadot/2011-equilibrium/2022-03-31.md) | 1 | 38,050 | 38,050 |   |  |  | 21 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.polkadot.blocks2011` group by monthDT order by monthDT desc
```



Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2011.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2011.json) | See [Definitions](/DEFINITIONS.md) for details
