# PHA on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-07


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":2004}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Khala](/kusama/2004-khala) | 20,693 | 691,786,823.32 $112,044,217.00 | 13,120.02 $2,124.96 | 1,820,404.79  $294,839.14 | 1,406.9 $227.87 | $0.16 | `{"Token":"PHA"}` |
| [Karura](/kusama/2000-karura) | 287 | 177,512.71 $28,750.58 |   |    |   | $0.16 | `{"Token":"PHA"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 398 | 54,228.34 $8,783.01 |   |    |   | $0.16 | `{"Token":"PHA"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 143 | 20,225.22 $3,275.75 |   |    |   | $0.16 | `{"Token":"115"}` |
| [Moonriver](/kusama/2023-moonriver) | 49 | 4,434.39 $718.21 |   |    |   | $0.16 | `{"Token":"189307976387032586987344677431204943363"}` |
| [Shiden](/kusama/2007-shiden) | 15 | 53.6 $8.68 |   |    |   | $0.16 | `{"Token":"18446744073709551623"}` |
| [Turing](/kusama/2114-turing) | 2 | 0.76 $0.12 |   |    |   | $0.16 | `{"Token":"7"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "PHA" and date(ts) = "2023-03-07"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/PHA.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/PHA.json) | See [Definitions](/DEFINITIONS.md) for details
