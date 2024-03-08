# Hashed Network Summary (Monthly)

_Source_: [hashed.polkaholic.io](https://hashed.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2093
Status: Only partial index available: Archive node unavailable


| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2024-03-01 to 2024-03-07](/polkadot/2093-hashed/2024-03-31.md) | 2,612,041 | 2,661,834 | 49,793 | 49 |  |  | - 1 (0.00%) |   
| [2024-02-01 to 2024-02-29](/polkadot/2093-hashed/2024-02-29.md) | 2,405,401 | 2,612,040 | 199,515 | 155 |  |  | - 7,125 (3.45%) |   
| [2024-01-01 to 2024-01-31](/polkadot/2093-hashed/2024-01-31.md) | 2,185,089 | 2,405,400 | 220,265 | 187 |  |  | - 47 (0.02%) |   
| [2023-12-01 to 2023-12-31](/polkadot/2093-hashed/2023-12-31.md) | 1,972,411 | 2,185,088 | 209,332 | 22 |  |  | - 3,346 (1.57%) |   
| [2023-11-01 to 2023-11-30](/polkadot/2093-hashed/2023-11-30.md) | 1,757,745 | 1,972,410 | 214,666 | 88 |  |  | -   |   
| [2023-10-01 to 2023-10-31](/polkadot/2093-hashed/2023-10-31.md) | 1,536,017 | 1,757,744 | 220,024 | 60 |  |  | - 1,704 (0.77%) |   
| [2023-09-01 to 2023-09-30](/polkadot/2093-hashed/2023-09-30.md) | 1,321,850 | 1,536,016 | 214,034 | 69 |  | 586 | - 133 (0.06%) |   
| [2023-08-01 to 2023-08-31](/polkadot/2093-hashed/2023-08-31.md) | 1,099,583 | 1,321,849 | 219,461 | 46 | 1 | 585 | - 2,806 (1.26%) |   
| [2023-07-01 to 2023-07-31](/polkadot/2093-hashed/2023-07-31.md) | 877,487 | 1,099,582 | 222,086 | 77 |  | 582 | - 10 (0.00%) |   
| [2023-06-01 to 2023-06-30](/polkadot/2093-hashed/2023-06-30.md) | 663,308 | 877,486 | 214,085 | 38 |  | 576 | - 94 (0.04%) |   
| [2023-05-01 to 2023-05-31](/polkadot/2093-hashed/2023-05-31.md) | 441,716 | 663,307 | 221,592 | 49 |  | 573 | -   |   
| [2023-04-01 to 2023-04-30](/polkadot/2093-hashed/2023-04-30.md) | 231,213 | 441,715 | 210,500 | 113 |  | 571 | - 3 (0.00%) |   
| [2023-03-01 to 2023-03-31](/polkadot/2093-hashed/2023-03-31.md) | 17,638 | 231,212 | 213,334 | 766 |  | 571 | - 241 (0.11%) |   
| [2023-02-28 to 2023-02-28](/polkadot/2093-hashed/2023-02-28.md) | 15,878 | 17,637 | 1,760 |  |  | 7 | -   |   

## Tables:

* _Blocks_: `bigquery-public-data.crypto_polkadot.blocks2093` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `bigquery-public-data.crypto_polkadot.extrinsics2093` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `bigquery-public-data.crypto_polkadot.events2093` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `bigquery-public-data.crypto_polkadot.transfers2093` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `bigquery-public-data.crypto_polkadot.balances2093` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `bigquery-public-data.crypto_polkadot.accountsactive2093` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `bigquery-public-data.crypto_polkadot.accountspassive2093` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `bigquery-public-data.crypto_polkadot.accountsnew2093` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `bigquery-public-data.crypto_polkadot.accountsreaped2093` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `bigquery-public-data.crypto_polkadot.assets` (filter on `2093`) - [Schema](/schema/assets.json)
* _XCM Assets_: `bigquery-public-data.crypto_polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `bigquery-public-data.crypto_polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `bigquery-public-data.crypto_polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `bigquery-public-data.crypto_polkadot.blocks2093` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2093.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2093.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
