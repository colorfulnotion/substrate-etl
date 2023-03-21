# Kylin substrate-etl Summary (Monthly)

_Source_: [kylin.polkaholic.io](https://kylin.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2052



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-03-01 to 2023-03-21](/polkadot/2052-kylin/2023-03-31.md) | 703,587 | 773,068 | 69,476 | 50 | 3 | 1,107 | - 6 (0.01%) |   
| [2023-02-01 to 2023-02-28](/polkadot/2052-kylin/2023-02-28.md) | 602,893 | 703,586 | 100,694 | 88 | 4 | 1,106 | -   |   
| [2023-01-01 to 2023-01-31](/polkadot/2052-kylin/2023-01-31.md) | 472,512 | 602,892 | 130,381 | 106 | 4 | 1,106 | -   |   
| [2022-12-01 to 2022-12-31](/polkadot/2052-kylin/2022-12-31.md) | 335,848 | 472,511 | 136,664 | 101 | 4 | 1,104 | -   |   
| [2022-11-01 to 2022-11-30](/polkadot/2052-kylin/2022-11-30.md) | 227,968 | 335,847 | 107,880 | 110 | 4 | 1,103 | -   |   
| [2022-10-01 to 2022-10-31](/polkadot/2052-kylin/2022-10-31.md) | 116,721 | 227,967 | 111,247 | 160 | 5 | 1,102 | -   |   
| [2022-09-01 to 2022-09-30](/polkadot/2052-kylin/2022-09-30.md) | 9,549 | 116,720 | 107,172 | 220 | 4 | 1,065 | -   |   
| [2022-08-29 to 2022-08-31](/polkadot/2052-kylin/2022-08-31.md) | 1 | 9,548 | 9,548 |  | 1 | 1 | -   |   

## substrate-etl Tables:

* _Blocks_: `substrate-etl.polkadot.blocks2052` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.polkadot.extrinsics2052` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.polkadot.events2052` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.polkadot.transfers2052` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.polkadot.balances2052` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.polkadot.accountsactive2052` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.polkadot.accountspassive2052` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.polkadot.accountsnew2052` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.polkadot.accountsreaped2052` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.polkadot.assets` (filter on `2052`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.polkadot.blocks2052` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2052.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2052.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
