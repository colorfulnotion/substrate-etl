# Bifrost-Polkadot substrate-etl Summary (Monthly)

_Source_: [bifrost-dot.polkaholic.io](https://bifrost-dot.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2030



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-27](/polkadot/2030-bifrost-dot/2023-02-28.md) | 1,645,275 | 1,833,697 | 188,423 | 11,007 | 101 | 3,821 | -   |   
| [2023-01-01 to 2023-01-31](/polkadot/2030-bifrost-dot/2023-01-31.md) | 1,426,953 | 1,645,274 | 218,322 | 9,277 | 77 | 3,575 | -   |   
| [2022-12-01 to 2022-12-31](/polkadot/2030-bifrost-dot/2022-12-31.md) | 1,212,434 | 1,426,952 | 214,519 | 9,329 |  | 3,412 | -   |   
| [2022-11-01 to 2022-11-30](/polkadot/2030-bifrost-dot/2022-11-30.md) | 1,013,658 | 1,212,433 | 198,776 | 6,790 |  | 3,188 | -   |   
| [2022-10-01 to 2022-10-31](/polkadot/2030-bifrost-dot/2022-10-31.md) | 799,904 | 1,013,657 | 213,754 | 3,002 |  | 2,943 | -   |   
| [2022-09-01 to 2022-09-30](/polkadot/2030-bifrost-dot/2022-09-30.md) | 593,248 | 799,903 | 206,656 | 3,397 |  | 2,805 | -   |   
| [2022-08-01 to 2022-08-31](/polkadot/2030-bifrost-dot/2022-08-31.md) | 380,234 | 593,247 | 213,014 | 161 |  | 1,333 | -   |   
| [2022-07-01 to 2022-07-31](/polkadot/2030-bifrost-dot/2022-07-31.md) | 175,695 | 380,233 | 204,539 | 10 |  | 6 | -   |   
| [2022-06-04 to 2022-06-30](/polkadot/2030-bifrost-dot/2022-06-30.md) | 1 | 175,694 | 175,694 |  |  | 6 | -   |   

## substrate-etl Tables:

* _Blocks_: `substrate-etl.polkadot.blocks2030` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.polkadot.extrinsics2030` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.polkadot.events2030` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.polkadot.transfers2030` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.polkadot.balances2030` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.polkadot.accountsactive2030` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.polkadot.accountspassive2030` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.polkadot.accountsnew2030` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.polkadot.accountsreaped2030` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.polkadot.assets` (filter on `2030`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.polkadot.blocks2030` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2030.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2030.json) | See [Definitions](/DEFINITIONS.md) for details
