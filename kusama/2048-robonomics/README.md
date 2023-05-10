# Robonomics substrate-etl Summary (Monthly)

_Source_: [robonomics.polkaholic.io](https://robonomics.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2048



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-05-01 to 2023-05-10](/kusama/2048-robonomics/2023-05-31.md) | 3,015,730 | 3,077,368 | 61,639 | 11,769 | 18 | 2,999 | -   |   
| [2023-04-01 to 2023-04-30](/kusama/2048-robonomics/2023-04-30.md) | 2,804,974 | 3,015,729 | 210,756 | 37,260 | 20 | 2,987 | -   |   
| [2023-03-01 to 2023-03-31](/kusama/2048-robonomics/2023-03-31.md) | 2,584,800 | 2,804,973 | 220,174 | 54,152 | 32 | 2,978 | -   |   
| [2023-02-01 to 2023-02-28](/kusama/2048-robonomics/2023-02-28.md) | 2,385,571 | 2,584,799 | 199,229 | 37,998 | 35 | 2,937 | -   |   
| [2023-01-01 to 2023-01-31](/kusama/2048-robonomics/2023-01-31.md) | 2,165,671 | 2,385,570 | 219,900 | 36,137 | 32 | 2,867 | -   |   
| [2022-12-01 to 2022-12-31](/kusama/2048-robonomics/2022-12-31.md) | 1,953,566 | 2,165,670 | 212,105 | 46,241 | 34 | 2,804 | -   |   
| [2022-11-01 to 2022-11-30](/kusama/2048-robonomics/2022-11-30.md) | 1,741,172 | 1,953,565 | 212,394 | 44,396 | 35 | 2,745 | -   |   
| [2022-10-01 to 2022-10-31](/kusama/2048-robonomics/2022-10-31.md) | 1,521,856 | 1,741,171 | 219,316 | 36,235 | 36 | 2,713 | -   |   
| [2022-09-01 to 2022-09-30](/kusama/2048-robonomics/2022-09-30.md) | 1,318,927 | 1,521,855 | 202,929 | 47,205 | 35 | 2,682 | -   |   
| [2022-08-01 to 2022-08-31](/kusama/2048-robonomics/2022-08-31.md) | 1,132,818 | 1,318,926 | 186,109 | 219,335 | 34 | 2,655 | -   |   
| [2022-07-01 to 2022-07-31](/kusama/2048-robonomics/2022-07-31.md) | 947,513 | 1,132,817 | 185,305 | 685,086 | 30 | 2,627 | -   |   
| [2022-06-01 to 2022-06-30](/kusama/2048-robonomics/2022-06-30.md) | 751,435 | 947,512 | 196,078 | 686,111 | 34 | 2,584 | -   |   
| [2022-05-01 to 2022-05-31](/kusama/2048-robonomics/2022-05-31.md) | 569,336 | 751,434 | 182,099 | 795,478 | 29 | 2,554 | -   |   
| [2022-04-01 to 2022-04-30](/kusama/2048-robonomics/2022-04-30.md) | 442,337 | 569,335 | 126,999 | 467,661 | 27 | 2,535 | -   |   
| [2022-03-01 to 2022-03-31](/kusama/2048-robonomics/2022-03-31.md) | 298,595 | 442,336 | 143,742 | 456,332 | 45 | 2,521 | -   |   
| [2022-02-01 to 2022-02-28](/kusama/2048-robonomics/2022-02-28.md) | 158,459 | 298,594 | 140,136 | 599,259 | 40 | 2,387 | -   |   
| [2022-01-09 to 2022-01-31](/kusama/2048-robonomics/2022-01-31.md) | 1 | 158,458 | 158,458 | 219,693 | 30 | 2,356 | -   |   

## substrate-etl Tables:

* _Blocks_: `substrate-etl.kusama.blocks2048` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.kusama.extrinsics2048` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.kusama.events2048` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.kusama.transfers2048` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.kusama.balances2048` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.kusama.accountsactive2048` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.kusama.accountspassive2048` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.kusama.accountsnew2048` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.kusama.accountsreaped2048` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.kusama.assets` (filter on `2048`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.kusama.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.kusama.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.kusama.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.kusama.blocks2048` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2048.json](https://cdn.polkaholic.io/substrate-etl/kusama/2048.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
