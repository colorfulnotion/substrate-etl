# BNC on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-05


*XCM Interior Keys*:
* `[{"parachain":2030},{"generalKey":"0x0001"}]~polkadot`
* `[{"parachain":2030},{"generalKey":"0x0104"}]~polkadot`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 3,863 | 14,600,925.08  | 65,399,074.46  | 4,142,960.74   |   |  | `{"Token":"BNC"}` |
| [Astar](/polkadot/2006-astar) | 106 | 241,781.3  |   |    |   |  | `{"Token":"18446744073709551623"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 19 | 592.42  |   |    |   |  | `{"Token":"165823357460190568952172802245839421906"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "BNC" and date(ts) = "2023-03-05"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/BNC.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/BNC.json) | See [Definitions](/DEFINITIONS.md) for details
