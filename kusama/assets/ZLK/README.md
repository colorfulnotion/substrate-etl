# ZLK on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-08


*XCM Interior Keys*:
* `[{"parachain":2001},{"generalKey":"0x0207"}]~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 20,405 | 3,709,413.8 $105,628.75 |   |    |   | $0.03 | `{"Token":"ZLK"}` |
| [Khala](/kusama/2004-khala) | 6 | 230,175.49 $6,554.45 |   |    |   | $0.03 | `{"Token":"3"}` |
| [Mangatax](/kusama/2110-mangatax) | 51 | 86,825.17 $2,472.42 |   |    |   | $0.03 | `{"Token":"26"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "ZLK" and date(ts) = "2023-03-08"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/ZLK.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/ZLK.json) | See [Definitions](/DEFINITIONS.md) for details
