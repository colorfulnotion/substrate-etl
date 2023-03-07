# vsBOND-DOT-2004-6-13 on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-06



| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 284 | 70,814.63  |   |    |   |  | `{"VSBond2":["0","2,004","6","13"]}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "vsBOND-DOT-2004-6-13" and date(ts) = "2023-03-06"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/vsBOND-DOT-2004-6-13.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/vsBOND-DOT-2004-6-13.json) | See [Definitions](/DEFINITIONS.md) for details
