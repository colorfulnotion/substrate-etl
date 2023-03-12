# CRAB on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-11


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":2105},{"palletInstance":5}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Darwinia Crab](/kusama/2105-crab) | 5,045 | 1,367,741,091.73 $1,363,921.65 | 32,881.23 $32.79 | 2,002,201.95  $1,996.61 | 2,002,201.95 $1,996.61 | - | `{"Token":"CRAB"}` |
| [Moonriver](/kusama/2023-moonriver) | 12 | 28,211.46 $28.13 |   |    |   | - | `{"Token":"173481220575862801646329923366065693029"}` |
| [Karura](/kusama/2000-karura) | 10 | 6,430.92 $6.41 |   |    |   | - | `{"ForeignAsset":"13"}` |
| [Khala](/kusama/2004-khala) | 4 | 17 $0.02 |   |    |   | - | `{"Token":"11"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "CRAB" and date(ts) = "2023-03-11"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/CRAB.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/CRAB.json) | See [Definitions](/DEFINITIONS.md) for details
