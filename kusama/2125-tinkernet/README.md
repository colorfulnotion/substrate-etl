# InvArch Tinkernet substrate-etl Summary (Monthly)

_Source_: [tinkernet.polkaholic.io](https://tinkernet.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2125



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-25](/kusama/2125-tinkernet/2023-02-28.md) | 1,097,041 | 1,249,753 | 152,713 | 5,623 | 169 | 8,055 | -   |   
| [2023-01-01 to 2023-01-31](/kusama/2125-tinkernet/2023-01-31.md) | 900,714 | 1,097,040 | 196,327 | 1,015 | 29 | 1,861 | -   |   
| [2022-12-01 to 2022-12-31](/kusama/2125-tinkernet/2022-12-31.md) | 710,911 | 900,713 | 189,803 | 544 |  | 1,808 | -   |   
| [2022-11-01 to 2022-11-30](/kusama/2125-tinkernet/2022-11-30.md) | 515,885 | 710,910 | 195,026 | 651 |  | 1,793 | -   |   
| [2022-10-01 to 2022-10-31](/kusama/2125-tinkernet/2022-10-31.md) | 299,895 | 515,884 | 215,990 | 2,107 |  | 1,783 | -   |   
| [2022-09-01 to 2022-09-30](/kusama/2125-tinkernet/2022-09-30.md) | 135,276 | 299,894 | 164,619 | 272 |  | 1,206 | -   |   
| [2022-08-08 to 2022-08-31](/kusama/2125-tinkernet/2022-08-31.md) | 1 | 135,275 | 135,275 | 391 |  | 1,189 | -   |   

## InvArch Tinkernet Assets as of 2023-02-24



| Symbol | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID | 
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | --- |
| [TNKR](/kusama/assets/TNKR) | 7,757 | 11,684,930.75  | 15,065  | 2,016,795.12   | 2,016,795.12  |  |   `{"Token":"TNKR"}` | 

## substrate-etl Tables:

* _Blocks_: `substrate-etl.kusama.blocks2125` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.kusama.extrinsics2125` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.kusama.events2125` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.kusama.transfers2125` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.kusama.balances2125` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.kusama.accountsactive2125` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.kusama.accountspassive2125` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.kusama.accountsnew2125` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.kusama.accountsreaped2125` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.kusama.assets` (filter on `2125`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.kusama.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.kusama.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.kusama.blocks2125` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2125.json](https://cdn.polkaholic.io/substrate-etl/kusama/2125.json) | See [Definitions](/DEFINITIONS.md) for details
