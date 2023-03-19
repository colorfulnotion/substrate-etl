# KSM on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-18


*XCM Interior Keys*:
* `[{"network":"kusama"},"here"]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Kusama](/kusama/0-kusama) | 286,719 | 13,093,547.48 $468,892,921.90 | 268,202.51 $9,604,597.91 | 8,004,677.33  $286,655,434.61 | 7,669,144.08 $274,639,655.99 | $35.81 | `{"Token":"KSM"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 3,112 | 90,525.6 $3,241,811.36 | 0.1 $3.58 |    |   | $35.81 | `{"Token":"KSM"}` |
| [Moonriver](/kusama/2023-moonriver) | 1,388 | 86,009.02 $3,080,068.22 |   |    |   | $35.81 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Karura](/kusama/2000-karura) | 8,126 | 60,526.97 $2,167,530.83 |   |    |   | $35.81 | `{"Token":"KSM"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 3,555 | 18,256.6 $653,786.89 |   |    |   | $35.81 | `{"Token":"100"}` |
| [Mangatax](/kusama/2110-mangatax) | 898 | 13,651.22 $488,863.77 |   |    |   | $35.81 | `{"Token":"4"}` |
| [Basilisk](/kusama/2090-basilisk) | 1,963 | 5,642.27 $202,055.26 | 1.46 $52.28 |    |   | $35.81 | `{"Token":"1"}` |
| [Kintsugi](/kusama/2092-kintsugi) | 216 | 1,278.83 $45,796.23 | 19,949.06 $714,395.74 |    |   | $35.81 | `{"Token":"KSM"}` |
| [Robonomics](/kusama/2048-robonomics) | 7 | 536.54 $19,214.03 |   |    |   | $35.81 | `{"Token":"4294967295"}` |
| [Shiden](/kusama/2007-shiden) | 67 | 64.69 $2,316.73 |   |    |   | $35.81 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Encointer](/kusama/1001-encointer) | 65 | 12.72 $455.45 |   |    |   | $35.81 | `{"Token":"KSM"}` |
| [Turing](/kusama/2114-turing) | 5 | 5.36 $190.92 |   |    |   | $35.63 | `{"Token":"1"}` |
| [Dora Factory](/kusama/2115-dorafactory) | 3 | 0.29 $10.39 |   |    |   | $35.81 | `{"Token":"KSM"}` |
| [Khala](/kusama/2004-khala) | 2 | 0.23 $8.41 |   |    |   | $35.81 | `{"Token":"0"}` |
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
 where symbol = "KSM" and date(ts) = "2023-03-18"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json) | See [Definitions](/DEFINITIONS.md) for details
