# Integritee Shell Summary (Monthly)

_Source_: [integritee-shell.polkaholic.io](https://integritee-shell.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2039



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-11-01 to 2023-11-03](/polkadot/2039-integritee-shell/2023-11-30.md) | 2,122,810 | 2,128,563 | 5,754 |  |  |  | -   |   
| [2023-10-01 to 2023-10-31](/polkadot/2039-integritee-shell/2023-10-31.md) | 2,033,732 | 2,122,809 | 89,078 |  |  |  | -   |   
| [2023-09-01 to 2023-09-30](/polkadot/2039-integritee-shell/2023-09-30.md) | 1,947,646 | 2,033,731 | 86,086 |  |  | 1 | -   |   
| [2023-08-01 to 2023-08-31](/polkadot/2039-integritee-shell/2023-08-31.md) | 1,858,446 | 1,947,645 | 89,200 |  |  | 1 | -   |   
| [2023-07-01 to 2023-07-31](/polkadot/2039-integritee-shell/2023-07-31.md) | 1,769,370 | 1,858,445 | 89,076 |  |  | 1 | -   |   
| [2023-06-01 to 2023-06-30](/polkadot/2039-integritee-shell/2023-06-30.md) | 1,626,609 | 1,769,369 | 142,761 |  |  | 1 | -   |   
| [2023-05-01 to 2023-05-31](/polkadot/2039-integritee-shell/2023-05-31.md) | 1,448,517 | 1,626,608 | 178,092 |  |  | 1 | -   |   
| [2023-04-01 to 2023-04-30](/polkadot/2039-integritee-shell/2023-04-30.md) | 1,275,992 | 1,448,516 | 172,525 |  |  | 1 | -   |   
| [2023-03-01 to 2023-03-31](/polkadot/2039-integritee-shell/2023-03-31.md) | 1,101,695 | 1,275,991 | 174,297 |  |  | 1 | -   |   
| [2023-02-01 to 2023-02-28](/polkadot/2039-integritee-shell/2023-02-28.md) | 940,640 | 1,101,694 | 161,055 |  |  | 1 | -   |   
| [2023-01-01 to 2023-01-31](/polkadot/2039-integritee-shell/2023-01-31.md) | 762,241 | 940,639 | 178,399 |  |  | 1 | -   |   
| [2022-12-01 to 2022-12-31](/polkadot/2039-integritee-shell/2022-12-31.md) | 583,908 | 762,240 | 178,333 |  |  | 1 | -   |   
| [2022-11-01 to 2022-11-30](/polkadot/2039-integritee-shell/2022-11-30.md) | 411,484 | 583,907 | 172,424 |  |  | 1 | -   |   
| [2022-10-01 to 2022-10-31](/polkadot/2039-integritee-shell/2022-10-31.md) | 229,398 | 411,483 | 182,086 |  |  | 1 | -   |   
| [2022-09-01 to 2022-09-30](/polkadot/2039-integritee-shell/2022-09-30.md) | 18,693 | 229,397 | 210,705 |  |  | 1 | -   |   
| [2022-08-29 to 2022-08-31](/polkadot/2039-integritee-shell/2022-08-31.md) | 1 | 18,692 | 18,692 |  |  | 1 | -   |   

## Tables:

* _Blocks_: `bigquery-public-data.crypto_polkadot.blocks2039` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `bigquery-public-data.crypto_polkadot.extrinsics2039` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `bigquery-public-data.crypto_polkadot.events2039` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `bigquery-public-data.crypto_polkadot.transfers2039` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `bigquery-public-data.crypto_polkadot.balances2039` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `bigquery-public-data.crypto_polkadot.accountsactive2039` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `bigquery-public-data.crypto_polkadot.accountspassive2039` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `bigquery-public-data.crypto_polkadot.accountsnew2039` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `bigquery-public-data.crypto_polkadot.accountsreaped2039` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `bigquery-public-data.crypto_polkadot.assets` (filter on `2039`) - [Schema](/schema/assets.json)
* _XCM Assets_: `bigquery-public-data.crypto_polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `bigquery-public-data.crypto_polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `bigquery-public-data.crypto_polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `bigquery-public-data.crypto_polkadot.blocks2039` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2039.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2039.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
