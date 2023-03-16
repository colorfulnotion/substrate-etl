# INTR on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-07


*XCM Interior Keys*:
* `[{"network":"polkadot"},{"parachain":2032},{"generalKey":"0x0002"}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Interlay](/polkadot/2032-interlay) | 11,371 | 999,998,508.86 $30,566,670.35 | 1,357.29 $41.49 |    | 70,762,089.14 $2,162,964.68 | $0.03 | `{"Token":"INTR"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 367 | 2,597,145.18 $79,431.68 |   |    |   | $0.03 | `{"Token":"101170542313601871197860408087030232491"}` |
| [Acala](/polkadot/2000-acala) | 409 | 1,210,810.98 $37,031.72 |   |    |   | $0.03 | `{"ForeignAsset":"4"}` |
| [Parallel](/polkadot/2012-parallel) | 219 | 250,864.94 $7,672.51 |   |    |   | $0.03 | `{"Token":"120"}` |
| [Astar](/polkadot/2006-astar) | 71 | 174,123.71 $5,325.44 |   |    |   | $0.03 | `{"Token":"18446744073709551621"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "INTR" and date(ts) = "2023-03-07"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/INTR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/INTR.json) | See [Definitions](/DEFINITIONS.md) for details
