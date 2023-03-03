# QTZ on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-01


*XCM Interior Keys*:
* `{"parachain":2095}~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Quartz](/kusama/2095-quartz) | 83,314 | 1,097,032,985.06 $1,120,993.55 |   | 730,834,045.62  $746,796.37 | 730,834,045.62 $746,796.37 | $0.00102 | `{"Token":"QTZ"}` |
| [Karura](/kusama/2000-karura) | 308 | 5,750,859.2 $5,876.47 |   |    |   | $0.00102 | `{"ForeignAsset":"2"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "QTZ" and date(ts) = "2023-03-01"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/QTZ.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/QTZ.json) | See [Definitions](/DEFINITIONS.md) for details
