# MGX on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-13


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":2110},{"generalKey":"0x00000000"}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Mangatax](/kusama/2110-mangatax) | 1,664 | 1,383,702,888.32  | 33,161.98  |    | 299,313,262.79  |  | `{"Token":"0"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 2 | 10  |   |    |   |  | `{"Token2":"4"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "MGX" and date(ts) = "2023-03-13"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/MGX.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/MGX.json) | See [Definitions](/DEFINITIONS.md) for details
