# KSM on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-16


*XCM Interior Keys*:
* `[{"network":"kusama"},"here"]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Kusama](/kusama/0-kusama) | 286,539 | 13,088,320.75 $434,114,015.24 | 267,018.5 $8,856,481.63 | 8,024,553.3  $266,158,747.33 | 7,688,987.44 $255,028,683.79 | $33.17 | `{"Token":"KSM"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 3,122 | 92,560.32 $3,070,044.77 | 0.1 $3.32 |    |   | $33.17 | `{"Token":"KSM"}` |
| [Moonriver](/kusama/2023-moonriver) | 1,401 | 90,137.17 $2,989,673.82 |   |    |   | $33.17 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Karura](/kusama/2000-karura) | 8,128 | 60,876.47 $2,019,153.50 |   |    |   | $33.17 | `{"Token":"KSM"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 3,556 | 18,177.5 $604,561.20 |   |    |   | $33.26 | `{"Token":"100"}` |
| [Mangatax](/kusama/2110-mangatax) | 897 | 13,675.87 $453,601.97 |   |    |   | $33.17 | `{"Token":"4"}` |
| [Basilisk](/kusama/2090-basilisk) | 1,958 | 5,265.13 $175,111.59 | 1.46 $48.56 |    |   | $33.26 | `{"Token":"1"}` |
| [Kintsugi](/kusama/2092-kintsugi) | 214 | 1,278.01 $42,505.14 | 20,060.58 $667,190.34 |    |   | $33.26 | `{"Token":"KSM"}` |
| [Robonomics](/kusama/2048-robonomics) | 7 | 536.54 $17,795.99 |   |    |   | $33.17 | `{"Token":"4294967295"}` |
| [Shiden](/kusama/2007-shiden) | 67 | 64.69 $2,145.75 |   |    |   | $33.17 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Encointer](/kusama/1001-encointer) | 65 | 12.72 $421.84 |   |    |   | $33.17 | `{"Token":"KSM"}` |
| [Turing](/kusama/2114-turing) | 5 | 5.36 $177.73 |   |    |   | $33.17 | `{"Token":"1"}` |
| [Dora Factory](/kusama/2115-dorafactory) | 3 | 0.29 $9.65 |   |    |   | $33.26 | `{"Token":"KSM"}` |
| [Khala](/kusama/2004-khala) | 2 | 0.23 $7.79 |   |    |   | $33.17 | `{"Token":"0"}` |
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
 where symbol = "KSM" and date(ts) = "2023-03-16"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json) | See [Definitions](/DEFINITIONS.md) for details
