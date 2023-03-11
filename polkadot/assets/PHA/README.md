# PHA on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-09


*XCM Interior Keys*:
* `[{"network":"polkadot"},{"parachain":2035}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Phala](/polkadot/2035-phala) | 3,135 | 541,799,866.69 $77,070,516.47 | 133.15 $18.94 | 11,317,496.64  $1,609,903.15 |   | $0.14 | `{"Token":"PHA"}` |
| [Astar](/polkadot/2006-astar) | 48 | 1,009,577.21 $143,611.40 |   |    |   | $0.14 | `{"Token":"18446744073709551622"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 124 | 553,702.41 $78,763.64 |   |    |   | $0.14 | `{"Token":"132685552157663328694213725410064821485"}` |
| [Parallel](/polkadot/2012-parallel) | 341 | 51,345.9 $7,303.91 |   |    |   | $0.14 | `{"Token":"115"}` |
| [Acala](/polkadot/2000-acala) | 2 | 11 $1.56 |   |    |   | $0.14 | `{"ForeignAsset":"9"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "PHA" and date(ts) = "2023-03-09"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/PHA.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/PHA.json) | See [Definitions](/DEFINITIONS.md) for details
