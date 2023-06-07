# InvArch Tinkernet Summary (Monthly)

_Source_: [tinkernet.polkaholic.io](https://tinkernet.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2125



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-06-01 to 2023-06-07](/kusama/2125-tinkernet/2023-06-30.md) | 1,874,476 | 1,917,261 | 42,786 | 391 | 39 | 7,753 | -   |   
| [2023-05-01 to 2023-05-31](/kusama/2125-tinkernet/2023-05-31.md) | 1,661,688 | 1,874,475 | 212,788 | 2,568 | 43 | 7,744 | -   |   
| [2023-04-01 to 2023-04-30](/kusama/2125-tinkernet/2023-04-30.md) | 1,455,760 | 1,661,687 | 205,928 | 3,151 | 66 | 7,741 | -   |   
| [2023-03-01 to 2023-03-31](/kusama/2125-tinkernet/2023-03-31.md) | 1,270,128 | 1,455,759 | 185,632 | 2,587 | 56 | 7,764 | -   |   
| [2023-02-01 to 2023-02-28](/kusama/2125-tinkernet/2023-02-28.md) | 1,097,041 | 1,270,127 | 173,087 | 5,716 | 154 | 8,055 | -   |   
| [2023-01-01 to 2023-01-31](/kusama/2125-tinkernet/2023-01-31.md) | 900,714 | 1,097,040 | 196,327 | 1,015 | 29 | 1,861 | -   |   
| [2022-12-01 to 2022-12-31](/kusama/2125-tinkernet/2022-12-31.md) | 710,911 | 900,713 | 189,803 | 544 | 20 | 1,808 | -   |   
| [2022-11-01 to 2022-11-30](/kusama/2125-tinkernet/2022-11-30.md) | 515,885 | 710,910 | 195,026 | 651 | 23 | 1,793 | -   |   
| [2022-10-01 to 2022-10-31](/kusama/2125-tinkernet/2022-10-31.md) | 299,895 | 515,884 | 215,990 | 2,107 | 38 | 1,783 | -   |   
| [2022-09-01 to 2022-09-30](/kusama/2125-tinkernet/2022-09-30.md) | 135,276 | 299,894 | 164,619 | 272 | 8 | 1,206 | -   |   
| [2022-08-08 to 2022-08-31](/kusama/2125-tinkernet/2022-08-31.md) | 1 | 135,275 | 135,275 | 391 | 11 | 1,189 | -   |   

## Tables:

* _Blocks_: `bigquery-public-data.crypto_kusama.blocks2125` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `bigquery-public-data.crypto_kusama.extrinsics2125` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `bigquery-public-data.crypto_kusama.events2125` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `bigquery-public-data.crypto_kusama.transfers2125` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `bigquery-public-data.crypto_kusama.balances2125` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `bigquery-public-data.crypto_kusama.accountsactive2125` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `bigquery-public-data.crypto_kusama.accountspassive2125` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `bigquery-public-data.crypto_kusama.accountsnew2125` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `bigquery-public-data.crypto_kusama.accountsreaped2125` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `bigquery-public-data.crypto_kusama.assets` (filter on `2125`) - [Schema](/schema/assets.json)
* _XCM Assets_: `bigquery-public-data.crypto_kusama.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `bigquery-public-data.crypto_kusama.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `bigquery-public-data.crypto_kusama.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `bigquery-public-data.crypto_kusama.blocks2125` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2125.json](https://cdn.polkaholic.io/substrate-etl/kusama/2125.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
