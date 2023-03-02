# PHA on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-02-28


*XCM Interior Keys*:
* `{"parachain":2004}~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Khala](/kusama/2004-khala) | 23,764 | 691,785,199.75 $115,530,314.62 | 14,743.61 $2,462.23 | 1,821,061.97  $304,123.10 | 1,406.9 $234.96 | $0.17 | `{"Token":"PHA"}` |
| [Karura](/kusama/2000-karura) | 289 | 174,456.26 $29,134.75 |   |    |   | $0.17 | `{"Token":"PHA"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 400 | 54,286.41 $9,066.00 |   |    |   | $0.17 | `{"Token":"PHA"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 146 | 21,471.72 $3,585.85 |   |    |   | $0.17 | `{"Token":"115"}` |
| [Moonriver](/kusama/2023-moonriver) | 48 | 4,434.39 $740.56 |   |    |   | $0.17 | `{"Token":"189307976387032586987344677431204943363"}` |
| [Shiden](/kusama/2007-shiden) | 15 | 53.6 $8.95 |   |    |   | $0.17 | `{"Token":"18446744073709551623"}` |
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
 where symbol = "PHA" and date(ts) = "2023-02-28"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/PHA.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/PHA.json) | See [Definitions](/DEFINITIONS.md) for details
