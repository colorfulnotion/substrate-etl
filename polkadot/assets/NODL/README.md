# NODL on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-02-26



| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Nodle](/polkadot/2026-nodle) | 709,270 | 8,433,701,919.42 $13,474,616.32 | 194,405.28 $222.54 | 5,738,805,571.52  $8,293,439.71 | 5,738,805,571.52 $8,293,439.71 | $0.00141 | `{"Token":"NODL"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "NODL" and date(ts) = "2023-02-26"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/NODL.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/NODL.json) | See [Definitions](/DEFINITIONS.md) for details
