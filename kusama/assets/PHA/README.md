# PHA on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-12


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":2004}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Khala](/kusama/2004-khala) | 20,771 | 691,786,241.2 $101,040,530.81 | 13,702.14 $2,001.30 | 1,744,036.09  $254,729.45 | 1,406.9 $205.49 | $0.15 | `{"Token":"PHA"}` |
| [Karura](/kusama/2000-karura) | 289 | 178,680.59 $26,097.63 |   |    |   | $0.15 | `{"Token":"PHA"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 397 | 54,074.27 $7,897.95 |   |    |   | $0.15 | `{"Token":"PHA"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 144 | 21,426.26 $3,129.46 |   |    |   | $0.15 | `{"Token":"115"}` |
| [Moonriver](/kusama/2023-moonriver) | 47 | 4,417.88 $645.26 |   |    |   | $0.15 | `{"Token":"189307976387032586987344677431204943363"}` |
| [Shiden](/kusama/2007-shiden) | 15 | 53.6 $7.83 |   |    |   | $0.15 | `{"Token":"18446744073709551623"}` |
| [Turing](/kusama/2114-turing) | 2 | 0.76 $0.11 |   |    |   | $0.15 | `{"Token":"7"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "PHA" and date(ts) = "2023-03-12"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/PHA.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/PHA.json) | See [Definitions](/DEFINITIONS.md) for details
