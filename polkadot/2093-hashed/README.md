# Hashed Network substrate-etl Summary (Monthly)

_Source_: [hashed.polkaholic.io](https://hashed.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2093
Status: Only partial index available: Archive node unavailable


| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-03-01 to 2023-03-17](/polkadot/2093-hashed/2023-03-31.md) | 17,638 | 130,131 | 112,494 | 577 |  | 544 | -   |   
| [2023-02-28 to 2023-02-28](/polkadot/2093-hashed/2023-02-28.md) | 15,878 | 17,637 | 1,760 |  |  | 7 | -   |   

## substrate-etl Tables:

* _Blocks_: `substrate-etl.polkadot.blocks2093` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.polkadot.extrinsics2093` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.polkadot.events2093` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.polkadot.transfers2093` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.polkadot.balances2093` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.polkadot.accountsactive2093` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.polkadot.accountspassive2093` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.polkadot.accountsnew2093` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.polkadot.accountsreaped2093` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.polkadot.assets` (filter on `2093`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.polkadot.blocks2093` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2093.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2093.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
