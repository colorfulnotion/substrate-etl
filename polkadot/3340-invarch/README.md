# invarch Summary (Monthly)

_Source_: [invarch.polkaholic.io](https://invarch.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 3340



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2024-07-01 to 2024-07-28](/polkadot/3340-invarch/2024-07-31.md) | 1,728,957 | 1,921,341 | 192,385 | 2,450 |  | 76,550 | -   |   
| [2024-06-01 to 2024-06-30](/polkadot/3340-invarch/2024-06-30.md) | 1,515,167 | 1,728,956 | 213,790 | 3,151 |  | 76,544 | -   |   
| [2024-05-01 to 2024-05-31](/polkadot/3340-invarch/2024-05-31.md) | 1,297,850 | 1,515,166 | 217,317 | 4,309 |  | 76,526 | -   |   
| [2024-04-01 to 2024-04-30](/polkadot/3340-invarch/2024-04-30.md) | 1,100,966 | 1,297,849 | 196,884 | 5,058 |  | 76,644 | -   |   
| [2024-03-01 to 2024-03-31](/polkadot/3340-invarch/2024-03-31.md) | 895,429 | 1,100,965 | 205,537 | 3,886 |  | 1,894 | -   |   
| [2024-02-01 to 2024-02-29](/polkadot/3340-invarch/2024-02-29.md) | 696,545 | 895,428 | 198,884 | 5,580 |  | 1,888 | -   |   
| [2024-01-01 to 2024-01-31](/polkadot/3340-invarch/2024-01-31.md) | 480,997 | 696,544 | 215,548 | 2,041 |  | 1,774 | -   |   
| [2023-12-01 to 2023-12-31](/polkadot/3340-invarch/2023-12-31.md) | 264,082 | 480,996 | 216,915 | 53 |  | 1,382 | -   |   
| [2023-11-01 to 2023-11-30](/polkadot/3340-invarch/2023-11-30.md) | 52,427 | 264,081 | 211,655 | 6 |  | 1 | -   |   
| [2023-10-24 to 2023-10-31](/polkadot/3340-invarch/2023-10-31.md) | 1 | 52,426 | 52,426 | 2 |  |  | -   |   

## Tables:

* _Blocks_: `bigquery-public-data.crypto_polkadot.blocks3340` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `bigquery-public-data.crypto_polkadot.extrinsics3340` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `bigquery-public-data.crypto_polkadot.events3340` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `bigquery-public-data.crypto_polkadot.transfers3340` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `bigquery-public-data.crypto_polkadot.balances3340` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `bigquery-public-data.crypto_polkadot.accountsactive3340` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `bigquery-public-data.crypto_polkadot.accountspassive3340` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `bigquery-public-data.crypto_polkadot.accountsnew3340` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `bigquery-public-data.crypto_polkadot.accountsreaped3340` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `bigquery-public-data.crypto_polkadot.assets` (filter on `3340`) - [Schema](/schema/assets.json)
* _XCM Assets_: `bigquery-public-data.crypto_polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `bigquery-public-data.crypto_polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `bigquery-public-data.crypto_polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `bigquery-public-data.crypto_polkadot.blocks3340` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/3340.json](https://cdn.polkaholic.io/substrate-etl/polkadot/3340.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
