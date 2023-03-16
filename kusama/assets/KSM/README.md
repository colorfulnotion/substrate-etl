# KSM on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-07


*XCM Interior Keys*:
* `[{"network":"kusama"},"here"]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Kusama](/kusama/0-kusama) | 285,736 | 13,062,466.68 $430,475,683.27 | 261,532.76 $8,618,854.15 | 7,934,375.2  $261,478,606.79 | 7,599,272.05 $250,435,228.55 | $32.96 | `{"Token":"KSM"}` |
| [Moonriver](/kusama/2023-moonriver) | 1,382 | 93,697.84 $3,087,827.44 |   |    |   | $32.96 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 3,116 | 92,809.33 $3,058,546.36 | 0.1 $3.30 |    |   | $32.96 | `{"Token":"KSM"}` |
| [Karura](/kusama/2000-karura) | 8,124 | 60,885.35 $2,006,486.46 |   |    |   | $32.96 | `{"Token":"KSM"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 3,580 | 19,640.48 $647,255.25 |   |    |   | $32.96 | `{"Token":"100"}` |
| [Mangatax](/kusama/2110-mangatax) | 879 | 13,711.31 $451,858.41 |   |    |   | $32.96 | `{"Token":"4"}` |
| [Basilisk](/kusama/2090-basilisk) | 1,926 | 4,774.99 $157,360.43 | 1.44 $47.46 |    |   | $32.96 | `{"Token":"1"}` |
| [Kintsugi](/kusama/2092-kintsugi) | 211 | 1,271.44 $41,900.44 | 20,099.05 $662,367.39 |    |   | $32.96 | `{"Token":"KSM"}` |
| [Robonomics](/kusama/2048-robonomics) | 6 | 536.43 $17,678.14 |   |    |   | $32.96 | `{"Token":"4294967295"}` |
| [Shiden](/kusama/2007-shiden) | 67 | 64.49 $2,125.39 |   |    |   | $32.96 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Encointer](/kusama/1001-encointer) | 65 | 12.72 $419.13 |   |    |   | $32.96 | `{"Token":"KSM"}` |
| [Turing](/kusama/2114-turing) | 5 | 5.36 $176.59 |   |    |   | $32.96 | `{"Token":"1"}` |
| [Amplitude](/kusama/2124-amplitude) | 1 | 1 $32.85 |   |    |   | $32.96 | `{"XCM":"KSM"}` |
| [Dora Factory](/kusama/2115-dorafactory) | 3 | 0.29 $9.59 |   |    |   | $33.07 | `{"Token":"KSM"}` |
| [Khala](/kusama/2004-khala) | 2 | 0.23 $7.74 |   |    |   | $32.96 | `{"Token":"0"}` |
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
 where symbol = "KSM" and date(ts) = "2023-03-07"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json) | See [Definitions](/DEFINITIONS.md) for details
