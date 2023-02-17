# Robonomics substrate-etl Summary (Monthly)

_Source_: [robonomics.polkaholic.io](https://robonomics.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2048



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-17](/kusama/2048-robonomics/2023-02-28.md) | 2,385,571 | 2,503,390 | 117,820 | none  | 22,501 | 39 | 3,124 | - | 
| [2023-01-01 to 2023-01-31](/kusama/2048-robonomics/2023-01-31.md) | 2,165,671 | 2,385,570 | 219,900 | none  | 36,137 | 32 | 3,077 | - | 
| [2022-12-01 to 2022-12-31](/kusama/2048-robonomics/2022-12-31.md) | 1,953,566 | 2,165,670 | 212,105 | none  | 46,241 | 34 | 3,001 | - | 
| [2022-11-01 to 2022-11-30](/kusama/2048-robonomics/2022-11-30.md) | 1,741,172 | 1,953,565 | 212,394 | none  | 44,396 | 35 | 2,907 | - | 
| [2022-10-01 to 2022-10-31](/kusama/2048-robonomics/2022-10-31.md) | 1,521,856 | 1,741,171 | 219,316 | none  | 36,235 | 36 | 2,865 | - | 
| [2022-09-01 to 2022-09-30](/kusama/2048-robonomics/2022-09-30.md) | 1,318,927 | 1,521,855 | 202,929 | none  | 47,205 | 35 | 2,783 | - | 
| [2022-08-01 to 2022-08-31](/kusama/2048-robonomics/2022-08-31.md) | 1,132,818 | 1,318,926 | 186,109 | none  | 219,335 | 34 | 2,707 | - | 
| [2022-07-01 to 2022-07-31](/kusama/2048-robonomics/2022-07-31.md) | 947,513 | 1,132,817 | 185,305 | none  | 685,086 | 30 | 2,664 | - | 
| [2022-06-01 to 2022-06-30](/kusama/2048-robonomics/2022-06-30.md) | 751,435 | 947,512 | 196,078 | none  | 686,111 | 34 | 2,615 | - | 
| [2022-05-01 to 2022-05-31](/kusama/2048-robonomics/2022-05-31.md) | 569,336 | 751,434 | 182,099 | none  | 795,478 | 29 | 2,564 | - | 
| [2022-04-01 to 2022-04-30](/kusama/2048-robonomics/2022-04-30.md) | 442,337 | 569,335 | 126,999 | none  | 467,661 | 27 | 2,544 | - | 
| [2022-03-01 to 2022-03-31](/kusama/2048-robonomics/2022-03-31.md) | 298,595 | 442,336 | 143,742 | none  | 456,332 | 45 | 2,529 | - | 
| [2022-02-01 to 2022-02-28](/kusama/2048-robonomics/2022-02-28.md) | 158,459 | 298,594 | 140,136 | none  | 599,259 | 40 | 2,452 | - | 
| [2022-01-09 to 2022-01-31](/kusama/2048-robonomics/2022-01-31.md) | 1 | 158,458 | 158,458 | none  | 219,693 | 30 | 2,357 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.kusama.blocks2048` group by monthDT order by monthDT desc```

