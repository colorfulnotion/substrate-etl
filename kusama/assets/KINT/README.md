# KINT on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-02-28


*XCM Interior Keys*:
* `[{"parachain":2092},{"generalKey":"0x000c"}]~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Kintsugi](/kusama/2092-kintsugi) | 16,128 | 9,999,315.7 $8,133,329.21 | 433.12 $352.29 |    | 2,495,662.07 $2,029,943.03 | $0.81 | `{"Token":"KINT"}` |
| [Moonriver](/kusama/2023-moonriver) | 231 | 16,612.97 $13,512.80 |   |    |   | $0.81 | `{"Token":"175400718394635817552109270754364440562"}` |
| [Karura](/kusama/2000-karura) | 366 | 13,747.68 $11,182.20 |   |    |   | $0.81 | `{"Token":"KINT"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 89 | 10,762.76 $8,754.31 |   |    |   | $0.81 | `{"Token":"119"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 36 | 2,357.54 $1,917.59 |   |    |   | $0.81 | `{"Token2":"1"}` |
| [Shiden](/kusama/2007-shiden) | 3 | 0.6 $0.49 |   |    |   | $0.81 | `{"Token":"18446744073709551622"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "KINT" and date(ts) = "2023-02-28"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KINT.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KINT.json) | See [Definitions](/DEFINITIONS.md) for details
