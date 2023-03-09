# ACA on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-06


*XCM Interior Keys*:
* `[{"network":"polkadot"},{"parachain":2000},{"generalKey":"0x0000"}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Acala](/polkadot/2000-acala) | 156,598 | 999,969,103.24 $119,414,940.00 | 30,894.76 $3,689.41 | 494,246,797.18  $59,022,275.23 | 494,116,759.82 $59,006,746.34 | $0.12 | `{"Token":"ACA"}` |
| [Parallel](/polkadot/2012-parallel) | 456 | 1,042,795.79 $124,529.24 |   |    |   | $0.12 | `{"Token":"108"}` |
| [Astar](/polkadot/2006-astar) | 326 | 187,776.71 $22,424.04 |   |    |   | $0.12 | `{"Token":"18446744073709551616"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 606 | 134,599.93 $16,073.74 |   |    |   | $0.12 | `{"Token":"224821240862170613278369189818311486111"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "ACA" and date(ts) = "2023-03-06"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/ACA.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/ACA.json) | See [Definitions](/DEFINITIONS.md) for details
