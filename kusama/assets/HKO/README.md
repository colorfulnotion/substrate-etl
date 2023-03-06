# HKO on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-03


*XCM Interior Keys*:
* `[{"parachain":2085},{"generalKey":"0x484b4f"}]~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 24,311 | 999,999,835.29  | 143.79  | 634,683,073.12   | 633,587,111.16  |  | `{"Token":"HKO"}` |
| [Karura](/kusama/2000-karura) | 33 | 9,883.31  |   |    |   |  | `{"ForeignAsset":"4"}` |
| [Moonriver](/kusama/2023-moonriver) | 23 | 889.15  |   |    |   |  | `{"Token":"76100021443485661246318545281171740067"}` |
| [Khala](/kusama/2004-khala) | 8 | 21.38  |   |    |   |  | `{"Token":"7"}` |
| [Turing](/kusama/2114-turing) | 4 | 2.12  |   |    |   |  | `{"Token":"5"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "HKO" and date(ts) = "2023-03-03"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/HKO.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/HKO.json) | See [Definitions](/DEFINITIONS.md) for details
