# GLMR on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-05


*XCM Interior Keys*:
* `[{"network":"polkadot"},{"parachain":2004},{"palletInstance":10}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Moonbeam](/polkadot/2004-moonbeam) | 1,062,284 | 1,056,330,227.74 $427,582,369.66 | 1,908,518.39 $772,531.92 | 278,225,424.54  $112,620,356.02 | 276,068,403.43 $111,747,234.93 | $0.40 | `{"Token":"GLMR"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 196 | 414,172.97 $167,649.34 |   |    |   | $0.40 | `{"Token2":"1"}` |
| [Parallel](/polkadot/2012-parallel) | 611 | 129,860.43 $52,565.03 |   |    |   | $0.40 | `{"Token":"114"}` |
| [Astar](/polkadot/2006-astar) | 255 | 23,561.26 $9,537.15 |   |    |   | $0.40 | `{"Token":"18446744073709551619"}` |
| [Acala](/polkadot/2000-acala) | 581 | 20,602.64 $8,339.56 |   |    |   | $0.40 | `{"ForeignAsset":"0"}` |
| [Phala](/polkadot/2035-phala) | 11 | 36.53 $14.79 |   |    |   | $0.40 | `{"Token":"1"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "GLMR" and date(ts) = "2023-03-05"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json) | See [Definitions](/DEFINITIONS.md) for details
