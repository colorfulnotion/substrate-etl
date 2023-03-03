# MOVR on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-01


*XCM Interior Keys*:
* `[{"parachain":2023},{"palletInstance":10}]~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Moonriver](/kusama/2023-moonriver) | 585,650 | 10,667,155.06 $106,950,367.92 | 24,549.6 $246,137.63 | 2,220,468.28  $22,262,721.29 | 2,116,486.94 $21,220,190.03 | $10.03 | `{"Token":"MOVR"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 455 | 5,876.26 $58,916.14 |   |    |   | $10.03 | `{"Token":"MOVR"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 144 | 1,227.61 $12,308.19 |   |    |   | $10.03 | `{"Token":"113"}` |
| [Karura](/kusama/2000-karura) | 114 | 619.73 $6,213.47 |   |    |   | $10.03 | `{"ForeignAsset":"3"}` |
| [Shiden](/kusama/2007-shiden) | 25 | 6.67 $66.85 |   |    |   | $10.03 | `{"Token":"18446744073709551620"}` |
| [Khala](/kusama/2004-khala) | 11 | 0.44 $4.38 |   |    |   | $10.03 | `{"Token":"6"}` |
| [Crust Shadow](/kusama/2012-shadow) | 4 | 0.1 $1.01 |   |    |   | $10.03 | `{"Token":"232263652204149413431520870009560565298"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "MOVR" and date(ts) = "2023-03-01"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/MOVR.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/MOVR.json) | See [Definitions](/DEFINITIONS.md) for details
