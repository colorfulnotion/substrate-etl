# Amplitude substrate-etl Summary (Monthly)

_Source_: [amplitude.polkaholic.io](https://amplitude.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2124



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-05-01 to 2023-05-10](/kusama/2124-amplitude/2023-05-31.md) | 1,582,230 | 1,640,824 | 58,595 | 37,832 | 34 | 967 | -   |   
| [2023-04-01 to 2023-04-30](/kusama/2124-amplitude/2023-04-30.md) | 1,382,337 | 1,582,229 | 199,893 | 125,806 | 31 | 967 | -   |   
| [2023-03-01 to 2023-03-31](/kusama/2124-amplitude/2023-03-31.md) | 1,166,960 | 1,382,336 | 215,377 | 42,248 | 36 | 953 | -   |   
| [2023-02-01 to 2023-02-28](/kusama/2124-amplitude/2023-02-28.md) | 972,507 | 1,166,959 | 194,453 | 1,016 | 30 | 923 | -   |   
| [2023-01-01 to 2023-01-31](/kusama/2124-amplitude/2023-01-31.md) | 757,812 | 972,506 | 214,695 | 788 | 25 | 727 | -   |   
| [2022-12-01 to 2022-12-31](/kusama/2124-amplitude/2022-12-31.md) | 561,962 | 757,811 | 195,850 | 1,082 | 25 | 727 | -   |   
| [2022-11-01 to 2022-11-30](/kusama/2124-amplitude/2022-11-30.md) | 379,402 | 561,961 | 182,560 | 587 | 19 | 709 | -   |   
| [2022-10-01 to 2022-10-31](/kusama/2124-amplitude/2022-10-31.md) | 197,201 | 379,401 | 182,201 | 88 | 10 | 674 | -   |   
| [2022-09-01 to 2022-09-30](/kusama/2124-amplitude/2022-09-30.md) | 27,839 | 197,200 | 169,362 | 76 | 9 | 674 | -   |   
| [2022-08-11 to 2022-08-31](/kusama/2124-amplitude/2022-08-31.md) | 1 | 27,838 | 27,838 |  | 2 | 6 | -   |   

## substrate-etl Tables:

* _Blocks_: `substrate-etl.kusama.blocks2124` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.kusama.extrinsics2124` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.kusama.events2124` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.kusama.transfers2124` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.kusama.balances2124` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.kusama.accountsactive2124` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.kusama.accountspassive2124` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.kusama.accountsnew2124` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.kusama.accountsreaped2124` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.kusama.assets` (filter on `2124`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.kusama.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.kusama.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.kusama.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.kusama.blocks2124` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2124.json](https://cdn.polkaholic.io/substrate-etl/kusama/2124.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
