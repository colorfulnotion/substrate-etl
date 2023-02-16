# Zeitgeist substrate-etl Summary (Monthly)

_Source_: [zeitgeist.polkaholic.io](https://zeitgeist.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2101



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-16](/kusama/2101-zeitgeist/2023-02-28.md) | 2,224,848 | 2,335,101 | 110,254 | none  | 1,756 | 59 | 15,468 | - | 
| [2023-01-01 to 2023-01-31](/kusama/2101-zeitgeist/2023-01-31.md) | 2,007,845 | 2,224,847 | 217,003 | none  | 3,103 | 54 | 15,395 | - | 
| [2022-12-01 to 2022-12-31](/kusama/2101-zeitgeist/2022-12-31.md) | 1,806,290 | 2,007,844 | 201,555 | none  | 4,113 | 61 | 15,200 | - | 
| [2022-11-01 to 2022-11-30](/kusama/2101-zeitgeist/2022-11-30.md) | 1,604,190 | 1,806,289 | 202,100 | none  | 4,209 | 60 | 15,054 | - | 
| [2022-10-01 to 2022-10-31](/kusama/2101-zeitgeist/2022-10-31.md) | 1,390,149 | 1,604,189 | 214,041 | none  | 4,565 | 65 | 14,988 | - | 
| [2022-09-01 to 2022-09-30](/kusama/2101-zeitgeist/2022-09-30.md) | 1,194,550 | 1,390,148 | 195,599 | none  | 11,131 | 87 | 14,975 | - | 
| [2022-08-01 to 2022-08-31](/kusama/2101-zeitgeist/2022-08-31.md) | 1,012,836 | 1,194,549 | 181,714 | none  | 6,189 | 98 | 14,857 | - | 
| [2022-07-01 to 2022-07-31](/kusama/2101-zeitgeist/2022-07-31.md) | 827,775 | 1,012,835 | 185,061 | none  | 9,273 | 125 | 14,549 | - | 
| [2022-06-01 to 2022-06-30](/kusama/2101-zeitgeist/2022-06-30.md) | 636,479 | 827,774 | 191,296 | none  | 2,137 | 29 | 13,858 | - | 
| [2022-05-01 to 2022-05-31](/kusama/2101-zeitgeist/2022-05-31.md) | 465,825 | 636,478 | 170,654 | none  | 4 |  | 6 | - | 
| [2022-04-01 to 2022-04-30](/kusama/2101-zeitgeist/2022-04-30.md) | 365,227 | 465,824 | 100,598 | none  | 2 |  | 5 | - | 
| [2022-03-01 to 2022-03-31](/kusama/2101-zeitgeist/2022-03-31.md) | 236,745 | 365,226 | 128,482 | none  |  |  | 5 | - | 
| [2022-02-01 to 2022-02-28](/kusama/2101-zeitgeist/2022-02-28.md) | 128,085 | 236,744 | 108,660 | none  | 5 |  | 5 | - | 
| [2022-01-13 to 2022-01-31](/kusama/2101-zeitgeist/2022-01-31.md) | 1 | 128,084 | 128,084 | none  | 3 |  |  | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.kusama.blocks2101` group by monthDT order by monthDT desc```

