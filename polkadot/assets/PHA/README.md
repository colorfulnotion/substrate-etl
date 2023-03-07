# PHA on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-06


*XCM Interior Keys*:
* `[{"network":"polkadot"},{"parachain":2035}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Phala](/polkadot/2035-phala) | 3,132 | 541,799,866.71 $90,603,840.81 | 133.15 $22.27 | 11,319,164.03  $1,892,875.58 |   | $0.17 | `{"Token":"PHA"}` |
| [Astar](/polkadot/2006-astar) | 44 | 1,003,201.22 $167,762.84 |   |    |   | $0.17 | `{"Token":"18446744073709551622"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 125 | 349,637.35 $58,468.98 |   |    |   | $0.17 | `{"Token":"132685552157663328694213725410064821485"}` |
| [Parallel](/polkadot/2012-parallel) | 340 | 50,518.96 $8,448.16 |   |    |   | $0.17 | `{"Token":"115"}` |
| [Acala](/polkadot/2000-acala) | 2 | 11 $1.84 |   |    |   | $0.17 | `{"ForeignAsset":"9"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "PHA" and date(ts) = "2023-03-06"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/PHA.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/PHA.json) | See [Definitions](/DEFINITIONS.md) for details
