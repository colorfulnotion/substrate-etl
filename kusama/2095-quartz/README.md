# Quartz substrate-etl Summary (Monthly)

_Source_: [quartz.polkaholic.io](https://quartz.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2095



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-17](/kusama/2095-quartz/2023-02-28.md) | 2,401,575 | 2,515,218 | 113,644 | none  | 1,083 | 22 | 75,239 | - | 
| [2023-01-01 to 2023-01-31](/kusama/2095-quartz/2023-01-31.md) | 2,183,031 | 2,401,574 | 218,544 | none  | 1,578 | 20 | 75,161 | - | 
| [2022-12-01 to 2022-12-31](/kusama/2095-quartz/2022-12-31.md) | 1,974,741 | 2,183,030 | 208,290 | none  | 216,838 | 11 | 75,043 | - | 
| [2022-11-01 to 2022-11-30](/kusama/2095-quartz/2022-11-30.md) | 1,767,107 | 1,974,740 | 207,634 | none  | 2,687 | 23 | 19,314 | - | 
| [2022-10-01 to 2022-10-31](/kusama/2095-quartz/2022-10-31.md) | 1,558,454 | 1,767,106 | 208,653 | none  | 2,383 | 23 | 18,910 | - | 
| [2022-09-01 to 2022-09-30](/kusama/2095-quartz/2022-09-30.md) | 1,366,245 | 1,558,453 | 192,209 | none  | 2,095 | 22 | 18,607 | - | 
| [2022-08-01 to 2022-08-31](/kusama/2095-quartz/2022-08-31.md) | 1,189,968 | 1,366,244 | 176,277 | none  | 8,681 | 129 | 18,368 | - | 
| [2022-07-01 to 2022-07-31](/kusama/2095-quartz/2022-07-31.md) | 1,121,377 | 1,189,967 | 68,591 | none  | 103,363 | 117 | 15,336 | - | 
| [2022-06-01 to 2022-06-30](/kusama/2095-quartz/2022-06-30.md) | 940,117 | 1,121,376 | 181,260 | none  | 8,816 | 72 | 14,907 | - | 
| [2022-05-01 to 2022-05-31](/kusama/2095-quartz/2022-05-31.md) | 773,285 | 940,116 | 166,832 | none  | 2,588 | 27 | 12,726 | - | 
| [2022-04-01 to 2022-04-30](/kusama/2095-quartz/2022-04-30.md) | 669,717 | 773,284 | 103,568 | none  | 6,052 | 52 | 12,548 | - | 
| [2022-03-01 to 2022-03-31](/kusama/2095-quartz/2022-03-31.md) | 557,791 | 669,716 | 111,926 | none  | 6,864 | 50 | 12,158 | - | 
| [2022-02-01 to 2022-02-28](/kusama/2095-quartz/2022-02-28.md) | 429,850 | 557,790 | 127,941 | none  | 8,732 | 147 | 11,332 | - | 
| [2022-01-01 to 2022-01-31](/kusama/2095-quartz/2022-01-31.md) | 223,875 | 429,849 | 205,975 | none  | 951 | 22 | 9,371 | - | 
| [2021-12-01 to 2021-12-31](/kusama/2095-quartz/2021-12-31.md) | 19,222 | 223,874 | 204,653 | none  | 20,054 | 47 | 9,211 | - | 
| [2021-11-27 to 2021-11-30](/kusama/2095-quartz/2021-11-30.md) | 1 | 19,221 | 19,221 | none  |  |  | 4 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.kusama.blocks2095` group by monthDT order by monthDT desc```

