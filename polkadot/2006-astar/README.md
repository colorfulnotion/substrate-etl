# Astar substrate-etl Summary (Monthly)

_Source_: [astar.polkaholic.io](https://astar.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2006



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-15](/polkadot/2006-astar/2023-02-28.md) | 2,846,041 | 2,949,044 | 102,941 | 63 (0.06%) | 60,743 | 1,474 | 511,012 | - | 
| [2023-01-01 to 2023-01-31](/polkadot/2006-astar/2023-01-31.md) | 2,627,100 | 2,846,040 | 218,941 | none  | 71,429 | 1,019 | 497,293 | - | 
| [2022-12-01 to 2022-12-31](/polkadot/2006-astar/2022-12-31.md) | 2,407,766 | 2,627,099 | 219,334 | none  | 67,454 | 949 | 492,617 | - | 
| [2022-11-01 to 2022-11-30](/polkadot/2006-astar/2022-11-30.md) | 2,194,230 | 2,407,765 | 213,536 | none  | 67,224 | 964 | 483,513 | - | 
| [2022-10-01 to 2022-10-31](/polkadot/2006-astar/2022-10-31.md) | 1,974,346 | 2,194,229 | 219,884 | none  | 56,977 | 760 | 473,343 | - | 
| [2022-09-01 to 2022-09-30](/polkadot/2006-astar/2022-09-30.md) | 1,764,390 | 1,974,345 | 209,956 | none  | 115,520 | 924 | 468,869 | - | 
| [2022-08-01 to 2022-08-31](/polkadot/2006-astar/2022-08-31.md) | 1,549,603 | 1,764,389 | 214,787 | none  | 82,250 | 995 | 460,380 | - | 
| [2022-07-01 to 2022-07-31](/polkadot/2006-astar/2022-07-31.md) | 1,344,165 | 1,549,602 | 205,438 | none  | 60,525 | 1,145 | 387,859 | - | 
| [2022-06-01 to 2022-06-30](/polkadot/2006-astar/2022-06-30.md) | 1,144,585 | 1,344,164 | 199,580 | none  | 68,704 | 1,221 | 374,451 | - | 
| [2022-05-01 to 2022-05-31](/polkadot/2006-astar/2022-05-31.md) | 934,201 | 1,144,584 | 210,384 | none  | 121,958 | 1,700 | 348,723 | - | 
| [2022-04-01 to 2022-04-30](/polkadot/2006-astar/2022-04-30.md) | 728,114 | 934,200 | 206,087 | none  | 508,774 | 2,815 | 325,772 | - | 
| [2022-03-01 to 2022-03-31](/polkadot/2006-astar/2022-03-31.md) | 513,374 | 728,113 | 214,740 | none  | 752,560 | 1,646 | 109,624 | - | 
| [2022-02-01 to 2022-02-28](/polkadot/2006-astar/2022-02-28.md) | 317,128 | 513,373 | 196,246 | none  | 515,997 | 1,583 | 76,017 | - | 
| [2022-01-01 to 2022-01-31](/polkadot/2006-astar/2022-01-31.md) | 96,275 | 317,127 | 220,853 | none  | 143,823 | 1,933 | 55,485 | - | 
| [2021-12-18 to 2021-12-31](/polkadot/2006-astar/2021-12-31.md) | 1 | 96,274 | 96,274 | none  | 71 | 3 | 29 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.polkadot.blocks2006` group by monthDT order by monthDT desc```

