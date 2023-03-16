# MOVR on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-12


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":2023},{"palletInstance":10}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Moonriver](/kusama/2023-moonriver) | 246,024 | 10,581,954.67 $85,009,233.40 | 124,650.76 $1,004,909.12 | 2,268,082.24  $18,232,232.06 | 2,161,266.8 $17,370,591.63 | $8.04 | `{"Token":"MOVR"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 455 | 5,816.01 $46,497.06 |   |    |   | $7.99 | `{"Token":"MOVR"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 146 | 1,325.28 $10,595.18 |   |    |   | $7.99 | `{"Token":"113"}` |
| [Karura](/kusama/2000-karura) | 114 | 619.73 $4,954.51 |   |    |   | $7.99 | `{"ForeignAsset":"3"}` |
| [Shiden](/kusama/2007-shiden) | 24 | 6.67 $53.31 |   |    |   | $7.99 | `{"Token":"18446744073709551620"}` |
| [Khala](/kusama/2004-khala) | 11 | 0.44 $3.49 |   |    |   | $7.99 | `{"Token":"6"}` |
| [Crust Shadow](/kusama/2012-shadow) | 4 | 0.1 $0.81 |   |    |   | $7.99 | `{"Token":"232263652204149413431520870009560565298"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "MOVR" and date(ts) = "2023-03-12"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/MOVR.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/MOVR.json) | See [Definitions](/DEFINITIONS.md) for details
