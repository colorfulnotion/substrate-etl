# DAO IPCI substrate-etl Summary (Monthly)

_Source_: [daoipci.polkaholic.io](https://daoipci.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2222



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-03-01 to 2023-03-17](/kusama/2222-daoipci/2023-03-31.md) | 805,699 | 924,474 | 117,768 | 10 |  | 891 | - 1,008 (0.85%) |   
| [2023-02-01 to 2023-02-28](/kusama/2222-daoipci/2023-02-28.md) | 606,518 | 805,698 | 199,181 | 58 | 1 | 890 | -   |   
| [2023-01-09 to 2023-01-31](/kusama/2222-daoipci/2023-01-31.md) | 447,086 | 606,517 | 159,432 | 2 |  | 890 | -   |   
| [2022-12-01 to 2022-12-13](/kusama/2222-daoipci/2022-12-31.md) | 365,650 | 447,085 | 81,436 | 10 |  | 890 | -   |   
| [2022-11-01 to 2022-11-30](/kusama/2222-daoipci/2022-11-30.md) | 153,070 | 365,649 | 212,580 | 82 | 1 | 890 | -   |   
| [2022-10-10 to 2022-10-31](/kusama/2222-daoipci/2022-10-31.md) | 1 | 153,069 | 153,069 | 18 | 1 | 885 | -   |   

## DAO IPCI Assets as of 2023-03-16



| Symbol | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID | 
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | --- |
| [MITO](/kusama/assets/MITO) | 891 | 9,940,824.23  | 1,070.95  | 1   |   |  |   `{"Token":"MITO"}` | 

## substrate-etl Tables:

* _Blocks_: `substrate-etl.kusama.blocks2222` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.kusama.extrinsics2222` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.kusama.events2222` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.kusama.transfers2222` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.kusama.balances2222` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.kusama.accountsactive2222` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.kusama.accountspassive2222` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.kusama.accountsnew2222` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.kusama.accountsreaped2222` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.kusama.assets` (filter on `2222`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.kusama.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.kusama.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.kusama.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.kusama.blocks2222` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2222.json](https://cdn.polkaholic.io/substrate-etl/kusama/2222.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
