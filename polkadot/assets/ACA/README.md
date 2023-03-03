# ACA on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-01


*XCM Interior Keys*:
* `[{"parachain":2000},{"generalKey":"0x0000"}]~polkadot`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Acala](/polkadot/2000-acala) | 158,002 | 999,969,111.63 $147,864,884.53 | 30,886.38 $4,567.15 | 544,245,538.64  $80,477,289.54 | 544,112,741.88 $80,457,652.96 | $0.15 | `{"Token":"ACA"}` |
| [Parallel](/polkadot/2012-parallel) | 455 | 1,036,693.25 $153,295.26 |   |    |   | $0.15 | `{"Token":"108"}` |
| [Astar](/polkadot/2006-astar) | 327 | 188,908.33 $27,933.77 |   |    |   | $0.15 | `{"Token":"18446744073709551616"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 604 | 129,419.71 $19,137.22 |   |    |   | $0.15 | `{"Token":"224821240862170613278369189818311486111"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "ACA" and date(ts) = "2023-03-01"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/ACA.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/ACA.json) | See [Definitions](/DEFINITIONS.md) for details
