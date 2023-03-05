# HydraDX substrate-etl Summary (Monthly)

_Source_: [hydradx.polkaholic.io](https://hydradx.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2034



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-28](/polkadot/2034-hydradx/2023-02-28.md) | 1,868,702 | 2,047,176 | 178,475 | 11,712 | 128 | 23,325 | -   |   
| [2023-01-01 to 2023-01-31](/polkadot/2034-hydradx/2023-01-31.md) | 1,672,353 | 1,868,701 | 196,349 | 33,155 | 222 | 23,205 | -   |   
| [2022-12-01 to 2022-12-31](/polkadot/2034-hydradx/2022-12-31.md) | 1,483,335 | 1,672,352 | 189,018 | 1,135 | 44 | 22,542 | -   |   
| [2022-11-01 to 2022-11-30](/polkadot/2034-hydradx/2022-11-30.md) | 1,326,016 | 1,483,334 | 157,319 | 1,154 | 43 | 22,421 | -   |   
| [2022-10-01 to 2022-10-31](/polkadot/2034-hydradx/2022-10-31.md) | 1,158,699 | 1,326,015 | 167,317 | 309 | 31 | 21,155 | -   |   
| [2022-09-01 to 2022-09-30](/polkadot/2034-hydradx/2022-09-30.md) | 997,422 | 1,158,698 | 161,277 | 198 | 29 | 21,147 | -   |   
| [2022-08-01 to 2022-08-31](/polkadot/2034-hydradx/2022-08-31.md) | 829,196 | 997,421 | 168,226 | 241 | 30 | 21,139 | -   |   
| [2022-07-01 to 2022-07-31](/polkadot/2034-hydradx/2022-07-31.md) | 658,260 | 829,195 | 170,936 | 508 | 35 | 21,131 | -   |   
| [2022-06-01 to 2022-06-30](/polkadot/2034-hydradx/2022-06-30.md) | 475,506 | 658,259 | 182,754 | 5 | 25 | 32 | -   |   
| [2022-05-01 to 2022-05-31](/polkadot/2034-hydradx/2022-05-31.md) | 288,657 | 475,505 | 186,849 | 7 | 24 | 32 | -   |   
| [2022-04-01 to 2022-04-30](/polkadot/2034-hydradx/2022-04-30.md) | 99,601 | 288,656 | 189,056 | 28 | 4 | 32 | -   |   
| [2022-03-12 to 2022-03-31](/polkadot/2034-hydradx/2022-03-31.md) | 1 | 99,600 | 99,600 | 30 | 12 | 28 | -   |   

## HydraDX Assets as of 2023-03-03



| Symbol | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID | 
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | --- |
| [DAI](/polkadot/assets/DAI) | 424 | 2,380,664.26 $2,380,664.26 |   |    |   | $1.00 |   `{"Token":"2"}` | 
| [DOT](/polkadot/assets/DOT) | 1,511 | 108,479.32 $654,526.07 |   |    |   | $6.03 |   `{"Token":"5"}` | 
| [HDX](/polkadot/assets/HDX) | 23,341 | 4,364,714,346.42  | 74,664.81  | 1,896,215,634.38   | 1,849,713,489.1  |  |   `{"Token":"HDX"}` | 
| [LRNA](/polkadot/assets/LRNA) | 116 | 265,319.51  |   |    |   |  |   `{"Token":"1"}` | 
| [WETH.ACA](/polkadot/assets/WETH.ACA) | 50 | 1,378.09  |   |    |   |  |   `{"Token":"4"}` | 
| [WBTC.ACA](/polkadot/assets/WBTC.ACA) | 22 | 48.23  |   |    |   |  |   `{"Token":"3"}` | 
| [APE](/polkadot/assets/APE) | 2 | 0.03  |   |    |   |  |   `{"Token":"6"}` | 

## substrate-etl Tables:

* _Blocks_: `substrate-etl.polkadot.blocks2034` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.polkadot.extrinsics2034` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.polkadot.events2034` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.polkadot.transfers2034` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.polkadot.balances2034` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.polkadot.accountsactive2034` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.polkadot.accountspassive2034` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.polkadot.accountsnew2034` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.polkadot.accountsreaped2034` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.polkadot.assets` (filter on `2034`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.polkadot.blocks2034` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2034.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2034.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
