# KSM on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-08


*XCM Interior Keys*:
* `here~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Kusama](/kusama/0-kusama) | 285,786 | 13,065,115.54 $413,562,439.09 | 262,093.66 $8,296,297.98 | 7,951,532.48  $251,697,366.01 | 7,616,210.57 $241,083,104.76 | $31.65 | `{"Token":"KSM"}` |
| [Moonriver](/kusama/2023-moonriver) | 1,386 | 93,699.27 $2,965,951.38 |   |    |   | $31.65 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 3,114 | 92,504.33 $2,928,126.96 | 0.1 $3.17 |    |   | $31.65 | `{"Token":"KSM"}` |
| [Karura](/kusama/2000-karura) | 8,129 | 61,380.88 $1,942,946.87 |   |    |   | $31.65 | `{"Token":"KSM"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 3,574 | 19,126.17 $605,418.69 |   |    |   | $31.65 | `{"Token":"100"}` |
| [Mangatax](/kusama/2110-mangatax) | 879 | 13,778.28 $436,136.83 |   |    |   | $31.65 | `{"Token":"4"}` |
| [Basilisk](/kusama/2090-basilisk) | 1,933 | 4,840.95 $153,235.23 | 1.44 $45.58 |    |   | $31.65 | `{"Token":"1"}` |
| [Kintsugi](/kusama/2092-kintsugi) | 211 | 1,271.44 $40,246.03 | 20,099.05 $636,214.18 |    |   | $31.65 | `{"Token":"KSM"}` |
| [Robonomics](/kusama/2048-robonomics) | 6 | 536.43 $16,980.13 |   |    |   | $31.65 | `{"Token":"4294967295"}` |
| [Shiden](/kusama/2007-shiden) | 67 | 64.49 $2,041.47 |   |    |   | $31.65 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Encointer](/kusama/1001-encointer) | 65 | 12.72 $402.58 |   |    |   | $31.65 | `{"Token":"KSM"}` |
| [Turing](/kusama/2114-turing) | 5 | 5.36 $169.61 |   |    |   | $31.65 | `{"Token":"1"}` |
| [Amplitude](/kusama/2124-amplitude) | 1 | 1 $31.55 |   |    |   | $31.65 | `{"XCM":"KSM"}` |
| [Dora Factory](/kusama/2115-dorafactory) | 3 | 0.29 $9.18 |   |    |   | $31.65 | `{"Token":"KSM"}` |
| [Khala](/kusama/2004-khala) | 2 | 0.23 $7.43 |   |    |   | $31.65 | `{"Token":"0"}` |
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
 where symbol = "KSM" and date(ts) = "2023-03-08"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json) | See [Definitions](/DEFINITIONS.md) for details
