# subzero substrate-etl Summary (Monthly)

_Source_: [subzero.polkaholic.io](https://subzero.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2236
Status: Endpoint not reachable


| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-05-01 to 2023-05-17](/kusama/2236-subzero/2023-05-31.md) | 936,493 | 1,039,959 | 103,467 |  | 2 | 6 | -   |   
| [2023-04-01 to 2023-04-30](/kusama/2236-subzero/2023-04-30.md) | 733,279 | 936,492 | 203,214 |  | 1 | 6 | -   |   
| [2023-03-01 to 2023-03-31](/kusama/2236-subzero/2023-03-31.md) | 537,211 | 733,278 | 196,066 |  |  | 6 | - 2 (0.00%) |   
| [2023-02-01 to 2023-02-28](/kusama/2236-subzero/2023-02-28.md) | 341,779 | 537,210 | 195,432 |  | 3 | 6 | -   |   
| [2023-01-01 to 2023-01-31](/kusama/2236-subzero/2023-01-31.md) | 127,025 | 341,778 | 214,754 |  | 3 | 6 | -   |   
| [2022-12-13 to 2022-12-31](/kusama/2236-subzero/2022-12-31.md) | 1 | 127,024 | 127,024 |  | 3 | 6 | -   |   

## substrate-etl Tables:

* _Blocks_: `substrate-etl.crypto_kusama.blocks2236` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.crypto_kusama.extrinsics2236` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.crypto_kusama.events2236` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.crypto_kusama.transfers2236` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.crypto_kusama.balances2236` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.crypto_kusama.accountsactive2236` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.crypto_kusama.accountspassive2236` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.crypto_kusama.accountsnew2236` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.crypto_kusama.accountsreaped2236` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.crypto_kusama.assets` (filter on `2236`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.crypto_kusama.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.crypto_kusama.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.crypto_kusama.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.crypto_kusama.blocks2236` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2236.json](https://cdn.polkaholic.io/substrate-etl/kusama/2236.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
