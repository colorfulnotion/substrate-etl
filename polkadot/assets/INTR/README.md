# INTR on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-12


*XCM Interior Keys*:
* `[{"network":"polkadot"},{"parachain":2032},{"generalKey":"0x0002"}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Interlay](/polkadot/2032-interlay) | 11,409 | 999,998,468.34 $24,881,774.45 | 1,397.8 $34.78 |    | 72,258,627.33 $1,797,925.62 | $0.02 | `{"Token":"INTR"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 376 | 2,803,632.28 $69,759.45 |   |    |   | $0.02 | `{"Token":"101170542313601871197860408087030232491"}` |
| [Acala](/polkadot/2000-acala) | 408 | 1,211,876.17 $30,153.68 |   |    |   | $0.02 | `{"ForeignAsset":"4"}` |
| [Parallel](/polkadot/2012-parallel) | 219 | 243,244.79 $6,052.37 |   |    |   | $0.02 | `{"Token":"120"}` |
| [Astar](/polkadot/2006-astar) | 67 | 179,473.93 $4,465.64 |   |    |   | $0.02 | `{"Token":"18446744073709551621"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "INTR" and date(ts) = "2023-03-12"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/INTR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/INTR.json) | See [Definitions](/DEFINITIONS.md) for details
