# LIT on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-18


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":2106},{"palletInstance":10}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Litmus](/kusama/2106-litmus) | 13,912 | 492,086.9 $586,002.38 | 0.77 $0.92 | 335,729.07  $399,803.44 |   | $1.19 | `{"Token":"LIT"}` |
| [Moonriver](/kusama/2023-moonriver) | 24 | 931.16 $1,107.85 |   |    |   | $1.19 | `{"Token":"65216491554813189869575508812319036608"}` |
| [Karura](/kusama/2000-karura) | 2 | 1 $1.19 |   |    |   | $1.19 | `{"ForeignAsset":"20"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "LIT" and date(ts) = "2023-03-18"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/LIT.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/LIT.json) | See [Definitions](/DEFINITIONS.md) for details
