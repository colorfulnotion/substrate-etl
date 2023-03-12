# NODL on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-11



| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Nodle](/polkadot/2026-nodle) | 723,903 | 8,435,643,803.51 $6,210,995.33 | 245,577.1 $102.47 | 5,772,121,646.37  $1,294,013.21 | 5,772,121,646.37 $1,294,013.21 | - | `{"Token":"NODL"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "NODL" and date(ts) = "2023-03-11"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/NODL.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/NODL.json) | See [Definitions](/DEFINITIONS.md) for details
