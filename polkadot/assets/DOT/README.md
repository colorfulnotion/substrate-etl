# DOT on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-02-28


*XCM Interior Keys*:
* `here~polkadot`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Polkadot](/polkadot/0-polkadot) | 1,072,618 | 1,166,872,470.3 $7,424,284,470.50 | 121,412,924.55 $772,495,806.67 | 681,989,134.22  $4,339,189,986.14 | 675,773,207.89 $4,299,640,843.90 | $6.36 | `{"Token":"DOT"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 7,537 | 2,041,987.97 $12,992,250.60 |   |    |   | $6.36 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Acala](/polkadot/2000-acala) | 10,178 | 1,546,567.9 $9,840,115.61 |   |    |   | $6.36 | `{"Token":"DOT"}` |
| [Parallel](/polkadot/2012-parallel) | 8,816 | 851,449.39 $5,417,389.34 |   |    |   | $6.36 | `{"Token":"101"}` |
| [Astar](/polkadot/2006-astar) | 1,450 | 151,862.22 $966,230.94 |   |    |   | $6.36 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 457 | 123,734.64 $787,267.86 |   |    |   | $6.36 | `{"Token2":"0"}` |
| [HydraDX](/polkadot/2034-hydradx) | 1,487 | 109,861.74 $697,363.10 |   |    |   | $6.35 | `{"Token":"5"}` |
| [Interlay](/polkadot/2032-interlay) | 159 | 41,596.57 $264,660.29 | 630,379.87 $4,010,823.47 |    |   | $6.36 | `{"Token":"DOT"}` |
| [Statemint](/polkadot/1000-statemint) | 601 | 3,350.18 $21,315.71 | 7,899.05 $50,258.08 |    |   | $6.36 | `{"Token":"DOT"}` |
| [Collectives](/polkadot/1001-collectives) | 20 | 34.25 $217.40 | 0.4 $2.55 |    |   | $6.35 | `{"Token":"DOT"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "DOT" and date(ts) = "2023-02-28"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json) | See [Definitions](/DEFINITIONS.md) for details
