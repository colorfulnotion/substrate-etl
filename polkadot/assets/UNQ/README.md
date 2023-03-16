# UNQ on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-07


*XCM Interior Keys*:
* `[{"network":"polkadot"},{"parachain":2037}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Unique](/polkadot/2037-unique) | 23,869 | 1,041,977,864.95  | 2  | 855,755,248.16   | 855,755,248.16  |  | `{"Token":"UNQ"}` |
| [Acala](/polkadot/2000-acala) | 2 | 4.9  |   |    |   |  | `{"ForeignAsset":"10"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "UNQ" and date(ts) = "2023-03-07"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/UNQ.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/UNQ.json) | See [Definitions](/DEFINITIONS.md) for details
