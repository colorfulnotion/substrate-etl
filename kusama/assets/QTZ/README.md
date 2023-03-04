# QTZ on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-02


*XCM Interior Keys*:
* `{"parachain":2095}~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Quartz](/kusama/2095-quartz) | 83,325 | 1,097,032,979.91 $1,455,439.37 |   | 732,643,441.46  $972,001.87 | 732,643,441.46 $972,001.87 | $0.00133 | `{"Token":"QTZ"}` |
| [Karura](/kusama/2000-karura) | 308 | 5,490,400.53 $7,284.14 |   |    |   | $0.00133 | `{"ForeignAsset":"2"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "QTZ" and date(ts) = "2023-03-02"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/QTZ.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/QTZ.json) | See [Definitions](/DEFINITIONS.md) for details
