# Litentry substrate-etl Summary (Monthly)

_Source_: [litentry.polkaholic.io](https://litentry.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2013



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-19](/polkadot/2013-litentry/2023-02-28.md) | 1,587,337 | 1,718,634 | 124,162 | 7,136 (5.44%) | 2,929 | 79 | 4,763 | - | 
| [2023-01-01 to 2023-01-31](/polkadot/2013-litentry/2023-01-31.md) | 1,365,864 | 1,587,336 | 221,473 |   | 4,495 | 74 | 4,751 | - | 
| [2022-12-01 to 2022-12-31](/polkadot/2013-litentry/2022-12-31.md) | 1,144,608 | 1,365,863 | 221,256 |   | 3,865 | 64 | 4,741 | - | 
| [2022-11-01 to 2022-11-30](/polkadot/2013-litentry/2022-11-30.md) | 930,803 | 1,144,607 | 213,805 |   | 2,549 | 36 | 4,720 | - | 
| [2022-10-01 to 2022-10-31](/polkadot/2013-litentry/2022-10-31.md) | 711,127 | 930,802 | 219,676 |   | 738 | 15 | 4,678 | - | 
| [2022-09-01 to 2022-09-30](/polkadot/2013-litentry/2022-09-30.md) | 514,397 | 711,126 | 196,730 |   | 412 | 11 | 4,671 | - | 
| [2022-08-01 to 2022-08-31](/polkadot/2013-litentry/2022-08-31.md) | 329,620 | 514,396 | 184,777 |   | 500 | 12 | 4,671 | - | 
| [2022-07-01 to 2022-07-31](/polkadot/2013-litentry/2022-07-31.md) | 151,698 | 329,619 | 177,922 |   | 318 | 7 | 4,671 | - | 
| [2022-06-04 to 2022-06-30](/polkadot/2013-litentry/2022-06-30.md) | 1 | 151,697 | 151,697 |   | 2 |  | 16 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.polkadot.blocks2013` group by monthDT order by monthDT desc
```



Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2013.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2013.json) | See [Definitions](/DEFINITIONS.md) for details
