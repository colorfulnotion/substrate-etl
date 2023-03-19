# BSX on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-18


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":2090},{"generalIndex":0}]`
* `[{"network":"kusama"},{"parachain":2090},{"generalKey":"0x00000000"}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Basilisk](/kusama/2090-basilisk) | 16,958 | 49,499,913,984.26 $7,374,758.13 | 60,382.57 $9.00 | 23,064,477,175.61  $3,436,267.40 | 22,968,025,285.87 $3,421,897.48 | - | `{"Token":"BSX"}` |
| [Karura](/kusama/2000-karura) | 114 | 3,856,042.37 $574.49 |   |    |   | - | `{"ForeignAsset":"11"}` |
| [Khala](/kusama/2004-khala) | 6 | 6,770.26 $1.01 |   |    |   | - | `{"Token":"9"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "BSX" and date(ts) = "2023-03-18"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/BSX.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/BSX.json) | See [Definitions](/DEFINITIONS.md) for details
