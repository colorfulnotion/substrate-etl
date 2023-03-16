# SDN on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-12


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":2007}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Shiden](/kusama/2007-shiden) | 633,513 | 77,734,647.37 $29,720,847.53 | 867,983.1 $331,862.23 | 18,358,596.66  $7,019,174.47 | 15,855,619.8 $6,062,193.30 | $0.38 | `{"Token":"SDN"}` |
| [Moonriver](/kusama/2023-moonriver) | 47 | 34,635.61 $13,242.48 |   |    |   | $0.38 | `{"Token":"16797826370226091782818345603793389938"}` |
| [Karura](/kusama/2000-karura) | 39 | 7,553.17 $2,887.86 |   |    |   | $0.38 | `{"ForeignAsset":"18"}` |
| [Khala](/kusama/2004-khala) | 9 | 29.99 $11.47 |   |    |   | $0.38 | `{"Token":"12"}` |
| [Crust Shadow](/kusama/2012-shadow) | 11 | 3.61 $1.38 |   |    |   | $0.38 | `{"Token":"16797826370226091782818345603793389938"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 3 | 0.6 $0.23 |   |    |   | $0.38 | `{"Token2":"3"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "SDN" and date(ts) = "2023-03-12"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/SDN.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/SDN.json) | See [Definitions](/DEFINITIONS.md) for details
