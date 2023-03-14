# SubsocialX substrate-etl Summary (Monthly)

_Source_: [subsocialx.polkaholic.io](https://subsocialx.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2100
Status: Only partial index available: Onboarding


| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-03-01 to 2023-03-14](/kusama/2100-subsocialx/2023-03-31.md) | 2,312,144 | 2,406,483 | 94,340 | 638 | 29 | 33,763 | -   |   
| [2023-02-01 to 2023-02-28](/kusama/2100-subsocialx/2023-02-28.md) | 2,115,150 | 2,312,143 | 196,994 | 2,308 | 51 | 33,762 | -   |   
| [2023-01-04 to 2023-01-31](/kusama/2100-subsocialx/2023-01-31.md) | 1,918,848 | 2,115,149 | 153,842 | 1,726 | 40 | 33,759 | - 42,460 (21.63%) |   
| [2022-12-06 to 2022-12-13](/kusama/2100-subsocialx/2022-12-31.md) | 1,723,890 | 1,774,259 | 48,469 | 475 | 27 | 33,750 | -  **BROKEN** (3.77%) |   
| [2022-11-01 to 2022-11-12](/kusama/2100-subsocialx/2022-11-30.md) | 1,507,933 | 1,591,419 | 82,025 | 1,568 | 51 | 33,749 | -  **BROKEN** (1.75%) |   
| [2022-10-01 to 2022-10-31](/kusama/2100-subsocialx/2022-10-31.md) | 1,293,052 | 1,507,932 | 214,881 | 2,227 | 33 | 33,749 | -   |   
| [2022-09-01 to 2022-09-30](/kusama/2100-subsocialx/2022-09-30.md) | 1,095,994 | 1,293,051 | 197,058 | 2,008 | 31 | 33,749 | -   |   
| [2022-08-01 to 2022-08-31](/kusama/2100-subsocialx/2022-08-31.md) | 915,848 | 1,095,993 | 180,146 | 805 | 9 | 33,748 | -   |   
| [2022-07-01 to 2022-07-31](/kusama/2100-subsocialx/2022-07-31.md) | 758,174 | 915,847 | 157,674 | 406 | 7 | 33,745 | -   |   
| [2022-06-01 to 2022-06-30](/kusama/2100-subsocialx/2022-06-30.md) | 569,592 | 758,173 | 188,582 | 369 | 9 | 33,745 | -   |   
| [2022-05-01 to 2022-05-31](/kusama/2100-subsocialx/2022-05-31.md) | 396,132 | 569,591 | 173,460 | 844 | 13 | 33,743 | -   |   
| [2022-04-01 to 2022-04-30](/kusama/2100-subsocialx/2022-04-30.md) | 308,836 | 396,131 | 87,296 | 6,795 | 60 | 33,743 | -   |   
| [2022-03-01 to 2022-03-31](/kusama/2100-subsocialx/2022-03-31.md) | 178,187 | 308,835 | 130,649 | 611 | 10 | 20,426 | -   |   
| [2022-02-01 to 2022-02-28](/kusama/2100-subsocialx/2022-02-28.md) | 41,996 | 178,186 | 136,191 | 479 | 3 | 12,034 | -   |   
| [2022-01-25 to 2022-01-31](/kusama/2100-subsocialx/2022-01-31.md) | 1 | 41,995 | 41,995 |  | 2 | 1 | -   |   

## substrate-etl Tables:

* _Blocks_: `substrate-etl.kusama.blocks2100` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.kusama.extrinsics2100` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.kusama.events2100` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.kusama.transfers2100` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.kusama.balances2100` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.kusama.accountsactive2100` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.kusama.accountspassive2100` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.kusama.accountsnew2100` (date-partitioned by `ts`) - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.kusama.accountsreaped2100` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.kusama.assets` (filter on `2100`) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.kusama.xcmassets` (filter on `para_id`) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.kusama.xcmtransfers` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.kusama.xcm` (filter on `origination_para_id` or `destination_para_id`, date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

### # Blocks
```bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM `substrate-etl.kusama.blocks2100` 
group by monthDT 
order by monthDT desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2100.json](https://cdn.polkaholic.io/substrate-etl/kusama/2100.json) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)
