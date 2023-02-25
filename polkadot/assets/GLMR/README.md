# GLMR substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io)

*Relay Chain*: polkadot
*Report Date*: 2023-02-24
*XCM Interior Keys*:
* `[{"parachain":2004},{"palletInstance":10}]~polkadot`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Moonbeam](/polkadot/2004-moonbeam) | 2,700,318 | 1,055,108,824.7 $528,736,668.24 | 1,908,131.75 $956,203.95 | 277,302,814.23  $138,962,126.62 | 275,173,623.43 $137,895,145.44 | $0.50 | `{"Token":"GLMR"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 188 | 405,331.43 $203,119.89 |   |    |   | $0.50 | `{"Token2":"1"}` |
| [Parallel](/polkadot/2012-parallel) | 607 | 124,874.54 $62,577.19 |   |    |   | $0.50 | `{"Token":"114"}` |
| [Astar](/polkadot/2006-astar) | 237 | 25,805.38 $12,931.60 |   |    |   | $0.50 | `{"Token":"18446744073709551619"}` |
| [Acala](/polkadot/2000-acala) | 579 | 22,016.65 $11,032.99 |   |    |   | $0.50 | `{"ForeignAsset":"0"}` |
| [Phala](/polkadot/2035-phala) | 11 | 36.57 $18.33 |   |    |   | $0.50 | `{"Token":"1"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "GLMR" and date(ts) = "2023-02-24"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json) | See [Definitions](/DEFINITIONS.md) for details
