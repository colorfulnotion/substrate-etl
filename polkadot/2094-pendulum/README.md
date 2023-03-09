# Pendulum substrate-etl Summary (Monthly)

_Source_: [pendulum.polkaholic.io](https://pendulum.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2094



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-03-01 to 2023-03-09](/polkadot/2094-pendulum/2023-03-31.md) | 82,548 | 145,935 | 63,388 | 346 | 15 | 154 | -   |   
| [2023-02-13 to 2023-02-28](/polkadot/2094-pendulum/2023-02-28.md) | 1 | 82,547 | 82,547 | 95 | 8 | 85 | -   |   

## Pendulum Assets as of 2023-03-06



| Symbol | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID | 
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | --- |
| [PEN](/polkadot/assets/PEN) | 122 | 160,000,436.26  |   | 105,811,516.01   | 848,269.1  |  |   `{"Token":"PEN"}` | 

## substrate-etl Tables:

* _Blocks_: `substrate-etl.polkadot.blocks2094` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.polkadot.extrinsics2094` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.polkadot.events2094` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.polkadot.transfers2094` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.polkadot.balances2094` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.polkadot.accountsactive2094` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.polkadot.accountspassive2094` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.polkadot.accountsnew2094` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.polkadot.accountsreaped2094` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.polkadot.assets` (filter on `2094`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.polkadot.blocks2094` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2094.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2094.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
