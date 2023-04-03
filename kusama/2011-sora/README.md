# SORA substrate-etl Summary (Monthly)

_Source_: [sora.polkaholic.io](https://sora.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2011
Status: Archive node unavailable


| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-04-01 to 2023-04-02](/kusama/2011-sora/2023-04-30.md) | 1,359,068 | 1,372,937 | 13,870 |  |  |  | -   |   
| [2023-03-25 to 2023-03-31](/kusama/2011-sora/2023-03-31.md) | 1,315,465 | 1,359,067 | 43,321 |  |  |  | - 282 (0.65%) |   
| [2023-01-01 to 2023-01-24](/kusama/2011-sora/2023-01-31.md) | 1,090,754 | 1,255,192 | 164,439 |  | 1 | 3 | -  **BROKEN**  |   
| [2022-12-01 to 2022-12-31](/kusama/2011-sora/2022-12-31.md) | 882,691 | 1,090,753 | 208,063 |  |  | 3 | -   |   
| [2022-11-01 to 2022-11-30](/kusama/2011-sora/2022-11-30.md) | 692,820 | 882,690 | 189,871 |  |  | 3 | -   |   
| [2022-10-01 to 2022-10-31](/kusama/2011-sora/2022-10-31.md) | 478,432 | 692,819 | 214,388 |  |  | 3 | -   |   
| [2022-09-01 to 2022-09-30](/kusama/2011-sora/2022-09-30.md) | 284,581 | 478,431 | 193,851 |  |  | 3 | -   |   
| [2022-08-01 to 2022-08-31](/kusama/2011-sora/2022-08-31.md) | 109,657 | 284,580 | 174,924 |  |  | 3 | -   |   
| [2022-07-12 to 2022-07-31](/kusama/2011-sora/2022-07-31.md) | 1 | 109,656 | 109,656 |  |  | 3 | -   |   

## substrate-etl Tables:

* _Blocks_: `substrate-etl.kusama.blocks2011` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.kusama.extrinsics2011` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.kusama.events2011` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.kusama.transfers2011` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.kusama.balances2011` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.kusama.accountsactive2011` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.kusama.accountspassive2011` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.kusama.accountsnew2011` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.kusama.accountsreaped2011` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.kusama.assets` (filter on `2011`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.kusama.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.kusama.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.kusama.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.kusama.blocks2011` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2011.json](https://cdn.polkaholic.io/substrate-etl/kusama/2011.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)