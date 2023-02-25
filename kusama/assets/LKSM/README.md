# LKSM substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io)

*Relay Chain*: kusama
*Report Date*: 2023-02-24
*XCM Interior Keys*:
* `[{"parachain":2000},{"generalKey":"0x0083"}]~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Karura](/kusama/2000-karura) | 4,958 | 1,586,274.47 $9,127,540.71 |   |    |   | $5.75 | `{"Token":"LKSM"}` |
| [Kintsugi](/kusama/2092-kintsugi) | 29 | 27,154.02 $156,246.25 | 35,032.22 $201,577.96 |    |   | $5.75 | `{"ForeignAsset":"2"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 27 | 30.73 $176.84 |   |    |   | $5.75 | `{"Token":"109"}` |
| [Turing](/kusama/2114-turing) | 3 | 2.7 $15.53 |   |    |   | $5.75 | `{"Token":"4"}` |
| [Shiden](/kusama/2007-shiden) | 3 | 2.2 $12.65 |   |    |   | $5.75 | `{"Token":"18446744073709551619"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "LKSM" and date(ts) = "2023-02-24"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/LKSM.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/LKSM.json) | See [Definitions](/DEFINITIONS.md) for details
