# ASTR on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-11


*XCM Interior Keys*:
* `[{"network":"polkadot"},{"parachain":2006}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Astar](/polkadot/2006-astar) | 494,702 | 7,669,503,562.15 $419,725,921.93 | 140,831,422.03 $7,707,226.15 | 4,114,865,748.51  $225,192,648.51 | 3,303,681,391.72 $180,799,279.47 | $0.05 | `{"Token":"ASTR"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 155 | 1,488,288.89 $81,449.00 |   |    |   | $0.05 | `{"Token":"224077081838586484055667086558292981199"}` |
| [Acala](/polkadot/2000-acala) | 103 | 44,282.59 $2,423.44 |   |    |   | $0.05 | `{"ForeignAsset":"2"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 12 | 140.75 $7.70 |   |    |   | $0.05 | `{"Token2":"3"}` |
| [Phala](/polkadot/2035-phala) | 11 | 105.33 $5.76 |   |    |   | $0.05 | `{"Token":"6"}` |
| [Clover](/polkadot/2002-clover) | 2 | 2.3 $0.13 |   |    |   | $0.05 | `{"Token":"12"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "ASTR" and date(ts) = "2023-03-11"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/ASTR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/ASTR.json) | See [Definitions](/DEFINITIONS.md) for details
