# KSM on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-12


*XCM Interior Keys*:
* `[{"network":"kusama"},"here"]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Kusama](/kusama/0-kusama) | 286,206 | 13,073,856.81 $425,071,688.92 | 264,802.87 $8,598,907.08 | 7,968,569.49  $259,041,651.07 | 7,633,113.36 $248,129,296.56 | $32.50 | `{"Token":"KSM"}` |
| [Moonriver](/kusama/2023-moonriver) | 1,409 | 95,148.33 $3,075,781.42 |   |    |   | $32.33 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 3,104 | 92,121.36 $2,977,931.09 | 0.1 $3.23 |    |   | $32.33 | `{"Token":"KSM"}` |
| [Karura](/kusama/2000-karura) | 8,130 | 60,873.61 $1,967,810.94 |   |    |   | $32.33 | `{"Token":"KSM"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 3,569 | 18,825.73 $608,563.93 |   |    |   | $32.33 | `{"Token":"100"}` |
| [Mangatax](/kusama/2110-mangatax) | 884 | 13,733.95 $443,966.18 |   |    |   | $32.33 | `{"Token":"4"}` |
| [Basilisk](/kusama/2090-basilisk) | 1,940 | 5,245.41 $169,564.00 | 1.44 $46.55 |    |   | $32.33 | `{"Token":"1"}` |
| [Kintsugi](/kusama/2092-kintsugi) | 212 | 1,274.87 $41,211.68 | 20,106.31 $649,960.04 |    |   | $32.33 | `{"Token":"KSM"}` |
| [Robonomics](/kusama/2048-robonomics) | 6 | 536.43 $17,340.73 |   |    |   | $32.33 | `{"Token":"4294967295"}` |
| [Shiden](/kusama/2007-shiden) | 67 | 64.69 $2,091.29 |   |    |   | $32.33 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Encointer](/kusama/1001-encointer) | 65 | 12.72 $411.13 |   |    |   | $32.33 | `{"Token":"KSM"}` |
| [Turing](/kusama/2114-turing) | 5 | 5.36 $173.22 |   |    |   | $32.33 | `{"Token":"1"}` |
| [Dora Factory](/kusama/2115-dorafactory) | 3 | 0.29 $9.37 |   |    |   | $32.33 | `{"Token":"KSM"}` |
| [Khala](/kusama/2004-khala) | 2 | 0.23 $7.59 |   |    |   | $32.33 | `{"Token":"0"}` |
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
 where symbol = "KSM" and date(ts) = "2023-03-12"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json) | See [Definitions](/DEFINITIONS.md) for details
