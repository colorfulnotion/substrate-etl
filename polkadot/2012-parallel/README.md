# Parallel substrate-etl Summary (Monthly)

_Source_: [parallel.polkaholic.io](https://parallel.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2012



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-03-01 to 2023-03-20](/polkadot/2012-parallel/2023-03-31.md) | 2,998,501 | 3,128,593 | 129,321 | 88,536 | 247 | 47,384 | - 772 (0.59%) |   
| [2023-02-01 to 2023-02-28](/polkadot/2012-parallel/2023-02-28.md) | 2,799,332 | 2,998,500 | 199,169 | 161,424 | 368 | 47,248 | -   |   
| [2023-01-01 to 2023-01-31](/polkadot/2012-parallel/2023-01-31.md) | 2,578,329 | 2,799,331 | 221,003 | 183,405 | 441 | 46,950 | -   |   
| [2022-12-01 to 2022-12-31](/polkadot/2012-parallel/2022-12-31.md) | 2,357,760 | 2,578,328 | 220,569 | 176,326 | 443 | 46,490 | -   |   
| [2022-11-01 to 2022-11-30](/polkadot/2012-parallel/2022-11-30.md) | 2,143,686 | 2,357,759 | 214,074 | 217,849 | 583 | 46,079 | -   |   
| [2022-10-01 to 2022-10-31](/polkadot/2012-parallel/2022-10-31.md) | 1,923,316 | 2,143,685 | 220,370 | 206,404 | 612 | 45,325 | -   |   
| [2022-09-01 to 2022-09-30](/polkadot/2012-parallel/2022-09-30.md) | 1,712,060 | 1,923,315 | 211,256 | 216,681 | 632 | 44,262 | -   |   
| [2022-08-01 to 2022-08-31](/polkadot/2012-parallel/2022-08-31.md) | 1,495,864 | 1,712,059 | 216,196 | 144,996 | 480 | 42,069 | -   |   
| [2022-07-01 to 2022-07-31](/polkadot/2012-parallel/2022-07-31.md) | 1,283,353 | 1,495,863 | 212,511 | 118,099 | 479 | 40,712 | -   |   
| [2022-06-01 to 2022-06-30](/polkadot/2012-parallel/2022-06-30.md) | 1,080,082 | 1,283,352 | 203,271 | 142,598 | 584 | 39,211 | -   |   
| [2022-05-01 to 2022-05-31](/polkadot/2012-parallel/2022-05-31.md) | 865,409 | 1,080,081 | 214,673 | 175,486 | 712 | 38,284 | -   |   
| [2022-04-01 to 2022-04-30](/polkadot/2012-parallel/2022-04-30.md) | 664,185 | 865,408 | 201,224 | 46,475 | 378 | 36,783 | -   |   
| [2022-03-01 to 2022-03-31](/polkadot/2012-parallel/2022-03-31.md) | 466,488 | 664,184 | 197,697 | 8,732 | 242 | 35,540 | -   |   
| [2022-02-01 to 2022-02-28](/polkadot/2012-parallel/2022-02-28.md) | 295,557 | 466,487 | 170,931 | 4,792 | 98 | 34,442 | -   |   
| [2022-01-01 to 2022-01-31](/polkadot/2012-parallel/2022-01-31.md) | 92,106 | 295,556 | 203,451 | 2,972 | 7 | 29,470 | -   |   
| [2021-12-18 to 2021-12-31](/polkadot/2012-parallel/2021-12-31.md) | 1 | 92,105 | 92,105 | 1 | 5 | 2 | -   |   

## substrate-etl Tables:

* _Blocks_: `substrate-etl.polkadot.blocks2012` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.polkadot.extrinsics2012` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.polkadot.events2012` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.polkadot.transfers2012` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.polkadot.balances2012` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.polkadot.accountsactive2012` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.polkadot.accountspassive2012` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.polkadot.accountsnew2012` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.polkadot.accountsreaped2012` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.polkadot.assets` (filter on `2012`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.polkadot.blocks2012` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2012.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2012.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
