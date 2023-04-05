# Litmus substrate-etl Summary (Monthly)

_Source_: [litmus.polkaholic.io](https://litmus.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2106



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-04-01 to 2023-04-04](/kusama/2106-litmus/2023-04-30.md) | 2,307,252 | 2,328,212 | 20,961 | 6 | 4 | 13,910 | -   |   
| [2023-03-01 to 2023-03-31](/kusama/2106-litmus/2023-03-31.md) | 2,088,086 | 2,307,251 | 212,117 | 61 | 4 | 13,913 | - 7,049 (3.22%) |   
| [2023-02-01 to 2023-02-28](/kusama/2106-litmus/2023-02-28.md) | 1,890,699 | 2,088,085 | 197,387 | 141 | 7 | 13,914 | -   |   
| [2023-01-01 to 2023-01-31](/kusama/2106-litmus/2023-01-31.md) | 1,673,284 | 1,890,698 | 217,415 | 133 | 6 | 13,906 | -   |   
| [2022-12-01 to 2022-12-31](/kusama/2106-litmus/2022-12-31.md) | 1,463,117 | 1,673,283 | 210,167 | 203 | 8 | 13,905 | -   |   
| [2022-11-01 to 2022-11-30](/kusama/2106-litmus/2022-11-30.md) | 1,255,236 | 1,463,116 | 207,881 | 241 | 8 | 13,908 | -   |   
| [2022-10-01 to 2022-10-31](/kusama/2106-litmus/2022-10-31.md) | 1,043,677 | 1,255,235 | 211,559 | 293 | 10 | 13,904 | -   |   
| [2022-09-01 to 2022-09-30](/kusama/2106-litmus/2022-09-30.md) | 865,675 | 1,043,676 | 178,002 | 335 | 9 | 13,889 | -   |   
| [2022-08-01 to 2022-08-31](/kusama/2106-litmus/2022-08-31.md) | 712,305 | 865,674 | 153,370 | 217 | 7 | 11,918 | -   |   
| [2022-07-01 to 2022-07-31](/kusama/2106-litmus/2022-07-31.md) | 567,814 | 712,304 | 144,491 | 132 | 6 | 3,832 | -   |   
| [2022-06-01 to 2022-06-30](/kusama/2106-litmus/2022-06-30.md) | 407,276 | 567,813 | 160,538 | 90 | 6 | 3,831 | -   |   
| [2022-05-01 to 2022-05-31](/kusama/2106-litmus/2022-05-31.md) | 257,647 | 407,275 | 149,629 | 89 | 6 | 3,827 | -   |   
| [2022-04-01 to 2022-04-30](/kusama/2106-litmus/2022-04-30.md) | 154,229 | 257,646 | 103,418 | 144 | 5 | 3,824 | -   |   
| [2022-03-01 to 2022-03-31](/kusama/2106-litmus/2022-03-31.md) | 32,417 | 154,228 | 121,812 | 81 | 4 | 3,821 | -   |   
| [2022-02-20 to 2022-02-28](/kusama/2106-litmus/2022-02-28.md) | 1 | 32,416 | 32,416 |  | 3 | 16 | -   |   

## substrate-etl Tables:

* _Blocks_: `substrate-etl.kusama.blocks2106` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.kusama.extrinsics2106` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.kusama.events2106` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.kusama.transfers2106` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.kusama.balances2106` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.kusama.accountsactive2106` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.kusama.accountspassive2106` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.kusama.accountsnew2106` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.kusama.accountsreaped2106` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.kusama.assets` (filter on `2106`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.kusama.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.kusama.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.kusama.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.kusama.blocks2106` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2106.json](https://cdn.polkaholic.io/substrate-etl/kusama/2106.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
