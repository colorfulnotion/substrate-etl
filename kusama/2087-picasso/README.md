# Picasso substrate-etl Summary (Monthly)

_Source_: [picasso.polkaholic.io](https://picasso.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2087



| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-03-01 to 2023-03-13](/kusama/2087-picasso/2023-03-31.md) | 1,882,628 | 1,971,534 | 88,907 | 1,049 | 30 | 2,724 | -   |   
| [2023-02-01 to 2023-02-28](/kusama/2087-picasso/2023-02-28.md) | 1,684,783 | 1,882,627 | 197,845 | 3,806 | 46 | 2,650 | -   |   
| [2023-01-01 to 2023-01-31](/kusama/2087-picasso/2023-01-31.md) | 1,466,510 | 1,684,782 | 218,273 | 4,935 | 56 | 2,417 | -   |   
| [2022-12-01 to 2022-12-31](/kusama/2087-picasso/2022-12-31.md) | 1,263,478 | 1,466,509 | 203,032 | 4,585 | 47 | 1,938 | -   |   
| [2022-11-01 to 2022-11-30](/kusama/2087-picasso/2022-11-30.md) | 1,130,308 | 1,263,477 | 133,170 | 218 | 8 | 1,063 | -   |   
| [2022-10-01 to 2022-10-31](/kusama/2087-picasso/2022-10-31.md) | 980,690 | 1,130,307 | 149,618 | 18 | 5 | 16 | -   |   
| [2022-09-01 to 2022-09-30](/kusama/2087-picasso/2022-09-30.md) | 842,142 | 980,689 | 138,548 | 8 | 5 | 15 | -   |   
| [2022-08-01 to 2022-08-31](/kusama/2087-picasso/2022-08-31.md) | 702,817 | 842,141 | 139,325 | 30 | 5 | 15 | -   |   
| [2022-07-01 to 2022-07-31](/kusama/2087-picasso/2022-07-31.md) | 538,460 | 702,816 | 164,357 | 47 | 6 | 14 | -   |   
| [2022-06-01 to 2022-06-30](/kusama/2087-picasso/2022-06-30.md) | 380,021 | 538,459 | 158,439 |  | 5 | 4 | -   |   
| [2022-05-01 to 2022-05-31](/kusama/2087-picasso/2022-05-31.md) | 254,885 | 380,020 | 125,136 | 1 | 4 | 4 | -   |   
| [2022-04-01 to 2022-04-30](/kusama/2087-picasso/2022-04-30.md) | 174,270 | 254,884 | 80,615 | 1 | 4 | 4 | -   |   
| [2022-03-01 to 2022-03-31](/kusama/2087-picasso/2022-03-31.md) | 94,798 | 174,269 | 79,472 | 2 | 4 | 4 | -   |   
| [2022-02-01 to 2022-02-28](/kusama/2087-picasso/2022-02-28.md) | 40,395 | 94,797 | 54,403 |  | 3 | 4 | -   |   
| [2022-01-01 to 2022-01-31](/kusama/2087-picasso/2022-01-31.md) | 10,005 | 40,394 | 30,390 | 13 | 3 | 4 | -   |   
| [2021-12-28 to 2021-12-31](/kusama/2087-picasso/2021-12-31.md) | 1 | 10,004 | 10,004 | 1 | 4 | 2 | -   |   

## Picasso Assets as of 2023-03-11



| Symbol | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID | 
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | --- |
| [PICA](/kusama/assets/PICA) | 2,721 | 9,999,999,879.14  | 120.86  | 763,498,782.96   | 751,577,006  |  |   `{"Token":"PICA"}` | 

## substrate-etl Tables:

* _Blocks_: `substrate-etl.kusama.blocks2087` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.kusama.extrinsics2087` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.kusama.events2087` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.kusama.transfers2087` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.kusama.balances2087` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.kusama.accountsactive2087` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.kusama.accountspassive2087` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.kusama.accountsnew2087` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.kusama.accountsreaped2087` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.kusama.assets` (filter on `2087`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.kusama.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.kusama.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.kusama.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.kusama.blocks2087` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2087.json](https://cdn.polkaholic.io/substrate-etl/kusama/2087.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
