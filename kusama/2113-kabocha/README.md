# Kabocha substrate-etl Summary (Monthly)

_Source_: [kabocha.polkaholic.io](https://kabocha.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2113



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-03-01 to 2023-03-14](/kusama/2113-kabocha/2023-03-31.md) | 1,338,346 | 1,419,638 | 80,438 |  | 3 | 13,224 | - 855 (1.05%) |   
| [2023-02-01 to 2023-02-28](/kusama/2113-kabocha/2023-02-28.md) | 1,182,738 | 1,338,345 | 155,608 | 27 | 3 | 13,224 | -   |   
| [2023-01-01 to 2023-01-31](/kusama/2113-kabocha/2023-01-31.md) | 979,040 | 1,182,737 | 203,698 | 21 | 4 | 13,221 | -   |   
| [2022-12-01 to 2022-12-31](/kusama/2113-kabocha/2022-12-31.md) | 794,151 | 979,039 | 184,889 | 42 | 4 | 13,218 | -   |   
| [2022-11-01 to 2022-11-30](/kusama/2113-kabocha/2022-11-30.md) | 655,365 | 794,150 | 138,786 | 59 | 3 | 13,216 | -   |   
| [2022-10-01 to 2022-10-31](/kusama/2113-kabocha/2022-10-31.md) | 515,033 | 655,364 | 140,332 | 9 | 2 | 13,216 | -   |   
| [2022-09-01 to 2022-09-30](/kusama/2113-kabocha/2022-09-30.md) | 375,914 | 515,032 | 139,119 | 18,583 | 3 | 13,290 | -   |   
| [2022-08-01 to 2022-08-31](/kusama/2113-kabocha/2022-08-31.md) | 197,049 | 375,913 | 178,865 | 215,614 | 2 | 16,440 | -   |   
| [2022-07-01 to 2022-07-31](/kusama/2113-kabocha/2022-07-31.md) | 17,503 | 197,048 | 179,546 | 3 | 2 | 6 | -   |   
| [2022-06-27 to 2022-06-30](/kusama/2113-kabocha/2022-06-30.md) | 1 | 17,502 | 17,502 | 1 | 2 | 5 | -   |   

## Kabocha Assets as of 2023-03-13



| Symbol | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID | 
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | --- |
| [KAB](/kusama/assets/KAB) | 13,224 | 23,881,728.33  | 45,152,013.3  | 37,998.33   |   |  |   `{"Token":"KAB"}` | 

## substrate-etl Tables:

* _Blocks_: `substrate-etl.kusama.blocks2113` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.kusama.extrinsics2113` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.kusama.events2113` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.kusama.transfers2113` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.kusama.balances2113` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.kusama.accountsactive2113` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.kusama.accountspassive2113` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.kusama.accountsnew2113` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.kusama.accountsreaped2113` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.kusama.assets` (filter on `2113`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.kusama.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.kusama.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.kusama.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.kusama.blocks2113` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2113.json](https://cdn.polkaholic.io/substrate-etl/kusama/2113.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
