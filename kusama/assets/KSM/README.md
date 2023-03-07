# KSM on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-05


*XCM Interior Keys*:
* `[{"network":"kusama"},"here"]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Kusama](/kusama/0-kusama) | 285,488 | 13,005,271.77 $448,302,387.14 | 309,812.64 $10,679,495.96 | 7,931,632.51  $273,409,879.58 | 7,581,672.65 $261,346,476.24 | $34.47 | `{"Token":"KSM"}` |
| [Karura](/kusama/2000-karura) | 8,125 | 121,429.99 $4,185,791.43 |   |    |   | $34.47 | `{"Token":"KSM"}` |
| [Moonriver](/kusama/2023-moonriver) | 1,391 | 94,576.96 $3,260,145.37 |   |    |   | $34.47 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 3,119 | 92,320.73 $3,182,371.22 | 321.64 $11,087.26 |    |   | $34.47 | `{"Token":"KSM"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 3,583 | 18,877.56 $650,725.06 |   |    |   | $34.47 | `{"Token":"100"}` |
| [Mangatax](/kusama/2110-mangatax) | 876 | 13,713.41 $472,712.34 |   |    |   | $34.47 | `{"Token":"4"}` |
| [Basilisk](/kusama/2090-basilisk) | 1,915 | 4,169.85 $143,737.99 | 1.44 $49.64 |    |   | $34.47 | `{"Token":"1"}` |
| [Kintsugi](/kusama/2092-kintsugi) | 211 | 1,271.44 $43,827.50 | 20,104.66 $693,024.16 |    |   | $34.47 | `{"Token":"KSM"}` |
| [Robonomics](/kusama/2048-robonomics) | 6 | 536.43 $18,491.19 |   |    |   | $34.47 | `{"Token":"4294967295"}` |
| [Shiden](/kusama/2007-shiden) | 66 | 63.49 $2,188.67 |   |    |   | $34.47 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Encointer](/kusama/1001-encointer) | 972 | 12.72 $438.41 |   |    |   | $34.47 | `{"Token":"KSM"}` |
| [Turing](/kusama/2114-turing) | 5 | 5.36 $184.71 |   |    |   | $34.47 | `{"Token":"1"}` |
| [Amplitude](/kusama/2124-amplitude) | 1 | 1 $34.36 |   |    |   | $34.47 | `{"XCM":"KSM"}` |
| [Dora Factory](/kusama/2115-dorafactory) | 3 | 0.29 $10.00 |   |    |   | $34.47 | `{"Token":"KSM"}` |
| [Khala](/kusama/2004-khala) | 2 | 0.23 $8.09 |   |    |   | $34.47 | `{"Token":"0"}` |
| [Calamari](/kusama/2084-calamari) | 4 | 0.05 $1.87 |   |    |   | $34.47 | `{"Token":"12"}` |
| [BridgeHub](/kusama/1002-bridgehub) | 4 |   |   |    |   |  | `{"Token":"KSM"}` |
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
 where symbol = "KSM" and date(ts) = "2023-03-05"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json) | See [Definitions](/DEFINITIONS.md) for details
