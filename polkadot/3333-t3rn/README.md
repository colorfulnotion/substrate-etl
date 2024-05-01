# T3rn Summary (Monthly)

_Source_: [t3rn.polkaholic.io](https://t3rn.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 3333



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2024-04-01 to 2024-04-30](/polkadot/3333-t3rn/2024-04-30.md) | 2,779,877 | 2,947,512 | 167,636 |  |  | 1 | -   |   
| [2024-03-01 to 2024-03-31](/polkadot/3333-t3rn/2024-03-31.md) | 2,559,852 | 2,779,876 | 220,025 |  |  | 1 | -   |   
| [2024-02-01 to 2024-02-29](/polkadot/3333-t3rn/2024-02-29.md) | 2,354,189 | 2,559,851 | 205,663 |  |  | 1 | -   |   
| [2024-01-01 to 2024-01-31](/polkadot/3333-t3rn/2024-01-31.md) | 2,135,017 | 2,354,188 | 219,172 |  |  | 1 | -   |   
| [2023-12-01 to 2023-12-31](/polkadot/3333-t3rn/2023-12-31.md) | 1,915,605 | 2,135,016 | 219,412 |  | 2 | 1 | -   |   
| [2023-11-01 to 2023-11-30](/polkadot/3333-t3rn/2023-11-30.md) | 1,701,401 | 1,915,604 | 214,204 |  | 2 | 1 | -   |   
| [2023-10-01 to 2023-10-31](/polkadot/3333-t3rn/2023-10-31.md) | 1,479,819 | 1,701,400 | 221,582 |  | 2 | 1 | -   |   
| [2023-09-01 to 2023-09-30](/polkadot/3333-t3rn/2023-09-30.md) | 1,265,506 | 1,479,818 | 214,313 |  | 2 | 2 | -   |   
| [2023-08-01 to 2023-08-31](/polkadot/3333-t3rn/2023-08-31.md) | 1,042,975 | 1,265,505 | 222,531 |  | 2 | 2 | -   |   
| [2023-07-01 to 2023-07-31](/polkadot/3333-t3rn/2023-07-31.md) | 820,621 | 1,042,974 | 222,354 |  | 2 | 2 | -   |   
| [2023-06-01 to 2023-06-30](/polkadot/3333-t3rn/2023-06-30.md) | 606,237 | 820,620 | 214,384 |  | 2 | 2 | -   |   
| [2023-05-01 to 2023-05-31](/polkadot/3333-t3rn/2023-05-31.md) | 384,580 | 606,236 | 221,657 |  | 2 | 2 | -   |   
| [2023-04-01 to 2023-04-30](/polkadot/3333-t3rn/2023-04-30.md) | 169,689 | 384,579 | 214,891 |  | 2 | 2 | -   |   
| [2023-03-07 to 2023-03-31](/polkadot/3333-t3rn/2023-03-31.md) | 1 | 169,688 | 169,688 |  | 2 | 2 | -   |   

## Tables:

* _Blocks_: `bigquery-public-data.crypto_polkadot.blocks3333` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `bigquery-public-data.crypto_polkadot.extrinsics3333` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `bigquery-public-data.crypto_polkadot.events3333` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `bigquery-public-data.crypto_polkadot.transfers3333` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `bigquery-public-data.crypto_polkadot.balances3333` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `bigquery-public-data.crypto_polkadot.accountsactive3333` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `bigquery-public-data.crypto_polkadot.accountspassive3333` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `bigquery-public-data.crypto_polkadot.accountsnew3333` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `bigquery-public-data.crypto_polkadot.accountsreaped3333` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `bigquery-public-data.crypto_polkadot.assets` (filter on `3333`) - [Schema](/schema/assets.json)
* _XCM Assets_: `bigquery-public-data.crypto_polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `bigquery-public-data.crypto_polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `bigquery-public-data.crypto_polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `bigquery-public-data.crypto_polkadot.blocks3333` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/3333.json](https://cdn.polkaholic.io/substrate-etl/polkadot/3333.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
