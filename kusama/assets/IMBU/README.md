# IMBU on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-06


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":2121},{"generalKey":"0x0096"}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Imbue Network](/kusama/2121-imbue) | 333 | 199,999,983.76  | 15.63  | 4,158,814.92   |   |  | `{"Token":"IMBU"}` |
| [Mangatax](/kusama/2110-mangatax) | 159 | 1,062,949.97  |   |    |   |  | `{"Token":"11"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "IMBU" and date(ts) = "2023-03-06"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/IMBU.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/IMBU.json) | See [Definitions](/DEFINITIONS.md) for details
