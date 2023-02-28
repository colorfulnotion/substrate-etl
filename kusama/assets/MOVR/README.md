# MOVR on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-02-26


*XCM Interior Keys*:
* `[{"parachain":2023},{"palletInstance":10}]~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Moonriver](/kusama/2023-moonriver) | 585,330 | 10,663,134.57 $117,763,914.42 | 24,500.86 $270,588.13 | 2,218,199.09  $24,497,844.06 | 2,114,985.52 $23,357,950.89 | $11.04 | `{"Token":"MOVR"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 457 | 6,018.39 $66,467.27 |   |    |   | $11.04 | `{"Token":"MOVR"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 145 | 1,216.48 $13,434.88 |   |    |   | $11.04 | `{"Token":"113"}` |
| [Karura](/kusama/2000-karura) | 114 | 619.73 $6,844.29 |   |    |   | $11.04 | `{"ForeignAsset":"3"}` |
| [Shiden](/kusama/2007-shiden) | 25 | 6.67 $73.64 |   |    |   | $11.04 | `{"Token":"18446744073709551620"}` |
| [Khala](/kusama/2004-khala) | 11 | 0.44 $4.82 |   |    |   | $11.04 | `{"Token":"6"}` |
| [Crust Shadow](/kusama/2012-shadow) | 4 | 0.1 $1.12 |   |    |   | $11.04 | `{"Token":"232263652204149413431520870009560565298"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "MOVR" and date(ts) = "2023-02-26"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/MOVR.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/MOVR.json) | See [Definitions](/DEFINITIONS.md) for details
