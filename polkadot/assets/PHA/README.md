# PHA on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-01


*XCM Interior Keys*:
* `{"parachain":2035}~polkadot`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Phala](/polkadot/2035-phala) | 3,128 | 541,799,866.8 $95,246,571.44 | 133.15 $23.41 | 11,322,158.59  $1,990,396.92 |   | $0.18 | `{"Token":"PHA"}` |
| [Astar](/polkadot/2006-astar) | 41 | 1,027,124.71 $180,565.03 |   |    |   | $0.18 | `{"Token":"18446744073709551622"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 124 | 350,323.62 $61,585.70 |   |    |   | $0.18 | `{"Token":"132685552157663328694213725410064821485"}` |
| [Parallel](/polkadot/2012-parallel) | 339 | 51,062.38 $8,976.59 |   |    |   | $0.18 | `{"Token":"115"}` |
| [Acala](/polkadot/2000-acala) | 2 | 11 $1.93 |   |    |   | $0.18 | `{"ForeignAsset":"9"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "PHA" and date(ts) = "2023-03-01"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/PHA.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/PHA.json) | See [Definitions](/DEFINITIONS.md) for details
