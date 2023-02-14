# SubsocialX substrate-etl Summary (Monthly)

_Source_: [subsocialx.polkaholic.io](https://subsocialx.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2100
Status: Only partial index available: Reindexing


| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-14](/substrate-etl/kusama/2100-subsocialx/2023-02-28.md) | 2,199,578 | 2,206,599 | 7,022 | none  | 60 | 36 | 34,291 | - | 
| [2023-01-04 to 2023-01-31](/substrate-etl/kusama/2100-subsocialx/2023-01-31.md) | 1,924,493 | 1,962,628 |  | 38,136 (100.00%) | 373 | 42 | 34,238 | - | 
| [2022-12-06 to 2022-12-13](/substrate-etl/kusama/2100-subsocialx/2022-12-31.md) | 1,724,527 | 1,772,494 |  |  **BROKEN** (100.00%) | 468 | 23 |  | - | 
| [2022-11-01 to 2022-11-12](/substrate-etl/kusama/2100-subsocialx/2022-11-30.md) | 1,507,933 | 1,587,771 |  |  **BROKEN** (100.00%) | 1,552 |  |  | - | 
| [2022-10-01 to 2022-10-31](/substrate-etl/kusama/2100-subsocialx/2022-10-31.md) | 1,293,052 | 1,507,932 |  | 214,881 (100.00%) | 2,129 |  | 33,976 | - | 
| [2022-09-01 to 2022-09-30](/substrate-etl/kusama/2100-subsocialx/2022-09-30.md) | 1,095,994 | 1,293,051 |  | 197,058 (100.00%) | 1,984 | 26 | 33,870 | - | 
| [2022-08-01 to 2022-08-31](/substrate-etl/kusama/2100-subsocialx/2022-08-31.md) | 915,848 | 1,095,993 |  | 180,146 (100.00%) | 479 | 7 | 33,757 | - | 
| [2022-07-01 to 2022-07-31](/substrate-etl/kusama/2100-subsocialx/2022-07-31.md) | 758,174 | 915,847 |  | 157,674 (100.00%) | 406 | 8 | 33,747 | - | 
| [2022-06-01 to 2022-06-30](/substrate-etl/kusama/2100-subsocialx/2022-06-30.md) | 569,593 | 758,173 |  | 188,581 (100.00%) | 253 | 5 | 33,747 | - | 
| [2022-05-01 to 2022-05-31](/substrate-etl/kusama/2100-subsocialx/2022-05-31.md) | 469,374 | 569,591 |  |  **BROKEN** (100.00%) |  |  | 33,745 | - | 
| [2022-04-01 to 2022-04-30](/substrate-etl/kusama/2100-subsocialx/2022-04-30.md) | 308,836 | 389,962 |  |  **BROKEN** (100.00%) | 6,551 | 85 | 33,745 | - | 
| [2022-03-01 to 2022-03-31](/substrate-etl/kusama/2100-subsocialx/2022-03-31.md) | 178,187 | 308,835 | 130,642 | 7 (0.01%) | 611 | 14 | 20,428 | - | 
| [2022-02-01 to 2022-02-28](/substrate-etl/kusama/2100-subsocialx/2022-02-28.md) | 41,996 | 178,186 | 136,191 | none  | 479 | 11 | 12,036 | - | 
| [2022-01-25 to 2022-01-31](/substrate-etl/kusama/2100-subsocialx/2022-01-31.md) | 1 | 41,995 | 41,995 | none  |  |  | 3 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.kusama.blocks2100` group by monthDT order by monthDT desc```

