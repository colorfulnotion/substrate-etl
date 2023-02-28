# AIR on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-02-26


*XCM Interior Keys*:
* `[{"parachain":2088},{"generalKey":"0x0001"}]~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Altair](/kusama/2088-altair) | 29,454 | 476,510,029.03 $5,155,628.60 | 514,305.05 $5,564.55 | 79,076,593.92  $855,573.91 | 13,528,465.49 $146,372.04 | $0.01 | `{"Token":"AIR"}` |
| [Karura](/kusama/2000-karura) | 280 | 3,366,765.28 $36,426.92 |   |    |   | $0.01 | `{"ForeignAsset":"12"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "AIR" and date(ts) = "2023-02-26"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/AIR.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/AIR.json) | See [Definitions](/DEFINITIONS.md) for details
