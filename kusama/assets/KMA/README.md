# KMA on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-05


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":2084}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Calamari](/kusama/2084-calamari) | 35,663 | 10,117,211,088.78 $21,600,260.12 | 16.35 $0.03 | 1,887,163,969.07  $4,029,097.77 | 1,009,250,543.99 $2,154,751.35 | $0.00214 | `{"Token":"KMA"}` |
| [Moonriver](/kusama/2023-moonriver) | 114 | 7,044,610.69 $15,040.25 |   |    |   | $0.00214 | `{"Token":"213357169630950964874127107356898319277"}` |
| [Karura](/kusama/2000-karura) | 9 | 85,492.45 $182.53 |   |    |   | $0.00214 | `{"ForeignAsset":"10"}` |
| [Khala](/kusama/2004-khala) | 5 | 391.4 $0.84 |   |    |   | $0.00214 | `{"Token":"8"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "KMA" and date(ts) = "2023-03-05"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KMA.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KMA.json) | See [Definitions](/DEFINITIONS.md) for details
