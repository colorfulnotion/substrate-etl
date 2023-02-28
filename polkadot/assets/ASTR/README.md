# ASTR on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-02-26


*XCM Interior Keys*:
* `{"parachain":2006}~polkadot`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Astar](/polkadot/2006-astar) | 515,158 | 7,633,877,449.98 $797,786,668.86 | 153,630,412.03 $16,055,313.36 | 4,075,336,529.98  $425,897,478.19 | 3,259,229,690.78 $340,609,345.00 | $0.10 | `{"Token":"ASTR"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 81 | 100,845.9 $10,539.01 |   |    |   | $0.10 | `{"Token":"224077081838586484055667086558292981199"}` |
| [Acala](/polkadot/2000-acala) | 103 | 44,293.72 $4,628.96 |   |    |   | $0.10 | `{"ForeignAsset":"2"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 13 | 169.25 $17.69 |   |    |   | $0.10 | `{"Token2":"3"}` |
| [Phala](/polkadot/2035-phala) | 11 | 105.33 $11.01 |   |    |   | $0.10 | `{"Token":"6"}` |
| [Clover](/polkadot/2002-clover) | 2 | 2.3 $0.24 |   |    |   | $0.10 | `{"Token":"12"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "ASTR" and date(ts) = "2023-02-26"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/ASTR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/ASTR.json) | See [Definitions](/DEFINITIONS.md) for details
