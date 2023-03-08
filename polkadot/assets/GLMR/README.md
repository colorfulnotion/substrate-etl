# GLMR on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-06


*XCM Interior Keys*:
* `[{"network":"polkadot"},{"parachain":2004},{"palletInstance":10}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Moonbeam](/polkadot/2004-moonbeam) | 1,062,561 | 1,056,470,234.57 $424,253,551.83 | 1,908,348.39 $766,347.75 | 281,947,518.06  $113,223,479.52 | 279,856,211.77 $112,383,660.19 | $0.40 | `{"Token":"GLMR"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 198 | 399,901.28 $160,590.93 |   |    |   | $0.40 | `{"Token2":"1"}` |
| [Parallel](/polkadot/2012-parallel) | 618 | 130,537.14 $52,420.64 |   |    |   | $0.40 | `{"Token":"114"}` |
| [Astar](/polkadot/2006-astar) | 259 | 23,835.99 $9,571.97 |   |    |   | $0.40 | `{"Token":"18446744073709551619"}` |
| [Acala](/polkadot/2000-acala) | 580 | 20,357.65 $8,175.15 |   |    |   | $0.40 | `{"ForeignAsset":"0"}` |
| [Phala](/polkadot/2035-phala) | 11 | 36.53 $14.67 |   |    |   | $0.40 | `{"Token":"1"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "GLMR" and date(ts) = "2023-03-06"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json) | See [Definitions](/DEFINITIONS.md) for details
