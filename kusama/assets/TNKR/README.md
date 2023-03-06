# TNKR on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-04


*XCM Interior Keys*:
* `[{"parachain":2125},{"generalIndex":0}]~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [InvArch Tinkernet](/kusama/2125-tinkernet) | 7,759 | 11,684,930.69  | 15,065  | 2,012,477.38   | 2,012,477.38  |  | `{"Token":"TNKR"}` |
| [Basilisk](/kusama/2090-basilisk) | 1,643 | 807,486.28  |   |    |   |  | `{"Token":"6"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "TNKR" and date(ts) = "2023-03-04"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/TNKR.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/TNKR.json) | See [Definitions](/DEFINITIONS.md) for details
