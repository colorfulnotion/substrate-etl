# Phala substrate-etl Summary (Monthly)

_Source_: [phala.polkaholic.io](https://phala.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2035



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-03-01 to 2023-03-05](/polkadot/2035-phala/2023-03-31.md) | 2,009,121 | 2,038,322 | 29,202 | 188 | 18 | 3,133 | -   |   
| [2023-02-01 to 2023-02-28](/polkadot/2035-phala/2023-02-28.md) | 1,809,602 | 2,009,120 | 199,519 | 924 | 26 | 3,128 | -   |   
| [2023-01-01 to 2023-01-31](/polkadot/2035-phala/2023-01-31.md) | 1,587,962 | 1,809,601 | 221,640 | 616 | 20 | 3,021 | -   |   
| [2022-12-01 to 2022-12-31](/polkadot/2035-phala/2022-12-31.md) | 1,367,180 | 1,587,961 | 220,782 | 502 |  | 2,979 | -   |   
| [2022-11-01 to 2022-11-30](/polkadot/2035-phala/2022-11-30.md) | 1,153,086 | 1,367,179 | 214,094 | 812 |  | 2,925 | -   |   
| [2022-10-01 to 2022-10-31](/polkadot/2035-phala/2022-10-31.md) | 932,129 | 1,153,085 | 220,957 | 1,297 |  | 2,791 | -   |   
| [2022-09-01 to 2022-09-30](/polkadot/2035-phala/2022-09-30.md) | 721,408 | 932,128 | 210,721 | 576 |  | 2,630 | -   |   
| [2022-08-01 to 2022-08-31](/polkadot/2035-phala/2022-08-31.md) | 505,584 | 721,407 | 215,824 | 395 |  | 2,563 | -   |   
| [2022-07-01 to 2022-07-31](/polkadot/2035-phala/2022-07-31.md) | 293,542 | 505,583 | 212,042 | 325 |  | 2,507 | -   |   
| [2022-06-01 to 2022-06-30](/polkadot/2035-phala/2022-06-30.md) | 92,105 | 293,541 | 201,437 | 284 |  | 2,466 | -   |   
| [2022-05-31 to 2022-05-31](/polkadot/2035-phala/2022-05-31.md) | 90,052 | 92,104 | 2,053 |  |  | 5 | -   |   
| [2022-04-01 to 2022-04-15](/polkadot/2035-phala/2022-04-30.md) | 1 | 90,051 | 90,051 |  |  | 5 | -   |   

## Phala Assets as of 2023-03-03



| Symbol | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID | 
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | --- |
| [PHA](/polkadot/assets/PHA) | 3,133 | 541,799,866.78 $90,466,167.05 | 133.15 $22.23 | 11,321,141.64  $1,890,329.54 |   | $0.17 |   `{"Token":"PHA"}` | 
| [GLMR](/polkadot/assets/GLMR) | 11 | 36.53 $14.97 |   |    |   | $0.41 |   `{"Token":"1"}` | 
| [ASTR](/polkadot/assets/ASTR) | 11 | 105.33 $7.31 |   |    |   | $0.07 |   `{"Token":"6"}` | 
| [PARA](/polkadot/assets/PARA) | 5 | 55.56 $0.63 |   |    |   | $0.01 |   `{"Token":"2"}` | 
| [EQ](/polkadot/assets/EQ) | 2 | 807.76  |   |    |   |  |   `{"Token":"9"}` | 

## substrate-etl Tables:

* _Blocks_: `substrate-etl.polkadot.blocks2035` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.polkadot.extrinsics2035` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.polkadot.events2035` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.polkadot.transfers2035` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.polkadot.balances2035` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.polkadot.accountsactive2035` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.polkadot.accountspassive2035` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.polkadot.accountsnew2035` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.polkadot.accountsreaped2035` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.polkadot.assets` (filter on `2035`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.polkadot.blocks2035` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2035.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2035.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
