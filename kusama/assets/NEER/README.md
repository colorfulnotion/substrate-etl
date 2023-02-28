# NEER on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-02-26


*XCM Interior Keys*:
* `[{"parachain":2096},{"generalKey":"0x000000000000000000"}]~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Bit.Country Pioneer](/kusama/2096-bitcountrypioneer) | 24,874 | 94,461,048.48 $20,645,181.64 | 5,538,864.64 $1,210,561.06 | 73,650,758.91  $16,096,934.34 |   | $0.22 | `{"Token":"NEER"}` |
| [Karura](/kusama/2000-karura) | 13 | 11.29 $2.47 |   |    |   | $0.22 | `{"ForeignAsset":"9"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "NEER" and date(ts) = "2023-02-26"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/NEER.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/NEER.json) | See [Definitions](/DEFINITIONS.md) for details
