# GLMR on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-02


*XCM Interior Keys*:
* `[{"parachain":2004},{"palletInstance":10}]~polkadot`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Moonbeam](/polkadot/2004-moonbeam) | 2,866,527 | 1,055,911,981.08 $460,206,718.85 | 1,908,097.73 $831,621.77 | 277,286,690.94  $120,852,116.94 | 275,095,254.36 $119,897,005.29 | $0.44 | `{"Token":"GLMR"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 193 | 428,684.7 $186,837.15 |   |    |   | $0.44 | `{"Token2":"1"}` |
| [Parallel](/polkadot/2012-parallel) | 610 | 131,315.66 $57,232.37 |   |    |   | $0.44 | `{"Token":"114"}` |
| [Astar](/polkadot/2006-astar) | 248 | 24,764.9 $10,793.49 |   |    |   | $0.44 | `{"Token":"18446744073709551619"}` |
| [Acala](/polkadot/2000-acala) | 585 | 23,486.46 $10,236.30 |   |    |   | $0.44 | `{"ForeignAsset":"0"}` |
| [Phala](/polkadot/2035-phala) | 11 | 36.53 $15.92 |   |    |   | $0.44 | `{"Token":"1"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "GLMR" and date(ts) = "2023-03-02"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json) | See [Definitions](/DEFINITIONS.md) for details
