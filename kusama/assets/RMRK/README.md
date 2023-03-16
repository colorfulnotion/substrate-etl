# RMRK on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-12


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":1000},{"palletInstance":50},{"generalIndex":8}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Statemine](/kusama/1000-statemine) | 6,189 | 9,999,611.77 $21,559,575.78 |   |    |   | $2.16 | `{"Token":"8"}` |
| [Moonriver](/kusama/2023-moonriver) | 3,318 | 4,625,191.86 $9,972,104.59 |   |    |   | $2.16 | `{"Token":"182365888117048807484804376330534607370"}` |
| [Karura](/kusama/2000-karura) | 896 | 140,490.9 $302,904.19 |   |    |   | $2.16 | `{"ForeignAsset":"0"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 145 | 9,116.1 $19,654.69 |   |    |   | $2.16 | `{"Token":"RMRK"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "RMRK" and date(ts) = "2023-03-12"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/RMRK.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/RMRK.json) | See [Definitions](/DEFINITIONS.md) for details
