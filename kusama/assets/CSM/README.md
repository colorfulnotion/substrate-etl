# CSM on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-03


*XCM Interior Keys*:
* `{"parachain":2012}~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Crust Shadow](/kusama/2012-shadow) | 3,207 | 199,998,810.57 $3,576,138.26 | 1,168.93 $20.90 | 1,048,894.86  $18,755.08 | 412,959.96 $7,384.05 | $0.02 | `{"Token":"CSM"}` |
| [Karura](/kusama/2000-karura) | 169 | 7,576,462.81 $135,473.20 |   |    |   | $0.02 | `{"ForeignAsset":"5"}` |
| [Moonriver](/kusama/2023-moonriver) | 11 | 70,241.73 $1,255.98 |   |    |   | $0.02 | `{"Token":"108457044225666871745333730479173774551"}` |
| [Shiden](/kusama/2007-shiden) | 12 | 1,133.87 $20.27 |   |    |   | $0.02 | `{"Token":"18446744073709551624"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "CSM" and date(ts) = "2023-03-03"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/CSM.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/CSM.json) | See [Definitions](/DEFINITIONS.md) for details
