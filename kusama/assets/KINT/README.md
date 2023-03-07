# KINT on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-05


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":2092},{"generalKey":"0x000c"}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Kintsugi](/kusama/2092-kintsugi) | 16,141 | 9,999,315.55 $7,707,643.85 | 433.26 $333.96 |    | 2,496,810.89 $1,924,584.63 | $0.77 | `{"Token":"KINT"}` |
| [Karura](/kusama/2000-karura) | 370 | 27,650.97 $21,313.84 |   |    |   | $0.77 | `{"Token":"KINT"}` |
| [Moonriver](/kusama/2023-moonriver) | 229 | 16,421.42 $12,657.91 |   |    |   | $0.77 | `{"Token":"175400718394635817552109270754364440562"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 84 | 10,273.39 $7,918.90 |   |    |   | $0.77 | `{"Token":"119"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 42 | 2,332.56 $1,797.98 |   |    |   | $0.77 | `{"Token2":"1"}` |
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
 where symbol = "KINT" and date(ts) = "2023-03-05"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KINT.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KINT.json) | See [Definitions](/DEFINITIONS.md) for details
