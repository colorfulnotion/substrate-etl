# DOT on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-02-27


*XCM Interior Keys*:
* `here~polkadot`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Polkadot](/polkadot/0-polkadot) | 1,072,095 | 1,166,746,736.56 $7,689,058,816.49 | 121,174,486.47 $798,560,411.01 | 680,818,920.22  $4,486,712,117.48 | 674,598,511.56 $4,445,718,569.77 | $6.59 | `{"Token":"DOT"}` |
| [Parallel](/polkadot/2012-parallel) | 8,803 | 849,652.73 $5,599,355.58 |   |    |   | $6.59 | `{"Token":"101"}` |
| [Astar](/polkadot/2006-astar) | 1,447 | 153,578.77 $1,012,110.11 |   |    |   | $6.59 | `{"Token":"340282366920938463463374607431768211455"}` |
| [HydraDX](/polkadot/2034-hydradx) | 1,483 | 108,555.32 $714,573.58 |   |    |   | $6.58 | `{"Token":"5"}` |
| [Interlay](/polkadot/2032-interlay) | 159 | 41,596.57 $274,128.48 | 630,385.87 $4,154,349.78 |    |   | $6.59 | `{"Token":"DOT"}` |
| [Statemint](/polkadot/1000-statemint) | 597 | 3,346.38 $22,027.82 | 7,898.85 $51,994.75 |    |   | $6.58 | `{"Token":"DOT"}` |
| [Collectives](/polkadot/1001-collectives) | 19 | 34.25 $225.70 | 0.4 $2.65 |    |   | $6.59 | `{"Token":"DOT"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "DOT" and date(ts) = "2023-02-27"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json) | See [Definitions](/DEFINITIONS.md) for details
