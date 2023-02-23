# ACA substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io)

*Relay Chain*: polkadot


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Acala](/polkadot/2000-acala) | 157,758 | 999,972,162.78 $146,898,497.82 | 27,835.23 $4,089.07 | 546,703,863.6  $80,312,211.98 | 546,571,554.06 $80,292,775.37 | $0.15 | `{"Token":"ACA"}` |
| [Parallel](/polkadot/2012-parallel) | 454 | 997,708.58 $146,565.97 |   |    |   | $0.15 | `{"Token":"108"}` |
| [Astar](/polkadot/2006-astar) | 322 | 193,732.54 $28,459.81 |   |    |   | $0.15 | `{"Token":"18446744073709551616"}` |
## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "ACA" and date(ts) = "2023-02-22"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/ACA.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/ACA.json) | See [Definitions](/DEFINITIONS.md) for details
