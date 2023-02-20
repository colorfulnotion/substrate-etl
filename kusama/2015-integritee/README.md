# Integritee substrate-etl Summary (Monthly)

_Source_: [integritee.polkaholic.io](https://integritee.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2015



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-20](/kusama/2015-integritee/2023-02-28.md) | 1,925,180 | 2,063,162 | 137,983 |   | 772 | 25 | 12,960 | - | 
| [2023-01-01 to 2023-01-31](/kusama/2015-integritee/2023-01-31.md) | 1,707,931 | 1,925,179 | 217,249 |   | 1,450 | 23 | 12,922 | - | 
| [2022-12-01 to 2022-12-31](/kusama/2015-integritee/2022-12-31.md) | 1,499,268 | 1,707,930 | 208,663 |   | 1,017 | 18 | 12,871 | - | 
| [2022-11-01 to 2022-11-30](/kusama/2015-integritee/2022-11-30.md) | 1,290,448 | 1,499,267 | 208,820 |   | 1,420 | 21 | 12,839 | - | 
| [2022-10-01 to 2022-10-31](/kusama/2015-integritee/2022-10-31.md) | 1,075,264 | 1,290,447 | 215,184 |   | 1,442 | 24 | 12,742 | - | 
| [2022-09-01 to 2022-09-30](/kusama/2015-integritee/2022-09-30.md) | 876,474 | 1,075,263 | 198,790 |   | 1,971 | 26 | 12,654 | - | 
| [2022-08-01 to 2022-08-31](/kusama/2015-integritee/2022-08-31.md) | 695,146 | 876,473 | 181,328 |   | 1,647 | 26 | 12,600 | - | 
| [2022-07-01 to 2022-07-31](/kusama/2015-integritee/2022-07-31.md) | 515,486 | 695,145 | 179,660 |   | 1,243 | 23 | 11,511 | - | 
| [2022-06-01 to 2022-06-30](/kusama/2015-integritee/2022-06-30.md) | 327,217 | 515,485 | 188,269 |   | 1,430 | 24 | 11,443 | - | 
| [2022-05-01 to 2022-05-31](/kusama/2015-integritee/2022-05-31.md) | 151,997 | 327,216 | 175,220 |   | 1,734 | 27 | 11,373 | - | 
| [2022-04-01 to 2022-04-30](/kusama/2015-integritee/2022-04-30.md) | 36,169 | 151,996 | 115,828 |   | 1,584 | 22 | 11,233 | - | 
| [2022-03-21 to 2022-03-31](/kusama/2015-integritee/2022-03-31.md) | 1 | 36,168 | 36,168 |   |  |  | 1 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.kusama.blocks2015` group by monthDT order by monthDT desc
```



Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2015.json](https://cdn.polkaholic.io/substrate-etl/kusama/2015.json) | See [Definitions](/DEFINITIONS.md) for details
