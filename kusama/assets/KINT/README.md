# KINT on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-02-26


*XCM Interior Keys*:
* `[{"parachain":2092},{"generalKey":"0x000c"}]~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Kintsugi](/kusama/2092-kintsugi) | 16,124 | 9,999,315.73 $9,832,952.82 | 433.08 $425.88 |    | 2,527,782.54 $2,485,726.73 | $0.98 | `{"Token":"KINT"}` |
| [Moonriver](/kusama/2023-moonriver) | 229 | 16,811.47 $16,531.77 |   |    |   | $0.98 | `{"Token":"175400718394635817552109270754364440562"}` |
| [Karura](/kusama/2000-karura) | 367 | 13,752.41 $13,523.61 |   |    |   | $0.98 | `{"Token":"KINT"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 88 | 10,663 $10,485.60 |   |    |   | $0.98 | `{"Token":"119"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 34 | 2,502.77 $2,461.13 |   |    |   | $0.98 | `{"Token2":"1"}` |
| [Shiden](/kusama/2007-shiden) | 3 | 0.6 $0.59 |   |    |   | $0.98 | `{"Token":"18446744073709551622"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "KINT" and date(ts) = "2023-02-26"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KINT.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KINT.json) | See [Definitions](/DEFINITIONS.md) for details
