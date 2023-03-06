# SDN on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-05


*XCM Interior Keys*:
* `{"parachain":2007}~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Shiden](/kusama/2007-shiden) | 148,388 | 22,642,427.08 $9,127,137.61 | 32,654 $13,162.79 | 6,992,650.7  $2,818,729.85 | 6,082,981.88 $2,452,043.35 | $0.40 | `{"Token":"SDN"}` |
| [Moonriver](/kusama/2023-moonriver) | 45 | 33,466.6 $13,490.35 |   |    |   | $0.40 | `{"Token":"16797826370226091782818345603793389938"}` |
| [Karura](/kusama/2000-karura) | 39 | 7,553.17 $3,044.68 |   |    |   | $0.40 | `{"ForeignAsset":"18"}` |
| [Khala](/kusama/2004-khala) | 9 | 29.99 $12.09 |   |    |   | $0.40 | `{"Token":"12"}` |
| [Crust Shadow](/kusama/2012-shadow) | 11 | 3.61 $1.45 |   |    |   | $0.40 | `{"Token":"16797826370226091782818345603793389938"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 3 | 0.6 $0.24 |   |    |   | $0.40 | `{"Token2":"3"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "SDN" and date(ts) = "2023-03-05"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/SDN.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/SDN.json) | See [Definitions](/DEFINITIONS.md) for details
