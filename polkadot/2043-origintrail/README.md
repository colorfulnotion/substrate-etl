# Origin Trail substrate-etl Summary (Monthly)

_Source_: [origintrail.polkaholic.io](https://origintrail.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2043



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-26](/polkadot/2043-origintrail/2023-02-28.md) | 1,683,135 | 1,847,817 | 164,683 | 207 | 14 | 3,643 | -   |   
| [2023-01-01 to 2023-01-31](/polkadot/2043-origintrail/2023-01-31.md) | 1,469,695 | 1,683,134 | 213,440 | 474 | 14 | 3,606 | -   |   
| [2022-12-01 to 2022-12-31](/polkadot/2043-origintrail/2022-12-31.md) | 1,249,065 | 1,469,694 | 220,630 | 591 |  | 3,523 | -   |   
| [2022-11-01 to 2022-11-30](/polkadot/2043-origintrail/2022-11-30.md) | 1,034,707 | 1,249,064 | 214,358 | 350 |  | 3,222 | -   |   
| [2022-10-01 to 2022-10-31](/polkadot/2043-origintrail/2022-10-31.md) | 813,769 | 1,034,706 | 220,938 | 625 |  | 3,188 | -   |   
| [2022-09-01 to 2022-09-30](/polkadot/2043-origintrail/2022-09-30.md) | 602,982 | 813,768 | 210,787 | 246 |  | 2,986 | -   |   
| [2022-08-01 to 2022-08-31](/polkadot/2043-origintrail/2022-08-31.md) | 388,055 | 602,981 | 214,927 | 659 |  | 2,945 | -   |   
| [2022-07-01 to 2022-07-31](/polkadot/2043-origintrail/2022-07-31.md) | 176,609 | 388,054 | 211,446 | 330,210 |  | 2,833 | -   |   
| [2022-06-04 to 2022-06-30](/polkadot/2043-origintrail/2022-06-30.md) | 1 | 176,608 | 176,608 | 1,124,329 |  | 11 | -   |   

## Origin Trail Assets as of 2023-02-24



| Symbol | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID | 
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | --- |
| [OTP](/polkadot/assets/OTP) | 3,641 | 500,053,200.38  | 166  | 22,331,352.47   |   |  |   `{"Token":"OTP"}` | 
| [TRAC](/polkadot/assets/TRAC) | 211 | 84,040,684.43  |   |    |   |  |   `{"Token":"1"}` | 

## substrate-etl Tables:

* _Blocks_: `substrate-etl.polkadot.blocks2043` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.polkadot.extrinsics2043` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.polkadot.events2043` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.polkadot.transfers2043` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.polkadot.balances2043` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.polkadot.accountsactive2043` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.polkadot.accountspassive2043` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.polkadot.accountsnew2043` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.polkadot.accountsreaped2043` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.polkadot.assets` (filter on `2043`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.polkadot.blocks2043` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2043.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2043.json) | See [Definitions](/DEFINITIONS.md) for details
