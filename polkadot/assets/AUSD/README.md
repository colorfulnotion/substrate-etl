# AUSD on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-12


*XCM Interior Keys*:
* `[{"network":"polkadot"},{"parachain":2000},{"generalKey":"0x0001"}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Acala](/polkadot/2000-acala) | 7,599 | 10,429,584.31 $10,429,584.31 |   |    | 3,734,615.59 $3,734,615.59 | $1.00 | `{"Token":"AUSD"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 620 | 1,438,182.43 $1,050,177.85 |   |    |   | $0.73 | `{"Token":"110021739665376159354538090254163045594"}` |
| [Astar](/polkadot/2006-astar) | 299 | 102,819.88 $102,819.88 |   |    |   | $1.00 | `{"Token":"18446744073709551617"}` |
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
 where symbol = "AUSD" and date(ts) = "2023-03-12"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/AUSD.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/AUSD.json) | See [Definitions](/DEFINITIONS.md) for details
