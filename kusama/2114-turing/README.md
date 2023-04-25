# Turing substrate-etl Summary (Monthly)

_Source_: [turing.polkaholic.io](https://turing.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2114



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-04-01 to 2023-04-25](/kusama/2114-turing/2023-04-30.md) | 2,280,764 | 2,443,396 | 162,633 | 3,216 | 70 | 7,622 | -   |   
| [2023-03-01 to 2023-03-31](/kusama/2114-turing/2023-03-31.md) | 2,062,531 | 2,280,763 | 218,233 | 1,612 | 61 | 7,606 | -   |   
| [2023-02-01 to 2023-02-28](/kusama/2114-turing/2023-02-28.md) | 1,865,173 | 2,062,530 | 197,358 | 1,832 | 70 | 7,584 | -   |   
| [2023-01-01 to 2023-01-31](/kusama/2114-turing/2023-01-31.md) | 1,648,489 | 1,865,172 | 216,684 | 11,432 | 230 | 7,476 | -   |   
| [2022-12-01 to 2022-12-31](/kusama/2114-turing/2022-12-31.md) | 1,440,187 | 1,648,488 | 208,302 | 3,717 | 68 | 1,716 | -   |   
| [2022-11-01 to 2022-11-30](/kusama/2114-turing/2022-11-30.md) | 1,239,418 | 1,440,186 | 200,769 | 1,747 | 62 | 1,694 | -   |   
| [2022-10-01 to 2022-10-31](/kusama/2114-turing/2022-10-31.md) | 1,024,223 | 1,239,417 | 215,195 | 2,072 | 69 | 1,671 | -   |   
| [2022-09-01 to 2022-09-30](/kusama/2114-turing/2022-09-30.md) | 825,217 | 1,024,222 | 199,006 | 2,965 | 80 | 1,640 | -   |   
| [2022-08-01 to 2022-08-31](/kusama/2114-turing/2022-08-31.md) | 643,580 | 825,216 | 181,637 | 4,436 | 87 | 1,563 | -   |   
| [2022-07-01 to 2022-07-31](/kusama/2114-turing/2022-07-31.md) | 463,738 | 643,579 | 179,842 | 1,858 | 62 | 1,515 | -   |   
| [2022-06-01 to 2022-06-30](/kusama/2114-turing/2022-06-30.md) | 277,932 | 463,737 | 185,806 | 1,348 | 44 | 1,470 | -   |   
| [2022-05-01 to 2022-05-31](/kusama/2114-turing/2022-05-31.md) | 103,439 | 277,931 | 174,493 | 1,564 | 12 | 1,435 | -   |   
| [2022-04-03 to 2022-04-30](/kusama/2114-turing/2022-04-30.md) | 1 | 103,438 | 103,438 | 27 | 7 | 20 | -   |   

## substrate-etl Tables:

* _Blocks_: `substrate-etl.kusama.blocks2114` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.kusama.extrinsics2114` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.kusama.events2114` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.kusama.transfers2114` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.kusama.balances2114` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.kusama.accountsactive2114` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.kusama.accountspassive2114` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.kusama.accountsnew2114` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.kusama.accountsreaped2114` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.kusama.assets` (filter on `2114`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.kusama.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.kusama.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.kusama.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.kusama.blocks2114` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2114.json](https://cdn.polkaholic.io/substrate-etl/kusama/2114.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
