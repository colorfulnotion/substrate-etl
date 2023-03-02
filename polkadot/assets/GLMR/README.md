# GLMR on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-02-28


*XCM Interior Keys*:
* `[{"parachain":2004},{"palletInstance":10}]~polkadot`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Moonbeam](/polkadot/2004-moonbeam) | 2,806,016 | 1,055,666,471.67 $449,050,354.92 | 1,908,821.12 $811,972.10 | 277,912,490.33  $118,215,531.37 | 275,744,417.89 $117,293,254.09 | $0.43 | `{"Token":"GLMR"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 190 | 428,346.2 $182,214.54 |   |    |   | $0.43 | `{"Token2":"1"}` |
| [Parallel](/polkadot/2012-parallel) | 609 | 131,792.61 $56,063.37 |   |    |   | $0.43 | `{"Token":"114"}` |
| [Astar](/polkadot/2006-astar) | 246 | 24,378.12 $10,370.23 |   |    |   | $0.43 | `{"Token":"18446744073709551619"}` |
| [Acala](/polkadot/2000-acala) | 584 | 23,796.59 $10,122.85 |   |    |   | $0.43 | `{"ForeignAsset":"0"}` |
| [Phala](/polkadot/2035-phala) | 11 | 36.56 $15.55 |   |    |   | $0.43 | `{"Token":"1"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "GLMR" and date(ts) = "2023-02-28"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json) | See [Definitions](/DEFINITIONS.md) for details
