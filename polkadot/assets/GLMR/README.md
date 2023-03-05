# GLMR on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-03


*XCM Interior Keys*:
* `[{"parachain":2004},{"palletInstance":10}]~polkadot`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Moonbeam](/polkadot/2004-moonbeam) | 2,941,281 | 1,056,051,206.09 $432,701,034.80 | 1,908,267.73 $781,883.89 | 278,067,956.62  $113,934,146.26 | 275,876,779.82 $113,036,344.65 | $0.41 | `{"Token":"GLMR"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 196 | 410,609.95 $168,544.20 |   |    |   | $0.41 | `{"Token2":"1"}` |
| [Parallel](/polkadot/2012-parallel) | 612 | 129,311.31 $52,983.36 |   |    |   | $0.41 | `{"Token":"114"}` |
| [Astar](/polkadot/2006-astar) | 254 | 24,224.44 $9,925.60 |   |    |   | $0.41 | `{"Token":"18446744073709551619"}` |
| [Acala](/polkadot/2000-acala) | 586 | 23,486.67 $9,623.31 |   |    |   | $0.41 | `{"ForeignAsset":"0"}` |
| [Phala](/polkadot/2035-phala) | 11 | 36.53 $14.97 |   |    |   | $0.41 | `{"Token":"1"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "GLMR" and date(ts) = "2023-03-03"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json) | See [Definitions](/DEFINITIONS.md) for details
