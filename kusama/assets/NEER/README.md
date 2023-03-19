# NEER on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-18


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":2096},{"generalKey":"0x000000000000000000"}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Bit.Country Pioneer](/kusama/2096-bitcountrypioneer) | 24,785 | 94,399,664.24 $17,747,735.35 | 5,600,247.19 $1,052,881.98 | 73,558,958.38  $13,829,550.53 |   | $0.19 | `{"Token":"NEER"}` |
| [Karura](/kusama/2000-karura) | 13 | 11.49 $2.16 |   |    |   | $0.19 | `{"ForeignAsset":"9"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "NEER" and date(ts) = "2023-03-18"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/NEER.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/NEER.json) | See [Definitions](/DEFINITIONS.md) for details
