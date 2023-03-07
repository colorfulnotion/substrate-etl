# NEER on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-05


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":2096},{"generalKey":"0x000000000000000000"}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Bit.Country Pioneer](/kusama/2096-bitcountrypioneer) | 24,878 | 94,468,895.33 $20,393,444.69 | 5,531,017.49 $1,194,006.76 | 73,641,437.53  $15,897,323.43 |   | $0.22 | `{"Token":"NEER"}` |
| [Karura](/kusama/2000-karura) | 13 | 22.58 $4.88 |   |    |   | $0.22 | `{"ForeignAsset":"9"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "NEER" and date(ts) = "2023-03-05"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/NEER.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/NEER.json) | See [Definitions](/DEFINITIONS.md) for details
