# KSM on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-02-28


*XCM Interior Keys*:
* `here~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Kusama](/kusama/0-kusama) | 285,167 | 12,992,944.18 $471,655,703.18 | 306,364.16 $11,121,297.80 | 7,755,183.74  $281,520,230.41 | 7,405,254.86 $268,817,493.70 | $36.30 | `{"Token":"KSM"}` |
| [Moonriver](/kusama/2023-moonriver) | 1,383 | 97,990.63 $3,557,149.12 |   |    |   | $36.30 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 3,103 | 92,337.74 $3,351,943.88 | 0.1 $3.63 |    |   | $36.30 | `{"Token":"KSM"}` |
| [Karura](/kusama/2000-karura) | 8,117 | 61,739.51 $2,241,200.40 |   |    |   | $36.30 | `{"Token":"KSM"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 3,592 | 19,224.37 $697,862.15 |   |    |   | $36.30 | `{"Token":"100"}` |
| [Mangatax](/kusama/2110-mangatax) | 871 | 13,756.39 $499,369.45 |   |    |   | $36.30 | `{"Token":"4"}` |
| [Basilisk](/kusama/2090-basilisk) | 1,896 | 4,280.12 $155,372.14 | 1.34 $48.64 |    |   | $36.30 | `{"Token":"1"}` |
| [Kintsugi](/kusama/2092-kintsugi) | 211 | 1,267.44 $46,009.14 | 20,166.59 $732,065.68 |    |   | $36.30 | `{"Token":"KSM"}` |
| [Robonomics](/kusama/2048-robonomics) | 6 | 536.43 $19,472.90 |   |    |   | $36.30 | `{"Token":"4294967295"}` |
| [Shiden](/kusama/2007-shiden) | 66 | 63.49 $2,304.87 |   |    |   | $36.30 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Encointer](/kusama/1001-encointer) | 964 | 12.72 $458.21 |   |    |   | $36.03 | `{"Token":"KSM"}` |
| [Turing](/kusama/2114-turing) | 5 | 5.36 $194.51 |   |    |   | $36.30 | `{"Token":"1"}` |
| [Amplitude](/kusama/2124-amplitude) | 1 | 1 $36.18 |   |    |   | $36.30 | `{"XCM":"KSM"}` |
| [Dora Factory](/kusama/2115-dorafactory) | 3 | 0.29 $10.53 |   |    |   | $36.30 | `{"Token":"KSM"}` |
| [Khala](/kusama/2004-khala) | 2 | 0.23 $8.52 |   |    |   | $36.30 | `{"Token":"0"}` |
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
 where symbol = "KSM" and date(ts) = "2023-02-28"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json) | See [Definitions](/DEFINITIONS.md) for details
