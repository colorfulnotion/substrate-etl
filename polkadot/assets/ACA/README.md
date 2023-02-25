# ACA substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io)

*Relay Chain*: polkadot


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Acala](/polkadot/2000-acala) | 157,795 | 999,972,147.33 $146,898,495.55 | 27,850.68 $4,091.34 | 546,624,604  $80,300,568.54 | 546,492,277.06 $80,281,129.37 | $0.15 | `{"Token":"ACA"}` |
| [Parallel](/polkadot/2012-parallel) | 452 | 994,450.24 $146,087.31 |   |    |   | $0.15 | `{"Token":"108"}` |
| [Astar](/polkadot/2006-astar) | 323 | 191,996.13 $28,204.73 |   |    |   | $0.15 | `{"Token":"18446744073709551616"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 606 | 133,829.45 $19,659.89 |   |    |   | $0.15 | `{"Token":"224821240862170613278369189818311486111"}` |
## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "ACA" and date(ts) = "2023-02-23"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/ACA.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/ACA.json) | See [Definitions](/DEFINITIONS.md) for details
