# KINT on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-01


*XCM Interior Keys*:
* `[{"parachain":2092},{"generalKey":"0x000c"}]~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Kintsugi](/kusama/2092-kintsugi) | 16,133 | 9,999,315.7 $8,152,513.90 | 433.12 $353.12 |    | 2,495,701.46 $2,034,763.32 | $0.82 | `{"Token":"KINT"}` |
| [Moonriver](/kusama/2023-moonriver) | 230 | 16,613.43 $13,545.05 |   |    |   | $0.82 | `{"Token":"175400718394635817552109270754364440562"}` |
| [Karura](/kusama/2000-karura) | 367 | 13,723.3 $11,188.70 |   |    |   | $0.82 | `{"Token":"KINT"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 86 | 10,261.9 $8,366.60 |   |    |   | $0.82 | `{"Token":"119"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 37 | 2,349.46 $1,915.53 |   |    |   | $0.82 | `{"Token2":"1"}` |
| [Shiden](/kusama/2007-shiden) | 3 | 0.6 $0.49 |   |    |   | $0.82 | `{"Token":"18446744073709551622"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "KINT" and date(ts) = "2023-03-01"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KINT.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KINT.json) | See [Definitions](/DEFINITIONS.md) for details
