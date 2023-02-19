# Composable Finance substrate-etl Summary (Monthly)

_Source_: [composable.polkaholic.io](https://composable.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2019



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-19](/polkadot/2019-composable/2023-02-28.md) | 1,289,521 | 1,420,478 | 123,848 | 7,110 (5.43%) |  |  | 10 | - | 
| [2023-01-01 to 2023-01-31](/polkadot/2019-composable/2023-01-31.md) | 1,143,924 | 1,289,520 | 145,597 |   | 8 |  | 10 | - | 
| [2022-12-01 to 2022-12-31](/polkadot/2019-composable/2022-12-31.md) | 1,028,926 | 1,143,923 | 114,998 |   |  |  | 7 | - | 
| [2022-11-01 to 2022-11-30](/polkadot/2019-composable/2022-11-30.md) | 917,036 | 1,028,925 | 111,890 |   |  |  | 7 | - | 
| [2022-10-01 to 2022-10-31](/polkadot/2019-composable/2022-10-31.md) | 807,381 | 917,035 | 109,655 |   | 3 |  | 7 | - | 
| [2022-09-01 to 2022-09-30](/polkadot/2019-composable/2022-09-30.md) | 714,212 | 807,380 | 93,169 |   |  |  | 6 | - | 
| [2022-08-01 to 2022-08-31](/polkadot/2019-composable/2022-08-31.md) | 613,546 | 714,211 | 100,666 |   | 1 |  | 6 | - | 
| [2022-07-01 to 2022-07-31](/polkadot/2019-composable/2022-07-31.md) | 449,082 | 613,545 | 164,464 |   |  |  | 6 | - | 
| [2022-06-01 to 2022-06-30](/polkadot/2019-composable/2022-06-30.md) | 294,395 | 449,081 | 154,687 |   |  |  | 6 | - | 
| [2022-05-01 to 2022-05-31](/polkadot/2019-composable/2022-05-31.md) | 129,605 | 294,394 | 164,790 |   | 1 |  | 6 | - | 
| [2022-04-12 to 2022-04-30](/polkadot/2019-composable/2022-04-30.md) | 36,000 | 129,604 | 93,605 |   |  |  | 6 | - | 
| [2022-03-12 to 2022-03-19](/polkadot/2019-composable/2022-03-31.md) | 1 | 35,999 | 35,999 |   |  |  | 6 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.polkadot.blocks2019` group by monthDT order by monthDT desc
```



Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2019.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2019.json) | See [Definitions](/DEFINITIONS.md) for details
