# KINT on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-04


*XCM Interior Keys*:
* `[{"parachain":2092},{"generalKey":"0x000c"}]~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Kintsugi](/kusama/2092-kintsugi) | 16,140 | 9,999,315.55 $7,684,839.28 | 433.26 $332.98 |    | 2,496,215.73 $1,918,432.97 | $0.77 | `{"Token":"KINT"}` |
| [Moonriver](/kusama/2023-moonriver) | 229 | 16,330.92 $12,550.91 |   |    |   | $0.77 | `{"Token":"175400718394635817552109270754364440562"}` |
| [Karura](/kusama/2000-karura) | 370 | 13,785.25 $10,594.47 |   |    |   | $0.77 | `{"Token":"KINT"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 85 | 10,132.26 $7,787.01 |   |    |   | $0.77 | `{"Token":"119"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 42 | 2,334.75 $1,794.34 |   |    |   | $0.77 | `{"Token2":"1"}` |
| [Shiden](/kusama/2007-shiden) | 3 | 0.6 $0.46 |   |    |   | $0.77 | `{"Token":"18446744073709551622"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "KINT" and date(ts) = "2023-03-04"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KINT.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KINT.json) | See [Definitions](/DEFINITIONS.md) for details
