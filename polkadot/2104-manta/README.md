# Manta Summary (Monthly)

_Source_: [manta.polkaholic.io](https://manta.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2104
Status: Onboarding


| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2024-01-01 to 2024-01-17](/polkadot/2104-manta/2024-01-31.md) | 2,016,763 | 2,130,727 | 113,965 | 28 |  | 57 | -   |   
| [2023-12-01 to 2023-12-31](/polkadot/2104-manta/2023-12-31.md) | 1,795,327 | 2,016,762 | 221,436 | 31 | 4 | 33 | -   |   
| [2023-11-01 to 2023-11-30](/polkadot/2104-manta/2023-11-30.md) | 1,580,497 | 1,795,326 | 214,830 | 1 | 5 | 28 | -   |   
| [2023-10-01 to 2023-10-31](/polkadot/2104-manta/2023-10-31.md) | 1,360,281 | 1,580,496 | 220,216 | 1 | 5 | 27 | -   |   
| [2023-09-01 to 2023-09-30](/polkadot/2104-manta/2023-09-30.md) | 1,148,469 | 1,360,280 | 211,812 | 15 | 5 | 28 | -   |   
| [2023-08-01 to 2023-08-31](/polkadot/2104-manta/2023-08-31.md) | 926,801 | 1,148,468 | 221,668 | 102 | 6 | 26 | -   |   
| [2023-07-01 to 2023-07-31](/polkadot/2104-manta/2023-07-31.md) | 708,303 | 926,800 | 218,498 | 206 | 5 | 23 | -   |   
| [2023-06-01 to 2023-06-30](/polkadot/2104-manta/2023-06-30.md) | 498,028 | 708,302 | 198,691 | 46 | 1 | 12 | - 11,584 (5.51%) |   
| [2023-05-01 to 2023-05-31](/polkadot/2104-manta/2023-05-31.md) | 281,525 | 498,027 | 216,503 | 21 |  | 9 | -   |   
| [2023-04-01 to 2023-04-30](/polkadot/2104-manta/2023-04-30.md) | 70,511 | 281,524 | 211,014 | 7 |  | 9 | -   |   
| [2023-03-21 to 2023-03-31](/polkadot/2104-manta/2023-03-31.md) | 1 | 70,510 | 69,832 |  |  | 9 | - 678 (0.96%) |   

## Tables:

* _Blocks_: `bigquery-public-data.crypto_polkadot.blocks2104` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `bigquery-public-data.crypto_polkadot.extrinsics2104` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `bigquery-public-data.crypto_polkadot.events2104` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `bigquery-public-data.crypto_polkadot.transfers2104` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `bigquery-public-data.crypto_polkadot.balances2104` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `bigquery-public-data.crypto_polkadot.accountsactive2104` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `bigquery-public-data.crypto_polkadot.accountspassive2104` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `bigquery-public-data.crypto_polkadot.accountsnew2104` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `bigquery-public-data.crypto_polkadot.accountsreaped2104` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `bigquery-public-data.crypto_polkadot.assets` (filter on `2104`) - [Schema](/schema/assets.json)
* _XCM Assets_: `bigquery-public-data.crypto_polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `bigquery-public-data.crypto_polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `bigquery-public-data.crypto_polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `bigquery-public-data.crypto_polkadot.blocks2104` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2104.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2104.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
