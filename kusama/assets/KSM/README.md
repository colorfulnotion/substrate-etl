# KSM on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-06


*XCM Interior Keys*:
* `[{"network":"kusama"},"here"]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Kusama](/kusama/0-kusama) | 285,568 | 13,008,857.01 $451,543,710.19 | 310,538.31 $10,778,934.64 | 7,936,998.26  $275,497,043.22 | 7,587,050.57 $263,350,190.03 | $34.71 | `{"Token":"KSM"}` |
| [Moonriver](/kusama/2023-moonriver) | 1,390 | 93,592.04 $3,248,624.97 |   |    |   | $34.71 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 3,112 | 92,709.27 $3,217,983.48 | 0.1 $3.47 |    |   | $34.71 | `{"Token":"KSM"}` |
| [Karura](/kusama/2000-karura) | 8,121 | 60,840.92 $2,111,817.65 |   |    |   | $34.71 | `{"Token":"KSM"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 3,583 | 19,461.72 $675,525.56 |   |    |   | $34.71 | `{"Token":"100"}` |
| [Mangatax](/kusama/2110-mangatax) | 877 | 13,713.92 $476,016.72 |   |    |   | $34.71 | `{"Token":"4"}` |
| [Basilisk](/kusama/2090-basilisk) | 1,920 | 4,219.58 $146,463.78 | 1.44 $49.98 |    |   | $34.71 | `{"Token":"1"}` |
| [Statemine](/kusama/1000-statemine) | 49,054 | 3,365.53 $116,819.22 | 1,045.58 $36,292.66 |    |   | $34.71 | `{"Token":"KSM"}` |
| [Kintsugi](/kusama/2092-kintsugi) | 211 | 1,271.44 $44,132.23 | 20,099.05 $697,647.70 |    |   | $34.71 | `{"Token":"KSM"}` |
| [Robonomics](/kusama/2048-robonomics) | 6 | 536.43 $18,619.75 |   |    |   | $34.71 | `{"Token":"4294967295"}` |
| [Shiden](/kusama/2007-shiden) | 67 | 64.49 $2,238.60 |   |    |   | $34.71 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Encointer](/kusama/1001-encointer) | 65 | 12.72 $441.46 |   |    |   | $34.71 | `{"Token":"KSM"}` |
| [Turing](/kusama/2114-turing) | 5 | 5.36 $185.99 |   |    |   | $34.71 | `{"Token":"1"}` |
| [Amplitude](/kusama/2124-amplitude) | 1 | 1 $34.60 |   |    |   | $34.71 | `{"XCM":"KSM"}` |
| [Dora Factory](/kusama/2115-dorafactory) | 3 | 0.29 $10.07 |   |    |   | $34.71 | `{"Token":"KSM"}` |
| [Khala](/kusama/2004-khala) | 2 | 0.23 $8.15 |   |    |   | $34.71 | `{"Token":"0"}` |
| [Calamari](/kusama/2084-calamari) | 4 | 0.05 $1.89 |   |    |   | $34.71 | `{"Token":"12"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "KSM" and date(ts) = "2023-03-06"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json) | See [Definitions](/DEFINITIONS.md) for details
