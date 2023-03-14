# GLMR on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-13


*XCM Interior Keys*:
* `[{"network":"polkadot"},{"parachain":2004},{"palletInstance":10}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Moonbeam](/polkadot/2004-moonbeam) | 1,065,794 | 1,057,306,457.69 $426,335,021.46 | 1,906,554.19 $768,775.05 | 287,431,860.47  $115,900,425.57 | 285,303,591.52 $115,042,249.04 | $0.40 | `{"Token":"GLMR"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 199 | 409,124.02 $164,970.05 |   |    |   | $0.40 | `{"Token2":"1"}` |
| [Parallel](/polkadot/2012-parallel) | 623 | 121,518.85 $48,999.74 |   |    |   | $0.40 | `{"Token":"114"}` |
| [Astar](/polkadot/2006-astar) | 260 | 23,660.55 $9,540.58 |   |    |   | $0.40 | `{"Token":"18446744073709551619"}` |
| [Acala](/polkadot/2000-acala) | 579 | 21,268.01 $8,575.84 |   |    |   | $0.40 | `{"ForeignAsset":"0"}` |
| [Phala](/polkadot/2035-phala) | 11 | 36.52 $14.73 |   |    |   | $0.40 | `{"Token":"1"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "GLMR" and date(ts) = "2023-03-13"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json) | See [Definitions](/DEFINITIONS.md) for details
