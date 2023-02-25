# INTR substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io)

*Relay Chain*: polkadot
*Report Date*: 2023-02-24
*XCM Interior Keys*:
* `[{"parachain":2032},{"generalKey":"0x0002"}]~polkadot`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Interlay](/polkadot/2032-interlay) | 11,310 | 999,998,641.69 $36,752,730.66 | 1,324.43 $48.68 |    | 70,486,141.67 $2,590,561.70 | $0.04 | `{"Token":"INTR"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 363 | 2,654,259.79 $97,551.43 |   |    |   | $0.04 | `{"Token":"101170542313601871197860408087030232491"}` |
| [Acala](/polkadot/2000-acala) | 403 | 1,207,448.64 $44,377.09 |   |    |   | $0.04 | `{"ForeignAsset":"4"}` |
| [Parallel](/polkadot/2012-parallel) | 219 | 260,496.28 $9,573.96 |   |    |   | $0.04 | `{"Token":"120"}` |
| [Astar](/polkadot/2006-astar) | 68 | 176,806.29 $6,498.12 |   |    |   | $0.04 | `{"Token":"18446744073709551621"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "INTR" and date(ts) = "2023-02-24"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/INTR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/INTR.json) | See [Definitions](/DEFINITIONS.md) for details
