# QTZ on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-16


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":2095}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Quartz](/kusama/2095-quartz) | 80,094 | 1,097,032,925.46 $1,200,488.59 |   | 732,743,615.11  $801,844.98 | 732,743,615.11 $801,844.98 | $0.00109 | `{"Token":"QTZ"}` |
| [Karura](/kusama/2000-karura) | 308 | 5,794,110.14 $6,340.52 |   |    |   | $0.00109 | `{"ForeignAsset":"2"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "QTZ" and date(ts) = "2023-03-16"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/QTZ.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/QTZ.json) | See [Definitions](/DEFINITIONS.md) for details
