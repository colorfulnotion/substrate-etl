# PCHU on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-18


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":2102},{"generalKey":"0x50434855"}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Pichiu](/kusama/2102-pichiu) | 1,144 | 99,999,989.99  | 10  | 7,199,345.77   |   |  | `{"Token":"PCHU"}` |
| [Karura](/kusama/2000-karura) | 14 | 22,212.12  |   |    |   |  | `{"ForeignAsset":"17"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "PCHU" and date(ts) = "2023-03-18"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/PCHU.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/PCHU.json) | See [Definitions](/DEFINITIONS.md) for details
