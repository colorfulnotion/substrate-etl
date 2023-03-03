# KAR on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-01


*XCM Interior Keys*:
* `[{"parachain":2000},{"generalKey":"0x0080"}]~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Karura](/kusama/2000-karura) | 95,195 | 99,991,738.52 $21,211,578.38 | 8,261.2 $1,752.47 | 37,060,149.57  $7,861,692.17 | 36,269,988.85 $7,694,072.76 | $0.21 | `{"Token":"KAR"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 405 | 44,617.75 $9,464.91 |   |    |   | $0.21 | `{"Token":"KAR"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 144 | 40,256.25 $8,539.69 |   |    |   | $0.21 | `{"Token":"107"}` |
| [Moonriver](/kusama/2023-moonriver) | 192 | 11,105.75 $2,355.90 |   |    |   | $0.21 | `{"Token":"10810581592933651521121702237638664357"}` |
| [Khala](/kusama/2004-khala) | 18 | 140.2 $29.74 |   |    |   | $0.21 | `{"Token":"1"}` |
| [Shiden](/kusama/2007-shiden) | 23 | 43.93 $9.32 |   |    |   | $0.21 | `{"Token":"18446744073709551618"}` |
| [Turing](/kusama/2114-turing) | 6 | 30.17 $6.40 |   |    |   | $0.21 | `{"Token":"3"}` |
| [Crust Shadow](/kusama/2012-shadow) | 5 | 15.05 $3.19 |   |    |   | $0.21 | `{"Token":"10810581592933651521121702237638664357"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "KAR" and date(ts) = "2023-03-01"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KAR.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KAR.json) | See [Definitions](/DEFINITIONS.md) for details
