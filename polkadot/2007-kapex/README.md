# Kapex Summary (Monthly)

_Source_: [kapex.polkaholic.io](https://kapex.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2007



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-11-01 to 2023-11-24](/polkadot/2007-kapex/2023-11-30.md) | 2,902,319 | 3,064,822 | 160,755 | 10 | 6 | 1,080 | - 1,749 (1.08%) |   
| [2023-10-15 to 2023-10-31](/polkadot/2007-kapex/2023-10-31.md) | 2,780,998 | 2,902,318 | 121,321 | 28 | 7 | 1,077 | -   |   
| [2023-09-01 to 2023-09-08](/polkadot/2007-kapex/2023-09-30.md) | 2,467,210 | 2,523,500 | 56,291 | 1 | 7 | 1,065 | -  **BROKEN**  |   
| [2023-08-01 to 2023-08-31](/polkadot/2007-kapex/2023-08-31.md) | 2,245,108 | 2,467,209 | 222,102 | 2 | 7 | 1,065 | -   |   
| [2023-07-01 to 2023-07-31](/polkadot/2007-kapex/2023-07-31.md) | 2,033,408 | 2,245,107 | 211,700 | 1 | 7 | 1,063 | -   |   
| [2023-06-01 to 2023-06-30](/polkadot/2007-kapex/2023-06-30.md) | 1,819,951 | 2,033,407 | 213,457 | 11 | 4 | 1,063 | -   |   
| [2023-05-01 to 2023-05-31](/polkadot/2007-kapex/2023-05-31.md) | 1,601,590 | 1,819,950 | 218,361 | 11 | 3 | 1,060 | -   |   
| [2023-04-01 to 2023-04-30](/polkadot/2007-kapex/2023-04-30.md) | 1,388,151 | 1,601,589 | 213,439 | 5 | 2 | 1,058 | -   |   
| [2023-03-01 to 2023-03-31](/polkadot/2007-kapex/2023-03-31.md) | 1,174,733 | 1,388,150 | 213,418 | 2 | 2 | 1,055 | -   |   
| [2023-02-01 to 2023-02-28](/polkadot/2007-kapex/2023-02-28.md) | 975,590 | 1,174,732 | 199,143 | 8 | 2 | 1,054 | -   |   
| [2023-01-01 to 2023-01-31](/polkadot/2007-kapex/2023-01-31.md) | 755,417 | 975,589 | 220,173 | 54 | 3 | 1,052 | -   |   
| [2022-12-01 to 2022-12-31](/polkadot/2007-kapex/2022-12-31.md) | 536,184 | 755,416 | 219,233 |  | 2 | 3 | -   |   
| [2022-11-01 to 2022-11-30](/polkadot/2007-kapex/2022-11-30.md) | 322,459 | 536,183 | 213,725 |  | 2 | 3 | -   |   
| [2022-10-01 to 2022-10-31](/polkadot/2007-kapex/2022-10-31.md) | 101,902 | 322,458 | 220,557 |  | 2 | 3 | -   |   
| [2022-09-16 to 2022-09-30](/polkadot/2007-kapex/2022-09-30.md) | 1 | 101,901 | 101,901 |  | 2 | 3 | -   |   

## Tables:

* _Blocks_: `bigquery-public-data.crypto_polkadot.blocks2007` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `bigquery-public-data.crypto_polkadot.extrinsics2007` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `bigquery-public-data.crypto_polkadot.events2007` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `bigquery-public-data.crypto_polkadot.transfers2007` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `bigquery-public-data.crypto_polkadot.balances2007` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `bigquery-public-data.crypto_polkadot.accountsactive2007` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `bigquery-public-data.crypto_polkadot.accountspassive2007` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `bigquery-public-data.crypto_polkadot.accountsnew2007` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `bigquery-public-data.crypto_polkadot.accountsreaped2007` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `bigquery-public-data.crypto_polkadot.assets` (filter on `2007`) - [Schema](/schema/assets.json)
* _XCM Assets_: `bigquery-public-data.crypto_polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `bigquery-public-data.crypto_polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `bigquery-public-data.crypto_polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `bigquery-public-data.crypto_polkadot.blocks2007` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2007.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2007.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
