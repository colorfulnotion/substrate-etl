# KSM on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-02-27


*XCM Interior Keys*:
* `here~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Kusama](/kusama/0-kusama) | 285,110 | 12,986,546.4 $505,161,634.39 | 309,622.12 $12,043,942.41 | 7,754,221.89  $301,630,262.52 | 7,404,584.05 $288,029,755.16 | $38.90 | `{"Token":"KSM"}` |
| [Moonriver](/kusama/2023-moonriver) | 1,379 | 98,045.12 $3,813,841.93 |   |    |   | $38.90 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 3,103 | 92,384.02 $3,593,631.56 | 0.1 $3.89 |    |   | $38.90 | `{"Token":"KSM"}` |
| [Karura](/kusama/2000-karura) | 8,114 | 61,092.56 $2,376,429.82 |   |    |   | $38.90 | `{"Token":"KSM"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 3,595 | 19,267.04 $749,465.66 |   |    |   | $38.90 | `{"Token":"100"}` |
| [Mangatax](/kusama/2110-mangatax) | 869 | 13,366.19 $519,929.33 |   |    |   | $38.90 | `{"Token":"4"}` |
| [Basilisk](/kusama/2090-basilisk) | 1,897 | 4,243.61 $165,071.44 | 1.34 $52.12 |    |   | $38.90 | `{"Token":"1"}` |
| [Statemine](/kusama/1000-statemine) | 49,343 | 3,363.24 $130,826.14 | 1,034.43 $40,238.32 |    |   | $38.90 | `{"Token":"KSM"}` |
| [Kintsugi](/kusama/2092-kintsugi) | 211 | 1,274.1 $49,560.94 | 20,178.41 $784,916.84 |    |   | $38.90 | `{"Token":"KSM"}` |
| [Robonomics](/kusama/2048-robonomics) | 6 | 536.43 $20,866.51 |   |    |   | $38.90 | `{"Token":"4294967295"}` |
| [Shiden](/kusama/2007-shiden) | 66 | 63.49 $2,469.82 |   |    |   | $38.90 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Encointer](/kusama/1001-encointer) | 963 | 12.72 $494.73 |   |    |   | $38.90 | `{"Token":"KSM"}` |
| [Turing](/kusama/2114-turing) | 5 | 5.36 $208.78 |   |    |   | $38.96 | `{"Token":"1"}` |
| [Amplitude](/kusama/2124-amplitude) | 1 | 1 $38.77 |   |    |   | $38.90 | `{"XCM":"KSM"}` |
| [Dora Factory](/kusama/2115-dorafactory) | 3 | 0.29 $11.28 |   |    |   | $38.90 | `{"Token":"KSM"}` |
| [Khala](/kusama/2004-khala) | 2 | 0.23 $9.13 |   |    |   | $38.90 | `{"Token":"0"}` |
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
 where symbol = "KSM" and date(ts) = "2023-02-27"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json) | See [Definitions](/DEFINITIONS.md) for details
