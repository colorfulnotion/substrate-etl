# PHA on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-01


*XCM Interior Keys*:
* `{"parachain":2004}~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Khala](/kusama/2004-khala) | 23,788 | 691,785,198.86 $121,613,482.03 | 14,744.49 $2,592.03 | 1,821,024.98  $320,129.99 | 1,406.9 $247.33 | $0.18 | `{"Token":"PHA"}` |
| [Karura](/kusama/2000-karura) | 289 | 172,875.91 $30,391.00 |   |    |   | $0.18 | `{"Token":"PHA"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 400 | 54,286.41 $9,543.37 |   |    |   | $0.18 | `{"Token":"PHA"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 146 | 20,503.35 $3,604.42 |   |    |   | $0.18 | `{"Token":"115"}` |
| [Moonriver](/kusama/2023-moonriver) | 48 | 4,434.39 $779.55 |   |    |   | $0.18 | `{"Token":"189307976387032586987344677431204943363"}` |
| [Shiden](/kusama/2007-shiden) | 15 | 53.6 $9.42 |   |    |   | $0.18 | `{"Token":"18446744073709551623"}` |
| [Turing](/kusama/2114-turing) | 2 | 0.76 $0.13 |   |    |   | $0.18 | `{"Token":"7"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "PHA" and date(ts) = "2023-03-01"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/PHA.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/PHA.json) | See [Definitions](/DEFINITIONS.md) for details
