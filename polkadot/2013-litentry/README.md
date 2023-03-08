# Litentry substrate-etl Summary (Monthly)

_Source_: [litentry.polkaholic.io](https://litentry.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2013



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-28](/polkadot/2013-litentry/2023-02-28.md) | 1,587,337 | 1,786,893 | 199,557 | 4,691 | 92 | 4,768 | -   |   
| [2023-01-01 to 2023-01-31](/polkadot/2013-litentry/2023-01-31.md) | 1,365,864 | 1,587,336 | 221,473 | 4,495 | 82 | 4,751 | -   |   
| [2022-12-01 to 2022-12-31](/polkadot/2013-litentry/2022-12-31.md) | 1,144,608 | 1,365,863 | 221,256 | 3,865 | 72 | 4,741 | -   |   
| [2022-11-01 to 2022-11-30](/polkadot/2013-litentry/2022-11-30.md) | 930,803 | 1,144,607 | 213,805 | 2,549 | 43 | 4,720 | -   |   
| [2022-10-01 to 2022-10-31](/polkadot/2013-litentry/2022-10-31.md) | 711,127 | 930,802 | 219,676 | 738 | 18 | 4,678 | -   |   
| [2022-09-01 to 2022-09-30](/polkadot/2013-litentry/2022-09-30.md) | 514,397 | 711,126 | 196,730 | 412 | 14 | 4,671 | -   |   
| [2022-08-01 to 2022-08-31](/polkadot/2013-litentry/2022-08-31.md) | 329,620 | 514,396 | 184,777 | 500 | 15 | 4,671 | -   |   
| [2022-07-01 to 2022-07-31](/polkadot/2013-litentry/2022-07-31.md) | 151,698 | 329,619 | 177,922 | 318 | 10 | 4,671 | -   |   
| [2022-06-04 to 2022-06-30](/polkadot/2013-litentry/2022-06-30.md) | 1 | 151,697 | 151,697 | 2 | 3 | 16 | -   |   

## Litentry Assets as of 2023-03-06



| Symbol | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID | 
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | --- |
| [LIT](/polkadot/assets/LIT) | 4,769 | 9,684,302.54  | 1,970,556.52  | 8,763,520.35   |   |  |   `{"Token":"LIT"}` | 

## substrate-etl Tables:

* _Blocks_: `substrate-etl.polkadot.blocks2013` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.polkadot.extrinsics2013` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.polkadot.events2013` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.polkadot.transfers2013` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.polkadot.balances2013` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.polkadot.accountsactive2013` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.polkadot.accountspassive2013` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.polkadot.accountsnew2013` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.polkadot.accountsreaped2013` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.polkadot.assets` (filter on `2013`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.polkadot.blocks2013` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2013.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2013.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
