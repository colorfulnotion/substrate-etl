# TKN0x00000004-TKN0x00000000 on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-02-26



| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Mangatax](/kusama/2110-mangatax) | 432 | 2,437,664.5  | 106,969,207.11  |    | 1,724,749.58  |  | `{"Token":"5"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "TKN0x00000004-TKN0x00000000" and date(ts) = "2023-02-26"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/TKN0x00000004-TKN0x00000000.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/TKN0x00000004-TKN0x00000000.json) | See [Definitions](/DEFINITIONS.md) for details
