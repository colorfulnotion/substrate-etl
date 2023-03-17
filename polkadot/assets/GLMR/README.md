# GLMR on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-16


*XCM Interior Keys*:
* `[{"network":"polkadot"},{"parachain":2004},{"palletInstance":10}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Moonbeam](/polkadot/2004-moonbeam) | 1,067,698 | 1,057,726,895.24 $424,408,950.92 | 1,906,554.61 $764,997.89 | 287,966,209.64  $115,545,361.93 | 286,049,205.24 $114,776,171.10 | $0.40 | `{"Token":"GLMR"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 202 | 322,748.41 $129,501.59 |   |    |   | $0.40 | `{"Token2":"1"}` |
| [Parallel](/polkadot/2012-parallel) | 631 | 128,785.14 $51,674.55 |   |    |   | $0.40 | `{"Token":"114"}` |
| [Acala](/polkadot/2000-acala) | 580 | 21,137.07 $8,481.17 |   |    |   | $0.40 | `{"ForeignAsset":"0"}` |
| [Astar](/polkadot/2006-astar) | 262 | 20,182.81 $8,098.28 |   |    |   | $0.40 | `{"Token":"18446744073709551619"}` |
| [Phala](/polkadot/2035-phala) | 11 | 36.52 $14.65 |   |    |   | $0.40 | `{"Token":"1"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "GLMR" and date(ts) = "2023-03-16"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json) | See [Definitions](/DEFINITIONS.md) for details
