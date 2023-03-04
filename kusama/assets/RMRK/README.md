# RMRK on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-03


*XCM Interior Keys*:
* `[{"parachain":1000},{"palletInstance":50},{"generalIndex":8}]~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Statemine](/kusama/1000-statemine) | 6,149 | 9,999,611.77 $24,068,174.42 |   |    |   | $2.41 | `{"Token":"8"}` |
| [Moonriver](/kusama/2023-moonriver) | 3,269 | 4,626,164.43 $11,134,765.52 |   |    |   | $2.41 | `{"Token":"182365888117048807484804376330534607370"}` |
| [Karura](/kusama/2000-karura) | 897 | 141,051.72 $339,498.92 |   |    |   | $2.41 | `{"ForeignAsset":"0"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 143 | 9,273.87 $22,321.38 |   |    |   | $2.41 | `{"Token":"RMRK"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "RMRK" and date(ts) = "2023-03-03"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/RMRK.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/RMRK.json) | See [Definitions](/DEFINITIONS.md) for details
