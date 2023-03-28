# T3rn substrate-etl Summary (Monthly)

_Source_: [t3rn.polkaholic.io](https://t3rn.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 3333
Status: Onboarding


| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-03-07 to 2023-03-27](/polkadot/3333-t3rn/2023-03-31.md) | 1 | 141,055 | 126,942 |  | 2 | 2 | - 14,113 (10.01%) |   

## substrate-etl Tables:

* _Blocks_: `substrate-etl.polkadot.blocks3333` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.polkadot.extrinsics3333` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.polkadot.events3333` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.polkadot.transfers3333` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.polkadot.balances3333` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.polkadot.accountsactive3333` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.polkadot.accountspassive3333` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.polkadot.accountsnew3333` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.polkadot.accountsreaped3333` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.polkadot.assets` (filter on `3333`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.polkadot.blocks3333` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/3333.json](https://cdn.polkaholic.io/substrate-etl/polkadot/3333.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)