# AIR on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-10


*XCM Interior Keys*:
* `[{"parachain":2088},{"generalKey":"0x0001"}]~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Altair](/kusama/2088-altair) | 29,392 | 476,513,030 $3,746,076.54 | 511,304.05 $4,019.58 | 78,960,978.03  $620,746.65 | 13,527,150.49 $106,342.82 | $0.00786 | `{"Token":"AIR"}` |
| [Karura](/kusama/2000-karura) | 278 | 3,352,137.72 $26,352.62 |   |    |   | $0.00786 | `{"ForeignAsset":"12"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "AIR" and date(ts) = "2023-03-10"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/AIR.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/AIR.json) | See [Definitions](/DEFINITIONS.md) for details
