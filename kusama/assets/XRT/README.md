# XRT on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-13


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":2048}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Robonomics](/kusama/2048-robonomics) | 2,961 | 993,875.04 $5,587,771.64 | 199.04 $1,119.04 | 144,007.34  $809,639.15 |   | $5.62 | `{"Token":"XRT"}` |
| [Basilisk](/kusama/2090-basilisk) | 26 | 7,512.37  |   |    |   |  | `{"Token":"16"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "XRT" and date(ts) = "2023-03-13"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/XRT.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/XRT.json) | See [Definitions](/DEFINITIONS.md) for details
