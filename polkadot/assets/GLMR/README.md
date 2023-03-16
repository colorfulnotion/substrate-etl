# GLMR on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-15


*XCM Interior Keys*:
* `[{"network":"polkadot"},{"parachain":2004},{"palletInstance":10}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Moonbeam](/polkadot/2004-moonbeam) | 1,067,374 | 1,057,586,773.88 $433,120,188.49 | 1,906,554.61 $780,803.35 | 287,771,769.39  $117,852,989.54 | 285,854,556.69 $117,067,821.32 | $0.41 | `{"Token":"GLMR"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 201 | 325,632.63 $133,358.39 |   |    |   | $0.41 | `{"Token2":"1"}` |
| [Parallel](/polkadot/2012-parallel) | 623 | 125,655.56 $51,460.52 |   |    |   | $0.41 | `{"Token":"114"}` |
| [Astar](/polkadot/2006-astar) | 262 | 23,637.25 $9,680.31 |   |    |   | $0.41 | `{"Token":"18446744073709551619"}` |
| [Acala](/polkadot/2000-acala) | 581 | 21,186.98 $8,676.84 |   |    |   | $0.41 | `{"ForeignAsset":"0"}` |
| [Phala](/polkadot/2035-phala) | 11 | 36.52 $14.93 |   |    |   | $0.41 | `{"Token":"1"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "GLMR" and date(ts) = "2023-03-15"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json) | See [Definitions](/DEFINITIONS.md) for details
