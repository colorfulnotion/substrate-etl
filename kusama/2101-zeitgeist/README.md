# Zeitgeist substrate-etl Summary (Monthly)

_Source_: [zeitgeist.polkaholic.io](https://zeitgeist.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2101



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-04-01 to 2023-04-08](/kusama/2101-zeitgeist/2023-04-30.md) | 2,636,653 | 2,693,707 | 49,907 | 723 | 24 | 15,635 | - 7,148 (12.53%) |   
| [2023-03-01 to 2023-03-31](/kusama/2101-zeitgeist/2023-03-31.md) | 2,420,160 | 2,636,652 | 202,256 | 3,061 | 48 | 15,624 | - 14,237 (6.58%) |   
| [2023-02-01 to 2023-02-28](/kusama/2101-zeitgeist/2023-02-28.md) | 2,224,848 | 2,420,159 | 195,312 | 3,035 | 61 | 15,516 | -   |   
| [2023-01-01 to 2023-01-31](/kusama/2101-zeitgeist/2023-01-31.md) | 2,007,845 | 2,224,847 | 217,003 | 3,103 | 54 | 15,366 | -   |   
| [2022-12-01 to 2022-12-31](/kusama/2101-zeitgeist/2022-12-31.md) | 1,806,290 | 2,007,844 | 201,555 | 4,113 | 61 | 15,180 | -   |   
| [2022-11-01 to 2022-11-30](/kusama/2101-zeitgeist/2022-11-30.md) | 1,604,190 | 1,806,289 | 202,100 | 4,209 | 60 | 15,042 | -   |   
| [2022-10-01 to 2022-10-31](/kusama/2101-zeitgeist/2022-10-31.md) | 1,390,149 | 1,604,189 | 214,041 | 4,565 | 65 | 14,979 | -   |   
| [2022-09-01 to 2022-09-30](/kusama/2101-zeitgeist/2022-09-30.md) | 1,194,550 | 1,390,148 | 195,599 | 11,131 | 87 | 14,980 | -   |   
| [2022-08-01 to 2022-08-31](/kusama/2101-zeitgeist/2022-08-31.md) | 1,012,836 | 1,194,549 | 181,714 | 6,189 | 98 | 14,857 | -   |   
| [2022-07-01 to 2022-07-31](/kusama/2101-zeitgeist/2022-07-31.md) | 827,775 | 1,012,835 | 185,061 | 9,273 | 125 | 14,549 | -   |   
| [2022-06-01 to 2022-06-30](/kusama/2101-zeitgeist/2022-06-30.md) | 636,479 | 827,774 | 191,296 | 2,137 | 29 | 13,858 | -   |   
| [2022-05-01 to 2022-05-31](/kusama/2101-zeitgeist/2022-05-31.md) | 465,825 | 636,478 | 170,654 | 4 |  | 6 | -   |   
| [2022-04-01 to 2022-04-30](/kusama/2101-zeitgeist/2022-04-30.md) | 365,227 | 465,824 | 100,598 | 2 |  | 5 | -   |   
| [2022-03-01 to 2022-03-31](/kusama/2101-zeitgeist/2022-03-31.md) | 236,745 | 365,226 | 128,482 |  |  | 5 | -   |   
| [2022-02-01 to 2022-02-28](/kusama/2101-zeitgeist/2022-02-28.md) | 128,085 | 236,744 | 108,660 | 5 |  | 5 | -   |   
| [2022-01-13 to 2022-01-31](/kusama/2101-zeitgeist/2022-01-31.md) | 1 | 128,084 | 128,084 | 3 |  |  | -   |   

## substrate-etl Tables:

* _Blocks_: `substrate-etl.kusama.blocks2101` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.kusama.extrinsics2101` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.kusama.events2101` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.kusama.transfers2101` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.kusama.balances2101` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.kusama.accountsactive2101` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.kusama.accountspassive2101` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.kusama.accountsnew2101` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.kusama.accountsreaped2101` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.kusama.assets` (filter on `2101`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.kusama.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.kusama.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.kusama.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.kusama.blocks2101` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2101.json](https://cdn.polkaholic.io/substrate-etl/kusama/2101.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
