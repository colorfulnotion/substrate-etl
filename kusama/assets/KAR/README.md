# KAR on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-10


*XCM Interior Keys*:
* `[{"parachain":2000},{"generalKey":"0x0080"}]~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Karura](/kusama/2000-karura) | 83,477 | 99,991,704.2 $18,066,095.64 | 8,295.52 $1,498.80 | 32,600,521.49  $5,890,130.02 | 31,810,360.76 $5,747,366.99 | $0.18 | `{"Token":"KAR"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 402 | 44,410.41 $8,023.89 |   |    |   | $0.18 | `{"Token":"KAR"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 142 | 39,365.64 $7,112.43 |   |    |   | $0.18 | `{"Token":"107"}` |
| [Moonriver](/kusama/2023-moonriver) | 191 | 10,973.81 $1,982.70 |   |    |   | $0.18 | `{"Token":"10810581592933651521121702237638664357"}` |
| [Khala](/kusama/2004-khala) | 19 | 141.19 $25.51 |   |    |   | $0.18 | `{"Token":"1"}` |
| [Shiden](/kusama/2007-shiden) | 23 | 43.93 $7.94 |   |    |   | $0.18 | `{"Token":"18446744073709551618"}` |
| [Turing](/kusama/2114-turing) | 6 | 30.17 $5.45 |   |    |   | $0.18 | `{"Token":"3"}` |
| [Crust Shadow](/kusama/2012-shadow) | 5 | 15.05 $2.72 |   |    |   | $0.18 | `{"Token":"10810581592933651521121702237638664357"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "KAR" and date(ts) = "2023-03-10"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KAR.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KAR.json) | See [Definitions](/DEFINITIONS.md) for details
