# PHA on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-13


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":2004}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Khala](/kusama/2004-khala) | 20,841 | 691,786,221.2 $107,597,286.04 | 13,722.14 $2,134.28 | 1,744,036.09  $271,259.45 | 1,406.9 $218.82 | $0.16 | `{"Token":"PHA"}` |
| [Karura](/kusama/2000-karura) | 290 | 179,554.3 $27,927.06 |   |    |   | $0.16 | `{"Token":"PHA"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 398 | 54,574.29 $8,488.24 |   |    |   | $0.16 | `{"Token":"PHA"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 145 | 21,858.6 $3,399.79 |   |    |   | $0.16 | `{"Token":"115"}` |
| [Turing](/kusama/2114-turing) | 2 | 0.76 $0.12 |   |    |   | $0.16 | `{"Token":"7"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "PHA" and date(ts) = "2023-03-13"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/PHA.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/PHA.json) | See [Definitions](/DEFINITIONS.md) for details
