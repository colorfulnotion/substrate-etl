# GLMR on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-11


*XCM Interior Keys*:
* `[{"network":"polkadot"},{"parachain":2004},{"palletInstance":10}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Moonbeam](/polkadot/2004-moonbeam) | 1,064,879 | 1,057,134,507.56 $369,491,593.91 | 1,906,531.32 $666,374.33 | 287,089,972.08  $100,344,214.12 | 284,963,381.5 $99,600,924.28 | $0.35 | `{"Token":"GLMR"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 197 | 405,645.04 $141,781.80 |   |    |   | $0.35 | `{"Token2":"1"}` |
| [Parallel](/polkadot/2012-parallel) | 625 | 123,599.98 $43,200.89 |   |    |   | $0.35 | `{"Token":"114"}` |
| [Astar](/polkadot/2006-astar) | 261 | 23,485.66 $8,208.75 |   |    |   | $0.35 | `{"Token":"18446744073709551619"}` |
| [Acala](/polkadot/2000-acala) | 580 | 21,418.99 $7,486.41 |   |    |   | $0.35 | `{"ForeignAsset":"0"}` |
| [Phala](/polkadot/2035-phala) | 11 | 36.52 $12.77 |   |    |   | $0.35 | `{"Token":"1"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "GLMR" and date(ts) = "2023-03-11"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json) | See [Definitions](/DEFINITIONS.md) for details
