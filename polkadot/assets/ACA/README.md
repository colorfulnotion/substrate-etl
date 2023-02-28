# ACA on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-02-26


*XCM Interior Keys*:
* `[{"parachain":2000},{"generalKey":"0x0000"}]~polkadot`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Acala](/polkadot/2000-acala) | 157,916 | 999,972,142.56 $146,898,494.85 | 27,855.45 $4,092.04 | 545,406,248.51  $80,121,588.97 | 545,273,980.42 $80,102,158.44 | $0.15 | `{"Token":"ACA"}` |
| [Parallel](/polkadot/2012-parallel) | 453 | 997,215.07 $146,493.47 |   |    |   | $0.15 | `{"Token":"108"}` |
| [Astar](/polkadot/2006-astar) | 325 | 188,275.63 $27,658.18 |   |    |   | $0.15 | `{"Token":"18446744073709551616"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 604 | 133,089.3 $19,551.16 |   |    |   | $0.15 | `{"Token":"224821240862170613278369189818311486111"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "ACA" and date(ts) = "2023-02-26"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/ACA.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/ACA.json) | See [Definitions](/DEFINITIONS.md) for details
