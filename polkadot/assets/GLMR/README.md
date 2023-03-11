# GLMR on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-09


*XCM Interior Keys*:
* `[{"network":"polkadot"},{"parachain":2004},{"palletInstance":10}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Moonbeam](/polkadot/2004-moonbeam) | 1,064,014 | 1,056,891,872.05 $389,131,648.58 | 1,906,523.01 $701,953.02 | 283,052,343  $104,215,604.05 | 281,145,592.67 $103,513,567.34 | $0.37 | `{"Token":"GLMR"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 197 | 401,729.35 $147,910.69 |   |    |   | $0.37 | `{"Token2":"1"}` |
| [Parallel](/polkadot/2012-parallel) | 627 | 120,901.31 $44,514.04 |   |    |   | $0.37 | `{"Token":"114"}` |
| [Astar](/polkadot/2006-astar) | 259 | 23,344.32 $8,595.03 |   |    |   | $0.37 | `{"Token":"18446744073709551619"}` |
| [Acala](/polkadot/2000-acala) | 579 | 20,228.27 $7,447.75 |   |    |   | $0.37 | `{"ForeignAsset":"0"}` |
| [Phala](/polkadot/2035-phala) | 11 | 36.52 $13.45 |   |    |   | $0.37 | `{"Token":"1"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "GLMR" and date(ts) = "2023-03-09"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json) | See [Definitions](/DEFINITIONS.md) for details
