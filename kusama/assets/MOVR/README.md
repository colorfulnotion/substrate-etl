# MOVR on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-10


*XCM Interior Keys*:
* `[{"parachain":2023},{"palletInstance":10}]~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Moonriver](/kusama/2023-moonriver) | 245,935 | 10,579,308.33 $82,201,958.25 | 124,646.7 $968,513.51 | 2,269,140.81  $17,631,381.21 | 2,162,325.44 $16,801,418.36 | $7.77 | `{"Token":"MOVR"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 457 | 5,825.9 $45,267.66 |   |    |   | $7.77 | `{"Token":"MOVR"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 148 | 1,362.65 $10,587.88 |   |    |   | $7.77 | `{"Token":"113"}` |
| [Karura](/kusama/2000-karura) | 114 | 619.73 $4,815.33 |   |    |   | $7.77 | `{"ForeignAsset":"3"}` |
| [Shiden](/kusama/2007-shiden) | 24 | 6.67 $51.81 |   |    |   | $7.77 | `{"Token":"18446744073709551620"}` |
| [Khala](/kusama/2004-khala) | 11 | 0.44 $3.39 |   |    |   | $7.77 | `{"Token":"6"}` |
| [Crust Shadow](/kusama/2012-shadow) | 4 | 0.1 $0.79 |   |    |   | $7.77 | `{"Token":"232263652204149413431520870009560565298"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "MOVR" and date(ts) = "2023-03-10"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/MOVR.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/MOVR.json) | See [Definitions](/DEFINITIONS.md) for details
