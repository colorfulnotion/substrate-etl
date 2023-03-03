# KSM on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-01


*XCM Interior Keys*:
* `here~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Kusama](/kusama/0-kusama) | 285,222 | 12,996,199.06 $493,293,290.05 | 306,466.54 $11,632,469.36 | 7,768,891.24  $294,881,750.07 | 7,418,943.37 $281,598,871.03 | $37.96 | `{"Token":"KSM"}` |
| [Moonriver](/kusama/2023-moonriver) | 1,385 | 106,089.52 $4,026,811.85 |   |    |   | $37.96 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 3,101 | 92,433.79 $3,508,484.74 | 0.1 $3.80 |    |   | $37.96 | `{"Token":"KSM"}` |
| [Karura](/kusama/2000-karura) | 8,116 | 61,631.3 $2,339,322.88 |   |    |   | $37.96 | `{"Token":"KSM"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 3,588 | 19,210.55 $729,169.79 |   |    |   | $37.96 | `{"Token":"100"}` |
| [Mangatax](/kusama/2110-mangatax) | 873 | 13,763.97 $522,435.53 |   |    |   | $37.96 | `{"Token":"4"}` |
| [Basilisk](/kusama/2090-basilisk) | 1,906 | 4,240.4 $160,951.71 | 1.34 $50.86 |    |   | $37.96 | `{"Token":"1"}` |
| [Kintsugi](/kusama/2092-kintsugi) | 211 | 1,267.44 $48,107.80 | 20,166.59 $765,458.03 |    |   | $37.96 | `{"Token":"KSM"}` |
| [Robonomics](/kusama/2048-robonomics) | 6 | 536.43 $20,361.14 |   |    |   | $37.96 | `{"Token":"4294967295"}` |
| [Shiden](/kusama/2007-shiden) | 66 | 63.49 $2,410.00 |   |    |   | $37.96 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Encointer](/kusama/1001-encointer) | 965 | 12.72 $482.75 |   |    |   | $37.96 | `{"Token":"KSM"}` |
| [Turing](/kusama/2114-turing) | 5 | 5.36 $203.39 |   |    |   | $37.96 | `{"Token":"1"}` |
| [Amplitude](/kusama/2124-amplitude) | 1 | 1 $37.84 |   |    |   | $37.96 | `{"XCM":"KSM"}` |
| [Dora Factory](/kusama/2115-dorafactory) | 3 | 0.29 $11.01 |   |    |   | $37.96 | `{"Token":"KSM"}` |
| [Khala](/kusama/2004-khala) | 2 | 0.23 $8.91 |   |    |   | $37.96 | `{"Token":"0"}` |
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
 where symbol = "KSM" and date(ts) = "2023-03-01"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json) | See [Definitions](/DEFINITIONS.md) for details
