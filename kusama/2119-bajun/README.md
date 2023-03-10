# Bajun Network substrate-etl Summary (Monthly)

_Source_: [bajun.polkaholic.io](https://bajun.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2119



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-03-01 to 2023-03-10](/kusama/2119-bajun/2023-03-31.md) | 1,595,381 | 1,661,252 | 65,164 | 6,898 | 100 | 5,847 | - 708 (1.07%) |   
| [2023-02-01 to 2023-02-28](/kusama/2119-bajun/2023-02-28.md) | 1,397,502 | 1,595,380 | 197,879 | 190,118 | 213 | 5,830 | -   |   
| [2023-01-01 to 2023-01-31](/kusama/2119-bajun/2023-01-31.md) | 1,179,201 | 1,397,501 | 218,301 | 1,505 | 24 | 4,244 | -   |   
| [2022-12-01 to 2022-12-31](/kusama/2119-bajun/2022-12-31.md) | 969,372 | 1,179,200 | 209,829 | 1,710 | 41 | 3,686 | -   |   
| [2022-11-01 to 2022-11-30](/kusama/2119-bajun/2022-11-30.md) | 772,506 | 969,371 | 196,866 | 55 | 5 | 3,291 | -   |   
| [2022-10-01 to 2022-10-31](/kusama/2119-bajun/2022-10-31.md) | 556,790 | 772,505 | 215,716 | 150 | 6 | 3,285 | -   |   
| [2022-09-01 to 2022-09-30](/kusama/2119-bajun/2022-09-30.md) | 358,487 | 556,789 | 198,303 | 10 | 3 | 11 | -   |   
| [2022-08-01 to 2022-08-31](/kusama/2119-bajun/2022-08-31.md) | 180,292 | 358,486 | 178,195 | 3 | 2 | 7 | -   |   
| [2022-07-01 to 2022-07-31](/kusama/2119-bajun/2022-07-31.md) | 658 | 180,291 | 179,634 |  | 3 | 4 | -   |   
| [2022-06-30 to 2022-06-30](/kusama/2119-bajun/2022-06-30.md) | 1 | 657 | 657 |  | 2 | 4 | -   |   

## Bajun Network Assets as of 2023-03-06



| Symbol | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID | 
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | --- |
| [BAJU](/kusama/assets/BAJU) | 5,841 | 49,753,654.14  | 5,582.79  | 6,612,310.22   | 6,612,310.22  |  |   `{"Token":"BAJU"}` | 

## substrate-etl Tables:

* _Blocks_: `substrate-etl.kusama.blocks2119` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.kusama.extrinsics2119` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.kusama.events2119` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.kusama.transfers2119` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.kusama.balances2119` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.kusama.accountsactive2119` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.kusama.accountspassive2119` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.kusama.accountsnew2119` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.kusama.accountsreaped2119` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.kusama.assets` (filter on `2119`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.kusama.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.kusama.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.kusama.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.kusama.blocks2119` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2119.json](https://cdn.polkaholic.io/substrate-etl/kusama/2119.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
