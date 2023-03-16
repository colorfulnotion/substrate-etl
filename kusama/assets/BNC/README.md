# BNC on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-12


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":2001},{"generalKey":"0x0001"}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 84,466 | 41,797,862.44 $10,090,737.13 | 38,965,870.89 $9,407,044.70 | 22,876,477.56  $5,522,782.94 | 7,979,992.07 $1,926,510.06 | $0.24 | `{"Token":"BNC"}` |
| [Karura](/kusama/2000-karura) | 1,174 | 885,047.44 $213,665.98 |   |    |   | $0.24 | `{"Token":"BNC"}` |
| [Mangatax](/kusama/2110-mangatax) | 160 | 90,159.58 $21,766.11 |   |    |   | $0.24 | `{"Token":"14"}` |
| [Moonriver](/kusama/2023-moonriver) | 69 | 1,183.22 $285.65 |   |    |   | $0.24 | `{"Token":"319623561105283008236062145480775032445"}` |
| [Khala](/kusama/2004-khala) | 10 | 25.92 $6.26 |   |    |   | $0.24 | `{"Token":"2"}` |
| [Shiden](/kusama/2007-shiden) | 4 | 0.1 $0.03 |   |    |   | $0.24 | `{"Token":"18446744073709551627"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "BNC" and date(ts) = "2023-03-12"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/BNC.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/BNC.json) | See [Definitions](/DEFINITIONS.md) for details
