# KSM on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-04


*XCM Interior Keys*:
* `here~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Kusama](/kusama/0-kusama) | 285,417 | 13,007,080.24 $443,408,807.28 | 305,520.83 $10,415,145.08 | 7,929,301.45  $270,308,326.98 | 7,579,333.16 $258,377,976.81 | $34.09 | `{"Token":"KSM"}` |
| [Moonriver](/kusama/2023-moonriver) | 1,392 | 94,805.27 $3,231,893.17 |   |    |   | $34.09 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 3,115 | 92,377.62 $3,149,134.78 | 199.14 $6,788.71 |    |   | $34.09 | `{"Token":"KSM"}` |
| [Karura](/kusama/2000-karura) | 8,119 | 61,144.57 $2,084,406.34 |   |    |   | $34.09 | `{"Token":"KSM"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 3,584 | 19,091.67 $650,831.39 |   |    |   | $34.09 | `{"Token":"100"}` |
| [Mangatax](/kusama/2110-mangatax) | 875 | 13,782.58 $469,845.50 |   |    |   | $34.09 | `{"Token":"4"}` |
| [Basilisk](/kusama/2090-basilisk) | 1,912 | 4,176.64 $142,380.75 | 1.34 $45.68 |    |   | $34.09 | `{"Token":"1"}` |
| [Kintsugi](/kusama/2092-kintsugi) | 211 | 1,267.44 $43,206.70 | 20,108.66 $685,500.30 |    |   | $34.09 | `{"Token":"KSM"}` |
| [Robonomics](/kusama/2048-robonomics) | 6 | 536.43 $18,286.80 |   |    |   | $34.09 | `{"Token":"4294967295"}` |
| [Shiden](/kusama/2007-shiden) | 66 | 63.49 $2,164.48 |   |    |   | $34.09 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Encointer](/kusama/1001-encointer) | 971 | 12.72 $433.56 |   |    |   | $34.09 | `{"Token":"KSM"}` |
| [Turing](/kusama/2114-turing) | 5 | 5.36 $182.67 |   |    |   | $34.09 | `{"Token":"1"}` |
| [Amplitude](/kusama/2124-amplitude) | 1 | 1 $33.98 |   |    |   | $34.09 | `{"XCM":"KSM"}` |
| [Dora Factory](/kusama/2115-dorafactory) | 3 | 0.29 $9.89 |   |    |   | $34.09 | `{"Token":"KSM"}` |
| [Khala](/kusama/2004-khala) | 2 | 0.23 $8.00 |   |    |   | $34.09 | `{"Token":"0"}` |
| [Calamari](/kusama/2084-calamari) | 4 | 0.05 $1.85 |   |    |   | $34.09 | `{"Token":"12"}` |
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
 where symbol = "KSM" and date(ts) = "2023-03-04"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json) | See [Definitions](/DEFINITIONS.md) for details
