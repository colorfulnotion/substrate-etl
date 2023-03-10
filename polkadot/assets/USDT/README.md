# USDT on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-11


*XCM Interior Keys*:
* `[{"network":"polkadot"},{"parachain":1000},{"palletInstance":50},{"generalIndex":1984}]`
* `[{"network":"polkadot"},{"parachain":1000},{"palletInstance":50},{"generalKey":"0x31393834"}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Statemint](/polkadot/1000-statemint) | 307 | 7,998,764.14 $8,003,049.78 |   |    |   | $1.00 | `{"Token":"1984"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 560 | 1,512,001 $1,512,001.00 |   |    |   | $1.00 | `{"Token":"311091173110107856861649819128533077277"}` |
| [Astar](/polkadot/2006-astar) | 397 | 1,204,634.61 $1,205,280.03 |   |    |   | $1.00 | `{"Token":"4294969280"}` |
| [Parallel](/polkadot/2012-parallel) | 285 | 142,051.93 $142,128.04 |   |    |   | $1.00 | `{"Token":"102"}` |
| [Interlay](/polkadot/2032-interlay) | 21 | 106.53 $106.58 | 91,674.18 $91,723.30 |    |   | $1.00 | `{"ForeignAsset":"2"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "USDT" and date(ts) = "2023-03-11"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/USDT.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/USDT.json) | See [Definitions](/DEFINITIONS.md) for details
