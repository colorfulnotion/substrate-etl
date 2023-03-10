# PHA on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-11


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":2004}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Khala](/kusama/2004-khala) | 20,769 | 691,787,240.32 $93,748,193.93 | 12,703.02 $1,721.46 | 1,744,036.09  $236,344.68 | 1,406.9 $190.66 | $0.14 | `{"Token":"PHA"}` |
| [Karura](/kusama/2000-karura) | 289 | 179,459.49 $24,301.64 |   |    |   | $0.14 | `{"Token":"PHA"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 397 | 54,074.27 $7,322.51 |   |    |   | $0.14 | `{"Token":"PHA"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 144 | 21,659.63 $2,933.05 |   |    |   | $0.14 | `{"Token":"115"}` |
| [Moonriver](/kusama/2023-moonriver) | 47 | 4,417.88 $598.25 |   |    |   | $0.14 | `{"Token":"189307976387032586987344677431204943363"}` |
| [Shiden](/kusama/2007-shiden) | 15 | 53.6 $7.26 |   |    |   | $0.14 | `{"Token":"18446744073709551623"}` |
| [Turing](/kusama/2114-turing) | 2 | 0.76 $0.10 |   |    |   | $0.14 | `{"Token":"7"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "PHA" and date(ts) = "2023-03-11"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/PHA.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/PHA.json) | See [Definitions](/DEFINITIONS.md) for details
