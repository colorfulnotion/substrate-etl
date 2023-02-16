# Pichiu substrate-etl Summary (Monthly)

_Source_: [pichiu.polkaholic.io](https://pichiu.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2102



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-16](/kusama/2102-pichiu/2023-02-28.md) | 1,295,607 | 1,351,264 | 55,658 | none  | 16 | 1 | 1,148 | - | 
| [2023-01-01 to 2023-01-31](/kusama/2102-pichiu/2023-01-31.md) | 1,165,361 | 1,295,606 | 130,246 | none  | 90 | 2 | 1,148 | - | 
| [2022-12-01 to 2022-12-31](/kusama/2102-pichiu/2022-12-31.md) | 956,906 | 1,165,360 | 208,455 | none  | 58 | 2 | 1,124 | - | 
| [2022-11-01 to 2022-11-30](/kusama/2102-pichiu/2022-11-30.md) | 747,379 | 956,905 | 209,527 | none  | 75 | 2 | 1,123 | - | 
| [2022-10-01 to 2022-10-31](/kusama/2102-pichiu/2022-10-31.md) | 531,527 | 747,378 | 215,852 | none  | 146 | 3 | 1,109 | - | 
| [2022-09-01 to 2022-09-30](/kusama/2102-pichiu/2022-09-30.md) | 334,461 | 531,526 | 197,066 | none  | 57 | 1 | 660 | - | 
| [2022-08-01 to 2022-08-31](/kusama/2102-pichiu/2022-08-31.md) | 154,154 | 334,460 | 180,307 | none  | 113 | 1 | 654 | - | 
| [2022-07-01 to 2022-07-31](/kusama/2102-pichiu/2022-07-31.md) | 34,486 | 154,153 | 119,668 | none  | 16 |  | 7 | - | 
| [2022-06-21 to 2022-06-30](/kusama/2102-pichiu/2022-06-30.md) | 1 | 34,485 | 34,485 | none  | 7 |  | 5 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.kusama.blocks2102` group by monthDT order by monthDT desc```

