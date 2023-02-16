# Statemint substrate-etl Summary (Monthly)

_Source_: [statemint.polkaholic.io](https://statemint.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 1000



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-16](/polkadot/1000-statemint/2023-02-28.md) | 3,114,475 | 3,225,584 | 111,110 | none  | 452 | 12 | 545 | - | 
| [2023-01-01 to 2023-01-31](/polkadot/1000-statemint/2023-01-31.md) | 2,893,961 | 3,114,474 | 220,514 | none  | 468 | 8 | 471 | - | 
| [2022-12-01 to 2022-12-31](/polkadot/1000-statemint/2022-12-31.md) | 2,675,090 | 2,893,960 | 218,871 | none  | 406 | 6 | 389 | - | 
| [2022-11-01 to 2022-11-30](/polkadot/1000-statemint/2022-11-30.md) | 2,461,314 | 2,675,089 | 213,776 | none  | 712 | 8 | 318 | - | 
| [2022-10-01 to 2022-10-31](/polkadot/1000-statemint/2022-10-31.md) | 2,240,126 | 2,461,313 | 221,188 | none  | 944 | 7 | 224 | - | 
| [2022-09-01 to 2022-09-30](/polkadot/1000-statemint/2022-09-30.md) | 2,029,474 | 2,240,125 | 210,652 | none  | 191 | 2 | 95 | - | 
| [2022-08-01 to 2022-08-31](/polkadot/1000-statemint/2022-08-31.md) | 1,814,635 | 2,029,473 | 214,839 | none  | 28 |  | 56 | - | 
| [2022-07-01 to 2022-07-31](/polkadot/1000-statemint/2022-07-31.md) | 1,603,182 | 1,814,634 | 211,453 | none  | 19 |  | 43 | - | 
| [2022-06-01 to 2022-06-30](/polkadot/1000-statemint/2022-06-30.md) | 1,401,756 | 1,603,181 | 201,426 | none  | 25 |  | 38 | - | 
| [2022-05-01 to 2022-05-31](/polkadot/1000-statemint/2022-05-31.md) | 1,188,447 | 1,401,755 | 213,309 | none  | 135 | 1 | 29 | - | 
| [2022-04-01 to 2022-04-30](/polkadot/1000-statemint/2022-04-30.md) | 978,157 | 1,188,446 | 210,290 | none  |  |  |  | - | 
| [2022-03-01 to 2022-03-31](/polkadot/1000-statemint/2022-03-31.md) | 761,106 | 978,156 | 217,051 | none  |  |  |  | - | 
| [2022-02-01 to 2022-02-28](/polkadot/1000-statemint/2022-02-28.md) | 588,348 | 761,105 | 172,758 | none  |  |  |  | - | 
| [2022-01-01 to 2022-01-31](/polkadot/1000-statemint/2022-01-31.md) | 389,636 | 588,347 | 198,712 | none  |  |  |  | - | 
| [2021-12-01 to 2021-12-31](/polkadot/1000-statemint/2021-12-31.md) | 184,519 | 389,635 | 205,117 | none  |  |  |  | - | 
| [2021-11-05 to 2021-11-30](/polkadot/1000-statemint/2021-11-30.md) | 1 | 184,518 | 184,518 | none  |  |  |  | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.polkadot.blocks1000` group by monthDT order by monthDT desc```

