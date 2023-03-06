# KSM on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-03


*XCM Interior Keys*:
* `here~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Kusama](/kusama/0-kusama) | 285,376 | 13,003,840.17 $443,097,852.91 | 305,521.3 $10,410,450.45 | 7,925,977.83  $270,072,817.88 | 7,575,982.42 $258,146,939.70 | $34.07 | `{"Token":"KSM"}` |
| [Moonriver](/kusama/2023-moonriver) | 1,390 | 104,384.32 $3,556,831.58 |   |    |   | $34.07 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 3,099 | 92,204.72 $3,141,819.18 | 105.1 $3,581.22 |    |   | $34.07 | `{"Token":"KSM"}` |
| [Karura](/kusama/2000-karura) | 8,120 | 61,124.53 $2,082,780.80 |   |    |   | $34.07 | `{"Token":"KSM"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 3,585 | 19,351.14 $659,378.14 |   |    |   | $34.07 | `{"Token":"100"}` |
| [Mangatax](/kusama/2110-mangatax) | 875 | 13,770.24 $469,212.35 |   |    |   | $34.07 | `{"Token":"4"}` |
| [Basilisk](/kusama/2090-basilisk) | 1,911 | 4,243.44 $144,592.55 | 1.34 $45.66 |    |   | $34.07 | `{"Token":"1"}` |
| [Statemine](/kusama/1000-statemine) | 49,887 | 3,363.89 $114,622.33 | 1,035.2 $35,273.74 |    |   | $34.07 | `{"Token":"KSM"}` |
| [Kintsugi](/kusama/2092-kintsugi) | 211 | 1,267.44 $43,033.03 | 20,160.99 $684,521.70 |    |   | $33.95 | `{"Token":"KSM"}` |
| [Robonomics](/kusama/2048-robonomics) | 6 | 536.43 $18,278.53 |   |    |   | $34.07 | `{"Token":"4294967295"}` |
| [Shiden](/kusama/2007-shiden) | 66 | 63.49 $2,163.50 |   |    |   | $34.07 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Encointer](/kusama/1001-encointer) | 969 | 12.72 $433.37 |   |    |   | $34.07 | `{"Token":"KSM"}` |
| [Turing](/kusama/2114-turing) | 5 | 5.36 $181.93 |   |    |   | $33.95 | `{"Token":"1"}` |
| [Amplitude](/kusama/2124-amplitude) | 1 | 1 $33.97 |   |    |   | $34.07 | `{"XCM":"KSM"}` |
| [Dora Factory](/kusama/2115-dorafactory) | 3 | 0.29 $9.88 |   |    |   | $34.07 | `{"Token":"KSM"}` |
| [Khala](/kusama/2004-khala) | 2 | 0.23 $7.97 |   |    |   | $33.95 | `{"Token":"0"}` |
| [Calamari](/kusama/2084-calamari) | 4 | 0.05 $1.85 |   |    |   | $34.07 | `{"Token":"12"}` |
| [BridgeHub](/kusama/1002-bridgehub) | 4 |   |   |    |   | $36.93 | `{"Token":"KSM"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "KSM" and date(ts) = "2023-03-03"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json) | See [Definitions](/DEFINITIONS.md) for details
