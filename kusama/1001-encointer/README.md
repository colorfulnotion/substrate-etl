# Encointer substrate-etl Summary (Monthly)

_Source_: [encointer.polkaholic.io](https://encointer.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 1001
Status: Only partial index available: Old Decoding issues


| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-03-01 to 2023-03-17](/kusama/1001-encointer/2023-03-31.md) | 2,388,650 | 2,506,326 | 117,213 | 11 |  | 65 | - 464 (0.39%) |   
| [2023-02-01 to 2023-02-28](/kusama/1001-encointer/2023-02-28.md) | 2,190,832 | 2,388,649 | 197,199 | 29 | 1 | 65 | - 619 (0.31%) |   
| [2023-01-01 to 2023-01-31](/kusama/1001-encointer/2023-01-31.md) | 1,972,773 | 2,190,831 | 217,517 | 2 |  | 58 | - 542 (0.25%) |   
| [2022-12-01 to 2022-12-31](/kusama/1001-encointer/2022-12-31.md) | 1,791,307 | 1,972,772 | 180,844 | 5 |  | 58 | - 622 (0.34%) |   
| [2022-11-01 to 2022-11-30](/kusama/1001-encointer/2022-11-30.md) | 1,580,907 | 1,791,306 | 209,719 | 73 | 1 | 57 | - 681 (0.32%) |   
| [2022-10-01 to 2022-10-31](/kusama/1001-encointer/2022-10-31.md) | 1,364,286 | 1,580,906 | 216,221 | 126 | 1 | 54 | - 400 (0.18%) |   
| [2022-09-01 to 2022-09-30](/kusama/1001-encointer/2022-09-30.md) | 1,164,726 | 1,364,285 | 199,111 | 65 | 1 | 40 | - 449 (0.22%) |   
| [2022-08-01 to 2022-08-31](/kusama/1001-encointer/2022-08-31.md) | 996,274 | 1,164,725 | 168,205 | 88 | 1 | 36 | - 247 (0.15%) |   
| [2022-07-01 to 2022-07-31](/kusama/1001-encointer/2022-07-31.md) | 842,430 | 996,273 | 153,570 | 132 | 1 | 35 | - 274 (0.18%) |   
| [2022-06-01 to 2022-06-30](/kusama/1001-encointer/2022-06-30.md) | 682,655 | 842,429 | 158,473 | 82 | 1 | 20 | - 1,302 (0.81%) |   
| [2022-05-01 to 2022-05-31](/kusama/1001-encointer/2022-05-31.md) | 518,228 | 682,654 | 164,032 | 88 | 1 | 19 | - 395 (0.24%) |   
| [2022-04-01 to 2022-04-30](/kusama/1001-encointer/2022-04-30.md) | 405,493 | 518,227 | 112,735 | 49 | 1 | 17 | -   |   
| [2022-03-01 to 2022-03-31](/kusama/1001-encointer/2022-03-31.md) | 293,071 | 405,492 | 112,422 | 16 |  | 7 | -   |   
| [2022-02-01 to 2022-02-28](/kusama/1001-encointer/2022-02-28.md) | 156,173 | 293,070 | 136,898 | 1 |  | 3 | -   |   
| [2022-01-09 to 2022-01-31](/kusama/1001-encointer/2022-01-31.md) | 1 | 156,172 | 156,172 |  |  | 1 | -   |   

## Encointer Assets as of 2023-03-16



| Symbol | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID | 
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | --- |
| [KSM](/kusama/assets/KSM) | 65 | 12.72 $421.84 |   |    |   | $33.17 |   `{"Token":"KSM"}` | 

## substrate-etl Tables:

* _Blocks_: `substrate-etl.kusama.blocks1001` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.kusama.extrinsics1001` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.kusama.events1001` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.kusama.transfers1001` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.kusama.balances1001` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.kusama.accountsactive1001` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.kusama.accountspassive1001` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.kusama.accountsnew1001` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.kusama.accountsreaped1001` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.kusama.assets` (filter on `1001`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.kusama.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.kusama.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.kusama.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.kusama.blocks1001` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/1001.json](https://cdn.polkaholic.io/substrate-etl/kusama/1001.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
