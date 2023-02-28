# Interlay substrate-etl Summary (Monthly)

_Source_: [interlay.polkaholic.io](https://interlay.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2032



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-28](/polkadot/2032-interlay/2023-02-28.md) | 2,071,448 | 2,249,386 | 177,939 | 39,869 | 152 | 11,340 | -   |   
| [2023-01-01 to 2023-01-31](/polkadot/2032-interlay/2023-01-31.md) | 1,876,892 | 2,071,447 | 194,556 | 43,634 | 155 | 11,058 | -   |   
| [2022-12-01 to 2022-12-31](/polkadot/2032-interlay/2022-12-31.md) | 1,679,375 | 1,876,891 | 197,517 | 46,349 |  | 10,820 | -   |   
| [2022-11-01 to 2022-11-30](/polkadot/2032-interlay/2022-11-30.md) | 1,487,751 | 1,679,374 | 191,624 | 41,201 |  | 10,632 | -   |   
| [2022-10-01 to 2022-10-31](/polkadot/2032-interlay/2022-10-31.md) | 1,289,966 | 1,487,750 | 197,785 | 46,413 |  | 10,162 | -   |   
| [2022-09-01 to 2022-09-30](/polkadot/2032-interlay/2022-09-30.md) | 1,096,752 | 1,289,965 | 193,214 | 48,484 |  | 9,777 | -   |   
| [2022-08-01 to 2022-08-31](/polkadot/2032-interlay/2022-08-31.md) | 885,471 | 1,096,751 | 211,281 | 49,121 |  | 9,337 | -   |   
| [2022-07-01 to 2022-07-31](/polkadot/2032-interlay/2022-07-31.md) | 672,691 | 885,470 | 212,780 | 9,849 |  | 8,289 | -   |   
| [2022-06-01 to 2022-06-30](/polkadot/2032-interlay/2022-06-30.md) | 469,773 | 672,690 | 202,918 | 13,487 |  | 7,165 | -   |   
| [2022-05-01 to 2022-05-31](/polkadot/2032-interlay/2022-05-31.md) | 255,599 | 469,772 | 214,174 |  |  | 42 | -   |   
| [2022-04-01 to 2022-04-30](/polkadot/2032-interlay/2022-04-30.md) | 77,428 | 255,598 | 178,171 | 21 |  | 42 | -   |   
| [2022-03-12 to 2022-03-31](/polkadot/2032-interlay/2022-03-31.md) | 1 | 77,427 | 77,427 | 39 |  | 32 | -   |   

## Interlay Assets as of 2023-02-27



| Symbol | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID | 
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | --- |
| [INTR](/polkadot/assets/INTR) | 11,340 | 999,998,649.35 $30,015,580.18 | 1,316.77 $39.52 |    | 70,664,262.3 $2,121,031.70 | $0.03 |   `{"Token":"INTR"}` | 
| [IBTC](/polkadot/assets/IBTC) | 365 | 83.08 $1,482,204.70 | 0.02 $277.96 |    |   | $17,841.21 |   `{"Token":"IBTC"}` | 
| [DOT](/polkadot/assets/DOT) | 159 | 41,596.57 $274,128.48 | 630,385.87 $4,154,349.78 |    |   | $6.59 |   `{"Token":"DOT"}` | 
| [USDT](/polkadot/assets/USDT) | 19 | 5.5 $5.50 | 44,127.57 $44,140.32 |    |   | $1.00 |   `{"ForeignAsset":"2"}` | 

## substrate-etl Tables:

* _Blocks_: `substrate-etl.polkadot.blocks2032` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.polkadot.extrinsics2032` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.polkadot.events2032` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.polkadot.transfers2032` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.polkadot.balances2032` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.polkadot.accountsactive2032` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.polkadot.accountspassive2032` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.polkadot.accountsnew2032` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.polkadot.accountsreaped2032` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.polkadot.assets` (filter on `2032`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.polkadot.blocks2032` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2032.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2032.json) | See [Definitions](/DEFINITIONS.md) for details
