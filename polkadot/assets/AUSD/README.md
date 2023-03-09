# AUSD on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-06


*XCM Interior Keys*:
* `[{"network":"polkadot"},{"parachain":2000},{"generalKey":"0x0001"}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Acala](/polkadot/2000-acala) | 7,610 | 10,454,740.98 $10,454,740.98 |   |    | 3,734,615.59 $3,734,615.59 | $1.00 | `{"Token":"AUSD"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 609 | 1,588,315.13 $1,248,894.14 |   |    |   | $0.79 | `{"Token":"110021739665376159354538090254163045594"}` |
| [Astar](/polkadot/2006-astar) | 301 | 102,959.02 $102,959.02 |   |    |   | $1.00 | `{"Token":"18446744073709551617"}` |
| [Parallel](/polkadot/2012-parallel) | 5 | 7.3 $7.30 |   |    |   | $1.00 | `{"Token":"104"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "AUSD" and date(ts) = "2023-03-06"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/AUSD.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/AUSD.json) | See [Definitions](/DEFINITIONS.md) for details
