# Moonbeam substrate-etl Summary (Monthly)

_Source_: [moonbeam.polkaholic.io](https://moonbeam.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2004



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-16](/polkadot/2004-moonbeam/2023-02-28.md) | 2,851,641 | 2,961,753 | 110,068 | 45 (0.04%) | 16,636 | 153 | 2,245,953 | - | 
| [2023-01-01 to 2023-01-31](/polkadot/2004-moonbeam/2023-01-31.md) | 2,631,953 | 2,851,640 | 219,688 | none  | 24,333 | 179 | 1,924,889 | - | 
| [2022-12-01 to 2022-12-31](/polkadot/2004-moonbeam/2022-12-31.md) | 2,412,526 | 2,631,952 | 219,427 | none  | 31,089 | 138 | 1,576,832 | - | 
| [2022-11-01 to 2022-11-30](/polkadot/2004-moonbeam/2022-11-30.md) | 2,200,382 | 2,412,525 | 212,144 | none  | 28,082 | 128 | 1,293,897 | - | 
| [2022-10-01 to 2022-10-31](/polkadot/2004-moonbeam/2022-10-31.md) | 1,981,429 | 2,200,381 | 218,953 | none  | 26,424 | 113 | 890,652 | - | 
| [2022-09-01 to 2022-09-30](/polkadot/2004-moonbeam/2022-09-30.md) | 1,772,317 | 1,981,428 | 209,112 | none  | 28,097 | 109 | 310,060 | - | 
| [2022-08-01 to 2022-08-31](/polkadot/2004-moonbeam/2022-08-31.md) | 1,557,182 | 1,772,316 | 215,135 | none  | 29,388 | 79 | 298,593 | - | 
| [2022-07-01 to 2022-07-31](/polkadot/2004-moonbeam/2022-07-31.md) | 1,346,018 | 1,557,181 | 211,164 | none  | 9,353 | 62 | 280,960 | - | 
| [2022-06-01 to 2022-06-30](/polkadot/2004-moonbeam/2022-06-30.md) | 1,144,562 | 1,346,017 | 201,456 | none  | 8,405 | 54 | 256,064 | - | 
| [2022-05-01 to 2022-05-31](/polkadot/2004-moonbeam/2022-05-31.md) | 932,105 | 1,144,561 | 212,457 | none  | 12,380 | 50 | 238,948 | - | 
| [2022-04-01 to 2022-04-30](/polkadot/2004-moonbeam/2022-04-30.md) | 723,609 | 932,104 | 208,496 | none  | 9,801 | 64 | 226,560 | - | 
| [2022-03-01 to 2022-03-31](/polkadot/2004-moonbeam/2022-03-31.md) | 506,907 | 723,608 | 216,702 | none  | 6,545 | 58 | 207,152 | - | 
| [2022-02-01 to 2022-02-28](/polkadot/2004-moonbeam/2022-02-28.md) | 314,789 | 506,906 | 192,118 | none  | 18,414 | 192 | 189,626 | - | 
| [2022-01-01 to 2022-01-31](/polkadot/2004-moonbeam/2022-01-31.md) | 97,535 | 314,788 | 217,254 | none  | 28,983 | 313 | 141,321 | - | 
| [2021-12-18 to 2021-12-31](/polkadot/2004-moonbeam/2021-12-31.md) | 1 | 97,534 | 97,534 | none  | 432 | 9 | 169 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.polkadot.blocks2004` group by monthDT order by monthDT desc```

