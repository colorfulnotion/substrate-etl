# Composable Finance substrate-etl Summary (Monthly)

_Source_: [composable.polkaholic.io](https://composable.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2019



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-03-01 to 2023-03-11](/polkadot/2019-composable/2023-03-31.md) | 1,488,367 | 1,561,717 | 72,791 |  | 3 | 5 | - 560 (0.76%) |   
| [2023-02-01 to 2023-02-28](/polkadot/2019-composable/2023-02-28.md) | 1,289,521 | 1,488,366 | 198,846 | 3 | 3 | 5 | -   |   
| [2023-01-01 to 2023-01-31](/polkadot/2019-composable/2023-01-31.md) | 1,143,924 | 1,289,520 | 145,597 | 8 | 5 | 5 | -   |   
| [2022-12-01 to 2022-12-31](/polkadot/2019-composable/2022-12-31.md) | 1,028,926 | 1,143,923 | 114,998 |  | 4 | 2 | -   |   
| [2022-11-01 to 2022-11-30](/polkadot/2019-composable/2022-11-30.md) | 917,036 | 1,028,925 | 111,890 |  | 4 | 2 | -   |   
| [2022-10-01 to 2022-10-31](/polkadot/2019-composable/2022-10-31.md) | 807,381 | 917,035 | 109,655 | 3 | 4 | 2 | -   |   
| [2022-09-01 to 2022-09-30](/polkadot/2019-composable/2022-09-30.md) | 714,212 | 807,380 | 93,169 |  | 4 | 2 | -   |   
| [2022-08-01 to 2022-08-31](/polkadot/2019-composable/2022-08-31.md) | 613,546 | 714,211 | 100,666 | 1 | 4 | 2 | -   |   
| [2022-07-01 to 2022-07-31](/polkadot/2019-composable/2022-07-31.md) | 449,082 | 613,545 | 164,464 |  | 3 | 2 | -   |   
| [2022-06-01 to 2022-06-30](/polkadot/2019-composable/2022-06-30.md) | 294,395 | 449,081 | 154,687 |  | 3 | 2 | -   |   
| [2022-05-01 to 2022-05-31](/polkadot/2019-composable/2022-05-31.md) | 129,605 | 294,394 | 164,790 | 1 | 3 | 2 | -   |   
| [2022-04-12 to 2022-04-30](/polkadot/2019-composable/2022-04-30.md) | 36,000 | 129,604 | 93,605 |  |  | 2 | -   |   
| [2022-03-12 to 2022-03-19](/polkadot/2019-composable/2022-03-31.md) | 1 | 35,999 | 35,999 |  |  | 2 | -   |   

## Composable Finance Assets as of 2023-03-10



| Symbol | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID | 
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | --- |
| [LAYR](/polkadot/assets/LAYR) | 5 | 99,999,999.18  |   |    |   |  |   `{"Token":"LAYR"}` | 

## substrate-etl Tables:

* _Blocks_: `substrate-etl.polkadot.blocks2019` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.polkadot.extrinsics2019` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.polkadot.events2019` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.polkadot.transfers2019` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.polkadot.balances2019` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.polkadot.accountsactive2019` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.polkadot.accountspassive2019` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.polkadot.accountsnew2019` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.polkadot.accountsreaped2019` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.polkadot.assets` (filter on `2019`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.polkadot.blocks2019` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2019.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2019.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
