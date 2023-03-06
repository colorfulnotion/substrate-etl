# GLMR on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-04


*XCM Interior Keys*:
* `[{"parachain":2004},{"palletInstance":10}]~polkadot`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Moonbeam](/polkadot/2004-moonbeam) | 2,969,969 | 1,056,191,045.29 $426,214,832.01 | 1,908,437.73 $770,130.05 | 277,941,150.76  $112,160,239.77 | 275,750,047.56 $111,276,043.02 | $0.40 | `{"Token":"GLMR"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 194 | 405,877.39 $163,787.57 |   |    |   | $0.40 | `{"Token2":"1"}` |
| [Parallel](/polkadot/2012-parallel) | 611 | 129,767.16 $52,366.18 |   |    |   | $0.40 | `{"Token":"114"}` |
| [Astar](/polkadot/2006-astar) | 252 | 24,138.44 $9,740.82 |   |    |   | $0.40 | `{"Token":"18446744073709551619"}` |
| [Acala](/polkadot/2000-acala) | 584 | 20,720.29 $8,361.46 |   |    |   | $0.40 | `{"ForeignAsset":"0"}` |
| [Phala](/polkadot/2035-phala) | 11 | 36.53 $14.74 |   |    |   | $0.40 | `{"Token":"1"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "GLMR" and date(ts) = "2023-03-04"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json) | See [Definitions](/DEFINITIONS.md) for details
