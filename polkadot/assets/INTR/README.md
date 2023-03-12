# INTR on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-11


*XCM Interior Keys*:
* `[{"network":"polkadot"},{"parachain":2032},{"generalKey":"0x0002"}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Interlay](/polkadot/2032-interlay) | 11,402 | 999,998,488.6 $24,732,335.73 | 1,377.54 $34.07 |    | 72,252,850.46 $1,786,984.46 | $0.02 | `{"Token":"INTR"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 374 | 2,756,690.5 $68,179.50 |   |    |   | $0.02 | `{"Token":"101170542313601871197860408087030232491"}` |
| [Acala](/polkadot/2000-acala) | 409 | 1,217,257.32 $30,105.66 |   |    |   | $0.02 | `{"ForeignAsset":"4"}` |
| [Parallel](/polkadot/2012-parallel) | 220 | 256,100.33 $6,333.97 |   |    |   | $0.02 | `{"Token":"120"}` |
| [Astar](/polkadot/2006-astar) | 67 | 175,677.12 $4,344.91 |   |    |   | $0.02 | `{"Token":"18446744073709551621"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "INTR" and date(ts) = "2023-03-11"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/INTR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/INTR.json) | See [Definitions](/DEFINITIONS.md) for details
