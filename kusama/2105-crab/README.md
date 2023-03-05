# Darwinia Crab substrate-etl Summary (Monthly)

_Source_: [crab.polkaholic.io](https://crab.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2105



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-03-01 to 2023-03-05](/kusama/2105-crab/2023-03-31.md) | 1,692,087 | 1,711,935 | 19,849 | 22 | 2 | 54 | -   |   
| [2023-02-01 to 2023-02-28](/kusama/2105-crab/2023-02-28.md) | 1,626,478 | 1,692,086 | 65,609 | 192 | 2 | 54 | -   |   
| [2023-01-01 to 2023-01-31](/kusama/2105-crab/2023-01-31.md) | 1,485,472 | 1,626,477 | 141,006 | 200 | 3 | 52 | -   |   
| [2022-12-01 to 2022-12-31](/kusama/2105-crab/2022-12-31.md) | 1,301,385 | 1,485,471 | 184,087 | 138 | 4 | 52 | -   |   
| [2022-11-01 to 2022-11-30](/kusama/2105-crab/2022-11-30.md) | 1,121,318 | 1,301,384 | 180,067 | 306 | 5 | 52 | -   |   
| [2022-10-01 to 2022-10-31](/kusama/2105-crab/2022-10-31.md) | 939,405 | 1,121,317 | 181,913 | 158 | 5 | 50 | -   |   
| [2022-09-01 to 2022-09-30](/kusama/2105-crab/2022-09-30.md) | 769,067 | 939,404 | 170,338 | 185 | 5 | 49 | -   |   
| [2022-08-01 to 2022-08-31](/kusama/2105-crab/2022-08-31.md) | 626,183 | 769,066 | 142,884 | 327 | 7 | 46 | -   |   
| [2022-07-01 to 2022-07-31](/kusama/2105-crab/2022-07-31.md) | 487,952 | 626,182 | 138,231 | 317 | 9 | 38 | -   |   
| [2022-06-01 to 2022-06-30](/kusama/2105-crab/2022-06-30.md) | 345,981 | 487,951 | 141,971 | 223 | 8 | 26 | -   |   
| [2022-05-01 to 2022-05-31](/kusama/2105-crab/2022-05-31.md) | 218,831 | 345,980 | 127,150 | 29 | 6 | 11 | -   |   
| [2022-04-01 to 2022-04-30](/kusama/2105-crab/2022-04-30.md) | 127,901 | 218,830 | 90,930 |  | 6 | 8 | -   |   
| [2022-03-01 to 2022-03-31](/kusama/2105-crab/2022-03-31.md) | 26,711 | 127,900 | 101,190 | 2 | 6 | 8 | -   |   
| [2022-02-20 to 2022-02-28](/kusama/2105-crab/2022-02-28.md) | 1 | 26,710 | 26,710 | 5 | 6 | 8 | -   |   

## Darwinia Crab Assets as of 2023-03-03



| Symbol | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID | 
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | --- |
| [CRAB](/kusama/assets/CRAB) | 54 | 464,475.52 $463.18 |   | 612  $0.61 | 612 $0.61 | - |   `{"Token":"CRAB"}` | 

## substrate-etl Tables:

* _Blocks_: `substrate-etl.kusama.blocks2105` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.kusama.extrinsics2105` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.kusama.events2105` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.kusama.transfers2105` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.kusama.balances2105` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.kusama.accountsactive2105` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.kusama.accountspassive2105` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.kusama.accountsnew2105` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.kusama.accountsreaped2105` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.kusama.assets` (filter on `2105`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.kusama.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.kusama.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.kusama.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.kusama.blocks2105` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2105.json](https://cdn.polkaholic.io/substrate-etl/kusama/2105.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
