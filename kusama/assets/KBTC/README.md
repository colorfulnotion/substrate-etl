# KBTC on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-11


*XCM Interior Keys*:
* `[{"parachain":2092},{"generalKey":"0x000b"}]~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Kintsugi](/kusama/2092-kintsugi) | 367 | 16.34 $360,934.59 | 0.28 $6,155.24 |    |   | $22,091.32 | `{"Token":"KBTC"}` |
| [Moonriver](/kusama/2023-moonriver) | 79 | 5.51 $121,635.87 |   |    |   | $22,091.32 | `{"Token":"328179947973504579459046439826496046832"}` |
| [Karura](/kusama/2000-karura) | 133 | 2.69 $59,400.90 |   |    |   | $22,091.32 | `{"Token":"KBTC"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 23 | 1.13 $24,949.00 |   |    |   | $22,091.32 | `{"Token2":"2"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 68 | 0.14 $3,173.66 |   |    |   | $22,091.32 | `{"Token":"121"}` |
| [Shiden](/kusama/2007-shiden) | 2 | - $1.33 |   |    |   | $22,091.32 | `{"Token":"18446744073709551621"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "KBTC" and date(ts) = "2023-03-11"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KBTC.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KBTC.json) | See [Definitions](/DEFINITIONS.md) for details
