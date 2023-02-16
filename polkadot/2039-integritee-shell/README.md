# Integritee Shell substrate-etl Summary (Monthly)

_Source_: [integritee-shell.polkaholic.io](https://integritee-shell.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2039



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-16](/polkadot/2039-integritee-shell/2023-02-28.md) | 940,640 | 1,031,121 | 90,482 | none  |  |  | 1 | - | 
| [2023-01-01 to 2023-01-31](/polkadot/2039-integritee-shell/2023-01-31.md) | 762,241 | 940,639 | 178,399 | none  |  |  | 1 | - | 
| [2022-12-01 to 2022-12-31](/polkadot/2039-integritee-shell/2022-12-31.md) | 583,908 | 762,240 | 178,333 | none  |  |  | 1 | - | 
| [2022-11-01 to 2022-11-30](/polkadot/2039-integritee-shell/2022-11-30.md) | 411,484 | 583,907 | 172,424 | none  |  |  | 1 | - | 
| [2022-10-01 to 2022-10-31](/polkadot/2039-integritee-shell/2022-10-31.md) | 229,398 | 411,483 | 182,086 | none  |  |  | 1 | - | 
| [2022-09-01 to 2022-09-30](/polkadot/2039-integritee-shell/2022-09-30.md) | 18,693 | 229,397 | 210,705 | none  |  |  | 1 | - | 
| [2022-08-29 to 2022-08-31](/polkadot/2039-integritee-shell/2022-08-31.md) | 1 | 18,692 | 18,692 | none  |  |  | 1 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.polkadot.blocks2039` group by monthDT order by monthDT desc```

