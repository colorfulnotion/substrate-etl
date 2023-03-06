# BNC on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-04


*XCM Interior Keys*:
* `[{"parachain":2001},{"generalKey":"0x0001"}]~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 101,495 | 41,797,890.1 $15,056,174.45 | 38,965,843.23 $14,036,032.25 | 23,582,209.69  $8,494,636.03 | 7,877,805.08 $2,837,693.66 | $0.36 | `{"Token":"BNC"}` |
| [Karura](/kusama/2000-karura) | 1,177 | 863,917.5 $311,194.96 |   |    |   | $0.36 | `{"Token":"BNC"}` |
| [Mangatax](/kusama/2110-mangatax) | 156 | 75,049.07 $27,033.71 |   |    |   | $0.36 | `{"Token":"14"}` |
| [Moonriver](/kusama/2023-moonriver) | 69 | 1,183.22 $426.21 |   |    |   | $0.36 | `{"Token":"319623561105283008236062145480775032445"}` |
| [Khala](/kusama/2004-khala) | 10 | 25.92 $9.34 |   |    |   | $0.36 | `{"Token":"2"}` |
| [Shiden](/kusama/2007-shiden) | 4 | 0.1 $0.04 |   |    |   | $0.36 | `{"Token":"18446744073709551627"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "BNC" and date(ts) = "2023-03-04"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/BNC.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/BNC.json) | See [Definitions](/DEFINITIONS.md) for details
