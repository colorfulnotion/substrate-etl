# Centrifuge substrate-etl Summary (Monthly)

_Source_: [centrifuge.polkaholic.io](https://centrifuge.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2031



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-03-01 to 2023-03-10](/polkadot/2031-centrifuge/2023-03-31.md) | 2,428,419 | 2,495,295 | 66,855 | 2,395 | 87 | 44,738 | - 22 (0.03%) |   
| [2023-02-01 to 2023-02-28](/polkadot/2031-centrifuge/2023-02-28.md) | 2,229,646 | 2,428,418 | 198,773 | 8,942 | 136 | 44,644 | -   |   
| [2023-01-01 to 2023-01-31](/polkadot/2031-centrifuge/2023-01-31.md) | 2,009,160 | 2,229,645 | 220,486 | 8,263 | 121 | 44,233 | -   |   
| [2022-12-01 to 2022-12-31](/polkadot/2031-centrifuge/2022-12-31.md) | 1,789,038 | 2,009,159 | 220,122 | 5,453 | 81 | 43,840 | -   |   
| [2022-11-01 to 2022-11-30](/polkadot/2031-centrifuge/2022-11-30.md) | 1,575,642 | 1,789,037 | 213,396 | 8,626 | 110 | 43,634 | -   |   
| [2022-10-01 to 2022-10-31](/polkadot/2031-centrifuge/2022-10-31.md) | 1,357,550 | 1,575,641 | 218,092 | 8,627 | 94 | 43,183 | -   |   
| [2022-09-01 to 2022-09-30](/polkadot/2031-centrifuge/2022-09-30.md) | 1,150,682 | 1,357,549 | 206,868 | 6,551 | 106 | 42,919 | -   |   
| [2022-08-01 to 2022-08-31](/polkadot/2031-centrifuge/2022-08-31.md) | 940,374 | 1,150,681 | 210,308 | 7,401 | 123 | 42,634 | -   |   
| [2022-07-01 to 2022-07-31](/polkadot/2031-centrifuge/2022-07-31.md) | 735,188 | 940,373 | 205,186 | 7,171 | 111 | 42,188 | -   |   
| [2022-06-01 to 2022-06-30](/polkadot/2031-centrifuge/2022-06-30.md) | 539,985 | 735,187 | 195,203 | 6,704 | 95 | 41,775 | -   |   
| [2022-05-01 to 2022-05-31](/polkadot/2031-centrifuge/2022-05-31.md) | 333,939 | 539,984 | 206,046 | 9,450 | 196 | 41,471 | -   |   
| [2022-04-01 to 2022-04-30](/polkadot/2031-centrifuge/2022-04-30.md) | 132,981 | 333,938 | 200,958 | 15,603 | 275 | 41,063 | -   |   
| [2022-03-12 to 2022-03-31](/polkadot/2031-centrifuge/2022-03-31.md) | 1 | 132,980 | 132,980 | 66 | 5 | 1 | -   |   

## Centrifuge Assets as of 2023-03-06



| Symbol | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID | 
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | --- |
| [CFG](/polkadot/assets/CFG) | 44,703 | 492,145,250.55  | 161,553.26  | 71,398,998.15   | 13,128,705.21  |  |   `{"Token":"CFG"}` | 

## substrate-etl Tables:

* _Blocks_: `substrate-etl.polkadot.blocks2031` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.polkadot.extrinsics2031` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.polkadot.events2031` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.polkadot.transfers2031` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.polkadot.balances2031` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.polkadot.accountsactive2031` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.polkadot.accountspassive2031` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.polkadot.accountsnew2031` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.polkadot.accountsreaped2031` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.polkadot.assets` (filter on `2031`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.polkadot.blocks2031` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2031.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2031.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
