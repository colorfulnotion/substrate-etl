# BSX on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-03


*XCM Interior Keys*:
* `[{"parachain":2090},{"generalIndex":0}]~kusama`
* `[{"parachain":2090},{"generalKey":"0x00000000"}]~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Basilisk](/kusama/2090-basilisk) | 18,383 | 49,499,914,981.2 $6,042,440.46 | 59,393.13 $7.25 | 23,213,312,099.19  $2,833,642.37 | 23,124,234,319.69 $2,822,768.67 | - | `{"Token":"BSX"}` |
| [Karura](/kusama/2000-karura) | 115 | 5,486,871.49 $669.78 |   |    |   | - | `{"ForeignAsset":"11"}` |
| [Khala](/kusama/2004-khala) | 6 | 6,770.26 $0.83 |   |    |   | - | `{"Token":"9"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "BSX" and date(ts) = "2023-03-03"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/BSX.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/BSX.json) | See [Definitions](/DEFINITIONS.md) for details
