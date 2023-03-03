# EQ on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-01


*XCM Interior Keys*:
* `{"parachain":2011}~polkadot`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Equilibrium](/polkadot/2011-equilibrium) | 9,361 |   |   |    |   |  | `{"Token":"EQ"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 12 | 5,468,602.77  |   |    |   |  | `{"Token":"190590555344745888270686124937537713878"}` |
| [Astar](/polkadot/2006-astar) | 4 | 754.88  |   |    |   |  | `{"Token":"18446744073709551628"}` |
| [Phala](/polkadot/2035-phala) | 2 | 807.76  |   |    |   |  | `{"Token":"9"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "EQ" and date(ts) = "2023-03-01"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/EQ.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/EQ.json) | See [Definitions](/DEFINITIONS.md) for details
