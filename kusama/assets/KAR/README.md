# KAR on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-02-26


*XCM Interior Keys*:
* `[{"parachain":2000},{"generalKey":"0x0080"}]~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Karura](/kusama/2000-karura) | 95,173 | 99,991,742.49 $23,168,877.89 | 8,257.23 $1,913.27 | 36,569,886.31  $8,473,532.01 | 35,779,725.59 $8,290,445.52 | $0.23 | `{"Token":"KAR"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 403 | 44,413.43 $10,290.94 |   |    |   | $0.23 | `{"Token":"KAR"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 143 | 40,060.14 $9,282.25 |   |    |   | $0.23 | `{"Token":"107"}` |
| [Moonriver](/kusama/2023-moonriver) | 192 | 11,106.92 $2,573.56 |   |    |   | $0.23 | `{"Token":"10810581592933651521121702237638664357"}` |
| [Khala](/kusama/2004-khala) | 18 | 140.2 $32.49 |   |    |   | $0.23 | `{"Token":"1"}` |
| [Shiden](/kusama/2007-shiden) | 23 | 43.93 $10.18 |   |    |   | $0.23 | `{"Token":"18446744073709551618"}` |
| [Turing](/kusama/2114-turing) | 6 | 30.17 $6.99 |   |    |   | $0.23 | `{"Token":"3"}` |
| [Crust Shadow](/kusama/2012-shadow) | 5 | 15.05 $3.49 |   |    |   | $0.23 | `{"Token":"10810581592933651521121702237638664357"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "KAR" and date(ts) = "2023-02-26"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KAR.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KAR.json) | See [Definitions](/DEFINITIONS.md) for details
