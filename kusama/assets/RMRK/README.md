# RMRK substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io)

*Relay Chain*: kusama
*Report Date*: 2023-02-24
*XCM Interior Keys*:
* `[{"parachain":1000},{"palletInstance":50},{"generalIndex":8}]~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Statemine](/kusama/1000-statemine) | 6,136 | 9,999,611.77 $27,177,828.56 |   |    |   | $2.72 | `{"Token":"8"}` |
| [Moonriver](/kusama/2023-moonriver) | 3,262 | 4,625,957.31 $12,572,835.59 |   |    |   | $2.72 | `{"Token":"182365888117048807484804376330534607370"}` |
| [Karura](/kusama/2000-karura) | 896 | 138,546.03 $376,552.66 |   |    |   | $2.72 | `{"ForeignAsset":"0"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 143 | 9,123.11 $24,795.60 |   |    |   | $2.72 | `{"Token":"RMRK"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "RMRK" and date(ts) = "2023-02-24"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/RMRK.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/RMRK.json) | See [Definitions](/DEFINITIONS.md) for details
