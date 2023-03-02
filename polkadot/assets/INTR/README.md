# INTR on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-02-28


*XCM Interior Keys*:
* `[{"parachain":2032},{"generalKey":"0x0002"}]~polkadot`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Interlay](/polkadot/2032-interlay) | 11,345 | 999,998,649.35 $27,663,782.10 | 1,316.77 $36.43 |    | 70,712,204.5 $1,956,169.66 | $0.03 | `{"Token":"INTR"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 362 | 2,712,168.08 $75,028.93 |   |    |   | $0.03 | `{"Token":"101170542313601871197860408087030232491"}` |
| [Acala](/polkadot/2000-acala) | 406 | 1,202,616.03 $33,268.95 |   |    |   | $0.03 | `{"ForeignAsset":"4"}` |
| [Parallel](/polkadot/2012-parallel) | 222 | 277,222.87 $7,669.04 |   |    |   | $0.03 | `{"Token":"120"}` |
| [Astar](/polkadot/2006-astar) | 68 | 198,323.31 $5,486.38 |   |    |   | $0.03 | `{"Token":"18446744073709551621"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "INTR" and date(ts) = "2023-02-28"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/INTR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/INTR.json) | See [Definitions](/DEFINITIONS.md) for details
