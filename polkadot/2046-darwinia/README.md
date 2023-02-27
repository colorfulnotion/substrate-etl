# Darwinia substrate-etl Summary (Monthly)

_Source_: [darwinia.polkaholic.io](https://darwinia.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2046



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-27](/polkadot/2046-darwinia/2023-02-28.md) | 838,210 | 979,542 | 141,333 | 15 | 3 | 22 | -   |   
| [2023-01-01 to 2023-01-31](/polkadot/2046-darwinia/2023-01-31.md) | 669,202 | 838,209 | 169,008 | 2 | 3 | 22 | -   |   
| [2022-12-01 to 2022-12-31](/polkadot/2046-darwinia/2022-12-31.md) | 487,030 | 669,201 | 182,172 | 7 |  | 22 | -   |   
| [2022-11-01 to 2022-11-30](/polkadot/2046-darwinia/2022-11-30.md) | 316,864 | 487,029 | 170,166 | 25 |  | 21 | -   |   
| [2022-10-01 to 2022-10-31](/polkadot/2046-darwinia/2022-10-31.md) | 145,349 | 316,863 | 171,515 | 58 |  | 21 | -   |   
| [2022-09-01 to 2022-09-30](/polkadot/2046-darwinia/2022-09-30.md) | 10,392 | 145,348 | 134,957 | 12 |  | 10 | -   |   
| [2022-08-29 to 2022-08-31](/polkadot/2046-darwinia/2022-08-31.md) | 1 | 10,391 | 10,391 |  |  | 8 | -   |   

## Darwinia Assets as of 2023-02-24



| Symbol | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID | 
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | --- |
| [RING](/polkadot/assets/RING) | 22 | 200,000  |   |    |   |  |   `{"Token":"RING"}` | 

## substrate-etl Tables:

* _Blocks_: `substrate-etl.polkadot.blocks2046` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.polkadot.extrinsics2046` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.polkadot.events2046` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.polkadot.transfers2046` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.polkadot.balances2046` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.polkadot.accountsactive2046` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.polkadot.accountspassive2046` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.polkadot.accountsnew2046` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.polkadot.accountsreaped2046` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.polkadot.assets` (filter on `2046`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.polkadot.blocks2046` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2046.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2046.json) | See [Definitions](/DEFINITIONS.md) for details
