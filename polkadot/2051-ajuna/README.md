# Ajuna substrate-etl Summary (Monthly)

_Source_: [ajuna.polkaholic.io](https://ajuna.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2051



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-05-01 to 2023-05-16](/polkadot/2051-ajuna/2023-05-31.md) | 1,095,067 | 1,209,123 | 114,057 |  | 3 | 9 | -   |   
| [2023-04-01 to 2023-04-30](/polkadot/2051-ajuna/2023-04-30.md) | 880,587 | 1,095,066 | 214,480 |  | 4 | 9 | -   |   
| [2023-03-01 to 2023-03-31](/polkadot/2051-ajuna/2023-03-31.md) | 678,772 | 880,586 | 201,815 |  | 4 | 9 | -   |   
| [2023-02-01 to 2023-02-28](/polkadot/2051-ajuna/2023-02-28.md) | 486,290 | 678,771 | 192,482 | 2 | 4 | 9 | -   |   
| [2023-01-01 to 2023-01-31](/polkadot/2051-ajuna/2023-01-31.md) | 277,227 | 486,289 | 209,063 | 3 | 4 | 7 | -   |   
| [2022-12-01 to 2022-12-31](/polkadot/2051-ajuna/2022-12-31.md) | 65,407 | 277,226 | 211,820 |  | 4 | 6 | -   |   
| [2022-11-21 to 2022-11-30](/polkadot/2051-ajuna/2022-11-30.md) | 1 | 65,406 | 65,406 | 9 | 4 | 6 | -   |   

## substrate-etl Tables:

* _Blocks_: `substrate-etl.crypto_polkadot.blocks2051` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.crypto_polkadot.extrinsics2051` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.crypto_polkadot.events2051` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.crypto_polkadot.transfers2051` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.crypto_polkadot.balances2051` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.crypto_polkadot.accountsactive2051` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.crypto_polkadot.accountspassive2051` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.crypto_polkadot.accountsnew2051` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.crypto_polkadot.accountsreaped2051` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.crypto_polkadot.assets` (filter on `2051`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.crypto_polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.crypto_polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.crypto_polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.crypto_polkadot.blocks2051` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2051.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2051.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
