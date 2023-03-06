# PHA on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-04


*XCM Interior Keys*:
* `{"parachain":2004}~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Khala](/kusama/2004-khala) | 22,809 | 689,633,181.39 $118,625,289.93 | 14,564.25 $2,505.23 | 1,772,333.64  $304,862.93 | 1,377.11 $236.88 | $0.17 | `{"Token":"PHA"}` |
| [Karura](/kusama/2000-karura) | 290 | 174,175.3 $29,960.27 |   |    |   | $0.17 | `{"Token":"PHA"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 399 | 54,285.44 $9,337.76 |   |    |   | $0.17 | `{"Token":"PHA"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 145 | 20,052.52 $3,449.28 |   |    |   | $0.17 | `{"Token":"115"}` |
| [Moonriver](/kusama/2023-moonriver) | 48 | 4,434.39 $762.77 |   |    |   | $0.17 | `{"Token":"189307976387032586987344677431204943363"}` |
| [Shiden](/kusama/2007-shiden) | 15 | 53.6 $9.22 |   |    |   | $0.17 | `{"Token":"18446744073709551623"}` |
| [Calamari](/kusama/2084-calamari) | 3 | 8.43 $1.45 |   |    |   | $0.17 | `{"Token":"13"}` |
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
 where symbol = "PHA" and date(ts) = "2023-03-04"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/PHA.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/PHA.json) | See [Definitions](/DEFINITIONS.md) for details
