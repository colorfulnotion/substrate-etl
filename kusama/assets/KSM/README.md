# KSM on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-02


*XCM Interior Keys*:
* `[{"network":"kusama"},"here"]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Kusama](/kusama/0-kusama) | 285,286 | 21,053,309.5 $766,807,067.80 | 501,958.53 $18,282,415.22 | 12,971,558.69  $472,452,223.46 | 12,315,852.69 $448,569,992.65 | $36.42 | `{"Token":"KSM"}` |
| [Moonriver](/kusama/2023-moonriver) | 1,390 | 105,491.43 $3,842,225.97 |   |    |   | $36.42 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 3,100 | 92,114.23 $3,354,999.39 | 0.1 $3.64 |    |   | $36.42 | `{"Token":"KSM"}` |
| [Karura](/kusama/2000-karura) | 8,115 | 60,648.17 $2,208,937.69 |   |    |   | $36.42 | `{"Token":"KSM"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 3,588 | 19,315.93 $703,527.91 |   |    |   | $36.42 | `{"Token":"100"}` |
| [Mangatax](/kusama/2110-mangatax) | 874 | 13,793.28 $502,381.27 |   |    |   | $36.42 | `{"Token":"4"}` |
| [Basilisk](/kusama/2090-basilisk) | 1,908 | 4,215.61 $153,541.56 | 1.34 $48.81 |    |   | $36.42 | `{"Token":"1"}` |
| [Statemine](/kusama/1000-statemine) | 49,368 | 3,414.48 $124,362.73 | 984.57 $35,860.22 |    |   | $36.42 | `{"Token":"KSM"}` |
| [Kintsugi](/kusama/2092-kintsugi) | 211 | 1,267.44 $46,162.82 | 20,160.99 $734,306.96 |    |   | $36.42 | `{"Token":"KSM"}` |
| [Robonomics](/kusama/2048-robonomics) | 6 | 536.43 $19,537.95 |   |    |   | $36.42 | `{"Token":"4294967295"}` |
| [Shiden](/kusama/2007-shiden) | 66 | 63.49 $2,312.57 |   |    |   | $36.42 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Encointer](/kusama/1001-encointer) | 966 | 12.72 $463.23 |   |    |   | $36.42 | `{"Token":"KSM"}` |
| [Turing](/kusama/2114-turing) | 5 | 5.36 $195.16 |   |    |   | $36.42 | `{"Token":"1"}` |
| [Amplitude](/kusama/2124-amplitude) | 1 | 1 $36.31 |   |    |   | $36.42 | `{"XCM":"KSM"}` |
| [Dora Factory](/kusama/2115-dorafactory) | 3 | 0.29 $10.56 |   |    |   | $36.42 | `{"Token":"KSM"}` |
| [Khala](/kusama/2004-khala) | 2 | 0.23 $8.55 |   |    |   | $36.42 | `{"Token":"0"}` |
| [BridgeHub](/kusama/1002-bridgehub) | 4 |   |   |    |   |  | `{"Token":"KSM"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "KSM" and date(ts) = "2023-03-02"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json) | See [Definitions](/DEFINITIONS.md) for details
