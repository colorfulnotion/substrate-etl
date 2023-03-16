# BNC on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-07


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":2001},{"generalKey":"0x0001"}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 84,445 | 41,797,983.92 $11,780,751.99 | 38,965,749.41 $10,982,487.36 | 23,596,819.86  $6,650,758.16 | 7,895,380.59 $2,225,311.17 | $0.28 | `{"Token":"BNC"}` |
| [Karura](/kusama/2000-karura) | 1,176 | 868,697.9 $245,387.19 |   |    |   | $0.28 | `{"Token":"BNC"}` |
| [Mangatax](/kusama/2110-mangatax) | 157 | 83,956.72 $23,715.84 |   |    |   | $0.28 | `{"Token":"14"}` |
| [Moonriver](/kusama/2023-moonriver) | 69 | 1,183.22 $334.23 |   |    |   | $0.28 | `{"Token":"319623561105283008236062145480775032445"}` |
| [Khala](/kusama/2004-khala) | 10 | 25.92 $7.32 |   |    |   | $0.28 | `{"Token":"2"}` |
| [Shiden](/kusama/2007-shiden) | 4 | 0.1 $0.03 |   |    |   | $0.28 | `{"Token":"18446744073709551627"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "BNC" and date(ts) = "2023-03-07"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/BNC.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/BNC.json) | See [Definitions](/DEFINITIONS.md) for details
