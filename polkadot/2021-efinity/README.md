# Efinity substrate-etl Summary (Monthly)

_Source_: [efinity.polkaholic.io](https://efinity.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2021



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-04-01 to 2023-04-06](/polkadot/2021-efinity/2023-04-30.md) | 2,400,588 | 2,441,165 | 40,578 | 7,658 | 26 | 16,207 | -   |   
| [2023-03-01 to 2023-03-31](/polkadot/2021-efinity/2023-03-31.md) | 2,255,258 | 2,400,587 | 145,330 | 6,999 | 27 | 16,198 | -   |   
| [2023-02-01 to 2023-02-28](/polkadot/2021-efinity/2023-02-28.md) | 2,089,532 | 2,255,257 | 165,726 | 11,509 | 38 | 16,137 | -   |   
| [2023-01-01 to 2023-01-31](/polkadot/2021-efinity/2023-01-31.md) | 1,895,402 | 2,089,531 | 194,130 | 3,132 | 31 | 15,988 | -   |   
| [2022-12-01 to 2022-12-31](/polkadot/2021-efinity/2022-12-31.md) | 1,689,841 | 1,895,401 | 205,561 | 9,933 | 24 | 15,845 | -   |   
| [2022-11-01 to 2022-11-30](/polkadot/2021-efinity/2022-11-30.md) | 1,489,730 | 1,689,840 | 200,111 | 1,325 | 24 | 15,760 | -   |   
| [2022-10-01 to 2022-10-31](/polkadot/2021-efinity/2022-10-31.md) | 1,285,086 | 1,489,729 | 204,644 | 888 | 20 | 15,635 | -   |   
| [2022-09-01 to 2022-09-30](/polkadot/2021-efinity/2022-09-30.md) | 1,097,430 | 1,285,085 | 187,656 | 723 | 16 | 15,571 | -   |   
| [2022-08-01 to 2022-08-31](/polkadot/2021-efinity/2022-08-31.md) | 905,358 | 1,097,429 | 192,072 | 412 | 14 | 15,549 | -   |   
| [2022-07-01 to 2022-07-31](/polkadot/2021-efinity/2022-07-31.md) | 716,102 | 905,357 | 189,256 | 434 | 14 | 15,534 | -   |   
| [2022-06-01 to 2022-06-30](/polkadot/2021-efinity/2022-06-30.md) | 534,582 | 716,101 | 181,520 | 945 | 18 | 15,515 | -   |   
| [2022-05-01 to 2022-05-31](/polkadot/2021-efinity/2022-05-31.md) | 339,781 | 534,581 | 194,801 | 13 | 4 | 10 | -   |   
| [2022-04-01 to 2022-04-30](/polkadot/2021-efinity/2022-04-30.md) | 135,189 | 339,780 | 204,592 |  |  | 3 | -   |   
| [2022-03-12 to 2022-03-31](/polkadot/2021-efinity/2022-03-31.md) | 1 | 135,188 | 135,188 |  |  | 3 | -   |   

## substrate-etl Tables:

* _Blocks_: `substrate-etl.polkadot.blocks2021` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.polkadot.extrinsics2021` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.polkadot.events2021` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.polkadot.transfers2021` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.polkadot.balances2021` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.polkadot.accountsactive2021` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.polkadot.accountspassive2021` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.polkadot.accountsnew2021` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.polkadot.accountsreaped2021` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.polkadot.assets` (filter on `2021`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.polkadot.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.polkadot.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.polkadot.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.polkadot.blocks2021` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/2021.json](https://cdn.polkaholic.io/substrate-etl/polkadot/2021.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
