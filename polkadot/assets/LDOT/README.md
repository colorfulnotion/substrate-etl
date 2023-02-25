# LDOT substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io)

*Relay Chain*: polkadot
*Report Date*: 2023-02-24
*XCM Interior Keys*:
* `[{"parachain":2000},{"generalKey":"0x0003"}]~polkadot`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Acala](/polkadot/2000-acala) | 2,785 | 19,083,823.95  |   |    |   |  | `{"Token":"LDOT"}` |
| [Parallel](/polkadot/2012-parallel) | 79 | 9,190.91  |   |    |   |  | `{"Token":"110"}` |
| [Astar](/polkadot/2006-astar) | 17 | 885.7  |   |    |   |  | `{"Token":"18446744073709551618"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "LDOT" and date(ts) = "2023-02-24"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/LDOT.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/LDOT.json) | See [Definitions](/DEFINITIONS.md) for details
