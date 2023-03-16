# ASTR on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-07


*XCM Interior Keys*:
* `[{"network":"polkadot"},{"parachain":2006}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Astar](/polkadot/2006-astar) | 493,927 | 7,650,030,680.28 $493,651,074.28 | 153,631,412.03 $9,913,726.46 | 4,085,191,764.69  $263,614,537.97 | 3,273,515,922.3 $211,237,669.40 | $0.06 | `{"Token":"ASTR"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 146 | 1,264,480 $81,596.00 |   |    |   | $0.06 | `{"Token":"224077081838586484055667086558292981199"}` |
| [Acala](/polkadot/2000-acala) | 102 | 44,272.59 $2,856.88 |   |    |   | $0.06 | `{"ForeignAsset":"2"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 12 | 140.75 $9.08 |   |    |   | $0.06 | `{"Token2":"3"}` |
| [Phala](/polkadot/2035-phala) | 11 | 105.33 $6.80 |   |    |   | $0.06 | `{"Token":"6"}` |
| [Clover](/polkadot/2002-clover) | 2 | 2.3 $0.15 |   |    |   | $0.06 | `{"Token":"12"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "ASTR" and date(ts) = "2023-03-07"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/ASTR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/ASTR.json) | See [Definitions](/DEFINITIONS.md) for details
