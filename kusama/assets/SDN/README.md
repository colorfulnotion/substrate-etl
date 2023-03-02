# SDN on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-02-28


*XCM Interior Keys*:
* `{"parachain":2007}~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Shiden](/kusama/2007-shiden) | 638,280 | 77,421,697.62 $33,859,514.75 | 963,883.1 $421,543.51 | 18,386,074.59  $8,040,944.37 | 15,863,601.24 $6,937,768.83 | $0.44 | `{"Token":"SDN"}` |
| [Moonriver](/kusama/2023-moonriver) | 45 | 31,917.6 $13,958.81 |   |    |   | $0.44 | `{"Token":"16797826370226091782818345603793389938"}` |
| [Karura](/kusama/2000-karura) | 39 | 7,553.17 $3,303.30 |   |    |   | $0.44 | `{"ForeignAsset":"18"}` |
| [Khala](/kusama/2004-khala) | 9 | 29.99 $13.12 |   |    |   | $0.44 | `{"Token":"12"}` |
| [Crust Shadow](/kusama/2012-shadow) | 11 | 3.61 $1.58 |   |    |   | $0.44 | `{"Token":"16797826370226091782818345603793389938"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 3 | 0.6 $0.26 |   |    |   | $0.44 | `{"Token2":"3"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "SDN" and date(ts) = "2023-02-28"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/SDN.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/SDN.json) | See [Definitions](/DEFINITIONS.md) for details
