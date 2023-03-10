# LP-DOT/cDOT-6/13 on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-08



| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Parallel](/polkadot/2012-parallel) | 102 | 322.94  |   |    |   |  | `{"Token":"6004"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "LP-DOT/cDOT-6/13" and date(ts) = "2023-03-08"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/LP-DOT%252FcDOT-6%252F13.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/LP-DOT%252FcDOT-6%252F13.json) | See [Definitions](/DEFINITIONS.md) for details
