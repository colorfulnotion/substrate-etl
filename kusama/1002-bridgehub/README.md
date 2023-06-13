# BridgeHub Summary (Monthly)

_Source_: [bridgehub.polkaholic.io](https://bridgehub.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 1002



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-06-01 to 2023-06-13](/kusama/1002-bridgehub/2023-06-30.md) | 927,082 | 1,012,592 | 85,511 | 15 | 3 | 12 | -   |   
| [2023-05-01 to 2023-05-31](/kusama/1002-bridgehub/2023-05-31.md) | 713,354 | 927,081 | 213,728 |  | 3 |  | -   |   
| [2023-04-01 to 2023-04-30](/kusama/1002-bridgehub/2023-04-30.md) | 504,460 | 713,353 | 208,894 |  | 4 |  | -   |   
| [2023-03-01 to 2023-03-31](/kusama/1002-bridgehub/2023-03-31.md) | 285,129 | 504,459 | 219,331 |  | 4 |  | -   |   
| [2023-02-01 to 2023-02-28](/kusama/1002-bridgehub/2023-02-28.md) | 86,880 | 285,128 | 198,249 |  | 4 |  | -   |   
| [2023-01-19 to 2023-01-31](/kusama/1002-bridgehub/2023-01-31.md) | 1 | 86,879 | 86,879 |  | 4 |  | -   |   

## Tables:

* _Blocks_: `bigquery-public-data.crypto_kusama.blocks1002` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `bigquery-public-data.crypto_kusama.extrinsics1002` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `bigquery-public-data.crypto_kusama.events1002` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `bigquery-public-data.crypto_kusama.transfers1002` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `bigquery-public-data.crypto_kusama.balances1002` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `bigquery-public-data.crypto_kusama.accountsactive1002` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `bigquery-public-data.crypto_kusama.accountspassive1002` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `bigquery-public-data.crypto_kusama.accountsnew1002` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `bigquery-public-data.crypto_kusama.accountsreaped1002` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `bigquery-public-data.crypto_kusama.assets` (filter on `1002`) - [Schema](/schema/assets.json)
* _XCM Assets_: `bigquery-public-data.crypto_kusama.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `bigquery-public-data.crypto_kusama.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `bigquery-public-data.crypto_kusama.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `bigquery-public-data.crypto_kusama.blocks1002` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/1002.json](https://cdn.polkaholic.io/substrate-etl/kusama/1002.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
