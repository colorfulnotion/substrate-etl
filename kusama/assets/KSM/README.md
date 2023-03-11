# KSM on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-09


*XCM Interior Keys*:
* `[{"network":"kusama"},"here"]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Kusama](/kusama/0-kusama) | 285,884 | 13,063,915.12 $406,681,294.30 | 266,214.07 $8,287,277.06 | 7,951,611.26  $247,534,642.43 | 7,616,263.24 $237,095,217.01 | $31.13 | `{"Token":"KSM"}` |
| [Moonriver](/kusama/2023-moonriver) | 1,391 | 93,406.72 $2,907,762.84 |   |    |   | $31.13 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 3,115 | 92,183.54 $2,869,684.89 | 0.1 $3.11 |    |   | $31.13 | `{"Token":"KSM"}` |
| [Karura](/kusama/2000-karura) | 8,126 | 61,396.7 $1,911,286.81 |   |    |   | $31.13 | `{"Token":"KSM"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 3,574 | 19,465.99 $605,978.70 |   |    |   | $31.13 | `{"Token":"100"}` |
| [Mangatax](/kusama/2110-mangatax) | 881 | 13,727.96 $427,353.18 |   |    |   | $31.13 | `{"Token":"4"}` |
| [Basilisk](/kusama/2090-basilisk) | 1,936 | 4,780.8 $148,826.81 | 1.44 $44.83 |    |   | $31.13 | `{"Token":"1"}` |
| [Kintsugi](/kusama/2092-kintsugi) | 211 | 1,273.6 $39,647.28 | 20,092.27 $625,474.70 |    |   | $31.13 | `{"Token":"KSM"}` |
| [Robonomics](/kusama/2048-robonomics) | 6 | 536.43 $16,699.14 |   |    |   | $31.13 | `{"Token":"4294967295"}` |
| [Shiden](/kusama/2007-shiden) | 67 | 64.69 $2,013.91 |   |    |   | $31.13 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Encointer](/kusama/1001-encointer) | 65 | 12.72 $395.92 |   |    |   | $31.13 | `{"Token":"KSM"}` |
| [Turing](/kusama/2114-turing) | 5 | 5.36 $166.81 |   |    |   | $31.13 | `{"Token":"1"}` |
| [Amplitude](/kusama/2124-amplitude) | 1 | 1 $31.03 |   |    |   | $31.13 | `{"XCM":"KSM"}` |
| [Dora Factory](/kusama/2115-dorafactory) | 3 | 0.29 $9.03 |   |    |   | $31.13 | `{"Token":"KSM"}` |
| [Khala](/kusama/2004-khala) | 2 | 0.23 $7.31 |   |    |   | $31.13 | `{"Token":"0"}` |
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
 where symbol = "KSM" and date(ts) = "2023-03-09"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json) | See [Definitions](/DEFINITIONS.md) for details
