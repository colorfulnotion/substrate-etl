# HydraDX substrate-etl Summary (Monthly)

_Source_: [hydradx.polkaholic.io](https://hydradx.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2034



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-16](/polkadot/2034-hydradx/2023-02-28.md) | 1,868,702 | 1,968,180 | 99,479 | none  | 7,907 | 127 | 23,266 | - | 
| [2023-01-01 to 2023-01-31](/polkadot/2034-hydradx/2023-01-31.md) | 1,672,353 | 1,868,701 | 196,349 | none  | 33,155 | 202 | 23,205 | - | 
| [2022-12-01 to 2022-12-31](/polkadot/2034-hydradx/2022-12-31.md) | 1,483,335 | 1,672,352 | 189,018 | none  | 1,135 | 22 | 22,542 | - | 
| [2022-11-01 to 2022-11-30](/polkadot/2034-hydradx/2022-11-30.md) | 1,326,016 | 1,483,334 | 157,319 | none  | 1,154 | 20 | 22,421 | - | 
| [2022-10-01 to 2022-10-31](/polkadot/2034-hydradx/2022-10-31.md) | 1,158,699 | 1,326,015 | 167,317 | none  | 309 | 7 | 21,155 | - | 
| [2022-09-01 to 2022-09-30](/polkadot/2034-hydradx/2022-09-30.md) | 997,422 | 1,158,698 | 161,277 | none  | 198 | 4 | 21,147 | - | 
| [2022-08-01 to 2022-08-31](/polkadot/2034-hydradx/2022-08-31.md) | 829,196 | 997,421 | 168,226 | none  | 241 | 5 | 21,139 | - | 
| [2022-07-01 to 2022-07-31](/polkadot/2034-hydradx/2022-07-31.md) | 658,260 | 829,195 | 170,936 | none  | 508 | 11 | 21,131 | - | 
| [2022-06-01 to 2022-06-30](/polkadot/2034-hydradx/2022-06-30.md) | 475,506 | 658,259 | 182,754 | none  | 5 |  | 32 | - | 
| [2022-05-01 to 2022-05-31](/polkadot/2034-hydradx/2022-05-31.md) | 288,657 | 475,505 | 186,849 | none  | 7 |  | 32 | - | 
| [2022-04-01 to 2022-04-30](/polkadot/2034-hydradx/2022-04-30.md) | 99,601 | 288,656 | 189,056 | none  | 28 | 1 | 32 | - | 
| [2022-03-12 to 2022-03-31](/polkadot/2034-hydradx/2022-03-31.md) | 1 | 99,600 | 99,600 | none  | 30 | 1 | 28 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.polkadot.blocks2034` group by monthDT order by monthDT desc```

