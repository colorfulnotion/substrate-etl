# ASTR on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-06


*XCM Interior Keys*:
* `[{"network":"polkadot"},{"parachain":2006}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Astar](/polkadot/2006-astar) | 493,801 | 7,648,231,664.13 $519,175,245.96 | 153,631,412.03 $10,428,767.02 | 4,083,082,290.25  $277,166,715.84 | 3,271,376,954.89 $222,066,748.21 | $0.07 | `{"Token":"ASTR"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 144 | 1,210,296.6 $82,157.03 |   |    |   | $0.07 | `{"Token":"224077081838586484055667086558292981199"}` |
| [Acala](/polkadot/2000-acala) | 102 | 44,292.59 $3,006.66 |   |    |   | $0.07 | `{"ForeignAsset":"2"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 12 | 140.75 $9.55 |   |    |   | $0.07 | `{"Token2":"3"}` |
| [Phala](/polkadot/2035-phala) | 11 | 105.33 $7.15 |   |    |   | $0.07 | `{"Token":"6"}` |
| [Clover](/polkadot/2002-clover) | 2 | 2.3 $0.16 |   |    |   | $0.07 | `{"Token":"12"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "ASTR" and date(ts) = "2023-03-06"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/ASTR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/ASTR.json) | See [Definitions](/DEFINITIONS.md) for details
