# GM Parachain substrate-etl Summary (Monthly)

_Source_: [gm.polkaholic.io](https://gm.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2123



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-20](/kusama/2123-gm/2023-02-28.md) | 892,317 | 977,993 | 81,899 | 3,778 (4.41%) | 563 | 4 | 9,105 | - | 
| [2023-01-01 to 2023-01-31](/kusama/2123-gm/2023-01-31.md) | 740,806 | 892,316 | 151,511 |   | 697 | 5 | 9,100 | - | 
| [2022-12-01 to 2022-12-31](/kusama/2123-gm/2022-12-31.md) | 581,227 | 740,805 | 159,579 |   | 1,358 | 6 | 9,097 | - | 
| [2022-11-01 to 2022-11-30](/kusama/2123-gm/2022-11-30.md) | 419,791 | 581,226 | 161,436 |   | 3,460 | 12 | 9,092 | - | 
| [2022-10-01 to 2022-10-31](/kusama/2123-gm/2022-10-31.md) | 254,949 | 419,790 | 164,842 |   | 8,547 | 30 | 9,083 | - | 
| [2022-09-01 to 2022-09-30](/kusama/2123-gm/2022-09-30.md) | 85,830 | 254,948 | 169,119 |   | 27,794 | 76 | 9,025 | - | 
| [2022-08-15 to 2022-08-31](/kusama/2123-gm/2022-08-31.md) | 1 | 85,829 | 85,829 |   | 163 | 5 | 45 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.kusama.blocks2123` group by monthDT order by monthDT desc
```



Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2123.json](https://cdn.polkaholic.io/substrate-etl/kusama/2123.json) | See [Definitions](/DEFINITIONS.md) for details
