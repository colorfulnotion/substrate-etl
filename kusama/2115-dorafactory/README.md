# Dora Factory substrate-etl Summary (Monthly)

_Source_: [dorafactory.polkaholic.io](https://dorafactory.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2115



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-25](/kusama/2115-dorafactory/2023-02-28.md) | 1,364,746 | 1,510,443 | 145,698 | 14 | 3 | 372 | -   |   
| [2023-01-01 to 2023-01-31](/kusama/2115-dorafactory/2023-01-31.md) | 1,183,033 | 1,364,745 | 181,713 | 14 | 3 | 372 | -   |   
| [2022-12-01 to 2022-12-31](/kusama/2115-dorafactory/2022-12-31.md) | 1,006,303 | 1,183,032 | 176,730 | 10 |  | 373 | -   |   
| [2022-11-01 to 2022-11-30](/kusama/2115-dorafactory/2022-11-30.md) | 831,862 | 1,006,302 | 174,441 | 18 |  | 373 | -   |   
| [2022-10-01 to 2022-10-31](/kusama/2115-dorafactory/2022-10-31.md) | 652,187 | 831,861 | 179,675 | 44 |  | 373 | -   |   
| [2022-09-01 to 2022-09-30](/kusama/2115-dorafactory/2022-09-30.md) | 481,123 | 652,186 | 171,064 | 15 |  | 371 | -   |   
| [2022-08-01 to 2022-08-31](/kusama/2115-dorafactory/2022-08-31.md) | 322,638 | 481,122 | 158,485 | 42 |  | 371 | -   |   
| [2022-07-01 to 2022-07-31](/kusama/2115-dorafactory/2022-07-31.md) | 166,140 | 322,637 | 156,498 | 50 |  | 370 | -   |   
| [2022-06-01 to 2022-06-30](/kusama/2115-dorafactory/2022-06-30.md) | 1,626 | 166,139 | 164,514 | 23 |  | 370 | -   |   
| [2022-05-31 to 2022-05-31](/kusama/2115-dorafactory/2022-05-31.md) | 1 | 1,625 | 1,625 |  |  | 4 | -   |   

## Dora Factory Assets as of 2023-02-24



| Symbol | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID | 
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | --- |
| [KSM](/kusama/assets/KSM) | 3 | 0.29 $13.27 |   |    |   | $45.75 |   `{"Token":"KSM"}` | 
| [DORA](/kusama/assets/DORA) | 372 | 50,000  |   | 103   |   |  |   `{"Token":"DORA"}` | 

## substrate-etl Tables:

* _Blocks_: `substrate-etl.kusama.blocks2115` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.kusama.extrinsics2115` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.kusama.events2115` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.kusama.transfers2115` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.kusama.balances2115` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.kusama.accountsactive2115` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.kusama.accountspassive2115` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.kusama.accountsnew2115` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.kusama.accountsreaped2115` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.kusama.assets` (filter on `2115`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.kusama.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.kusama.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.kusama.blocks2115` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2115.json](https://cdn.polkaholic.io/substrate-etl/kusama/2115.json) | See [Definitions](/DEFINITIONS.md) for details
