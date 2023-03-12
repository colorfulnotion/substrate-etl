# CSM on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-11


*XCM Interior Keys*:
* `{"parachain":2012}~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Crust Shadow](/kusama/2012-shadow) | 3,198 | 199,998,810.29 $1,985,287.40 | 1,168.93 $11.60 | 1,048,894.86  $10,411.85 | 412,959.96 $4,099.25 | $0.00993 | `{"Token":"CSM"}` |
| [Karura](/kusama/2000-karura) | 167 | 7,738,549.88 $76,816.68 |   |    |   | $0.00993 | `{"ForeignAsset":"5"}` |
| [Moonriver](/kusama/2023-moonriver) | 14 | 81,357.73 $807.60 |   |    |   | $0.00993 | `{"Token":"108457044225666871745333730479173774551"}` |
| [Shiden](/kusama/2007-shiden) | 12 | 1,133.87 $11.26 |   |    |   | $0.00993 | `{"Token":"18446744073709551624"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "CSM" and date(ts) = "2023-03-11"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/CSM.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/CSM.json) | See [Definitions](/DEFINITIONS.md) for details
