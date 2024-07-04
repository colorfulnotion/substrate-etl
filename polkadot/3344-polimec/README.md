# polimec Summary (Monthly)

_Source_: [polimec.polkaholic.io](https://polimec.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 3344



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2024-07-01 to 2024-07-04](/polkadot/3344-polimec/2024-07-31.md) | 1,521,376 | 1,542,476 | 21,101 | 1,468 |  | 1,766 | -   |   
| [2024-06-01 to 2024-06-30](/polkadot/3344-polimec/2024-06-30.md) | 1,309,608 | 1,521,375 | 190,395 | 14,069 |  | 1,749 | - 21,373 (10.09%) |   
| [2024-05-01 to 2024-05-31](/polkadot/3344-polimec/2024-05-31.md) | 1,088,619 | 1,309,607 | 206,718 | 8,536 |  | 1,004 | - 14,271 (6.46%) |   
| [2024-04-01 to 2024-04-30](/polkadot/3344-polimec/2024-04-30.md) | 876,351 | 1,088,618 | 212,268 | 1,024 |  | 899 | -   |   
| [2024-03-01 to 2024-03-31](/polkadot/3344-polimec/2024-03-31.md) | 655,072 | 876,350 | 221,279 | 1,438 |  | 748 | -   |   
| [2024-02-01 to 2024-02-29](/polkadot/3344-polimec/2024-02-29.md) | 448,116 | 655,071 | 206,956 | 201 |  | 540 | -   |   
| [2024-01-01 to 2024-01-31](/polkadot/3344-polimec/2024-01-31.md) | 230,205 | 448,115 | 217,911 | 936 |  | 540 | -   |   
| [2023-12-01 to 2023-12-31](/polkadot/3344-polimec/2023-12-31.md) | 9,634 | 230,204 | 220,571 | 8 |  | 3 | -   |   
| [2023-11-29 to 2023-11-30](/polkadot/3344-polimec/2023-11-30.md) | 1 | 9,633 | 9,633 |  |  | 2 | -   |   

## Tables:

* _Blocks_: `bigquery-public-data.crypto_polkadot.blocks3344` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `bigquery-public-data.crypto_polkadot.extrinsics3344` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `bigquery-public-data.crypto_polkadot.events3344` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `bigquery-public-data.crypto_polkadot.transfers3344` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `bigquery-public-data.crypto_polkadot.balances3344` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `bigquery-public-data.crypto_polkadot.accountsactive3344` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `bigquery-public-data.crypto_polkadot.accountspassive3344` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `bigquery-public-data.crypto_polkadot.accountsnew3344` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `bigquery-public-data.crypto_polkadot.accountsreaped3344` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `bigquery-public-data.crypto_polkadot.assets` (filter on `3344`) - [Schema](/schema/assets.json)
* _XCM Assets_: `bigquery-public-data.crypto_polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `bigquery-public-data.crypto_polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `bigquery-public-data.crypto_polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `bigquery-public-data.crypto_polkadot.blocks3344` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/3344.json](https://cdn.polkaholic.io/substrate-etl/polkadot/3344.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
