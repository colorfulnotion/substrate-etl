# PHA on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-02


*XCM Interior Keys*:
* `{"parachain":2004}~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Khala](/kusama/2004-khala) | 23,801 | 691,785,188.86 $123,346,123.71 | 14,754.49 $2,630.74 | 1,821,024.98  $324,690.92 | 1,406.9 $250.85 | $0.18 | `{"Token":"PHA"}` |
| [Karura](/kusama/2000-karura) | 290 | 171,848.08 $30,640.72 |   |    |   | $0.18 | `{"Token":"PHA"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 399 | 54,285.44 $9,679.16 |   |    |   | $0.18 | `{"Token":"PHA"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 145 | 20,229.64 $3,606.97 |   |    |   | $0.18 | `{"Token":"115"}` |
| [Moonriver](/kusama/2023-moonriver) | 48 | 4,434.39 $790.66 |   |    |   | $0.18 | `{"Token":"189307976387032586987344677431204943363"}` |
| [Shiden](/kusama/2007-shiden) | 15 | 53.6 $9.56 |   |    |   | $0.18 | `{"Token":"18446744073709551623"}` |
| [Turing](/kusama/2114-turing) | 2 | 0.76 $0.13 |   |    |   | $0.18 | `{"Token":"7"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "PHA" and date(ts) = "2023-03-02"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/PHA.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/PHA.json) | See [Definitions](/DEFINITIONS.md) for details
