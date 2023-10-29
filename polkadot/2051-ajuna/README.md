# Ajuna Summary (Monthly)

_Source_: [ajuna.polkaholic.io](https://ajuna.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2051



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-10-01 to 2023-10-28](/polkadot/2051-ajuna/2023-10-31.md) | 2,147,608 | 2,331,486 | 182,300 |  |  |  | - 1,579 (0.86%) |   
| [2023-09-01 to 2023-09-30](/polkadot/2051-ajuna/2023-09-30.md) | 1,933,781 | 2,147,607 | 213,799 |  | 1 | 9 | - 28 (0.01%) |   
| [2023-08-01 to 2023-08-31](/polkadot/2051-ajuna/2023-08-31.md) | 1,711,939 | 1,933,780 | 218,533 |  | 4 | 9 | - 3,309 (1.49%) |   
| [2023-07-01 to 2023-07-31](/polkadot/2051-ajuna/2023-07-31.md) | 1,530,394 | 1,711,938 | 181,545 | 1 | 3 | 9 | -   |   
| [2023-06-01 to 2023-06-30](/polkadot/2051-ajuna/2023-06-30.md) | 1,316,370 | 1,530,393 | 214,024 |  | 4 | 9 | -   |   
| [2023-05-01 to 2023-05-31](/polkadot/2051-ajuna/2023-05-31.md) | 1,095,067 | 1,316,369 | 221,303 |  | 4 | 9 | -   |   
| [2023-04-01 to 2023-04-30](/polkadot/2051-ajuna/2023-04-30.md) | 880,587 | 1,095,066 | 214,480 |  | 4 | 9 | -   |   
| [2023-03-01 to 2023-03-31](/polkadot/2051-ajuna/2023-03-31.md) | 678,772 | 880,586 | 201,815 |  | 4 | 9 | -   |   
| [2023-02-01 to 2023-02-28](/polkadot/2051-ajuna/2023-02-28.md) | 486,290 | 678,771 | 192,482 | 2 | 4 | 9 | -   |   
| [2023-01-01 to 2023-01-31](/polkadot/2051-ajuna/2023-01-31.md) | 277,227 | 486,289 | 209,063 | 3 | 4 | 7 | -   |   
| [2022-12-01 to 2022-12-31](/polkadot/2051-ajuna/2022-12-31.md) | 65,407 | 277,226 | 211,820 |  | 4 | 6 | -   |   
| [2022-11-21 to 2022-11-30](/polkadot/2051-ajuna/2022-11-30.md) | 1 | 65,406 | 65,406 | 9 | 4 | 6 | -   |   

## Tables:

* _Blocks_: `bigquery-public-data.crypto_polkadot.blocks2051` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `bigquery-public-data.crypto_polkadot.extrinsics2051` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `bigquery-public-data.crypto_polkadot.events2051` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `bigquery-public-data.crypto_polkadot.transfers2051` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `bigquery-public-data.crypto_polkadot.balances2051` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `bigquery-public-data.crypto_polkadot.accountsactive2051` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `bigquery-public-data.crypto_polkadot.accountspassive2051` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `bigquery-public-data.crypto_polkadot.accountsnew2051` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `bigquery-public-data.crypto_polkadot.accountsreaped2051` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `bigquery-public-data.crypto_polkadot.assets` (filter on `2051`) - [Schema](/schema/assets.json)
* _XCM Assets_: `bigquery-public-data.crypto_polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `bigquery-public-data.crypto_polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `bigquery-public-data.crypto_polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `bigquery-public-data.crypto_polkadot.blocks2051` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2051.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2051.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
