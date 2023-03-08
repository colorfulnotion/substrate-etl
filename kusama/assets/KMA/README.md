# KMA on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-06


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":2084}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Calamari](/kusama/2084-calamari) | 35,665 | 10,117,620,477.45 $20,645,563.82 | 16.35 $0.03 | 1,888,616,753.57  $3,853,826.88 | 1,010,703,328.49 $2,062,396.01 | $0.00204 | `{"Token":"KMA"}` |
| [Moonriver](/kusama/2023-moonriver) | 114 | 7,094,688.02 $14,477.10 |   |    |   | $0.00204 | `{"Token":"213357169630950964874127107356898319277"}` |
| [Karura](/kusama/2000-karura) | 9 | 42,746.23 $87.23 |   |    |   | $0.00204 | `{"ForeignAsset":"10"}` |
| [Khala](/kusama/2004-khala) | 5 | 391.4 $0.80 |   |    |   | $0.00204 | `{"Token":"8"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "KMA" and date(ts) = "2023-03-06"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KMA.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KMA.json) | See [Definitions](/DEFINITIONS.md) for details
