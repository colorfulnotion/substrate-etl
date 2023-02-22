# Bajun Network substrate-etl Summary (Monthly)

_Source_: [bajun.polkaholic.io](https://bajun.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2119



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-22](/kusama/2119-bajun/2023-02-28.md) | 1,397,502 | 1,549,733 | 152,232 | 180,876 | 221 | 5,804 | -   |   
| [2023-01-01 to 2023-01-31](/kusama/2119-bajun/2023-01-31.md) | 1,179,201 | 1,397,501 | 218,301 | 1,505 | 24 | 4,244 | -   |   
| [2022-12-01 to 2022-12-31](/kusama/2119-bajun/2022-12-31.md) | 969,372 | 1,179,200 | 209,829 | 1,710 |  | 3,686 | -   |   
| [2022-11-01 to 2022-11-30](/kusama/2119-bajun/2022-11-30.md) | 772,506 | 969,371 | 196,866 | 55 |  | 3,291 | -   |   
| [2022-10-01 to 2022-10-31](/kusama/2119-bajun/2022-10-31.md) | 556,790 | 772,505 | 215,716 | 150 |  | 3,285 | -   |   
| [2022-09-01 to 2022-09-30](/kusama/2119-bajun/2022-09-30.md) | 358,487 | 556,789 | 198,303 | 10 |  | 11 | -   |   
| [2022-08-01 to 2022-08-31](/kusama/2119-bajun/2022-08-31.md) | 180,292 | 358,486 | 178,195 | 3 |  | 7 | -   |   
| [2022-07-01 to 2022-07-31](/kusama/2119-bajun/2022-07-31.md) | 658 | 180,291 | 179,634 |  |  | 4 | -   |   
| [2022-06-30 to 2022-06-30](/kusama/2119-bajun/2022-06-30.md) | 1 | 657 | 657 |  |  | 4 | -   |   

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.kusama.blocks2119` group by monthDT order by monthDT desc
```



Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2119.json](https://cdn.polkaholic.io/substrate-etl/kusama/2119.json) | See [Definitions](/DEFINITIONS.md) for details
