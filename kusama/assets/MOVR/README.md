# MOVR on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-08


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":2023},{"palletInstance":10}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Moonriver](/kusama/2023-moonriver) | 245,730 | 10,576,838.35 $87,457,425.07 | 124,646.7 $1,030,674.68 | 2,271,215.66  $18,780,155.90 | 2,166,867.95 $17,917,328.93 | $8.27 | `{"Token":"MOVR"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 457 | 5,823.97 $48,157.04 |   |    |   | $8.27 | `{"Token":"MOVR"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 148 | 1,294.43 $10,703.35 |   |    |   | $8.27 | `{"Token":"113"}` |
| [Karura](/kusama/2000-karura) | 114 | 619.73 $5,124.38 |   |    |   | $8.27 | `{"ForeignAsset":"3"}` |
| [Shiden](/kusama/2007-shiden) | 25 | 6.67 $55.13 |   |    |   | $8.27 | `{"Token":"18446744073709551620"}` |
| [Khala](/kusama/2004-khala) | 11 | 0.44 $3.61 |   |    |   | $8.27 | `{"Token":"6"}` |
| [Crust Shadow](/kusama/2012-shadow) | 4 | 0.1 $0.84 |   |    |   | $8.27 | `{"Token":"232263652204149413431520870009560565298"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "MOVR" and date(ts) = "2023-03-08"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/MOVR.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/MOVR.json) | See [Definitions](/DEFINITIONS.md) for details
