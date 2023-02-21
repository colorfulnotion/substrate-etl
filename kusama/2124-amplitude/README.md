# Amplitude substrate-etl Summary (Monthly)

_Source_: [amplitude.polkaholic.io](https://amplitude.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2124



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-21](/kusama/2124-amplitude/2023-02-28.md) | 972,507 | 1,113,281 | 140,775 |   | 747 | 13 | 818 | - | 
| [2023-01-01 to 2023-01-31](/kusama/2124-amplitude/2023-01-31.md) | 757,812 | 972,506 | 214,695 |   | 788 | 10 | 727 | - | 
| [2022-12-01 to 2022-12-31](/kusama/2124-amplitude/2022-12-31.md) | 561,962 | 757,811 | 195,850 |   | 1,082 | 13 | 727 | - | 
| [2022-11-01 to 2022-11-30](/kusama/2124-amplitude/2022-11-30.md) | 379,402 | 561,961 | 182,560 |   | 587 | 7 | 709 | - | 
| [2022-10-01 to 2022-10-31](/kusama/2124-amplitude/2022-10-31.md) | 197,201 | 379,401 | 182,201 |   | 88 | 2 | 674 | - | 
| [2022-09-01 to 2022-09-30](/kusama/2124-amplitude/2022-09-30.md) | 27,839 | 197,200 | 169,362 |   | 76 | 2 | 673 | - | 
| [2022-08-11 to 2022-08-31](/kusama/2124-amplitude/2022-08-31.md) | 1 | 27,838 | 27,838 |   |  |  | 14 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.kusama.blocks2124` group by monthDT order by monthDT desc
```



Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2124.json](https://cdn.polkaholic.io/substrate-etl/kusama/2124.json) | See [Definitions](/DEFINITIONS.md) for details
