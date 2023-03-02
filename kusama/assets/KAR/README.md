# KAR on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-02-28


*XCM Interior Keys*:
* `[{"parachain":2000},{"generalKey":"0x0080"}]~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Karura](/kusama/2000-karura) | 95,190 | 99,991,738.6 $20,718,688.20 | 8,261.12 $1,711.74 | 37,060,166.62  $7,679,014.77 | 36,270,005.9 $7,515,290.30 | $0.21 | `{"Token":"KAR"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 404 | 44,617.75 $9,263.28 |   |    |   | $0.21 | `{"Token":"KAR"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 144 | 40,256.25 $8,357.77 |   |    |   | $0.21 | `{"Token":"107"}` |
| [Moonriver](/kusama/2023-moonriver) | 192 | 11,106.34 $2,305.83 |   |    |   | $0.21 | `{"Token":"10810581592933651521121702237638664357"}` |
| [Khala](/kusama/2004-khala) | 18 | 140.2 $29.11 |   |    |   | $0.21 | `{"Token":"1"}` |
| [Shiden](/kusama/2007-shiden) | 23 | 43.93 $9.12 |   |    |   | $0.21 | `{"Token":"18446744073709551618"}` |
| [Turing](/kusama/2114-turing) | 6 | 30.17 $6.26 |   |    |   | $0.21 | `{"Token":"3"}` |
| [Crust Shadow](/kusama/2012-shadow) | 5 | 15.05 $3.13 |   |    |   | $0.21 | `{"Token":"10810581592933651521121702237638664357"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "KAR" and date(ts) = "2023-02-28"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KAR.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KAR.json) | See [Definitions](/DEFINITIONS.md) for details
