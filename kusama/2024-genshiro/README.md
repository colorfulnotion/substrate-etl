# Genshiro substrate-etl Summary (Monthly)

_Source_: [genshiro.polkaholic.io](https://genshiro.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2024



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-03-01 to 2023-03-17](/kusama/2024-genshiro/2023-03-31.md) | 2,455,356 | 2,563,885 | 107,349 | 4 | 3 | 31 | - 1,181 (1.09%) |   
| [2023-02-01 to 2023-02-28](/kusama/2024-genshiro/2023-02-28.md) | 2,266,382 | 2,455,355 | 188,974 | 35 | 4 | 31 | -   |   
| [2023-01-01 to 2023-01-31](/kusama/2024-genshiro/2023-01-31.md) | 2,057,920 | 2,266,381 | 208,462 | 12 | 3 | 25 | -   |   
| [2022-12-01 to 2022-12-31](/kusama/2024-genshiro/2022-12-31.md) | 1,858,070 | 2,057,919 | 199,850 | 35 | 4 | 25 | -   |   
| [2022-11-30 to 2022-11-30](/kusama/2024-genshiro/2022-11-30.md) | 1,852,351 | 1,858,069 | 5,719 |  | 3 | 25 | -   |   
| [2022-10-01 to 2022-10-31](/kusama/2024-genshiro/2022-10-31.md) | 1,656,662 | 1,852,350 | 195,689 | 62 | 4 | 25 | -   |   
| [2022-09-01 to 2022-09-30](/kusama/2024-genshiro/2022-09-30.md) | 1,468,939 | 1,656,661 | 187,723 | 52 | 4 | 24 | -   |   
| [2022-08-01 to 2022-08-31](/kusama/2024-genshiro/2022-08-31.md) | 1,296,614 | 1,468,938 | 172,325 | 104 | 4 | 24 | -   |   
| [2022-07-01 to 2022-07-31](/kusama/2024-genshiro/2022-07-31.md) | 1,126,691 | 1,296,613 | 169,923 | 30 | 4 | 24 | -   |   
| [2022-06-01 to 2022-06-30](/kusama/2024-genshiro/2022-06-30.md) | 949,677 | 1,126,690 | 177,014 | 18 | 3 | 24 | -   |   
| [2022-05-01 to 2022-05-31](/kusama/2024-genshiro/2022-05-31.md) | 786,673 | 949,676 | 163,004 | 85 | 4 | 24 | -   |   
| [2022-04-01 to 2022-04-30](/kusama/2024-genshiro/2022-04-30.md) | 672,663 | 786,672 | 114,010 | 25 | 4 | 23 | -   |   
| [2022-03-01 to 2022-03-31](/kusama/2024-genshiro/2022-03-31.md) | 540,619 | 672,662 | 132,044 | 34 | 4 | 23 | -   |   
| [2022-02-01 to 2022-02-28](/kusama/2024-genshiro/2022-02-28.md) | 407,116 | 540,618 | 133,503 |  | 3 | 20 | -   |   
| [2022-01-01 to 2022-01-31](/kusama/2024-genshiro/2022-01-31.md) | 208,306 | 407,115 | 198,810 |  | 3 | 20 | -   |   
| [2021-12-01 to 2021-12-31](/kusama/2024-genshiro/2021-12-31.md) | 18,756 | 208,305 | 189,550 | 2 | 3 | 20 | -   |   
| [2021-11-27 to 2021-11-30](/kusama/2024-genshiro/2021-11-30.md) | 1 | 18,755 | 18,755 |  | 3 | 20 | -   |   

## substrate-etl Tables:

* _Blocks_: `substrate-etl.kusama.blocks2024` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.kusama.extrinsics2024` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.kusama.events2024` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.kusama.transfers2024` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.kusama.balances2024` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.kusama.accountsactive2024` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.kusama.accountspassive2024` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.kusama.accountsnew2024` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.kusama.accountsreaped2024` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.kusama.assets` (filter on `2024`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.kusama.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.kusama.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.kusama.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.kusama.blocks2024` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2024.json](https://cdn.polkaholic.io/substrate-etl/kusama/2024.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
