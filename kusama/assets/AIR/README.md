# AIR on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-02


*XCM Interior Keys*:
* `[{"parachain":2088},{"generalKey":"0x0001"}]~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Altair](/kusama/2088-altair) | 29,455 | 476,510,029.03 $4,565,342.52 | 514,305.05 $4,927.45 | 79,013,635.82  $757,013.05 | 13,528,465.49 $129,613.39 | $0.00958 | `{"Token":"AIR"}` |
| [Karura](/kusama/2000-karura) | 280 | 3,366,765.28 $32,256.27 |   |    |   | $0.00958 | `{"ForeignAsset":"12"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "AIR" and date(ts) = "2023-03-02"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/AIR.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/AIR.json) | See [Definitions](/DEFINITIONS.md) for details
