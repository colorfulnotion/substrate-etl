# KSM on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-15


*XCM Interior Keys*:
* `[{"network":"kusama"},"here"]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Kusama](/kusama/0-kusama) | 286,507 | 13,085,650.66 $433,302,838.51 | 266,891.51 $8,837,531.57 | 8,020,151.96  $265,569,874.89 | 7,684,497.61 $254,455,411.78 | $33.11 | `{"Token":"KSM"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 3,123 | 92,639.62 $3,067,559.52 | 0.1 $3.31 |    |   | $33.11 | `{"Token":"KSM"}` |
| [Moonriver](/kusama/2023-moonriver) | 1,389 | 86,613.37 $2,868,013.06 |   |    |   | $33.11 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Karura](/kusama/2000-karura) | 8,127 | 60,850.36 $2,014,927.16 |   |    |   | $33.11 | `{"Token":"KSM"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 3,560 | 18,248.45 $604,257.58 |   |    |   | $33.11 | `{"Token":"100"}` |
| [Mangatax](/kusama/2110-mangatax) | 896 | 13,698.28 $453,588.78 |   |    |   | $33.11 | `{"Token":"4"}` |
| [Basilisk](/kusama/2090-basilisk) | 1,955 | 5,245.6 $173,696.57 | 1.45 $48.01 |    |   | $33.11 | `{"Token":"1"}` |
| [Kintsugi](/kusama/2092-kintsugi) | 214 | 1,271.53 $42,104.06 | 20,067.06 $664,477.10 |    |   | $33.11 | `{"Token":"KSM"}` |
| [Robonomics](/kusama/2048-robonomics) | 7 | 536.54 $17,766.36 |   |    |   | $33.11 | `{"Token":"4294967295"}` |
| [Shiden](/kusama/2007-shiden) | 67 | 64.69 $2,142.18 |   |    |   | $33.11 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Encointer](/kusama/1001-encointer) | 65 | 12.72 $421.14 |   |    |   | $33.11 | `{"Token":"KSM"}` |
| [Turing](/kusama/2114-turing) | 5 | 5.36 $177.43 |   |    |   | $33.11 | `{"Token":"1"}` |
| [Dora Factory](/kusama/2115-dorafactory) | 3 | 0.29 $9.60 |   |    |   | $33.11 | `{"Token":"KSM"}` |
| [Khala](/kusama/2004-khala) | 2 | 0.23 $7.77 |   |    |   | $33.11 | `{"Token":"0"}` |
| [Statemine](/kusama/1000-statemine) | 1 | 85,000,000  |   |    |   |  | `{"Token":"1234"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "KSM" and date(ts) = "2023-03-15"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json) | See [Definitions](/DEFINITIONS.md) for details
