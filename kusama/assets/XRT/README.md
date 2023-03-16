# XRT on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-12


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":2048}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Robonomics](/kusama/2048-robonomics) | 2,955 | 994,493.98 $4,937,559.71 | 199.04 $988.21 | 144,053.72  $715,211.81 |   | $4.96 | `{"Token":"XRT"}` |
| [Moonriver](/kusama/2023-moonriver) | 49 | 138,875.81 $689,504.05 |   |    |   | $4.96 | `{"Token":"108036400430056508975016746969135344601"}` |
| [Basilisk](/kusama/2090-basilisk) | 22 | 7,785.65  |   |    |   |  | `{"Token":"16"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "XRT" and date(ts) = "2023-03-12"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/XRT.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/XRT.json) | See [Definitions](/DEFINITIONS.md) for details
