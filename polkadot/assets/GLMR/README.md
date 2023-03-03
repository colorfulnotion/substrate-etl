# GLMR on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-01


*XCM Interior Keys*:
* `[{"parachain":2004},{"palletInstance":10}]~polkadot`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Moonbeam](/polkadot/2004-moonbeam) | 2,847,675 | 1,055,770,956.05 $454,271,180.32 | 1,908,914.36 $821,356.92 | 278,587,365.7  $119,869,002.56 | 276,467,355.17 $118,956,816.38 | $0.43 | `{"Token":"GLMR"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 192 | 428,370.16 $184,316.70 |   |    |   | $0.43 | `{"Token2":"1"}` |
| [Parallel](/polkadot/2012-parallel) | 611 | 131,308.57 $56,498.71 |   |    |   | $0.43 | `{"Token":"114"}` |
| [Astar](/polkadot/2006-astar) | 248 | 24,625.76 $10,595.83 |   |    |   | $0.43 | `{"Token":"18446744073709551619"}` |
| [Acala](/polkadot/2000-acala) | 584 | 23,423.73 $10,078.63 |   |    |   | $0.43 | `{"ForeignAsset":"0"}` |
| [Phala](/polkadot/2035-phala) | 11 | 36.53 $15.72 |   |    |   | $0.43 | `{"Token":"1"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "GLMR" and date(ts) = "2023-03-01"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json) | See [Definitions](/DEFINITIONS.md) for details
