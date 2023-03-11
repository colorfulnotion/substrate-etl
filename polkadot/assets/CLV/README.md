# CLV on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-10


*XCM Interior Keys*:
* `{"parachain":2002}~polkadot`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Clover](/polkadot/2002-clover) | 2,188 | 5,157,901.77 $1,742,096.55 | 90.36 $30.52 | 606,070  $204,701.93 | 605,900 $204,644.51 | $0.34 | `{"Token":"CLV"}` |
| [Astar](/polkadot/2006-astar) | 8 | 23 $7.77 |   |    |   | $0.34 | `{"Token":"18446744073709551625"}` |
| [Parallel](/polkadot/2012-parallel) | 2 | 4 $1.35 |   |    |   | $0.34 | `{"Token":"130"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "CLV" and date(ts) = "2023-03-10"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/CLV.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/CLV.json) | See [Definitions](/DEFINITIONS.md) for details
