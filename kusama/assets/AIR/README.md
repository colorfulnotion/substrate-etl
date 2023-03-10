# AIR on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-08


*XCM Interior Keys*:
* `[{"parachain":2088},{"generalKey":"0x0001"}]~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Altair](/kusama/2088-altair) | 29,388 | 476,513,030.02 $4,319,183.14 | 511,304.05 $4,634.53 | 78,974,714.25  $715,838.25 | 13,527,150.49 $122,612.05 | $0.00906 | `{"Token":"AIR"}` |
| [Karura](/kusama/2000-karura) | 278 | 3,352,157.72 $30,384.44 |   |    |   | $0.00906 | `{"ForeignAsset":"12"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "AIR" and date(ts) = "2023-03-08"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/AIR.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/AIR.json) | See [Definitions](/DEFINITIONS.md) for details
