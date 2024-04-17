# Energy Web X Summary (Monthly)

_Source_: [energywebx.polkaholic.io](https://energywebx.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 3345



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2024-04-01 to 2024-04-16](/polkadot/3345-energywebx/2024-04-30.md) | 1,136,580 | 1,243,391 | 106,812 | 1,862 |  | 1,080 | -   |   
| [2024-03-26 to 2024-03-31](/polkadot/3345-energywebx/2024-03-31.md) | 1,093,816 | 1,136,579 | 42,764 | 2,110 |  | 984 | -   |   
| [2024-01-01 to 2024-01-29](/polkadot/3345-energywebx/2024-01-31.md) | 539,535 | 689,326 | 149,792 | 303 |  | 587 | -  **BROKEN**  |   
| [2023-12-01 to 2023-12-31](/polkadot/3345-energywebx/2023-12-31.md) | 290,691 | 454,334 | 21,372 |  |  | 425 | -  **BROKEN** (86.94%) |   
| [2023-11-01 to 2023-11-30](/polkadot/3345-energywebx/2023-11-30.md) | 55,088 | 62,266 | 7,179 |  |  | 1 | -  **BROKEN**  |   
| [2023-10-24 to 2023-10-31](/polkadot/3345-energywebx/2023-10-31.md) | 40,729 | 47,904 | 7,176 |  |  | 1 | -  **BROKEN**  |   

## Tables:

* _Blocks_: `bigquery-public-data.crypto_polkadot.blocks3345` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `bigquery-public-data.crypto_polkadot.extrinsics3345` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `bigquery-public-data.crypto_polkadot.events3345` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `bigquery-public-data.crypto_polkadot.transfers3345` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `bigquery-public-data.crypto_polkadot.balances3345` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `bigquery-public-data.crypto_polkadot.accountsactive3345` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `bigquery-public-data.crypto_polkadot.accountspassive3345` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `bigquery-public-data.crypto_polkadot.accountsnew3345` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `bigquery-public-data.crypto_polkadot.accountsreaped3345` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `bigquery-public-data.crypto_polkadot.assets` (filter on `3345`) - [Schema](/schema/assets.json)
* _XCM Assets_: `bigquery-public-data.crypto_polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `bigquery-public-data.crypto_polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `bigquery-public-data.crypto_polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `bigquery-public-data.crypto_polkadot.blocks3345` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/3345.json](https://cdn.polkaholic.io/substrate-etl/polkadot/3345.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
