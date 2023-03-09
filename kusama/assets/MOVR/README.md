# MOVR on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-06


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":2023},{"palletInstance":10}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Moonriver](/kusama/2023-moonriver) | 245,619 | 10,573,980.52 $95,656,473.76 | 124,665.08 $1,127,770.39 | 2,268,139.68  $20,518,502.33 | 2,163,894.6 $19,575,459.45 | $9.05 | `{"Token":"MOVR"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 455 | 5,844.07 $52,867.81 |   |    |   | $9.05 | `{"Token":"MOVR"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 146 | 1,241.23 $11,228.68 |   |    |   | $9.05 | `{"Token":"113"}` |
| [Karura](/kusama/2000-karura) | 114 | 619.73 $5,606.30 |   |    |   | $9.05 | `{"ForeignAsset":"3"}` |
| [Shiden](/kusama/2007-shiden) | 25 | 6.67 $60.32 |   |    |   | $9.05 | `{"Token":"18446744073709551620"}` |
| [Calamari](/kusama/2084-calamari) | 2 | 0.77 $6.93 |   |    |   | $9.05 | `{"Token":"11"}` |
| [Khala](/kusama/2004-khala) | 11 | 0.44 $3.95 |   |    |   | $9.05 | `{"Token":"6"}` |
| [Crust Shadow](/kusama/2012-shadow) | 4 | 0.1 $0.91 |   |    |   | $9.05 | `{"Token":"232263652204149413431520870009560565298"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "MOVR" and date(ts) = "2023-03-06"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/MOVR.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/MOVR.json) | See [Definitions](/DEFINITIONS.md) for details
