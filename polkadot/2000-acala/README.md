# Acala substrate-etl Summary (Monthly)

_Source_: [acala.polkaholic.io](https://acala.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2000



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-04-01 to 2023-04-16](/polkadot/2000-acala/2023-04-30.md) | 3,263,692 | 3,363,536 | 99,845 | 31,483 | 265 | 159,350 | -   |   
| [2023-03-01 to 2023-03-31](/polkadot/2000-acala/2023-03-31.md) | 3,048,189 | 3,263,691 | 215,503 | 75,887 | 356 | 158,930 | -   |   
| [2023-02-01 to 2023-02-28](/polkadot/2000-acala/2023-02-28.md) | 2,848,693 | 3,048,188 | 199,496 | 156,527 | 894 | 167,782 | -   |   
| [2023-01-01 to 2023-01-31](/polkadot/2000-acala/2023-01-31.md) | 2,628,427 | 2,848,692 | 220,266 | 270,605 | 474 | 167,583 | -   |   
| [2022-12-01 to 2022-12-31](/polkadot/2000-acala/2022-12-31.md) | 2,408,141 | 2,628,426 | 220,286 | 219,755 | 526 | 168,389 | -   |   
| [2022-11-01 to 2022-11-30](/polkadot/2000-acala/2022-11-30.md) | 2,194,742 | 2,408,140 | 213,399 | 180,805 | 562 | 167,143 | -   |   
| [2022-10-01 to 2022-10-31](/polkadot/2000-acala/2022-10-31.md) | 1,974,456 | 2,194,741 | 220,286 | 140,202 | 627 | 164,762 | -   |   
| [2022-09-01 to 2022-09-30](/polkadot/2000-acala/2022-09-30.md) | 1,763,831 | 1,974,455 | 210,625 | 64,729 | 387 | 162,759 | -   |   
| [2022-08-01 to 2022-08-31](/polkadot/2000-acala/2022-08-31.md) | 1,548,721 | 1,763,830 | 215,110 | 325,644 | 1,255 | 162,568 | -   |   
| [2022-07-01 to 2022-07-31](/polkadot/2000-acala/2022-07-31.md) | 1,337,110 | 1,548,720 | 211,611 | 122,584 | 918 | 161,262 | -   |   
| [2022-06-01 to 2022-06-30](/polkadot/2000-acala/2022-06-30.md) | 1,134,951 | 1,337,109 | 202,159 | 115,420 | 806 | 160,828 | -   |   
| [2022-05-01 to 2022-05-31](/polkadot/2000-acala/2022-05-31.md) | 921,376 | 1,134,950 | 213,575 | 201,357 | 1,334 | 160,245 | -   |   
| [2022-04-01 to 2022-04-30](/polkadot/2000-acala/2022-04-30.md) | 711,107 | 921,375 | 210,269 | 212,266 | 1,460 | 157,125 | -   |   
| [2022-03-01 to 2022-03-31](/polkadot/2000-acala/2022-03-31.md) | 496,216 | 711,106 | 214,891 | 247,355 | 2,390 | 152,186 | -   |   
| [2022-02-01 to 2022-02-28](/polkadot/2000-acala/2022-02-28.md) | 313,202 | 496,215 | 183,014 | 205,279 | 1,875 | 147,203 | -   |   
| [2022-01-01 to 2022-01-31](/polkadot/2000-acala/2022-01-31.md) | 93,438 | 313,201 | 219,764 | 163,912 | 2,147 | 135,075 | -   |   
| [2021-12-18 to 2021-12-31](/polkadot/2000-acala/2021-12-31.md) | 1 | 93,437 | 93,437 | 1,413 | 27 | 111,548 | -   |   

## substrate-etl Tables:

* _Blocks_: `substrate-etl.polkadot.blocks2000` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.polkadot.extrinsics2000` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.polkadot.events2000` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.polkadot.transfers2000` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.polkadot.balances2000` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.polkadot.accountsactive2000` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.polkadot.accountspassive2000` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.polkadot.accountsnew2000` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.polkadot.accountsreaped2000` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.polkadot.assets` (filter on `2000`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.polkadot.blocks2000` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2000.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2000.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
