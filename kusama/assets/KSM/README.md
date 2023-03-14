# KSM on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-13


*XCM Interior Keys*:
* `[{"network":"kusama"},"here"]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 3,110 | 92,130.87 $3,088,487.60 | 0.1 $3.35 |    |   | $33.52 | `{"Token":"KSM"}` |
| [Karura](/kusama/2000-karura) | 8,129 | 60,873.87 $2,040,664.29 |   |    |   | $33.52 | `{"Token":"KSM"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 3,569 | 18,587.04 $623,090.09 |   |    |   | $33.52 | `{"Token":"100"}` |
| [Mangatax](/kusama/2110-mangatax) | 888 | 13,751.42 $460,986.42 |   |    |   | $33.52 | `{"Token":"4"}` |
| [Basilisk](/kusama/2090-basilisk) | 1,942 | 5,301.93 $177,735.82 | 1.44 $48.27 |    |   | $33.52 | `{"Token":"1"}` |
| [Kintsugi](/kusama/2092-kintsugi) | 213 | 1,266.88 $42,467.89 | 20,114.31 $674,264.22 |    |   | $33.52 | `{"Token":"KSM"}` |
| [Robonomics](/kusama/2048-robonomics) | 6 | 536.43 $17,982.66 |   |    |   | $33.52 | `{"Token":"4294967295"}` |
| [Encointer](/kusama/1001-encointer) | 65 | 12.72 $426.35 |   |    |   | $33.52 | `{"Token":"KSM"}` |
| [Turing](/kusama/2114-turing) | 5 | 5.36 $179.63 |   |    |   | $33.52 | `{"Token":"1"}` |
| [Dora Factory](/kusama/2115-dorafactory) | 3 | 0.29 $9.72 |   |    |   | $33.52 | `{"Token":"KSM"}` |
| [Khala](/kusama/2004-khala) | 2 | 0.23 $7.87 |   |    |   | $33.52 | `{"Token":"0"}` |
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
 where symbol = "KSM" and date(ts) = "2023-03-13"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json) | See [Definitions](/DEFINITIONS.md) for details
