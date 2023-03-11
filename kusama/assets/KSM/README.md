# KSM on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-10


*XCM Interior Keys*:
* `[{"network":"kusama"},"here"]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Kusama](/kusama/0-kusama) | 285,952 | 13,070,789.72 $418,552,179.40 | 262,490.23 $8,405,449.20 | 7,955,694.19  $254,756,844.34 | 7,620,365.11 $244,018,953.13 | $32.02 | `{"Token":"KSM"}` |
| [Moonriver](/kusama/2023-moonriver) | 1,391 | 97,013.29 $3,106,554.74 |   |    |   | $32.02 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 3,112 | 91,870.12 $2,941,860.48 | 0.1 $3.20 |    |   | $32.02 | `{"Token":"KSM"}` |
| [Karura](/kusama/2000-karura) | 8,128 | 61,006.41 $1,953,544.33 |   |    |   | $32.02 | `{"Token":"KSM"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 3,569 | 19,745.52 $632,290.11 |   |    |   | $32.02 | `{"Token":"100"}` |
| [Mangatax](/kusama/2110-mangatax) | 882 | 13,704.25 $438,836.82 |   |    |   | $32.02 | `{"Token":"4"}` |
| [Basilisk](/kusama/2090-basilisk) | 1,934 | 5,206.08 $166,708.88 | 1.44 $46.11 |    |   | $32.02 | `{"Token":"1"}` |
| [Statemine](/kusama/1000-statemine) | 49,126 | 3,389.54 $108,539.68 | 1,076.07 $34,457.81 |    |   | $32.02 | `{"Token":"KSM"}` |
| [Kintsugi](/kusama/2092-kintsugi) | 212 | 1,282.6 $41,071.31 | 20,112.27 $644,033.96 |    |   | $32.02 | `{"Token":"KSM"}` |
| [Robonomics](/kusama/2048-robonomics) | 6 | 536.43 $17,177.54 |   |    |   | $32.02 | `{"Token":"4294967295"}` |
| [Shiden](/kusama/2007-shiden) | 67 | 64.69 $2,071.61 |   |    |   | $32.02 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Encointer](/kusama/1001-encointer) | 65 | 12.72 $407.26 |   |    |   | $32.02 | `{"Token":"KSM"}` |
| [Turing](/kusama/2114-turing) | 5 | 5.36 $171.59 |   |    |   | $32.02 | `{"Token":"1"}` |
| [Amplitude](/kusama/2124-amplitude) | 1 | 1 $31.92 |   |    |   | $32.02 | `{"XCM":"KSM"}` |
| [Dora Factory](/kusama/2115-dorafactory) | 3 | 0.29 $9.29 |   |    |   | $32.02 | `{"Token":"KSM"}` |
| [Khala](/kusama/2004-khala) | 2 | 0.23 $7.52 |   |    |   | $32.02 | `{"Token":"0"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "KSM" and date(ts) = "2023-03-10"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json) | See [Definitions](/DEFINITIONS.md) for details
