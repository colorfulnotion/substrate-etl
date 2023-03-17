# TNKR on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-16


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":2125},{"generalIndex":0}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [InvArch Tinkernet](/kusama/2125-tinkernet) | 7,764 | 11,669,920.51  | 30,075  | 1,996,582.3   | 1,996,582.3  |  | `{"Token":"TNKR"}` |
| [Basilisk](/kusama/2090-basilisk) | 1,668 | 1,000,090.46  |   |    |   |  | `{"Token":"6"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "TNKR" and date(ts) = "2023-03-16"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/TNKR.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/TNKR.json) | See [Definitions](/DEFINITIONS.md) for details
