# KINT on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-12


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":2092},{"generalKey":"0x000c"}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Kintsugi](/kusama/2092-kintsugi) | 16,122 | 9,999,315.56 $7,203,948.05 | 433.25 $312.13 |    | 2,495,947.44 $1,798,190.65 | $0.72 | `{"Token":"KINT"}` |
| [Moonriver](/kusama/2023-moonriver) | 230 | 15,661.85 $11,283.48 |   |    |   | $0.72 | `{"Token":"175400718394635817552109270754364440562"}` |
| [Karura](/kusama/2000-karura) | 366 | 13,971.38 $10,065.60 |   |    |   | $0.72 | `{"Token":"KINT"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 83 | 10,284.23 $7,409.21 |   |    |   | $0.72 | `{"Token":"119"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 44 | 1,853.49 $1,335.34 |   |    |   | $0.72 | `{"Token2":"1"}` |
| [Shiden](/kusama/2007-shiden) | 3 | 0.6 $0.43 |   |    |   | $0.72 | `{"Token":"18446744073709551622"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "KINT" and date(ts) = "2023-03-12"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KINT.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KINT.json) | See [Definitions](/DEFINITIONS.md) for details
