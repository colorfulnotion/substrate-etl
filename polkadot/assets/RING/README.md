# RING on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-18


*XCM Interior Keys*:
* `[{"network":"polkadot"},{"parachain":2046},{"palletInstance":5}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Darwinia](/polkadot/2046-darwinia) | 21 | 200,000  |   |    |   |  | `{"Token":"RING"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 6 | 819.64  |   |    |   |  | `{"Token":"125699734534028342599692732320197985871"}` |
| [Astar](/polkadot/2006-astar) | 2 | 5  |   |    |   |  | `{"Token":"18446744073709551627"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "RING" and date(ts) = "2023-03-18"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/RING.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/RING.json) | See [Definitions](/DEFINITIONS.md) for details
