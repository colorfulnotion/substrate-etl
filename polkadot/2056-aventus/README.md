# Aventus Summary (Monthly)

_Source_: [aventus.polkaholic.io](https://aventus.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2056
Status: Crawling initiated


| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2024-03-01 to 2024-03-03](/polkadot/2056-aventus/2024-03-31.md) | 3,102,181 | 3,115,127 | 12,947 | 4,935 |  |  | -   |   
| [2024-02-01 to 2024-02-29](/polkadot/2056-aventus/2024-02-29.md) | 2,915,672 | 3,102,180 | 186,509 | 54,961 |  |  | -   |   
| [2024-01-01 to 2024-01-31](/polkadot/2056-aventus/2024-01-31.md) | 2,716,797 | 2,915,671 | 198,875 | 52,238 |  |  | -   |   
| [2023-12-01 to 2023-12-31](/polkadot/2056-aventus/2023-12-31.md) | 2,516,299 | 2,716,796 | 200,498 | 2,086 |  |  | -   |   
| [2023-11-01 to 2023-11-30](/polkadot/2056-aventus/2023-11-30.md) | 2,318,780 | 2,516,298 | 197,519 | 20,237 |  |  | -   |   
| [2023-10-01 to 2023-10-31](/polkadot/2056-aventus/2023-10-31.md) | 2,114,594 | 2,318,779 | 204,186 | 52,080 |  |  | -   |   
| [2023-09-01 to 2023-09-30](/polkadot/2056-aventus/2023-09-30.md) | 1,921,963 | 2,114,593 | 192,631 | 45,363 |  |  | -   |   
| [2023-08-01 to 2023-08-31](/polkadot/2056-aventus/2023-08-31.md) | 1,725,598 | 1,921,962 | 196,365 | 14,802 | 12 |  | -   |   
| [2023-07-01 to 2023-07-31](/polkadot/2056-aventus/2023-07-31.md) | 1,528,135 | 1,725,597 | 197,463 |  |  |  | -   |   
| [2023-06-01 to 2023-06-30](/polkadot/2056-aventus/2023-06-30.md) | 1,409,190 | 1,528,134 | 62,696 |  |  |  | - 56,249 (47.29%) |   
| [2023-05-01 to 2023-05-31](/polkadot/2056-aventus/2023-05-31.md) | 1,223,058 | 1,303,034 | 24,400 |  |  |  | -  **BROKEN** (69.49%) |   
| [2023-04-01 to 2023-04-30](/polkadot/2056-aventus/2023-04-30.md) | 1,023,076 | 1,067,157 | 10,987 |  |  |  | -  **BROKEN** (75.08%) |   
| [2023-03-29 to 2023-03-31](/polkadot/2056-aventus/2023-03-31.md) |  |  |  |  |  |  | -  **BROKEN**  |   

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
