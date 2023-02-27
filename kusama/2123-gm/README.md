# GM Parachain substrate-etl Summary (Monthly)

_Source_: [gm.polkaholic.io](https://gm.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2123



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-27](/kusama/2123-gm/2023-02-28.md) | 892,317 | 1,006,262 | 113,946 | 694 | 11 | 9,106 | -   |   
| [2023-01-01 to 2023-01-31](/kusama/2123-gm/2023-01-31.md) | 740,806 | 892,316 | 151,511 | 697 | 13 | 9,100 | -   |   
| [2022-12-01 to 2022-12-31](/kusama/2123-gm/2022-12-31.md) | 581,227 | 740,805 | 159,579 | 1,358 |  | 9,097 | -   |   
| [2022-11-01 to 2022-11-30](/kusama/2123-gm/2022-11-30.md) | 419,791 | 581,226 | 161,436 | 3,460 |  | 9,092 | -   |   
| [2022-10-01 to 2022-10-31](/kusama/2123-gm/2022-10-31.md) | 254,949 | 419,790 | 164,842 | 8,547 |  | 9,083 | -   |   
| [2022-09-01 to 2022-09-30](/kusama/2123-gm/2022-09-30.md) | 85,830 | 254,948 | 169,119 | 27,794 |  | 9,025 | -   |   
| [2022-08-15 to 2022-08-31](/kusama/2123-gm/2022-08-31.md) | 1 | 85,829 | 85,829 | 163 |  | 45 | -   |   

## GM Parachain Assets as of 2023-02-24



| Symbol | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID | 
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | --- |
| [FREN](/kusama/assets/FREN) | 9,105 | 692,446,589  | 37,750  | 98,868,650.86   | 98,868,650.86  |  |   `{"Token":"FREN"}` | 

## substrate-etl Tables:

* _Blocks_: `substrate-etl.kusama.blocks2123` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.kusama.extrinsics2123` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.kusama.events2123` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.kusama.transfers2123` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.kusama.balances2123` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.kusama.accountsactive2123` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.kusama.accountspassive2123` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.kusama.accountsnew2123` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.kusama.accountsreaped2123` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.kusama.assets` (filter on `2123`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.kusama.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.kusama.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.kusama.blocks2123` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2123.json](https://cdn.polkaholic.io/substrate-etl/kusama/2123.json) | See [Definitions](/DEFINITIONS.md) for details
