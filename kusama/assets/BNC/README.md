# BNC on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-02-26


*XCM Interior Keys*:
* `[{"parachain":2001},{"generalKey":"0x0001"}]~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 101,456 | 41,797,690.1 $17,384,247.41 | 38,966,043.23 $16,206,525.63 | 23,503,609.6  $9,775,481.93 | 7,797,944.79 $3,243,274.96 | $0.42 | `{"Token":"BNC"}` |
| [Karura](/kusama/2000-karura) | 1,176 | 868,444.88 $361,198.44 |   |    |   | $0.42 | `{"Token":"BNC"}` |
| [Mangatax](/kusama/2110-mangatax) | 149 | 79,778.33 $33,180.93 |   |    |   | $0.42 | `{"Token":"14"}` |
| [Moonriver](/kusama/2023-moonriver) | 69 | 1,171.9 $487.41 |   |    |   | $0.42 | `{"Token":"319623561105283008236062145480775032445"}` |
| [Khala](/kusama/2004-khala) | 10 | 25.92 $10.78 |   |    |   | $0.42 | `{"Token":"2"}` |
| [Shiden](/kusama/2007-shiden) | 4 | 0.1 $0.04 |   |    |   | $0.42 | `{"Token":"18446744073709551627"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "BNC" and date(ts) = "2023-02-26"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/BNC.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/BNC.json) | See [Definitions](/DEFINITIONS.md) for details
