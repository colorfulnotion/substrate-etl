# QTZ on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-06


*XCM Interior Keys*:
* `{"parachain":2095}~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Quartz](/kusama/2095-quartz) | 80,072 | 1,097,032,960.55 $1,300,439.69 |   | 731,972,306.88  $867,691.19 | 731,972,306.88 $867,691.19 | $0.00119 | `{"Token":"QTZ"}` |
| [Karura](/kusama/2000-karura) | 306 | 5,520,776.22 $6,544.41 |   |    |   | $0.00119 | `{"ForeignAsset":"2"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "QTZ" and date(ts) = "2023-03-06"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/QTZ.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/QTZ.json) | See [Definitions](/DEFINITIONS.md) for details
