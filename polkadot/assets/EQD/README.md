# EQD substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io)

*Relay Chain*: polkadot
*Report Date*: 2023-02-24
*XCM Interior Keys*:
* `[{"parachain":2011},{"generalKey":"0x657164"}]~polkadot`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Moonbeam](/polkadot/2004-moonbeam) | 6 | 136.82  |   |    |   |  | `{"Token":"187224307232923873519830480073807488153"}` |
| [Astar](/polkadot/2006-astar) | 3 | 2.9  |   |    |   |  | `{"Token":"18446744073709551629"}` |
| [Acala](/polkadot/2000-acala) | 2 | 5  |   |    |   |  | `{"ForeignAsset":"8"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "EQD" and date(ts) = "2023-02-24"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/EQD.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/EQD.json) | See [Definitions](/DEFINITIONS.md) for details
