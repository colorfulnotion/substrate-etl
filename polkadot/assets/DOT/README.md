# DOT on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-15


*XCM Interior Keys*:
* `[{"network":"polkadot"},"here"]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Polkadot](/polkadot/0-polkadot) | 1,071,009 | 1,171,721,326.46 $6,900,915,843.56 | 121,307,790.17 $714,466,582.17 | 685,921,666.32  $4,039,787,028.75 | 679,646,986.8 $4,002,832,789.75 | $5.89 | `{"Token":"DOT"}` |
| [Acala](/polkadot/2000-acala) | 10,243 | 1,521,819.44 $8,963,074.67 |   |    |   | $5.89 | `{"Token":"DOT"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 7,551 | 1,296,505.37 $7,636,040.21 |   |    |   | $5.89 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Parallel](/polkadot/2012-parallel) | 8,833 | 1,158,988.04 $6,826,103.09 |   |    |   | $5.89 | `{"Token":"101"}` |
| [Astar](/polkadot/2006-astar) | 1,490 | 149,547.84 $880,793.38 |   |    |   | $5.89 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 520 | 135,579.09 $798,385.06 |   |    |   | $5.89 | `{"Token2":"0"}` |
| [HydraDX](/polkadot/2034-hydradx) | 1,580 | 117,333.84 $691,062.25 |   |    |   | $5.89 | `{"Token":"5"}` |
| [Statemint](/polkadot/1000-statemint) | 602 | 3,381.6 $19,913.24 | 7,909.55 $46,576.98 |    |   | $5.89 | `{"Token":"DOT"}` |
| [Interlay](/polkadot/2032-interlay) | 165 | 1,444.02 $8,504.86 | 623,791.99 $3,673,953.70 |    |   | $5.89 | `{"Token":"DOT"}` |
| [Collectives](/polkadot/1001-collectives) | 11 | 34.25 $201.68 | 0.4 $2.36 |    |   | $5.89 | `{"Token":"DOT"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "DOT" and date(ts) = "2023-03-15"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json) | See [Definitions](/DEFINITIONS.md) for details
