# USDT on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-02-28


*XCM Interior Keys*:
* `[{"parachain":1000},{"palletInstance":50},{"generalIndex":1984}]~polkadot`
* `[{"parachain":1000},{"palletInstance":50},{"generalKey":"0x31393834"}]~polkadot`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Statemint](/polkadot/1000-statemint) | 292 | 7,998,764.14 $8,003,538.38 |   |    |   | $1.00 | `{"Token":"1984"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 392 | 1,605,059.92 $1,605,059.92 |   |    |   | $1.00 | `{"Token":"311091173110107856861649819128533077277"}` |
| [Astar](/polkadot/2006-astar) | 398 | 1,459,499.16 $1,460,370.29 |   |    |   | $1.00 | `{"Token":"4294969280"}` |
| [Parallel](/polkadot/2012-parallel) | 287 | 93,402.09 $93,457.83 |   |    |   | $1.00 | `{"Token":"102"}` |
| [Interlay](/polkadot/2032-interlay) | 19 | 5.5 $5.50 | 44,127.57 $44,153.90 |    |   | $1.00 | `{"ForeignAsset":"2"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "USDT" and date(ts) = "2023-02-28"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/USDT.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/USDT.json) | See [Definitions](/DEFINITIONS.md) for details
