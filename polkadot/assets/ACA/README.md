# ACA on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-02-28


*XCM Interior Keys*:
* `[{"parachain":2000},{"generalKey":"0x0000"}]~polkadot`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Acala](/polkadot/2000-acala) | 157,961 | 999,969,103.66 $130,465,620.69 | 30,894.35 $4,030.78 | 544,321,052.14  $71,017,378.10 | 544,188,276.26 $71,000,054.88 | $0.13 | `{"Token":"ACA"}` |
| [Parallel](/polkadot/2012-parallel) | 454 | 993,573.93 $129,631.24 |   |    |   | $0.13 | `{"Token":"108"}` |
| [Astar](/polkadot/2006-astar) | 326 | 189,198.13 $24,684.61 |   |    |   | $0.13 | `{"Token":"18446744073709551616"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 605 | 144,621.46 $18,868.71 |   |    |   | $0.13 | `{"Token":"224821240862170613278369189818311486111"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "ACA" and date(ts) = "2023-02-28"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/ACA.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/ACA.json) | See [Definitions](/DEFINITIONS.md) for details
