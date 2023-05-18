# Hashed Network substrate-etl Summary (Monthly)

_Source_: [hashed.polkaholic.io](https://hashed.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2093
Status: Only partial index available: Archive node unavailable


| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-05-01 to 2023-05-17](/polkadot/2093-hashed/2023-05-31.md) | 441,716 | 563,149 | 121,434 | 30 |  | 573 | -   |   
| [2023-04-01 to 2023-04-30](/polkadot/2093-hashed/2023-04-30.md) | 231,213 | 441,715 | 210,500 | 113 |  | 571 | - 3 (0.00%) |   
| [2023-03-01 to 2023-03-31](/polkadot/2093-hashed/2023-03-31.md) | 17,638 | 231,212 | 213,334 | 766 |  | 571 | - 241 (0.11%) |   
| [2023-02-28 to 2023-02-28](/polkadot/2093-hashed/2023-02-28.md) | 15,878 | 17,637 | 1,760 |  |  | 7 | -   |   

## substrate-etl Tables:

* _Blocks_: `substrate-etl.crypto_polkadot.blocks2093` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.crypto_polkadot.extrinsics2093` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.crypto_polkadot.events2093` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.crypto_polkadot.transfers2093` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.crypto_polkadot.balances2093` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.crypto_polkadot.accountsactive2093` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.crypto_polkadot.accountspassive2093` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.crypto_polkadot.accountsnew2093` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.crypto_polkadot.accountsreaped2093` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.crypto_polkadot.assets` (filter on `2093`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.crypto_polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.crypto_polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.crypto_polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.crypto_polkadot.blocks2093` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2093.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2093.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
