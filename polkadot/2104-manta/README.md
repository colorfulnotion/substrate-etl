# Manta substrate-etl Summary (Monthly)

_Source_: [manta.polkaholic.io](https://manta.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2104
Status: Onboarding


| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-05-01 to 2023-05-16](/polkadot/2104-manta/2023-05-31.md) | 281,525 | 386,751 | 105,227 | 4 |  | 9 | -   |   
| [2023-04-01 to 2023-04-30](/polkadot/2104-manta/2023-04-30.md) | 70,511 | 281,524 | 211,014 | 7 |  | 9 | -   |   
| [2023-03-21 to 2023-03-31](/polkadot/2104-manta/2023-03-31.md) | 1 | 70,510 | 41,807 |  |  | 9 | - 28,703 (40.71%) |   

## substrate-etl Tables:

* _Blocks_: `substrate-etl.crypto_polkadot.blocks2104` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.crypto_polkadot.extrinsics2104` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.crypto_polkadot.events2104` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.crypto_polkadot.transfers2104` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.crypto_polkadot.balances2104` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.crypto_polkadot.accountsactive2104` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.crypto_polkadot.accountspassive2104` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.crypto_polkadot.accountsnew2104` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.crypto_polkadot.accountsreaped2104` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.crypto_polkadot.assets` (filter on `2104`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.crypto_polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.crypto_polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.crypto_polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.crypto_polkadot.blocks2104` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2104.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2104.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
