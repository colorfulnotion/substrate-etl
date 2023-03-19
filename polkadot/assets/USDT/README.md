# USDT on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-18


*XCM Interior Keys*:
* `[{"network":"polkadot"},{"parachain":1000},{"palletInstance":50},{"generalIndex":1984}]`
* `[{"network":"polkadot"},{"parachain":1000},{"palletInstance":50},{"generalKey":"0x31393834"}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Statemint](/polkadot/1000-statemint) | 309 | 7,998,764.14 $8,080,430.58 |   |    |   | $1.01 | `{"Token":"1984"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 1,439 | 1,487,971.19 $1,487,971.19 |   |    |   | $1.00 | `{"Token":"311091173110107856861649819128533077277"}` |
| [Astar](/polkadot/2006-astar) | 396 | 1,262,544.03 $1,275,434.46 |   |    |   | $1.01 | `{"Token":"4294969280"}` |
| [Parallel](/polkadot/2012-parallel) | 284 | 102,734.52 $103,783.43 |   |    |   | $1.01 | `{"Token":"102"}` |
| [Interlay](/polkadot/2032-interlay) | 24 | 169.95 $171.68 | 68,057.69 $68,752.55 |    |   | $1.01 | `{"ForeignAsset":"2"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "USDT" and date(ts) = "2023-03-18"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/USDT.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/USDT.json) | See [Definitions](/DEFINITIONS.md) for details
