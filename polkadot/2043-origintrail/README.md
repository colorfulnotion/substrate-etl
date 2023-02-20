# Origin Trail substrate-etl Summary (Monthly)

_Source_: [origintrail.polkaholic.io](https://origintrail.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2043



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-20](/polkadot/2043-origintrail/2023-02-28.md) | 1,683,135 | 1,808,880 | 125,746 |   | 158 | 7 | 3,634 | - | 
| [2023-01-01 to 2023-01-31](/polkadot/2043-origintrail/2023-01-31.md) | 1,469,695 | 1,683,134 | 213,440 |   | 474 | 8 | 3,606 | - | 
| [2022-12-01 to 2022-12-31](/polkadot/2043-origintrail/2022-12-31.md) | 1,249,065 | 1,469,694 | 220,630 |   | 591 | 9 | 3,523 | - | 
| [2022-11-01 to 2022-11-30](/polkadot/2043-origintrail/2022-11-30.md) | 1,034,707 | 1,249,064 | 214,358 |   | 350 | 7 | 3,222 | - | 
| [2022-10-01 to 2022-10-31](/polkadot/2043-origintrail/2022-10-31.md) | 813,769 | 1,034,706 | 220,938 |   | 625 | 4 | 3,188 | - | 
| [2022-09-01 to 2022-09-30](/polkadot/2043-origintrail/2022-09-30.md) | 602,982 | 813,768 | 210,787 |   | 246 | 4 | 2,986 | - | 
| [2022-08-01 to 2022-08-31](/polkadot/2043-origintrail/2022-08-31.md) | 388,055 | 602,981 | 214,927 |   | 659 | 4 | 2,945 | - | 
| [2022-07-01 to 2022-07-31](/polkadot/2043-origintrail/2022-07-31.md) | 176,609 | 388,054 | 211,446 |   | 330,210 | 5 | 2,833 | - | 
| [2022-06-04 to 2022-06-30](/polkadot/2043-origintrail/2022-06-30.md) | 1 | 176,608 | 176,608 |   | 1,124,329 | 4 | 11 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.polkadot.blocks2043` group by monthDT order by monthDT desc
```



Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2043.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2043.json) | See [Definitions](/DEFINITIONS.md) for details
