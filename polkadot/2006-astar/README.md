# Astar substrate-etl Summary (Monthly)

_Source_: [astar.polkaholic.io](https://astar.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2006



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-25](/polkadot/2006-astar/2023-02-28.md) | 2,846,041 | 3,015,213 | 169,173 | 96,434 | 1,558 | 514,731 | -   |   
| [2023-01-01 to 2023-01-31](/polkadot/2006-astar/2023-01-31.md) | 2,627,100 | 2,846,040 | 218,941 | 71,429 | 1,083 | 497,293 | -   |   
| [2022-12-01 to 2022-12-31](/polkadot/2006-astar/2022-12-31.md) | 2,407,766 | 2,627,099 | 219,334 | 67,454 |  | 492,617 | -   |   
| [2022-11-01 to 2022-11-30](/polkadot/2006-astar/2022-11-30.md) | 2,194,230 | 2,407,765 | 213,536 | 67,224 |  | 483,513 | -   |   
| [2022-10-01 to 2022-10-31](/polkadot/2006-astar/2022-10-31.md) | 1,974,346 | 2,194,229 | 219,884 | 56,977 |  | 473,343 | -   |   
| [2022-09-01 to 2022-09-30](/polkadot/2006-astar/2022-09-30.md) | 1,764,390 | 1,974,345 | 209,956 | 115,520 |  | 468,869 | -   |   
| [2022-08-01 to 2022-08-31](/polkadot/2006-astar/2022-08-31.md) | 1,549,603 | 1,764,389 | 214,787 | 82,250 |  | 460,380 | -   |   
| [2022-07-01 to 2022-07-31](/polkadot/2006-astar/2022-07-31.md) | 1,344,165 | 1,549,602 | 205,438 | 60,525 |  | 387,859 | -   |   
| [2022-06-01 to 2022-06-30](/polkadot/2006-astar/2022-06-30.md) | 1,144,585 | 1,344,164 | 199,580 | 68,704 |  | 374,451 | -   |   
| [2022-05-01 to 2022-05-31](/polkadot/2006-astar/2022-05-31.md) | 934,201 | 1,144,584 | 210,384 | 121,958 |  | 348,723 | -   |   
| [2022-04-01 to 2022-04-30](/polkadot/2006-astar/2022-04-30.md) | 728,114 | 934,200 | 206,087 | 508,774 |  | 325,772 | -   |   
| [2022-03-01 to 2022-03-31](/polkadot/2006-astar/2022-03-31.md) | 513,374 | 728,113 | 214,740 | 752,560 |  | 109,624 | -   |   
| [2022-02-01 to 2022-02-28](/polkadot/2006-astar/2022-02-28.md) | 317,128 | 513,373 | 196,246 | 515,997 |  | 76,017 | -   |   
| [2022-01-01 to 2022-01-31](/polkadot/2006-astar/2022-01-31.md) | 96,275 | 317,127 | 220,853 | 143,823 |  | 55,485 | -   |   
| [2021-12-18 to 2021-12-31](/polkadot/2006-astar/2021-12-31.md) | 1 | 96,274 | 96,274 | 71 |  | 29 | -   |   

## substrate-etl Tables:

* _Blocks_: `substrate-etl.polkadot.blocks2006` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.polkadot.extrinsics2006` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.polkadot.events2006` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.polkadot.transfers2006` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.polkadot.balances2006` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.polkadot.accountsactive2006` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.polkadot.accountspassive2006` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.polkadot.accountsnew2006` (date-partitioned by `ts`)  - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.polkadot.accountsreaped2006` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.polkadot.assets` (filter on `2006`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.polkadot.blocks2006` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2006.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2006.json) | See [Definitions](/DEFINITIONS.md) for details
