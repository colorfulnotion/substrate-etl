# Darwinia Crab substrate-etl Summary (Monthly)

_Source_: [crab.polkaholic.io](https://crab.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2105



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-24](/kusama/2105-crab/2023-02-28.md) | 1,626,478 | 1,680,655 | 54,178 | 173 | 2 | 54 | -   |   
| [2023-01-01 to 2023-01-31](/kusama/2105-crab/2023-01-31.md) | 1,485,472 | 1,626,477 | 141,006 | 200 | 3 | 52 | -   |   
| [2022-12-01 to 2022-12-31](/kusama/2105-crab/2022-12-31.md) | 1,301,385 | 1,485,471 | 184,087 | 138 |  | 52 | -   |   
| [2022-11-01 to 2022-11-30](/kusama/2105-crab/2022-11-30.md) | 1,121,318 | 1,301,384 | 180,067 | 306 |  | 52 | -   |   
| [2022-10-01 to 2022-10-31](/kusama/2105-crab/2022-10-31.md) | 939,405 | 1,121,317 | 181,913 | 158 |  | 50 | -   |   
| [2022-09-01 to 2022-09-30](/kusama/2105-crab/2022-09-30.md) | 769,067 | 939,404 | 170,338 | 185 |  | 49 | -   |   
| [2022-08-01 to 2022-08-31](/kusama/2105-crab/2022-08-31.md) | 626,183 | 769,066 | 142,884 | 327 |  | 46 | -   |   
| [2022-07-01 to 2022-07-31](/kusama/2105-crab/2022-07-31.md) | 487,952 | 626,182 | 138,231 | 317 |  | 38 | -   |   
| [2022-06-01 to 2022-06-30](/kusama/2105-crab/2022-06-30.md) | 345,981 | 487,951 | 141,971 | 223 |  | 26 | -   |   
| [2022-05-01 to 2022-05-31](/kusama/2105-crab/2022-05-31.md) | 218,831 | 345,980 | 127,150 | 29 |  | 11 | -   |   
| [2022-04-01 to 2022-04-30](/kusama/2105-crab/2022-04-30.md) | 127,901 | 218,830 | 90,930 |  |  | 8 | -   |   
| [2022-03-01 to 2022-03-31](/kusama/2105-crab/2022-03-31.md) | 26,711 | 127,900 | 101,190 | 2 |  | 8 | -   |   
| [2022-02-20 to 2022-02-28](/kusama/2105-crab/2022-02-28.md) | 1 | 26,710 | 26,710 | 5 |  | 8 | -   |   

## substrate-etl Tables:

* _Blocks_: `substrate-etl.kusama.blocks2105` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.kusama.extrinsics2105` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.kusama.events2105` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.kusama.transfers2105` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.kusama.balances2105` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.kusama.accountsactive2105` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.kusama.accountspassive2105` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.kusama.accountsnew2105` (date-partitioned by `ts`)  - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.kusama.accountsreaped2105` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.kusama.assets` (filter on `2105`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.kusama.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.kusama.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)

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


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2105.json](https://cdn.polkaholic.io/substrate-etl/kusama/2105.json) | See [Definitions](/DEFINITIONS.md) for details
