# Darwinia Summary (Monthly)

_Source_: [darwinia.polkaholic.io](https://darwinia.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2046



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-10-01 to 2023-10-28](/polkadot/2046-darwinia/2023-10-31.md) | 1,115,587 | 1,305,307 | 189,721 | 522 | 16 | 883 | -   |   
| [2023-09-01 to 2023-09-30](/polkadot/2046-darwinia/2023-09-30.md) | 903,738 | 1,115,586 | 211,849 | 538 | 17 | 846 | -   |   
| [2023-08-01 to 2023-08-31](/polkadot/2046-darwinia/2023-08-31.md) | 685,405 | 903,737 | 218,333 | 442 | 20 | 812 | -   |   
| [2023-07-01 to 2023-07-31](/polkadot/2046-darwinia/2023-07-31.md) | 467,654 | 685,404 | 217,751 | 414 | 19 | 774 | -   |   
| [2023-06-01 to 2023-06-30](/polkadot/2046-darwinia/2023-06-30.md) | 259,521 | 467,653 | 208,133 | 425 | 24 | 737 | -   |   
| [2023-05-01 to 2023-05-31](/polkadot/2046-darwinia/2023-05-31.md) | 44,491 | 259,520 | 215,030 | 613 | 16 | 688 | -   |   
| [2023-04-01 to 2023-04-30](/polkadot/2046-darwinia/2023-04-30.md) | 12 | 1,232,613 | 136,646 | 231 | 4 | 552 | - 1,095,956 (88.91%) |   
| [2023-03-01 to 2023-03-31](/polkadot/2046-darwinia/2023-03-31.md) | 988,937 | 1,137,243 | 146,216 | 32 | 3 | 22 | - 2,091 (1.41%) |   
| [2023-02-01 to 2023-02-28](/polkadot/2046-darwinia/2023-02-28.md) | 838,210 | 988,936 | 150,727 | 16 | 4 | 19 | -   |   
| [2023-01-01 to 2023-01-31](/polkadot/2046-darwinia/2023-01-31.md) | 669,202 | 838,209 | 169,008 | 2 | 3 | 19 | -   |   
| [2022-12-01 to 2022-12-31](/polkadot/2046-darwinia/2022-12-31.md) | 487,030 | 669,201 | 182,172 | 7 | 4 | 19 | -   |   
| [2022-11-01 to 2022-11-30](/polkadot/2046-darwinia/2022-11-30.md) | 316,864 | 487,029 | 170,166 | 25 | 4 | 18 | -   |   
| [2022-10-01 to 2022-10-31](/polkadot/2046-darwinia/2022-10-31.md) | 145,349 | 316,863 | 171,515 | 58 | 4 | 18 | -   |   
| [2022-09-01 to 2022-09-30](/polkadot/2046-darwinia/2022-09-30.md) | 10,392 | 145,348 | 134,957 | 12 | 4 | 8 | -   |   
| [2022-08-29 to 2022-08-31](/polkadot/2046-darwinia/2022-08-31.md) | 1 | 10,391 | 10,391 |  | 4 | 2 | -   |   

## Tables:

* _Blocks_: `bigquery-public-data.crypto_polkadot.blocks2046` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `bigquery-public-data.crypto_polkadot.extrinsics2046` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `bigquery-public-data.crypto_polkadot.events2046` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `bigquery-public-data.crypto_polkadot.transfers2046` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `bigquery-public-data.crypto_polkadot.balances2046` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `bigquery-public-data.crypto_polkadot.accountsactive2046` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `bigquery-public-data.crypto_polkadot.accountspassive2046` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `bigquery-public-data.crypto_polkadot.accountsnew2046` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `bigquery-public-data.crypto_polkadot.accountsreaped2046` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `bigquery-public-data.crypto_polkadot.assets` (filter on `2046`) - [Schema](/schema/assets.json)
* _XCM Assets_: `bigquery-public-data.crypto_polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `bigquery-public-data.crypto_polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `bigquery-public-data.crypto_polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `bigquery-public-data.crypto_polkadot.blocks2046` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2046.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2046.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
