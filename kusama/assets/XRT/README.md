# XRT on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-02-26


*XCM Interior Keys*:
* `{"parachain":2048}~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Robonomics](/kusama/2048-robonomics) | 3,147 | 994,818.19 $8,156,391.74 | 199.04 $1,631.90 | 149,651.87  $1,226,977.25 |   | $8.20 | `{"Token":"XRT"}` |
| [Moonriver](/kusama/2023-moonriver) | 43 | 96,893.06 $794,414.28 |   |    |   | $8.20 | `{"Token":"108036400430056508975016746969135344601"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "XRT" and date(ts) = "2023-02-26"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/XRT.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/XRT.json) | See [Definitions](/DEFINITIONS.md) for details
