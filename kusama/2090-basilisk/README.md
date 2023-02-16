# Basilisk substrate-etl Summary (Monthly)

_Source_: [basilisk.polkaholic.io](https://basilisk.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2090



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-16](/kusama/2090-basilisk/2023-02-28.md) | 2,667,019 | 2,774,529 | 107,511 | none  | 5,863 | 133 | 18,292 | - | 
| [2023-01-01 to 2023-01-31](/kusama/2090-basilisk/2023-01-31.md) | 2,454,267 | 2,667,018 | 212,752 | none  | 5,468 | 50 | 16,990 | - | 
| [2022-12-01 to 2022-12-31](/kusama/2090-basilisk/2022-12-31.md) | 2,251,661 | 2,454,266 | 202,606 | none  | 3,132 | 27 | 16,888 | - | 
| [2022-11-01 to 2022-11-30](/kusama/2090-basilisk/2022-11-30.md) | 2,100,643 | 2,251,660 | 151,018 | none  | 2,684 | 38 | 16,833 | - | 
| [2022-10-01 to 2022-10-31](/kusama/2090-basilisk/2022-10-31.md) | 1,896,511 | 2,100,642 | 204,132 | none  | 8,299 | 66 | 16,774 | - | 
| [2022-09-01 to 2022-09-30](/kusama/2090-basilisk/2022-09-30.md) | 1,708,321 | 1,896,510 | 188,190 | none  | 2,581 | 30 | 16,395 | - | 
| [2022-08-01 to 2022-08-31](/kusama/2090-basilisk/2022-08-31.md) | 1,561,799 | 1,708,320 | 146,522 | none  | 6,548 | 77 | 16,322 | - | 
| [2022-07-01 to 2022-07-31](/kusama/2090-basilisk/2022-07-31.md) | 1,401,140 | 1,561,798 | 160,659 | none  | 5,205 | 73 | 16,279 | - | 
| [2022-06-01 to 2022-06-30](/kusama/2090-basilisk/2022-06-30.md) | 1,221,394 | 1,401,139 | 179,746 | none  | 312 | 7 | 16,073 | - | 
| [2022-05-01 to 2022-05-31](/kusama/2090-basilisk/2022-05-31.md) | 1,058,815 | 1,221,393 | 162,579 | none  | 103 | 2 | 16,073 | - | 
| [2022-04-01 to 2022-04-30](/kusama/2090-basilisk/2022-04-30.md) | 963,122 | 1,058,814 | 95,693 | none  | 77 | 2 | 11,915 | - | 
| [2022-03-01 to 2022-03-31](/kusama/2090-basilisk/2022-03-31.md) | 856,767 | 963,121 | 106,355 | none  | 93 | 2 | 11,915 | - | 
| [2022-02-01 to 2022-02-28](/kusama/2090-basilisk/2022-02-28.md) | 732,495 | 856,766 | 124,272 | none  | 101 | 3 | 11,915 | - | 
| [2022-01-01 to 2022-01-31](/kusama/2090-basilisk/2022-01-31.md) | 540,806 | 732,494 | 191,689 | none  | 90 | 3 | 11,915 | - | 
| [2021-12-01 to 2021-12-31](/kusama/2090-basilisk/2021-12-31.md) | 370,435 | 540,805 | 170,370 | 1 (0.00%) | 409 | 11 | 11,915 | - | 
| [2021-11-01 to 2021-11-30](/kusama/2090-basilisk/2021-11-30.md) | 222,679 | 370,434 | 147,756 | none  |  |  | 7 | - | 
| [2021-10-01 to 2021-10-31](/kusama/2090-basilisk/2021-10-31.md) | 51,706 | 222,678 | 170,972 | 1 (0.00%) |  |  | 7 | - | 
| [2021-09-22 to 2021-09-30](/kusama/2090-basilisk/2021-09-30.md) | 1 | 51,705 | 51,705 | none  |  |  | 7 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.kusama.blocks2090` group by monthDT order by monthDT desc```

