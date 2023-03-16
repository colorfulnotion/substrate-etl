# GLMR on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-07


*XCM Interior Keys*:
* `[{"network":"polkadot"},{"parachain":2004},{"palletInstance":10}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Moonbeam](/polkadot/2004-moonbeam) | 1,062,891 | 1,056,610,572.85 $414,952,386.43 | 1,908,201.26 $749,389.31 | 281,029,992.58  $110,366,173.76 | 278,950,587.98 $109,549,549.43 | $0.39 | `{"Token":"GLMR"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 197 | 400,213.02 $157,171.76 |   |    |   | $0.39 | `{"Token2":"1"}` |
| [Parallel](/polkadot/2012-parallel) | 618 | 131,500.89 $51,643.06 |   |    |   | $0.39 | `{"Token":"114"}` |
| [Astar](/polkadot/2006-astar) | 259 | 23,847.47 $9,365.38 |   |    |   | $0.39 | `{"Token":"18446744073709551619"}` |
| [Acala](/polkadot/2000-acala) | 581 | 20,367.65 $7,998.79 |   |    |   | $0.39 | `{"ForeignAsset":"0"}` |
| [Phala](/polkadot/2035-phala) | 11 | 36.53 $14.35 |   |    |   | $0.39 | `{"Token":"1"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "GLMR" and date(ts) = "2023-03-07"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json) | See [Definitions](/DEFINITIONS.md) for details
