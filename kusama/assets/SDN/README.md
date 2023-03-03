# SDN on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-01


*XCM Interior Keys*:
* `{"parachain":2007}~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Shiden](/kusama/2007-shiden) | 638,295 | 77,440,506.61 $36,373,740.51 | 963,883.1 $452,735.08 | 18,381,584.15  $8,633,814.54 | 15,859,110.8 $7,449,010.94 | $0.47 | `{"Token":"SDN"}` |
| [Moonriver](/kusama/2023-moonriver) | 45 | 31,917.6 $14,991.67 |   |    |   | $0.47 | `{"Token":"16797826370226091782818345603793389938"}` |
| [Karura](/kusama/2000-karura) | 39 | 7,553.17 $3,547.72 |   |    |   | $0.47 | `{"ForeignAsset":"18"}` |
| [Khala](/kusama/2004-khala) | 9 | 29.99 $14.09 |   |    |   | $0.47 | `{"Token":"12"}` |
| [Crust Shadow](/kusama/2012-shadow) | 11 | 3.61 $1.69 |   |    |   | $0.47 | `{"Token":"16797826370226091782818345603793389938"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 3 | 0.6 $0.28 |   |    |   | $0.47 | `{"Token2":"3"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "SDN" and date(ts) = "2023-03-01"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/SDN.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/SDN.json) | See [Definitions](/DEFINITIONS.md) for details
