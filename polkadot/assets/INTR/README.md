# INTR on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-05


*XCM Interior Keys*:
* `[{"network":"polkadot"},{"parachain":2032},{"generalKey":"0x0002"}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Interlay](/polkadot/2032-interlay) | 11,095 | 999,998,529.11 $31,232,651.72 | 1,337.03 $41.76 |    | 70,769,795.36 $2,210,331.62 | $0.03 | `{"Token":"INTR"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 365 | 2,614,600.74 $81,661.03 |   |    |   | $0.03 | `{"Token":"101170542313601871197860408087030232491"}` |
| [Acala](/polkadot/2000-acala) | 408 | 1,209,230.06 $37,767.52 |   |    |   | $0.03 | `{"ForeignAsset":"4"}` |
| [Parallel](/polkadot/2012-parallel) | 217 | 248,502.95 $7,761.42 |   |    |   | $0.03 | `{"Token":"120"}` |
| [Astar](/polkadot/2006-astar) | 71 | 175,809.99 $5,491.02 |   |    |   | $0.03 | `{"Token":"18446744073709551621"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "INTR" and date(ts) = "2023-03-05"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/INTR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/INTR.json) | See [Definitions](/DEFINITIONS.md) for details
