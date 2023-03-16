# KAR on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-12


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":2000},{"generalKey":"0x0080"}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Karura](/kusama/2000-karura) | 83,504 | 99,991,704 $17,624,111.37 | 8,295.71 $1,462.17 | 32,600,285.68  $5,745,987.34 | 31,810,124.96 $5,606,716.98 | $0.18 | `{"Token":"KAR"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 403 | 44,576.07 $7,856.79 |   |    |   | $0.18 | `{"Token":"KAR"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 142 | 37,802.57 $6,662.92 |   |    |   | $0.18 | `{"Token":"107"}` |
| [Moonriver](/kusama/2023-moonriver) | 191 | 10,798.25 $1,903.25 |   |    |   | $0.18 | `{"Token":"10810581592933651521121702237638664357"}` |
| [Khala](/kusama/2004-khala) | 19 | 141.19 $24.89 |   |    |   | $0.18 | `{"Token":"1"}` |
| [Shiden](/kusama/2007-shiden) | 23 | 43.93 $7.74 |   |    |   | $0.18 | `{"Token":"18446744073709551618"}` |
| [Turing](/kusama/2114-turing) | 6 | 30.17 $5.32 |   |    |   | $0.18 | `{"Token":"3"}` |
| [Crust Shadow](/kusama/2012-shadow) | 5 | 15.05 $2.65 |   |    |   | $0.18 | `{"Token":"10810581592933651521121702237638664357"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "KAR" and date(ts) = "2023-03-12"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KAR.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KAR.json) | See [Definitions](/DEFINITIONS.md) for details
