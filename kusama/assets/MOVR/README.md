# MOVR on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-05


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":2023},{"palletInstance":10}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Moonriver](/kusama/2023-moonriver) | 585,975 | 10,572,537.9 $97,509,532.74 | 124,684.08 $1,149,949.66 | 2,225,784.74  $20,528,205.44 | 2,121,519.52 $19,566,577.05 | $9.22 | `{"Token":"MOVR"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 455 | 5,871.97 $54,156.68 |   |    |   | $9.22 | `{"Token":"MOVR"}` |
| [Karura](/kusama/2000-karura) | 114 | 1,239.46 $11,431.38 |   |    |   | $9.22 | `{"ForeignAsset":"3"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 146 | 1,223.54 $11,284.62 |   |    |   | $9.22 | `{"Token":"113"}` |
| [Shiden](/kusama/2007-shiden) | 25 | 6.67 $61.50 |   |    |   | $9.22 | `{"Token":"18446744073709551620"}` |
| [Calamari](/kusama/2084-calamari) | 2 | 0.77 $7.07 |   |    |   | $9.22 | `{"Token":"11"}` |
| [Khala](/kusama/2004-khala) | 11 | 0.44 $4.03 |   |    |   | $9.22 | `{"Token":"6"}` |
| [Crust Shadow](/kusama/2012-shadow) | 4 | 0.1 $0.93 |   |    |   | $9.22 | `{"Token":"232263652204149413431520870009560565298"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "MOVR" and date(ts) = "2023-03-05"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/MOVR.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/MOVR.json) | See [Definitions](/DEFINITIONS.md) for details
