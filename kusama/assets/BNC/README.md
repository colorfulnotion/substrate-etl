# BNC on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-02-28


*XCM Interior Keys*:
* `[{"parachain":2001},{"generalKey":"0x0001"}]~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 101,464 | 41,797,890.1 $15,672,561.18 | 38,965,843.23 $14,610,655.24 | 23,542,485.76  $8,827,504.15 | 7,837,041.74 $2,938,581.73 | $0.37 | `{"Token":"BNC"}` |
| [Karura](/kusama/2000-karura) | 1,176 | 858,726.14 $321,988.45 |   |    |   | $0.37 | `{"Token":"BNC"}` |
| [Mangatax](/kusama/2110-mangatax) | 152 | 77,194.21 $28,944.79 |   |    |   | $0.37 | `{"Token":"14"}` |
| [Moonriver](/kusama/2023-moonriver) | 69 | 1,172.22 $439.53 |   |    |   | $0.37 | `{"Token":"319623561105283008236062145480775032445"}` |
| [Khala](/kusama/2004-khala) | 10 | 25.92 $9.72 |   |    |   | $0.37 | `{"Token":"2"}` |
| [Shiden](/kusama/2007-shiden) | 4 | 0.1 $0.04 |   |    |   | $0.37 | `{"Token":"18446744073709551627"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "BNC" and date(ts) = "2023-02-28"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/BNC.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/BNC.json) | See [Definitions](/DEFINITIONS.md) for details
