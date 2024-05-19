# Watr Network Summary (Monthly)

_Source_: [watr.polkaholic.io](https://watr.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2058



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2024-05-01 to 2024-05-18](/polkadot/2058-watr/2024-05-31.md) | 1,338,244 | 1,466,592 | 121,217 |  |  | 74 | - 7,132 (5.56%) |   
| [2024-04-01 to 2024-04-30](/polkadot/2058-watr/2024-04-30.md) | 1,124,297 | 1,338,243 | 68,656 |  |  | 74 | - 145,291 (67.91%) |   
| [2024-03-26 to 2024-03-31](/polkadot/2058-watr/2024-03-31.md) | 1,081,395 | 1,124,296 |  |  |  | 74 | - 42,902 (100.00%) |   
| [2023-04-01 to 2023-04-18](/polkadot/2058-watr/2023-04-30.md) | 122,277 | 247,348 | 125,072 |  |  | 9 | -  **BROKEN**  |   
| [2023-03-14 to 2023-03-31](/polkadot/2058-watr/2023-03-31.md) | 1 | 122,276 | 121,034 |  |  | 9 | - 1,242 (1.02%) |   
| [2023-02-22 to 2023-02-22](/polkadot/2058-watr/2023-02-28.md) |  |  |  |  |  |  | -   |   

## Tables:

* _Blocks_: `bigquery-public-data.crypto_polkadot.blocks2058` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `bigquery-public-data.crypto_polkadot.extrinsics2058` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `bigquery-public-data.crypto_polkadot.events2058` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `bigquery-public-data.crypto_polkadot.transfers2058` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `bigquery-public-data.crypto_polkadot.balances2058` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `bigquery-public-data.crypto_polkadot.accountsactive2058` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `bigquery-public-data.crypto_polkadot.accountspassive2058` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `bigquery-public-data.crypto_polkadot.accountsnew2058` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `bigquery-public-data.crypto_polkadot.accountsreaped2058` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `bigquery-public-data.crypto_polkadot.assets` (filter on `2058`) - [Schema](/schema/assets.json)
* _XCM Assets_: `bigquery-public-data.crypto_polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `bigquery-public-data.crypto_polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `bigquery-public-data.crypto_polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `bigquery-public-data.crypto_polkadot.blocks2058` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2058.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2058.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
