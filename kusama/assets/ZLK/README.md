# ZLK on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-15


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":2001},{"generalKey":"0x0207"}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 20,400 | 3,709,413.8 $86,724.72 |   |    |   | $0.02 | `{"Token":"ZLK"}` |
| [Khala](/kusama/2004-khala) | 6 | 317,066.08 $7,412.89 |   |    |   | $0.02 | `{"Token":"3"}` |
| [Mangatax](/kusama/2110-mangatax) | 60 | 90,657.65 $2,119.54 |   |    |   | $0.02 | `{"Token":"26"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "ZLK" and date(ts) = "2023-03-15"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/ZLK.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/ZLK.json) | See [Definitions](/DEFINITIONS.md) for details
