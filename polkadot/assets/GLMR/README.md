# GLMR on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-18


*XCM Interior Keys*:
* `[{"network":"polkadot"},{"parachain":2004},{"palletInstance":10}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Moonbeam](/polkadot/2004-moonbeam) | 1,069,645 | 1,057,977,418.88 $442,475,787.34 | 1,899,937.29 $794,750.54 | 289,050,745.58  $120,888,238.81 | 287,153,457.64 $120,094,359.99 | $0.42 | `{"Token":"GLMR"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 206 | 324,116.3 $135,620.98 |   |    |   | $0.42 | `{"Token2":"1"}` |
| [Parallel](/polkadot/2012-parallel) | 632 | 128,318.12 $53,692.54 |   |    |   | $0.42 | `{"Token":"114"}` |
| [Acala](/polkadot/2000-acala) | 583 | 21,583.5 $9,031.25 |   |    |   | $0.42 | `{"ForeignAsset":"0"}` |
| [Astar](/polkadot/2006-astar) | 267 | 19,425.32 $8,128.20 |   |    |   | $0.42 | `{"Token":"18446744073709551619"}` |
| [Phala](/polkadot/2035-phala) | 11 | 36.51 $15.28 |   |    |   | $0.42 | `{"Token":"1"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "GLMR" and date(ts) = "2023-03-18"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json) | See [Definitions](/DEFINITIONS.md) for details
