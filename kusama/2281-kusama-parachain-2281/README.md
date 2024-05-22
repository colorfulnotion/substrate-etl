# kusama-parachain-2281 Summary (Monthly)

_Source_: [kusama-parachain-2281.polkaholic.io](https://kusama-parachain-2281.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2281



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2024-05-01 to 2024-05-21](/kusama/2281-kusama-parachain-2281/2024-05-31.md) | 1,407,908 | 1,537,806 | 29,028 | 16 |  | 27 | - 100,871 (77.65%) |   
| [2024-04-01 to 2024-04-30](/kusama/2281-kusama-parachain-2281/2024-04-30.md) | 1,209,035 | 1,407,907 | 16,917 | 11 |  | 21 | - 181,956 (91.49%) |   
| [2024-03-01 to 2024-03-31](/kusama/2281-kusama-parachain-2281/2024-03-31.md) | 1,038,462 | 1,209,034 | 11,072 | 3 |  | 5 | - 159,501 (93.51%) |   
| [2024-02-01 to 2024-02-29](/kusama/2281-kusama-parachain-2281/2024-02-29.md) | 854,195 | 1,038,461 | 13,746 |  |  | 4 | - 170,521 (92.54%) |   
| [2024-01-01 to 2024-01-31](/kusama/2281-kusama-parachain-2281/2024-01-31.md) | 809,153 | 854,194 | 4,964 |  |  | 4 | - 40,078 (88.98%) |   
| [2023-12-01 to 2023-12-31](/kusama/2281-kusama-parachain-2281/2023-12-31.md) |  |  |  |  |  | 4 | -  **BROKEN**  |   
| [2023-11-01 to 2023-11-30](/kusama/2281-kusama-parachain-2281/2023-11-30.md) |  |  |  |  |  | 4 | -   |   
| [2023-10-01 to 2023-10-31](/kusama/2281-kusama-parachain-2281/2023-10-31.md) |  |  |  |  |  | 4 | -   |   
| [2023-09-18 to 2023-09-28](/kusama/2281-kusama-parachain-2281/2023-09-30.md) |  |  |  |  |  | 4 | -   |   

## Tables:

* _Blocks_: `bigquery-public-data.crypto_kusama.blocks2281` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `bigquery-public-data.crypto_kusama.extrinsics2281` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `bigquery-public-data.crypto_kusama.events2281` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `bigquery-public-data.crypto_kusama.transfers2281` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `bigquery-public-data.crypto_kusama.balances2281` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `bigquery-public-data.crypto_kusama.accountsactive2281` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `bigquery-public-data.crypto_kusama.accountspassive2281` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `bigquery-public-data.crypto_kusama.accountsnew2281` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `bigquery-public-data.crypto_kusama.accountsreaped2281` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `bigquery-public-data.crypto_kusama.assets` (filter on `2281`) - [Schema](/schema/assets.json)
* _XCM Assets_: `bigquery-public-data.crypto_kusama.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `bigquery-public-data.crypto_kusama.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `bigquery-public-data.crypto_kusama.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `bigquery-public-data.crypto_kusama.blocks2281` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2281.json](https://cdn.polkaholic.io/substrate-etl/kusama/2281.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
