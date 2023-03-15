# Kapex substrate-etl Summary (Monthly)

_Source_: [kapex.polkaholic.io](https://kapex.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2007



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-03-01 to 2023-03-14](/polkadot/2007-kapex/2023-03-31.md) | 1,174,733 | 1,267,237 | 92,267 | 1 | 2 | 1,055 | - 238 (0.26%) |   
| [2023-02-01 to 2023-02-28](/polkadot/2007-kapex/2023-02-28.md) | 975,590 | 1,174,732 | 199,143 | 8 | 2 | 1,054 | -   |   
| [2023-01-01 to 2023-01-31](/polkadot/2007-kapex/2023-01-31.md) | 755,417 | 975,589 | 220,173 | 54 | 3 | 1,052 | -   |   
| [2022-12-01 to 2022-12-31](/polkadot/2007-kapex/2022-12-31.md) | 536,184 | 755,416 | 219,233 |  | 2 | 3 | -   |   
| [2022-11-01 to 2022-11-30](/polkadot/2007-kapex/2022-11-30.md) | 322,459 | 536,183 | 213,725 |  | 2 | 3 | -   |   
| [2022-10-01 to 2022-10-31](/polkadot/2007-kapex/2022-10-31.md) | 101,902 | 322,458 | 220,557 |  | 2 | 3 | -   |   
| [2022-09-16 to 2022-09-30](/polkadot/2007-kapex/2022-09-30.md) | 1 | 101,901 | 101,901 |  | 2 | 3 | -   |   

## Kapex Assets as of 2023-03-13



| Symbol | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID | 
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | --- |
| [KPX](/polkadot/assets/KPX) | 1,055 | 2,581,818  |   |    |   |  |   `{"Token":"KPX"}` | 

## substrate-etl Tables:

* _Blocks_: `substrate-etl.polkadot.blocks2007` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.polkadot.extrinsics2007` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.polkadot.events2007` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.polkadot.transfers2007` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.polkadot.balances2007` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.polkadot.accountsactive2007` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.polkadot.accountspassive2007` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.polkadot.accountsnew2007` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.polkadot.accountsreaped2007` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.polkadot.assets` (filter on `2007`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.polkadot.blocks2007` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2007.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2007.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
