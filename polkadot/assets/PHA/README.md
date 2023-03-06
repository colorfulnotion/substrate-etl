# PHA on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-04


*XCM Interior Keys*:
* `[{"network":"polkadot"},{"parachain":2035}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Phala](/polkadot/2035-phala) | 3,138 | 541,799,866.73 $93,196,162.84 | 133.15 $22.90 | 11,320,684.35  $1,947,295.31 |   | $0.17 | `{"Token":"PHA"}` |
| [Astar](/polkadot/2006-astar) | 44 | 992,040.5 $170,643.03 |   |    |   | $0.17 | `{"Token":"18446744073709551622"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 122 | 237,797.48 $40,904.06 |   |    |   | $0.17 | `{"Token":"132685552157663328694213725410064821485"}` |
| [Parallel](/polkadot/2012-parallel) | 339 | 50,120.73 $8,621.37 |   |    |   | $0.17 | `{"Token":"115"}` |
| [Acala](/polkadot/2000-acala) | 2 | 11 $1.89 |   |    |   | $0.17 | `{"ForeignAsset":"9"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "PHA" and date(ts) = "2023-03-04"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/PHA.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/PHA.json) | See [Definitions](/DEFINITIONS.md) for details
