# LIT on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-02-28


*XCM Interior Keys*:
* `[{"parachain":2106},{"palletInstance":10}]~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Litmus](/kusama/2106-litmus) | 13,914 | 491,749.86 $582,774.43 | 0.8 $0.95 | 336,007.41  $398,203.52 |   | $1.19 | `{"Token":"LIT"}` |
| [Moonriver](/kusama/2023-moonriver) | 22 | 875.1 $1,041.89 |   |    |   | $1.19 | `{"Token":"65216491554813189869575508812319036608"}` |
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
 where symbol = "LIT" and date(ts) = "2023-02-28"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/LIT.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/LIT.json) | See [Definitions](/DEFINITIONS.md) for details
