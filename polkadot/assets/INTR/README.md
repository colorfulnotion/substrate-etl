# INTR on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-02-26


*XCM Interior Keys*:
* `[{"parachain":2032},{"generalKey":"0x0002"}]~polkadot`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Interlay](/polkadot/2032-interlay) | 11,328 | 999,998,649.35 $36,752,730.94 | 1,316.77 $48.39 |    | 70,649,161.9 $2,596,553.15 | $0.04 | `{"Token":"INTR"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 357 | 2,674,043.29 $98,278.53 |   |    |   | $0.04 | `{"Token":"101170542313601871197860408087030232491"}` |
| [Acala](/polkadot/2000-acala) | 408 | 1,221,224.13 $44,883.38 |   |    |   | $0.04 | `{"ForeignAsset":"4"}` |
| [Parallel](/polkadot/2012-parallel) | 222 | 274,797.27 $10,099.56 |   |    |   | $0.04 | `{"Token":"120"}` |
| [Astar](/polkadot/2006-astar) | 70 | 197,642.25 $7,263.90 |   |    |   | $0.04 | `{"Token":"18446744073709551621"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "INTR" and date(ts) = "2023-02-26"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/INTR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/INTR.json) | See [Definitions](/DEFINITIONS.md) for details
