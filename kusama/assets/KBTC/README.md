# KBTC on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-01


*XCM Interior Keys*:
* `[{"parachain":2092},{"generalKey":"0x000b"}]~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Kintsugi](/kusama/2092-kintsugi) | 359 | 17.24 $462,760.06 | 0.12 $3,342.71 |    |   | $26,841.62 | `{"Token":"KBTC"}` |
| [Moonriver](/kusama/2023-moonriver) | 79 | 5.35 $143,599.92 |   |    |   | $26,841.62 | `{"Token":"328179947973504579459046439826496046832"}` |
| [Karura](/kusama/2000-karura) | 134 | 2.67 $71,728.29 |   |    |   | $26,841.62 | `{"Token":"KBTC"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 15 | 1.82 $48,732.71 |   |    |   | $26,841.62 | `{"Token2":"2"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 69 | 0.15 $4,152.10 |   |    |   | $26,841.62 | `{"Token":"121"}` |
| [Shiden](/kusama/2007-shiden) | 2 | - $1.61 |   |    |   | $26,841.62 | `{"Token":"18446744073709551621"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "KBTC" and date(ts) = "2023-03-01"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KBTC.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KBTC.json) | See [Definitions](/DEFINITIONS.md) for details
