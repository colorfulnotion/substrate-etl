# KSM on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-11


*XCM Interior Keys*:
* `here~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Kusama](/kusama/0-kusama) | 286,046 | 13,073,655.62 $390,277,931.82 | 262,496.26 $7,836,101.76 | 7,960,025.23  $237,624,599.82 | 7,624,565.19 $227,610,365.55 | $29.85 | `{"Token":"KSM"}` |
| [Moonriver](/kusama/2023-moonriver) | 1,406 | 95,179.41 $2,841,318.68 |   |    |   | $29.85 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 3,106 | 92,042.51 $2,747,675.31 | 0.1 $2.99 |    |   | $29.85 | `{"Token":"KSM"}` |
| [Karura](/kusama/2000-karura) | 8,129 | 61,048.83 $1,822,444.39 |   |    |   | $29.85 | `{"Token":"KSM"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 3,568 | 19,972.98 $596,238.12 |   |    |   | $29.85 | `{"Token":"100"}` |
| [Mangatax](/kusama/2110-mangatax) | 882 | 13,721.88 $409,628.95 |   |    |   | $29.85 | `{"Token":"4"}` |
| [Basilisk](/kusama/2090-basilisk) | 1,936 | 5,266.59 $157,219.51 | 1.44 $42.99 |    |   | $29.85 | `{"Token":"1"}` |
| [Kintsugi](/kusama/2092-kintsugi) | 212 | 1,280.83 $38,235.56 | 20,106.31 $600,218.38 |    |   | $29.85 | `{"Token":"KSM"}` |
| [Robonomics](/kusama/2048-robonomics) | 6 | 536.43 $16,013.64 |   |    |   | $29.85 | `{"Token":"4294967295"}` |
| [Shiden](/kusama/2007-shiden) | 67 | 64.69 $1,931.24 |   |    |   | $29.85 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Encointer](/kusama/1001-encointer) | 65 | 12.72 $379.67 |   |    |   | $29.85 | `{"Token":"KSM"}` |
| [Amplitude](/kusama/2124-amplitude) | 2 | 6.04 $180.32 |   |    |   | $29.85 | `{"XCM":"KSM"}` |
| [Turing](/kusama/2114-turing) | 5 | 5.36 $159.96 |   |    |   | $29.85 | `{"Token":"1"}` |
| [Dora Factory](/kusama/2115-dorafactory) | 3 | 0.29 $8.66 |   |    |   | $29.85 | `{"Token":"KSM"}` |
| [Khala](/kusama/2004-khala) | 2 | 0.23 $7.01 |   |    |   | $29.85 | `{"Token":"0"}` |
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
 where symbol = "KSM" and date(ts) = "2023-03-11"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json) | See [Definitions](/DEFINITIONS.md) for details
