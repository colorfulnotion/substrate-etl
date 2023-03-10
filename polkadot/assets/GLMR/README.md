# GLMR on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-08


*XCM Interior Keys*:
* `[{"parachain":2004},{"palletInstance":10}]~polkadot`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Moonbeam](/polkadot/2004-moonbeam) | 1,063,426 | 1,056,752,144.78 $405,452,732.05 | 1,906,693.01 $731,556.49 | 283,550,639.14  $108,792,191.13 | 281,671,527.63 $108,071,217.06 | $0.38 | `{"Token":"GLMR"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 198 | 401,602.1 $154,085.96 |   |    |   | $0.38 | `{"Token2":"1"}` |
| [Parallel](/polkadot/2012-parallel) | 621 | 131,636.29 $50,505.97 |   |    |   | $0.38 | `{"Token":"114"}` |
| [Astar](/polkadot/2006-astar) | 258 | 23,896.33 $9,168.50 |   |    |   | $0.38 | `{"Token":"18446744073709551619"}` |
| [Acala](/polkadot/2000-acala) | 580 | 20,357.67 $7,810.79 |   |    |   | $0.38 | `{"ForeignAsset":"0"}` |
| [Phala](/polkadot/2035-phala) | 11 | 36.53 $14.02 |   |    |   | $0.38 | `{"Token":"1"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "GLMR" and date(ts) = "2023-03-08"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json) | See [Definitions](/DEFINITIONS.md) for details
