# Nodle substrate-etl Summary (Monthly)

_Source_: [nodle.polkaholic.io](https://nodle.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2026



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-04-01 to 2023-04-01](/polkadot/2026-nodle/2023-04-30.md) | 2,375,573 | 2,381,302 | 5,730 | 2,129 |  |  | -   |   
| [2023-03-01 to 2023-03-31](/polkadot/2026-nodle/2023-03-31.md) | 2,166,684 | 2,375,572 | 208,889 | 65,283 | 1,300 | 739,258 | -   |   
| [2023-02-01 to 2023-02-28](/polkadot/2026-nodle/2023-02-28.md) | 1,967,955 | 2,166,683 | 198,729 | 56,004 | 1,352 | 711,279 | -   |   
| [2023-01-01 to 2023-01-31](/polkadot/2026-nodle/2023-01-31.md) | 1,747,359 | 1,967,954 | 220,596 | 42,018 | 956 | 684,937 | -   |   
| [2022-12-01 to 2022-12-31](/polkadot/2026-nodle/2022-12-31.md) | 1,527,413 | 1,747,358 | 219,946 | 26,649 | 587 | 662,613 | -   |   
| [2022-11-01 to 2022-11-30](/polkadot/2026-nodle/2022-11-30.md) | 1,314,477 | 1,527,412 | 212,936 | 27,795 | 648 | 651,074 | -   |   
| [2022-10-01 to 2022-10-31](/polkadot/2026-nodle/2022-10-31.md) | 1,093,803 | 1,314,476 | 220,674 | 282,305 | 8,777 | 716,738 | -   |   
| [2022-09-01 to 2022-09-30](/polkadot/2026-nodle/2022-09-30.md) | 882,252 | 1,093,802 | 211,551 | 134,872 | 4,021 | 698,455 | -   |   
| [2022-08-01 to 2022-08-31](/polkadot/2026-nodle/2022-08-31.md) | 665,361 | 882,251 | 216,891 | 326,215 | 9,980 | 560,440 | -   |   
| [2022-07-01 to 2022-07-31](/polkadot/2026-nodle/2022-07-31.md) | 468,196 | 665,360 | 197,165 | 167,884 | 4,615 | 505,397 | -   |   
| [2022-06-01 to 2022-06-30](/polkadot/2026-nodle/2022-06-30.md) | 340,966 | 468,195 | 127,230 | 53,930 | 1,177 | 468,722 | -   |   
| [2022-05-01 to 2022-05-31](/polkadot/2026-nodle/2022-05-31.md) | 212,127 | 340,965 | 128,839 | 43,308 | 1,233 | 447,980 | -   |   
| [2022-04-01 to 2022-04-30](/polkadot/2026-nodle/2022-04-30.md) | 84,991 | 212,126 | 127,136 |  | 3 | 4 | -   |   
| [2022-03-12 to 2022-03-31](/polkadot/2026-nodle/2022-03-31.md) | 1 | 84,990 | 84,990 |  |  | 4 | -   |   

## substrate-etl Tables:

* _Blocks_: `substrate-etl.polkadot.blocks2026` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.polkadot.extrinsics2026` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.polkadot.events2026` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.polkadot.transfers2026` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.polkadot.balances2026` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.polkadot.accountsactive2026` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.polkadot.accountspassive2026` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.polkadot.accountsnew2026` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.polkadot.accountsreaped2026` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.polkadot.assets` (filter on `2026`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.polkadot.blocks2026` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2026.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2026.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
