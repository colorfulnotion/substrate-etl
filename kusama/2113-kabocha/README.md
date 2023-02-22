# Kabocha substrate-etl Summary (Monthly)

_Source_: [kabocha.polkaholic.io](https://kabocha.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2113



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-22](/kusama/2113-kabocha/2023-02-28.md) | 1,182,738 | 1,301,989 | 119,252 | 26 | 3 | 13,224 | -   |   
| [2023-01-01 to 2023-01-31](/kusama/2113-kabocha/2023-01-31.md) | 979,040 | 1,182,737 | 203,698 | 21 | 4 | 13,221 | -   |   
| [2022-12-01 to 2022-12-31](/kusama/2113-kabocha/2022-12-31.md) | 794,151 | 979,039 | 184,889 | 42 |  | 13,218 | -   |   
| [2022-11-01 to 2022-11-30](/kusama/2113-kabocha/2022-11-30.md) | 655,365 | 794,150 | 138,786 | 59 |  | 13,216 | -   |   
| [2022-10-01 to 2022-10-31](/kusama/2113-kabocha/2022-10-31.md) | 515,033 | 655,364 | 140,332 | 9 |  | 13,216 | -   |   
| [2022-09-01 to 2022-09-30](/kusama/2113-kabocha/2022-09-30.md) | 375,914 | 515,032 | 139,119 | 18,583 |  | 13,290 | -   |   
| [2022-08-01 to 2022-08-31](/kusama/2113-kabocha/2022-08-31.md) | 197,049 | 375,913 | 178,865 | 215,614 |  | 16,440 | -   |   
| [2022-07-01 to 2022-07-31](/kusama/2113-kabocha/2022-07-31.md) | 17,503 | 197,048 | 179,546 | 3 |  | 7 | -   |   
| [2022-06-27 to 2022-06-30](/kusama/2113-kabocha/2022-06-30.md) | 1 | 17,502 | 17,502 | 1 |  | 6 | -   |   

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.kusama.blocks2113` group by monthDT order by monthDT desc
```



Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2113.json](https://cdn.polkaholic.io/substrate-etl/kusama/2113.json) | See [Definitions](/DEFINITIONS.md) for details
