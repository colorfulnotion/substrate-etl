# Collectives substrate-etl Summary (Monthly)

_Source_: [collectives.polkaholic.io](https://collectives.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 1001



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-03-01 to 2023-03-19](/polkadot/1001-collectives/2023-03-31.md) | 709,673 | 831,318 | 121,105 |  | 4 | 11 | - 541 (0.44%) |   
| [2023-02-01 to 2023-02-28](/polkadot/1001-collectives/2023-02-28.md) | 510,350 | 709,672 | 199,323 | 2 | 4 | 11 | -   |   
| [2023-01-01 to 2023-01-31](/polkadot/1001-collectives/2023-01-31.md) | 289,061 | 510,349 | 221,289 | 2 | 4 | 10 | -   |   
| [2022-12-01 to 2022-12-31](/polkadot/1001-collectives/2022-12-31.md) | 68,033 | 289,060 | 221,028 | 16 | 4 | 10 | -   |   
| [2022-11-21 to 2022-11-30](/polkadot/1001-collectives/2022-11-30.md) | 1 | 68,032 | 68,032 | 2 | 4 | 4 | -   |   

## Collectives Assets as of 2023-03-16



| Symbol | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID | 
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | --- |
| [DOT](/polkadot/assets/DOT) | 11 | 34.25 $209.33 | 0.4 $2.45 |    |   | $6.11 |   `{"Token":"DOT"}` | 

## substrate-etl Tables:

* _Blocks_: `substrate-etl.polkadot.blocks1001` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.polkadot.extrinsics1001` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.polkadot.events1001` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.polkadot.transfers1001` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.polkadot.balances1001` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.polkadot.accountsactive1001` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.polkadot.accountspassive1001` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.polkadot.accountsnew1001` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.polkadot.accountsreaped1001` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.polkadot.assets` (filter on `1001`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.polkadot.blocks1001` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/1001.json](https://cdn.polkaholic.io/substrate-etl/polkadot/1001.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
