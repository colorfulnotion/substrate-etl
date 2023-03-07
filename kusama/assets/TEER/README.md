# TEER on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-06


*XCM Interior Keys*:
* `[{"parachain":2015},{"generalKey":"0x54454552"}]~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Integritee](/kusama/2015-integritee) | 12,978 | 9,997,760.41 $3,519,596.63 | 89.35 $31.46 | 1,604,078.64  $564,697.45 |   | $0.35 | `{"Token":"TEER"}` |
| [Moonriver](/kusama/2023-moonriver) | 21 | 846.27 $297.92 |   |    |   | $0.35 | `{"Token":"105075627293246237499203909093923548958"}` |
| [Karura](/kusama/2000-karura) | 4 | 7.16 $2.52 |   |    |   | $0.35 | `{"ForeignAsset":"8"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "TEER" and date(ts) = "2023-03-06"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/TEER.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/TEER.json) | See [Definitions](/DEFINITIONS.md) for details
