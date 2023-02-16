# Interlay substrate-etl Summary (Monthly)

_Source_: [interlay.polkaholic.io](https://interlay.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2032



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-16](/polkadot/2032-interlay/2023-02-28.md) | 2,071,448 | 2,168,608 | 97,161 | none  | 21,100 | 129 | 11,158 | - | 
| [2023-01-01 to 2023-01-31](/polkadot/2032-interlay/2023-01-31.md) | 1,876,892 | 2,071,447 | 194,556 | none  | 43,634 | 147 | 11,058 | - | 
| [2022-12-01 to 2022-12-31](/polkadot/2032-interlay/2022-12-31.md) | 1,679,375 | 1,876,891 | 197,517 | none  | 46,349 | 140 | 10,820 | - | 
| [2022-11-01 to 2022-11-30](/polkadot/2032-interlay/2022-11-30.md) | 1,487,751 | 1,679,374 | 191,624 | none  | 41,201 | 164 | 10,632 | - | 
| [2022-10-01 to 2022-10-31](/polkadot/2032-interlay/2022-10-31.md) | 1,289,966 | 1,487,750 | 197,785 | none  | 46,413 | 167 | 10,162 | - | 
| [2022-09-01 to 2022-09-30](/polkadot/2032-interlay/2022-09-30.md) | 1,096,752 | 1,289,965 | 193,214 | none  | 48,484 | 176 | 9,777 | - | 
| [2022-08-01 to 2022-08-31](/polkadot/2032-interlay/2022-08-31.md) | 885,471 | 1,096,751 | 211,281 | none  | 49,121 | 219 | 9,337 | - | 
| [2022-07-01 to 2022-07-31](/polkadot/2032-interlay/2022-07-31.md) | 672,691 | 885,470 | 212,780 | none  | 9,849 | 151 | 8,289 | - | 
| [2022-06-01 to 2022-06-30](/polkadot/2032-interlay/2022-06-30.md) | 469,773 | 672,690 | 202,918 | none  | 13,487 | 213 | 7,165 | - | 
| [2022-05-01 to 2022-05-31](/polkadot/2032-interlay/2022-05-31.md) | 255,599 | 469,772 | 214,174 | none  |  |  | 42 | - | 
| [2022-04-01 to 2022-04-30](/polkadot/2032-interlay/2022-04-30.md) | 77,428 | 255,598 | 178,171 | none  | 21 |  | 42 | - | 
| [2022-03-12 to 2022-03-31](/polkadot/2032-interlay/2022-03-31.md) | 1 | 77,427 | 77,427 | none  | 39 | 1 | 32 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.polkadot.blocks2032` group by monthDT order by monthDT desc```

