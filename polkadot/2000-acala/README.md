# Acala substrate-etl Summary (Monthly)

_Source_: [acala.polkaholic.io](https://acala.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2000



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-14](/polkadot/2000-acala/2023-02-28.md) | 2,848,693 | 2,948,206 | 99,514 | none  | 112,193 | 1,285 | 167,782 | - | 
| [2023-01-01 to 2023-01-31](/polkadot/2000-acala/2023-01-31.md) | 2,628,427 | 2,848,692 | 220,266 | none  | 270,605 | 465 | 167,583 | - | 
| [2022-12-01 to 2022-12-31](/polkadot/2000-acala/2022-12-31.md) | 2,408,141 | 2,628,426 | 220,286 | none  | 219,755 | 516 | 168,389 | - | 
| [2022-11-01 to 2022-11-30](/polkadot/2000-acala/2022-11-30.md) | 2,194,742 | 2,408,140 | 213,399 | none  | 180,805 | 553 | 167,143 | - | 
| [2022-10-01 to 2022-10-31](/polkadot/2000-acala/2022-10-31.md) | 1,974,456 | 2,194,741 | 220,286 | none  | 140,202 | 619 | 164,762 | - | 
| [2022-09-01 to 2022-09-30](/polkadot/2000-acala/2022-09-30.md) | 1,763,831 | 1,974,455 | 210,625 | none  | 64,729 | 378 | 162,759 | - | 
| [2022-08-01 to 2022-08-31](/polkadot/2000-acala/2022-08-31.md) | 1,548,721 | 1,763,830 | 215,110 | none  | 325,644 | 1,245 | 162,568 | - | 
| [2022-07-01 to 2022-07-31](/polkadot/2000-acala/2022-07-31.md) | 1,337,110 | 1,548,720 | 211,611 | none  | 122,584 | 909 | 161,262 | - | 
| [2022-06-01 to 2022-06-30](/polkadot/2000-acala/2022-06-30.md) | 1,134,951 | 1,337,109 | 202,159 | none  | 115,420 | 796 | 160,828 | - | 
| [2022-05-01 to 2022-05-31](/polkadot/2000-acala/2022-05-31.md) | 921,376 | 1,134,950 | 213,575 | none  | 201,357 | 1,325 | 160,245 | - | 
| [2022-04-01 to 2022-04-30](/polkadot/2000-acala/2022-04-30.md) | 711,107 | 921,375 | 210,269 | none  | 212,266 | 1,451 | 157,125 | - | 
| [2022-03-01 to 2022-03-31](/polkadot/2000-acala/2022-03-31.md) | 496,216 | 711,106 | 214,891 | none  | 247,355 | 2,381 | 152,186 | - | 
| [2022-02-01 to 2022-02-28](/polkadot/2000-acala/2022-02-28.md) | 313,202 | 496,215 | 183,014 | none  | 205,279 | 1,864 | 147,203 | - | 
| [2022-01-01 to 2022-01-31](/polkadot/2000-acala/2022-01-31.md) | 93,438 | 313,201 | 219,764 | none  | 163,912 | 2,140 | 135,234 | - | 
| [2021-12-18 to 2021-12-31](/polkadot/2000-acala/2021-12-31.md) | 1 | 93,437 | 93,437 | none  | 1,413 | 22 | 111,685 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.polkadot.blocks2000` group by monthDT order by monthDT desc```

