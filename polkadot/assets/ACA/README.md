# ACA substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io)

*Relay Chain*: polkadot
*Report Date*: 2023-02-24
*XCM Interior Keys*:
* `[{"parachain":2000},{"generalKey":"0x0000"}]~polkadot`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Acala](/polkadot/2000-acala) | 157,828 | 999,972,142.75 $146,898,494.87 | 27,855.26 $4,092.01 | 545,458,764.41  $80,129,303.69 | 545,326,404.21 $80,109,859.63 | $0.15 | `{"Token":"ACA"}` |
| [Parallel](/polkadot/2012-parallel) | 453 | 992,192.27 $145,755.61 |   |    |   | $0.15 | `{"Token":"108"}` |
| [Astar](/polkadot/2006-astar) | 321 | 189,408.18 $27,824.55 |   |    |   | $0.15 | `{"Token":"18446744073709551616"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 607 | 133,849.45 $19,662.83 |   |    |   | $0.15 | `{"Token":"224821240862170613278369189818311486111"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "ACA" and date(ts) = "2023-02-24"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/ACA.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/ACA.json) | See [Definitions](/DEFINITIONS.md) for details
