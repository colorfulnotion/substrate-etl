# Kapex substrate-etl Summary (Monthly)

_Source_: [kapex.polkaholic.io](https://kapex.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2007
Status: Only partial index available: Onboarding


| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-13](/polkadot/2007-kapex/2023-02-28.md) | 975,590 | 1,068,185 | 45,372 | 47,224 (51.00%) | 1 |  | 1,054 | - | 
| [2023-01-01 to 2023-01-31](/polkadot/2007-kapex/2023-01-31.md) | 755,417 | 975,589 | 124,996 | 95,177 (43.23%) | 23 |  | 1,052 | - | 
| [2022-12-01 to 2022-12-31](/polkadot/2007-kapex/2022-12-31.md) | 536,184 | 755,416 | 54,850 | 164,383 (74.98%) |  |  | 3 | - | 
| [2022-11-01 to 2022-11-30](/polkadot/2007-kapex/2022-11-30.md) | 322,459 | 536,183 | 213,599 | 126 (0.06%) |  |  | 3 | - | 
| [2022-10-01 to 2022-10-31](/polkadot/2007-kapex/2022-10-31.md) | 236,762 | 322,458 | 37,274 | 48,423 (56.51%) |  |  | 3 | - | 
| [2022-09-16 to 2022-09-30](/polkadot/2007-kapex/2022-09-30.md) |  |  |  |  **BROKEN**  |  |  | 3 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.polkadot.blocks2007` group by monthDT order by monthDT desc```

