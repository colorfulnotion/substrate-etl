# GLMR on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-12


*XCM Interior Keys*:
* `[{"network":"polkadot"},{"parachain":2004},{"palletInstance":10}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Moonbeam](/polkadot/2004-moonbeam) | 1,065,286 | 1,057,167,458.07 $394,580,346.06 | 1,906,554.19 $711,607.99 | 286,693,933.53  $107,006,501.80 | 284,565,482.27 $106,212,072.28 | $0.37 | `{"Token":"GLMR"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 195 | 406,133.1 $151,586.33 |   |    |   | $0.37 | `{"Token2":"1"}` |
| [Parallel](/polkadot/2012-parallel) | 625 | 123,959.03 $46,266.84 |   |    |   | $0.37 | `{"Token":"114"}` |
| [Astar](/polkadot/2006-astar) | 260 | 23,648.78 $8,826.74 |   |    |   | $0.37 | `{"Token":"18446744073709551619"}` |
| [Acala](/polkadot/2000-acala) | 580 | 21,418.99 $7,994.49 |   |    |   | $0.37 | `{"ForeignAsset":"0"}` |
| [Phala](/polkadot/2035-phala) | 11 | 36.52 $13.63 |   |    |   | $0.37 | `{"Token":"1"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "GLMR" and date(ts) = "2023-03-12"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json) | See [Definitions](/DEFINITIONS.md) for details
