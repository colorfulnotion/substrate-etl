# Aventus Summary (Monthly)

_Source_: [aventus.polkaholic.io](https://aventus.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2056
Status: Crawling initiated


| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-11-01 to 2023-11-11](/polkadot/2056-aventus/2023-11-30.md) | 2,318,780 | 2,384,578 | 65,799 | 13,383 |  |  | -   |   
| [2023-10-01 to 2023-10-31](/polkadot/2056-aventus/2023-10-31.md) | 2,114,594 | 2,318,779 | 204,186 | 52,080 |  |  | -   |   
| [2023-09-01 to 2023-09-30](/polkadot/2056-aventus/2023-09-30.md) | 1,921,963 | 2,114,593 | 192,631 | 45,363 |  |  | -   |   
| [2023-08-01 to 2023-08-31](/polkadot/2056-aventus/2023-08-31.md) | 1,725,598 | 1,921,962 | 196,365 | 14,802 | 12 |  | -   |   
| [2023-07-01 to 2023-07-31](/polkadot/2056-aventus/2023-07-31.md) | 1,528,135 | 1,725,597 | 197,463 |  |  |  | -   |   
| [2023-06-23 to 2023-06-30](/polkadot/2056-aventus/2023-06-30.md) | 1,477,792 | 1,528,134 | 50,235 |  |  |  | - 108 (0.21%) |   

## Tables:

* _Blocks_: `bigquery-public-data.crypto_polkadot.blocks2056` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `bigquery-public-data.crypto_polkadot.extrinsics2056` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `bigquery-public-data.crypto_polkadot.events2056` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `bigquery-public-data.crypto_polkadot.transfers2056` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `bigquery-public-data.crypto_polkadot.balances2056` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `bigquery-public-data.crypto_polkadot.accountsactive2056` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `bigquery-public-data.crypto_polkadot.accountspassive2056` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `bigquery-public-data.crypto_polkadot.accountsnew2056` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `bigquery-public-data.crypto_polkadot.accountsreaped2056` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `bigquery-public-data.crypto_polkadot.assets` (filter on `2056`) - [Schema](/schema/assets.json)
* _XCM Assets_: `bigquery-public-data.crypto_polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `bigquery-public-data.crypto_polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `bigquery-public-data.crypto_polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `bigquery-public-data.crypto_polkadot.blocks2056` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2056.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2056.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
