# KUSD on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-18


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":2000},{"generalKey":"0x0081"}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Karura](/kusama/2000-karura) | 3,393 | 3,564,760.92 $3,564,760.92 |   |    |   | $1.00 | `{"Token":"KUSD"}` |
| [Moonriver](/kusama/2023-moonriver) | 71 | 58,605.83 $58,605.83 |   |    |   | $1.00 | `{"Token":"214920334981412447805621250067209749032"}` |
| [Basilisk](/kusama/2090-basilisk) | 190 | 6,151.79 $6,151.79 |   |    |   | $1.00 | `{"Token":"2"}` |
| [Khala](/kusama/2004-khala) | 8 | 207.91 $207.91 |   |    |   | $1.00 | `{"Token":"4"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 13 | 23.68 $23.68 |   |    |   | $1.00 | `{"Token":"103"}` |
| [Shiden](/kusama/2007-shiden) | 21 | 16.99 $16.99 |   |    |   | $1.00 | `{"Token":"18446744073709551616"}` |
| [Turing](/kusama/2114-turing) | 4 | 11.16 $11.16 |   |    |   | $1.00 | `{"Token":"2"}` |
| [Crust Shadow](/kusama/2012-shadow) | 5 | 1.51 $1.51 |   |    |   | $1.00 | `{"Token":"214920334981412447805621250067209749032"}` |
| [Bit.Country Pioneer](/kusama/2096-bitcountrypioneer) | 3 | 0.1 $0.10 |   |    |   | $1.00 | `{"Stable":"0"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 1,605 | 73,323.92  |   |    |   |  | `{"Stable":"KUSD"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "KUSD" and date(ts) = "2023-03-18"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KUSD.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KUSD.json) | See [Definitions](/DEFINITIONS.md) for details
