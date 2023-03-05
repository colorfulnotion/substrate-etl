# BNC on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-03


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":2001},{"generalKey":"0x0001"}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 101,487 | 41,797,890.1 $14,415,571.96 | 38,965,843.23 $13,438,834.25 | 23,576,318.71  $8,131,178.83 | 7,871,892.95 $2,714,917.88 | $0.34 | `{"Token":"BNC"}` |
| [Karura](/kusama/2000-karura) | 1,176 | 862,189.87 $297,358.55 |   |    |   | $0.34 | `{"Token":"BNC"}` |
| [Mangatax](/kusama/2110-mangatax) | 156 | 76,013.94 $26,216.26 |   |    |   | $0.34 | `{"Token":"14"}` |
| [Moonriver](/kusama/2023-moonriver) | 69 | 1,183.22 $408.08 |   |    |   | $0.34 | `{"Token":"319623561105283008236062145480775032445"}` |
| [Khala](/kusama/2004-khala) | 10 | 25.92 $8.90 |   |    |   | $0.34 | `{"Token":"2"}` |
| [Shiden](/kusama/2007-shiden) | 4 | 0.1 $0.04 |   |    |   | $0.34 | `{"Token":"18446744073709551627"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "BNC" and date(ts) = "2023-03-03"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/BNC.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/BNC.json) | See [Definitions](/DEFINITIONS.md) for details
