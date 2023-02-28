# GLMR on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-02-27


*XCM Interior Keys*:
* `[{"parachain":2004},{"palletInstance":10}]~polkadot`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Moonbeam](/polkadot/2004-moonbeam) | 2,777,623 | 1,055,527,530.08 $470,872,779.80 | 1,907,638.28 $851,000.96 | 277,687,830.89  $123,877,054.00 | 275,529,691.06 $122,914,303.84 | $0.45 | `{"Token":"GLMR"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 189 | 416,049.52 $185,600.46 |   |    |   | $0.45 | `{"Token2":"1"}` |
| [Parallel](/polkadot/2012-parallel) | 611 | 134,228.31 $59,879.50 |   |    |   | $0.45 | `{"Token":"114"}` |
| [Astar](/polkadot/2006-astar) | 245 | 25,901.67 $11,554.78 |   |    |   | $0.45 | `{"Token":"18446744073709551619"}` |
| [Acala](/polkadot/2000-acala) | 582 | 22,845.37 $10,191.36 |   |    |   | $0.45 | `{"ForeignAsset":"0"}` |
| [Phala](/polkadot/2035-phala) | 11 | 36.57 $16.32 |   |    |   | $0.45 | `{"Token":"1"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "GLMR" and date(ts) = "2023-02-27"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json) | See [Definitions](/DEFINITIONS.md) for details
