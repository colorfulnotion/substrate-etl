# TUR on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-02-28


*XCM Interior Keys*:
* `{"parachain":2114}~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Turing](/kusama/2114-turing) | 7,584 | 413,601,369.16  | 454.67  | 32,698,746.04   | 32,695,294.04  |  | `{"Token":"TUR"}` |
| [Mangatax](/kusama/2110-mangatax) | 545 | 5,401,257.83  |   |    |   |  | `{"Token":"7"}` |
| [Karura](/kusama/2000-karura) | 2 | 26.26  |   |    |   |  | `{"ForeignAsset":"16"}` |
| [Khala](/kusama/2004-khala) | 2 | 1.06  |   |    |   |  | `{"Token":"10"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "TUR" and date(ts) = "2023-02-28"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/TUR.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/TUR.json) | See [Definitions](/DEFINITIONS.md) for details
