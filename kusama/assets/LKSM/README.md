# LKSM on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-12


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":2000},{"generalKey":"0x0083"}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Karura](/kusama/2000-karura) | 4,962 | 1,577,790.45 $5,786,944.37 |   |    |   | $3.67 | `{"Token":"LKSM"}` |
| [Kintsugi](/kusama/2092-kintsugi) | 32 | 27,070.68 $99,288.55 | 33,926.83 $124,435.22 |    |   | $3.67 | `{"ForeignAsset":"2"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 29 | 117.44 $430.76 |   |    |   | $3.67 | `{"Token":"109"}` |
| [Turing](/kusama/2114-turing) | 3 | 2.7 $9.90 |   |    |   | $3.67 | `{"Token":"4"}` |
| [Shiden](/kusama/2007-shiden) | 3 | 2.2 $8.07 |   |    |   | $3.67 | `{"Token":"18446744073709551619"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "LKSM" and date(ts) = "2023-03-12"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/LKSM.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/LKSM.json) | See [Definitions](/DEFINITIONS.md) for details
