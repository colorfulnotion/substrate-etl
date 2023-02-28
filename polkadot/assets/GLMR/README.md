# GLMR on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-02-26


*XCM Interior Keys*:
* `[{"parachain":2004},{"palletInstance":10}]~polkadot`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Moonbeam](/polkadot/2004-moonbeam) | 2,760,096 | 1,055,388,049.72 $528,876,593.63 | 1,908,146.31 $956,211.24 | 277,652,023.06  $139,137,122.32 | 275,517,383.89 $138,067,410.86 | $0.50 | `{"Token":"GLMR"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 189 | 414,864.34 $207,897.03 |   |    |   | $0.50 | `{"Token2":"1"}` |
| [Parallel](/polkadot/2012-parallel) | 607 | 131,038.89 $65,666.28 |   |    |   | $0.50 | `{"Token":"114"}` |
| [Astar](/polkadot/2006-astar) | 242 | 25,460.22 $12,758.64 |   |    |   | $0.50 | `{"Token":"18446744073709551619"}` |
| [Acala](/polkadot/2000-acala) | 582 | 22,845.27 $11,448.23 |   |    |   | $0.50 | `{"ForeignAsset":"0"}` |
| [Phala](/polkadot/2035-phala) | 11 | 36.57 $18.33 |   |    |   | $0.50 | `{"Token":"1"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "GLMR" and date(ts) = "2023-02-26"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json) | See [Definitions](/DEFINITIONS.md) for details
