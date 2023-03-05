# XRT on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-03


*XCM Interior Keys*:
* `{"parachain":2048}~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Robonomics](/kusama/2048-robonomics) | 3,150 | 994,872 $5,861,416.66 | 199.04 $1,172.67 | 144,545.53  $851,608.64 |   | $5.89 | `{"Token":"XRT"}` |
| [Moonriver](/kusama/2023-moonriver) | 42 | 97,805.47 $576,233.54 |   |    |   | $5.89 | `{"Token":"108036400430056508975016746969135344601"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "XRT" and date(ts) = "2023-03-03"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/XRT.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/XRT.json) | See [Definitions](/DEFINITIONS.md) for details
