# QTZ on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-15


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":2095}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Quartz](/kusama/2095-quartz) | 80,095 | 1,097,032,929.2 $1,318,419.59 |   | 732,787,254.87  $880,667.34 | 732,787,254.87 $880,667.34 | $0.0012 | `{"Token":"QTZ"}` |
| [Karura](/kusama/2000-karura) | 307 | 5,615,431.31 $6,748.65 |   |    |   | $0.0012 | `{"ForeignAsset":"2"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "QTZ" and date(ts) = "2023-03-15"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/QTZ.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/QTZ.json) | See [Definitions](/DEFINITIONS.md) for details
