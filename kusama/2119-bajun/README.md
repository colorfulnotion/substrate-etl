# Bajun Network Summary (Monthly)

_Source_: [bajun.polkaholic.io](https://bajun.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2119



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-05-01 to 2023-05-20](/kusama/2119-bajun/2023-05-31.md) | 2,019,171 | 2,144,252 | 125,082 | 1,889 | 18 | 6,658 | -   |   
| [2023-04-01 to 2023-04-30](/kusama/2119-bajun/2023-04-30.md) | 1,814,496 | 2,019,170 | 204,675 | 6,492 | 38 | 6,391 | -   |   
| [2023-03-01 to 2023-03-31](/kusama/2119-bajun/2023-03-31.md) | 1,595,381 | 1,814,495 | 218,845 | 12,422 | 79 | 6,180 | - 270 (0.12%) |   
| [2023-02-01 to 2023-02-28](/kusama/2119-bajun/2023-02-28.md) | 1,397,502 | 1,595,380 | 197,879 | 190,118 | 213 | 5,830 | -   |   
| [2023-01-01 to 2023-01-31](/kusama/2119-bajun/2023-01-31.md) | 1,179,201 | 1,397,501 | 218,301 | 1,505 | 24 | 4,244 | -   |   
| [2022-12-01 to 2022-12-31](/kusama/2119-bajun/2022-12-31.md) | 969,372 | 1,179,200 | 209,829 | 1,710 | 41 | 3,686 | -   |   
| [2022-11-01 to 2022-11-30](/kusama/2119-bajun/2022-11-30.md) | 772,506 | 969,371 | 196,866 | 55 | 5 | 3,291 | -   |   
| [2022-10-01 to 2022-10-31](/kusama/2119-bajun/2022-10-31.md) | 556,790 | 772,505 | 215,716 | 150 | 6 | 3,285 | -   |   
| [2022-09-01 to 2022-09-30](/kusama/2119-bajun/2022-09-30.md) | 358,487 | 556,789 | 198,303 | 10 | 3 | 11 | -   |   
| [2022-08-01 to 2022-08-31](/kusama/2119-bajun/2022-08-31.md) | 180,292 | 358,486 | 178,195 | 3 | 2 | 7 | -   |   
| [2022-07-01 to 2022-07-31](/kusama/2119-bajun/2022-07-31.md) | 658 | 180,291 | 179,634 |  | 3 | 4 | -   |   
| [2022-06-30 to 2022-06-30](/kusama/2119-bajun/2022-06-30.md) | 1 | 657 | 657 |  | 2 | 4 | -   |   

## Tables:

* _Blocks_: `bigquery-public-data.crypto_kusama.blocks2119` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `bigquery-public-data.crypto_kusama.extrinsics2119` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `bigquery-public-data.crypto_kusama.events2119` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `bigquery-public-data.crypto_kusama.transfers2119` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `bigquery-public-data.crypto_kusama.balances2119` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `bigquery-public-data.crypto_kusama.accountsactive2119` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `bigquery-public-data.crypto_kusama.accountspassive2119` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `bigquery-public-data.crypto_kusama.accountsnew2119` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `bigquery-public-data.crypto_kusama.accountsreaped2119` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `bigquery-public-data.crypto_kusama.assets` (filter on `2119`) - [Schema](/schema/assets.json)
* _XCM Assets_: `bigquery-public-data.crypto_kusama.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `bigquery-public-data.crypto_kusama.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `bigquery-public-data.crypto_kusama.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `bigquery-public-data.crypto_kusama.blocks2119` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2119.json](https://cdn.polkaholic.io/substrate-etl/kusama/2119.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
