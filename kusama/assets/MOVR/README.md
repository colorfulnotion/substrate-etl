# MOVR on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-02-28


*XCM Interior Keys*:
* `[{"parachain":2023},{"palletInstance":10}]~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Moonriver](/kusama/2023-moonriver) | 585,531 | 10,665,856.28 $103,815,222.55 | 24,500.88 $238,477.24 | 2,219,720.77  $21,605,466.94 | 2,115,740.22 $20,593,380.97 | $9.73 | `{"Token":"MOVR"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 456 | 5,996.61 $58,367.49 |   |    |   | $9.73 | `{"Token":"MOVR"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 144 | 1,231.77 $11,989.30 |   |    |   | $9.73 | `{"Token":"113"}` |
| [Karura](/kusama/2000-karura) | 114 | 619.73 $6,032.07 |   |    |   | $9.73 | `{"ForeignAsset":"3"}` |
| [Shiden](/kusama/2007-shiden) | 25 | 6.67 $64.90 |   |    |   | $9.73 | `{"Token":"18446744073709551620"}` |
| [Khala](/kusama/2004-khala) | 11 | 0.44 $4.25 |   |    |   | $9.73 | `{"Token":"6"}` |
| [Crust Shadow](/kusama/2012-shadow) | 4 | 0.1 $0.98 |   |    |   | $9.73 | `{"Token":"232263652204149413431520870009560565298"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "MOVR" and date(ts) = "2023-02-28"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/MOVR.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/MOVR.json) | See [Definitions](/DEFINITIONS.md) for details
