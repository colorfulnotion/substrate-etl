# Pendulum Summary (Monthly)

_Source_: [pendulum.polkaholic.io](https://pendulum.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2094



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2024-03-01 to 2024-03-28](/polkadot/2094-pendulum/2024-03-31.md) | 2,467,176 | 2,642,656 | 175,481 | 109,886 |  | 1,920 | -   |   
| [2024-02-01 to 2024-02-29](/polkadot/2094-pendulum/2024-02-29.md) | 2,313,170 | 2,467,175 | 154,006 | 43,323 |  | 1,816 | -   |   
| [2024-01-01 to 2024-01-31](/polkadot/2094-pendulum/2024-01-31.md) | 2,153,605 | 2,313,169 | 159,565 | 4,278 |  | 1,738 | -   |   
| [2023-12-01 to 2023-12-31](/polkadot/2094-pendulum/2023-12-31.md) | 1,979,542 | 2,153,604 | 174,063 | 2,849 | 37 | 1,689 | -   |   
| [2023-11-01 to 2023-11-30](/polkadot/2094-pendulum/2023-11-30.md) | 1,784,125 | 1,979,541 | 195,417 | 2,304 | 48 | 1,606 | -   |   
| [2023-10-01 to 2023-10-31](/polkadot/2094-pendulum/2023-10-31.md) | 1,575,669 | 1,784,124 | 208,456 | 1,703 | 37 | 1,456 | -   |   
| [2023-09-01 to 2023-09-30](/polkadot/2094-pendulum/2023-09-30.md) | 1,373,391 | 1,575,668 | 202,278 | 2,139 | 36 | 1,252 | -   |   
| [2023-08-01 to 2023-08-31](/polkadot/2094-pendulum/2023-08-31.md) | 1,152,651 | 1,373,390 | 220,740 | 2,005 | 34 | 1,149 | -   |   
| [2023-07-01 to 2023-07-31](/polkadot/2094-pendulum/2023-07-31.md) | 932,729 | 1,152,650 | 219,922 | 1,569 | 35 | 981 | -   |   
| [2023-06-01 to 2023-06-30](/polkadot/2094-pendulum/2023-06-30.md) | 719,460 | 932,728 | 213,269 | 1,144 | 32 | 919 | -   |   
| [2023-05-01 to 2023-05-31](/polkadot/2094-pendulum/2023-05-31.md) | 507,332 | 719,459 | 212,128 | 1,996 | 41 | 885 | -   |   
| [2023-04-01 to 2023-04-30](/polkadot/2094-pendulum/2023-04-30.md) | 296,774 | 507,331 | 210,558 | 1,365 | 30 | 787 | -   |   
| [2023-03-01 to 2023-03-31](/polkadot/2094-pendulum/2023-03-31.md) | 82,548 | 296,773 | 214,226 | 2,227 | 36 | 705 | -   |   
| [2023-02-13 to 2023-02-28](/polkadot/2094-pendulum/2023-02-28.md) | 1 | 82,547 | 82,547 | 95 | 8 | 85 | -   |   

## Tables:

* _Blocks_: `bigquery-public-data.crypto_polkadot.blocks2094` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `bigquery-public-data.crypto_polkadot.extrinsics2094` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `bigquery-public-data.crypto_polkadot.events2094` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `bigquery-public-data.crypto_polkadot.transfers2094` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `bigquery-public-data.crypto_polkadot.balances2094` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `bigquery-public-data.crypto_polkadot.accountsactive2094` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `bigquery-public-data.crypto_polkadot.accountspassive2094` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `bigquery-public-data.crypto_polkadot.accountsnew2094` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `bigquery-public-data.crypto_polkadot.accountsreaped2094` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `bigquery-public-data.crypto_polkadot.assets` (filter on `2094`) - [Schema](/schema/assets.json)
* _XCM Assets_: `bigquery-public-data.crypto_polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `bigquery-public-data.crypto_polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `bigquery-public-data.crypto_polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `bigquery-public-data.crypto_polkadot.blocks2094` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2094.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2094.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
