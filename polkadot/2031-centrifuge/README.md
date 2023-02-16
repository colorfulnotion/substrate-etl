# Centrifuge substrate-etl Summary (Monthly)

_Source_: [centrifuge.polkaholic.io](https://centrifuge.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2031



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-16](/polkadot/2031-centrifuge/2023-02-28.md) | 2,229,646 | 2,339,331 | 109,686 | none  | 4,535 | 118 | 44,439 | - | 
| [2023-01-01 to 2023-01-31](/polkadot/2031-centrifuge/2023-01-31.md) | 2,009,160 | 2,229,645 | 220,486 | none  | 8,263 | 113 | 44,248 | - | 
| [2022-12-01 to 2022-12-31](/polkadot/2031-centrifuge/2022-12-31.md) | 1,789,038 | 2,009,159 | 220,122 | none  | 5,453 | 73 | 43,855 | - | 
| [2022-11-01 to 2022-11-30](/polkadot/2031-centrifuge/2022-11-30.md) | 1,575,642 | 1,789,037 | 213,396 | none  | 8,626 | 103 | 43,649 | - | 
| [2022-10-01 to 2022-10-31](/polkadot/2031-centrifuge/2022-10-31.md) | 1,357,550 | 1,575,641 | 218,092 | none  | 8,627 | 91 | 43,198 | - | 
| [2022-09-01 to 2022-09-30](/polkadot/2031-centrifuge/2022-09-30.md) | 1,150,682 | 1,357,549 | 206,868 | none  | 6,551 | 103 | 42,934 | - | 
| [2022-08-01 to 2022-08-31](/polkadot/2031-centrifuge/2022-08-31.md) | 940,374 | 1,150,681 | 210,308 | none  | 7,401 | 120 | 42,649 | - | 
| [2022-07-01 to 2022-07-31](/polkadot/2031-centrifuge/2022-07-31.md) | 735,188 | 940,373 | 205,186 | none  | 7,171 | 108 | 42,203 | - | 
| [2022-06-01 to 2022-06-30](/polkadot/2031-centrifuge/2022-06-30.md) | 539,985 | 735,187 | 195,203 | none  | 6,704 | 92 | 41,790 | - | 
| [2022-05-01 to 2022-05-31](/polkadot/2031-centrifuge/2022-05-31.md) | 333,939 | 539,984 | 206,046 | none  | 9,450 | 193 | 41,486 | - | 
| [2022-04-01 to 2022-04-30](/polkadot/2031-centrifuge/2022-04-30.md) | 132,981 | 333,938 | 200,958 | none  | 15,603 | 275 | 41,078 | - | 
| [2022-03-12 to 2022-03-31](/polkadot/2031-centrifuge/2022-03-31.md) | 1 | 132,980 | 132,980 | none  | 66 | 3 | 49 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.polkadot.blocks2031` group by monthDT order by monthDT desc```

