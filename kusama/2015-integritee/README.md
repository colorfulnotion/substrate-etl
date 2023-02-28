# Integritee substrate-etl Summary (Monthly)

_Source_: [integritee.polkaholic.io](https://integritee.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2015



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-28](/kusama/2015-integritee/2023-02-28.md) | 1,925,180 | 2,115,682 | 190,476 | 1,062 | 24 | 12,971 | - 27 (0.01%) |   
| [2023-01-01 to 2023-01-31](/kusama/2015-integritee/2023-01-31.md) | 1,707,931 | 1,925,179 | 217,249 | 1,450 | 23 | 12,922 | -   |   
| [2022-12-01 to 2022-12-31](/kusama/2015-integritee/2022-12-31.md) | 1,499,268 | 1,707,930 | 208,663 | 1,017 |  | 12,871 | -   |   
| [2022-11-01 to 2022-11-30](/kusama/2015-integritee/2022-11-30.md) | 1,290,448 | 1,499,267 | 208,820 | 1,420 |  | 12,839 | -   |   
| [2022-10-01 to 2022-10-31](/kusama/2015-integritee/2022-10-31.md) | 1,075,264 | 1,290,447 | 215,184 | 1,442 |  | 12,742 | -   |   
| [2022-09-01 to 2022-09-30](/kusama/2015-integritee/2022-09-30.md) | 876,474 | 1,075,263 | 198,790 | 1,971 |  | 12,654 | -   |   
| [2022-08-01 to 2022-08-31](/kusama/2015-integritee/2022-08-31.md) | 695,146 | 876,473 | 181,328 | 1,647 |  | 12,600 | -   |   
| [2022-07-01 to 2022-07-31](/kusama/2015-integritee/2022-07-31.md) | 515,486 | 695,145 | 179,660 | 1,243 |  | 11,511 | -   |   
| [2022-06-01 to 2022-06-30](/kusama/2015-integritee/2022-06-30.md) | 327,217 | 515,485 | 188,269 | 1,430 |  | 11,443 | -   |   
| [2022-05-01 to 2022-05-31](/kusama/2015-integritee/2022-05-31.md) | 151,997 | 327,216 | 175,220 | 1,734 |  | 11,373 | -   |   
| [2022-04-01 to 2022-04-30](/kusama/2015-integritee/2022-04-30.md) | 36,169 | 151,996 | 115,828 | 1,584 |  | 11,233 | -   |   
| [2022-03-21 to 2022-03-31](/kusama/2015-integritee/2022-03-31.md) | 1 | 36,168 | 36,168 |  |  | 1 | -   |   

## Integritee Assets as of 2023-02-26



| Symbol | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID | 
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | --- |
| [TEER](/kusama/assets/TEER) | 12,968 | 9,997,760.44 $4,633,989.13 | 89.35 $41.42 | 1,612,093.18  $747,209.57 |   | $0.46 |   `{"Token":"TEER"}` | 

## substrate-etl Tables:

* _Blocks_: `substrate-etl.kusama.blocks2015` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.kusama.extrinsics2015` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.kusama.events2015` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.kusama.transfers2015` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.kusama.balances2015` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.kusama.accountsactive2015` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.kusama.accountspassive2015` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.kusama.accountsnew2015` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.kusama.accountsreaped2015` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.kusama.assets` (filter on `2015`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.kusama.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.kusama.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.kusama.blocks2015` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2015.json](https://cdn.polkaholic.io/substrate-etl/kusama/2015.json) | See [Definitions](/DEFINITIONS.md) for details
