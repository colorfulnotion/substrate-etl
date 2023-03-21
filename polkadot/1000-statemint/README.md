# Statemint substrate-etl Summary (Monthly)

_Source_: [statemint.polkaholic.io](https://statemint.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 1000



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-03-01 to 2023-03-21](/polkadot/1000-statemint/2023-03-31.md) | 3,313,604 | 3,448,966 | 135,077 | 560 | 22 | 654 | - 286 (0.21%) |   
| [2023-02-01 to 2023-02-28](/polkadot/1000-statemint/2023-02-28.md) | 3,114,475 | 3,313,603 | 199,129 | 790 | 21 | 601 | -   |   
| [2023-01-01 to 2023-01-31](/polkadot/1000-statemint/2023-01-31.md) | 2,893,961 | 3,114,474 | 220,514 | 468 | 16 | 471 | -   |   
| [2022-12-01 to 2022-12-31](/polkadot/1000-statemint/2022-12-31.md) | 2,675,090 | 2,893,960 | 218,871 | 406 | 13 | 389 | -   |   
| [2022-11-01 to 2022-11-30](/polkadot/1000-statemint/2022-11-30.md) | 2,461,314 | 2,675,089 | 213,776 | 712 | 15 | 318 | -   |   
| [2022-10-01 to 2022-10-31](/polkadot/1000-statemint/2022-10-31.md) | 2,240,126 | 2,461,313 | 221,188 | 944 | 11 | 224 | -   |   
| [2022-09-01 to 2022-09-30](/polkadot/1000-statemint/2022-09-30.md) | 2,029,474 | 2,240,125 | 210,652 | 191 | 6 | 95 | -   |   
| [2022-08-01 to 2022-08-31](/polkadot/1000-statemint/2022-08-31.md) | 1,814,635 | 2,029,473 | 214,839 | 28 | 4 | 56 | -   |   
| [2022-07-01 to 2022-07-31](/polkadot/1000-statemint/2022-07-31.md) | 1,603,182 | 1,814,634 | 211,453 | 19 | 4 | 43 | -   |   
| [2022-06-01 to 2022-06-30](/polkadot/1000-statemint/2022-06-30.md) | 1,401,756 | 1,603,181 | 201,426 | 25 | 4 | 38 | -   |   
| [2022-05-01 to 2022-05-31](/polkadot/1000-statemint/2022-05-31.md) | 1,188,447 | 1,401,755 | 213,309 | 135 | 5 | 29 | -   |   
| [2022-04-01 to 2022-04-30](/polkadot/1000-statemint/2022-04-30.md) | 978,157 | 1,188,446 | 210,290 |  | 4 |  | -   |   
| [2022-03-01 to 2022-03-31](/polkadot/1000-statemint/2022-03-31.md) | 761,106 | 978,156 | 217,051 |  | 4 |  | -   |   
| [2022-02-01 to 2022-02-28](/polkadot/1000-statemint/2022-02-28.md) | 588,348 | 761,105 | 172,758 |  | 4 |  | -   |   
| [2022-01-01 to 2022-01-31](/polkadot/1000-statemint/2022-01-31.md) | 389,636 | 588,347 | 198,712 |  | 4 |  | -   |   
| [2021-12-01 to 2021-12-31](/polkadot/1000-statemint/2021-12-31.md) | 184,519 | 389,635 | 205,117 |  | 2 |  | -   |   
| [2021-11-05 to 2021-11-30](/polkadot/1000-statemint/2021-11-30.md) | 1 | 184,518 | 184,518 |  |  |  | -   |   

## substrate-etl Tables:

* _Blocks_: `substrate-etl.polkadot.blocks1000` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.polkadot.extrinsics1000` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.polkadot.events1000` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.polkadot.transfers1000` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.polkadot.balances1000` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.polkadot.accountsactive1000` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.polkadot.accountspassive1000` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.polkadot.accountsnew1000` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.polkadot.accountsreaped1000` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.polkadot.assets` (filter on `1000`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.polkadot.blocks1000` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/1000.json](https://cdn.polkaholic.io/substrate-etl/polkadot/1000.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
