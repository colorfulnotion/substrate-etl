# Mangatax substrate-etl Summary (Monthly)

_Source_: [mangatax.polkaholic.io](https://mangatax.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2110



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-04-01 to 2023-04-26](/kusama/2110-mangatax/2023-04-30.md) | 2,025,908 | 2,207,675 | 181,768 | 5,365 | 69 | 1,945 | -   |   
| [2023-03-01 to 2023-03-31](/kusama/2110-mangatax/2023-03-31.md) | 1,828,508 | 2,025,907 | 197,400 | 5,208 | 51 | 1,886 | -   |   
| [2023-02-01 to 2023-02-28](/kusama/2110-mangatax/2023-02-28.md) | 1,640,995 | 1,828,507 | 187,513 | 4,855 | 52 | 1,774 | -   |   
| [2023-01-01 to 2023-01-31](/kusama/2110-mangatax/2023-01-31.md) | 1,436,133 | 1,640,994 | 204,862 | 13,115 | 57 | 1,651 | -   |   
| [2022-12-01 to 2022-12-31](/kusama/2110-mangatax/2022-12-31.md) | 1,240,087 | 1,436,132 | 196,046 | 7,277 | 45 | 1,476 | -   |   
| [2022-11-01 to 2022-11-30](/kusama/2110-mangatax/2022-11-30.md) | 1,042,543 | 1,240,086 | 197,544 | 6,722 | 48 | 1,317 | -   |   
| [2022-10-01 to 2022-10-31](/kusama/2110-mangatax/2022-10-31.md) | 830,803 | 1,042,542 | 211,740 | 6,556 | 47 | 1,271 | -   |   
| [2022-09-01 to 2022-09-30](/kusama/2110-mangatax/2022-09-30.md) | 636,727 | 830,802 | 194,076 | 7,696 | 51 | 1,244 | -   |   
| [2022-08-01 to 2022-08-31](/kusama/2110-mangatax/2022-08-31.md) | 473,310 | 636,726 | 163,417 | 3,417 | 38 | 1,204 | -   |   
| [2022-07-01 to 2022-07-31](/kusama/2110-mangatax/2022-07-31.md) | 326,257 | 473,309 | 147,053 | 1,940 | 29 | 1,085 | -   |   
| [2022-06-01 to 2022-06-30](/kusama/2110-mangatax/2022-06-30.md) | 199,153 | 326,256 | 127,104 | 4,273 | 42 | 1,074 | -   |   
| [2022-05-01 to 2022-05-31](/kusama/2110-mangatax/2022-05-31.md) | 61,315 | 199,152 | 137,838 | 52 | 4 | 11 | -   |   
| [2022-04-12 to 2022-04-30](/kusama/2110-mangatax/2022-04-30.md) | 1 | 61,314 | 61,313 | 10 | 3 | 8 | - 1 (0.00%) |   

## substrate-etl Tables:

* _Blocks_: `substrate-etl.kusama.blocks2110` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.kusama.extrinsics2110` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.kusama.events2110` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.kusama.transfers2110` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.kusama.balances2110` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.kusama.accountsactive2110` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.kusama.accountspassive2110` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.kusama.accountsnew2110` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.kusama.accountsreaped2110` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.kusama.assets` (filter on `2110`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.kusama.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.kusama.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.kusama.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.kusama.blocks2110` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2110.json](https://cdn.polkaholic.io/substrate-etl/kusama/2110.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
