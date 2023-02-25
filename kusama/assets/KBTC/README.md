# KBTC substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io)

*Relay Chain*: kusama
*Report Date*: 2023-02-24
*XCM Interior Keys*:
* `[{"parachain":2092},{"generalKey":"0x000b"}]~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Kintsugi](/kusama/2092-kintsugi) | 359 | 17.45 $505,133.86 | 0.1 $2,817.41 |    |   | $28,954.38 | `{"Token":"KBTC"}` |
| [Moonriver](/kusama/2023-moonriver) | 79 | 5.35 $155,025.29 |   |    |   | $28,954.38 | `{"Token":"328179947973504579459046439826496046832"}` |
| [Karura](/kusama/2000-karura) | 131 | 2.67 $77,254.66 |   |    |   | $28,954.38 | `{"Token":"KBTC"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 16 | 1.79 $51,866.08 |   |    |   | $28,954.38 | `{"Token2":"2"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 71 | 0.22 $6,249.66 |   |    |   | $28,954.38 | `{"Token":"121"}` |
| [Shiden](/kusama/2007-shiden) | 2 | - $1.74 |   |    |   | $28,954.38 | `{"Token":"18446744073709551621"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "KBTC" and date(ts) = "2023-02-24"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KBTC.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KBTC.json) | See [Definitions](/DEFINITIONS.md) for details
