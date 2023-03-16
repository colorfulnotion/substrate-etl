# KBTC on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-12


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":2092},{"generalKey":"0x000b"}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Kintsugi](/kusama/2092-kintsugi) | 367 | 16.22 $392,997.59 | 0.41 $10,033.54 |    |   | $24,233.43 | `{"Token":"KBTC"}` |
| [Moonriver](/kusama/2023-moonriver) | 79 | 5.51 $133,466.86 |   |    |   | $24,233.43 | `{"Token":"328179947973504579459046439826496046832"}` |
| [Karura](/kusama/2000-karura) | 133 | 2.69 $65,088.15 |   |    |   | $24,233.43 | `{"Token":"KBTC"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 24 | 1.13 $27,401.72 |   |    |   | $24,233.43 | `{"Token2":"2"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 68 | 0.14 $3,483.98 |   |    |   | $24,233.43 | `{"Token":"121"}` |
| [Shiden](/kusama/2007-shiden) | 2 | - $1.45 |   |    |   | $24,233.43 | `{"Token":"18446744073709551621"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "KBTC" and date(ts) = "2023-03-12"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KBTC.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KBTC.json) | See [Definitions](/DEFINITIONS.md) for details
