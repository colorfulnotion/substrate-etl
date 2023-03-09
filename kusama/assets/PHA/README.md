# PHA on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-06


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":2004}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Khala](/kusama/2004-khala) | 20,683 | 691,785,176.49 $115,685,510.20 | 14,766.85 $2,469.42 | 1,820,404.79  $304,421.75 | 1,406.9 $235.27 | $0.17 | `{"Token":"PHA"}` |
| [Karura](/kusama/2000-karura) | 289 | 177,862.29 $29,743.47 |   |    |   | $0.17 | `{"Token":"PHA"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 398 | 54,228.34 $9,068.47 |   |    |   | $0.17 | `{"Token":"PHA"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 144 | 20,119.33 $3,364.51 |   |    |   | $0.17 | `{"Token":"115"}` |
| [Moonriver](/kusama/2023-moonriver) | 50 | 4,434.39 $741.55 |   |    |   | $0.17 | `{"Token":"189307976387032586987344677431204943363"}` |
| [Shiden](/kusama/2007-shiden) | 15 | 53.6 $8.96 |   |    |   | $0.17 | `{"Token":"18446744073709551623"}` |
| [Calamari](/kusama/2084-calamari) | 3 | 8.43 $1.41 |   |    |   | $0.17 | `{"Token":"13"}` |
| [Turing](/kusama/2114-turing) | 2 | 0.76 $0.13 |   |    |   | $0.17 | `{"Token":"7"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "PHA" and date(ts) = "2023-03-06"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/PHA.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/PHA.json) | See [Definitions](/DEFINITIONS.md) for details
