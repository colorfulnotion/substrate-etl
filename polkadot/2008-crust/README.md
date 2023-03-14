# Crust substrate-etl Summary (Monthly)

_Source_: [crust.polkaholic.io](https://crust.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2008



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-03-01 to 2023-03-14](/polkadot/2008-crust/2023-03-31.md) | 701,814 | 791,193 | 89,380 | 10 | 4 | 991 | -   |   
| [2023-02-01 to 2023-02-28](/polkadot/2008-crust/2023-02-28.md) | 504,230 | 701,813 | 197,584 | 25 | 3 | 990 | -   |   
| [2023-01-01 to 2023-01-31](/polkadot/2008-crust/2023-01-31.md) | 285,366 | 504,229 | 218,864 |  |  | 974 | -   |   
| [2022-12-01 to 2022-12-31](/polkadot/2008-crust/2022-12-31.md) | 67,183 | 285,365 | 218,183 |  |  | 9 | -   |   
| [2022-11-21 to 2022-11-30](/polkadot/2008-crust/2022-11-30.md) | 1 | 67,182 | 67,182 |  |  | 9 | -   |   
| [2022-10-26 to 2022-10-26](/polkadot/2008-crust/2022-10-31.md) | 288,820 | 289,071 | 252 |  |  |  | -   |   

## Crust Assets as of 2023-03-13



| Symbol | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID | 
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | --- |
| [CRU](/polkadot/assets/CRU) | 991 | 46,119.46  | 91.71  | 2,125.7   | 2,000  |  |   `{"Token":"CRU"}` | 

## substrate-etl Tables:

* _Blocks_: `substrate-etl.polkadot.blocks2008` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.polkadot.extrinsics2008` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.polkadot.events2008` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.polkadot.transfers2008` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.polkadot.balances2008` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.polkadot.accountsactive2008` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.polkadot.accountspassive2008` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.polkadot.accountsnew2008` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.polkadot.accountsreaped2008` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.polkadot.assets` (filter on `2008`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.polkadot.blocks2008` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2008.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2008.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
