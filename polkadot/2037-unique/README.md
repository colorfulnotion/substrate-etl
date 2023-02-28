# Unique substrate-etl Summary (Monthly)

_Source_: [unique.polkaholic.io](https://unique.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2037



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-28](/polkadot/2037-unique/2023-02-28.md) | 1,620,319 | 1,813,409 | 193,091 | 1,608 | 21 | 16,268 | -   |   
| [2023-01-01 to 2023-01-31](/polkadot/2037-unique/2023-01-31.md) | 1,398,225 | 1,620,318 | 222,094 | 1,900 | 23 | 16,134 | -   |   
| [2022-12-01 to 2022-12-31](/polkadot/2037-unique/2022-12-31.md) | 1,177,231 | 1,398,224 | 220,994 | 1,490 |  | 15,991 | -   |   
| [2022-11-01 to 2022-11-30](/polkadot/2037-unique/2022-11-30.md) | 964,016 | 1,177,230 | 213,215 | 1,338 |  | 15,788 | -   |   
| [2022-10-01 to 2022-10-31](/polkadot/2037-unique/2022-10-31.md) | 746,910 | 964,015 | 217,106 | 4,760 |  | 15,593 | -   |   
| [2022-09-01 to 2022-09-30](/polkadot/2037-unique/2022-09-30.md) | 541,838 | 746,909 | 205,072 | 17,423 |  | 14,973 | -   |   
| [2022-08-01 to 2022-08-31](/polkadot/2037-unique/2022-08-31.md) | 334,627 | 541,837 | 207,211 | 2,278 |  | 11,364 | -   |   
| [2022-07-01 to 2022-07-31](/polkadot/2037-unique/2022-07-31.md) | 132,219 | 334,626 | 202,408 | 26,645 |  | 11,250 | -   |   
| [2022-06-04 to 2022-06-30](/polkadot/2037-unique/2022-06-30.md) | 1 | 132,218 | 132,218 | 4 |  | 4 | -   |   

## Unique Assets as of 2023-02-26



| Symbol | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID | 
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | --- |
| [UNQ](/polkadot/assets/UNQ) | 16,216 | 1,041,977,865.47  | 2  | 857,835,018.08   | 857,835,018.08  |  |   `{"Token":"UNQ"}` | 

## substrate-etl Tables:

* _Blocks_: `substrate-etl.polkadot.blocks2037` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.polkadot.extrinsics2037` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.polkadot.events2037` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.polkadot.transfers2037` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.polkadot.balances2037` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.polkadot.accountsactive2037` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.polkadot.accountspassive2037` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.polkadot.accountsnew2037` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.polkadot.accountsreaped2037` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.polkadot.assets` (filter on `2037`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.polkadot.blocks2037` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2037.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2037.json) | See [Definitions](/DEFINITIONS.md) for details
