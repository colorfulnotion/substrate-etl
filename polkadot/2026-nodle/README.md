# Nodle substrate-etl Summary (Monthly)

_Source_: [nodle.polkaholic.io](https://nodle.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2026



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-14](/substrate-etl/polkadot/2026-nodle/2023-02-28.md) | 1,967,955 | 2,060,370 | 92,416 | none  | 21,509 | 1,143 | 692,972 | - | 
| [2023-01-01 to 2023-01-31](/substrate-etl/polkadot/2026-nodle/2023-01-31.md) | 1,747,359 | 1,967,954 | 220,596 | none  | 42,018 | 951 | 684,937 | - | 
| [2022-12-01 to 2022-12-31](/substrate-etl/polkadot/2026-nodle/2022-12-31.md) | 1,527,413 | 1,747,358 | 219,946 | none  | 26,649 | 582 | 662,613 | - | 
| [2022-11-01 to 2022-11-30](/substrate-etl/polkadot/2026-nodle/2022-11-30.md) | 1,314,477 | 1,527,412 | 212,936 | none  | 27,795 | 643 | 651,074 | - | 
| [2022-10-01 to 2022-10-31](/substrate-etl/polkadot/2026-nodle/2022-10-31.md) | 1,093,803 | 1,314,476 | 220,674 | none  | 282,305 | 8,772 | 716,738 | - | 
| [2022-09-01 to 2022-09-30](/substrate-etl/polkadot/2026-nodle/2022-09-30.md) | 882,252 | 1,093,802 | 211,551 | none  | 134,872 | 4,016 | 697,228 | - | 
| [2022-08-01 to 2022-08-31](/substrate-etl/polkadot/2026-nodle/2022-08-31.md) | 665,361 | 882,251 | 216,891 | none  | 326,215 | 9,975 | 560,440 | - | 
| [2022-07-01 to 2022-07-31](/substrate-etl/polkadot/2026-nodle/2022-07-31.md) | 468,196 | 665,360 | 197,165 | none  | 167,884 | 4,610 | 505,397 | - | 
| [2022-06-01 to 2022-06-30](/substrate-etl/polkadot/2026-nodle/2022-06-30.md) | 340,966 | 468,195 | 127,230 | none  | 53,930 | 1,174 | 468,724 | - | 
| [2022-05-01 to 2022-05-31](/substrate-etl/polkadot/2026-nodle/2022-05-31.md) | 212,127 | 340,965 | 128,839 | none  | 43,308 | 1,230 | 447,982 | - | 
| [2022-04-01 to 2022-04-30](/substrate-etl/polkadot/2026-nodle/2022-04-30.md) | 84,991 | 212,126 | 127,136 | none  |  |  | 9 | - | 
| [2022-03-12 to 2022-03-31](/substrate-etl/polkadot/2026-nodle/2022-03-31.md) | 1 | 84,990 | 84,990 | none  |  |  | 9 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.polkadot.blocks2026` group by monthDT order by monthDT desc```

