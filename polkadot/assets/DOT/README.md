# DOT on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-09


*XCM Interior Keys*:
* `[{"network":"polkadot"},"here"]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Polkadot](/polkadot/0-polkadot) | 1,076,921 | 1,169,689,489.4 $6,248,821,155.77 | 121,304,145 $647,226,047.82 | 682,719,301.21  $3,648,155,812.34 | 676,424,535.47 $3,614,529,740.46 | $5.34 | `{"Token":"DOT"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 7,524 | 1,547,243.86 $8,277,394.21 |   |    |   | $5.35 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Acala](/polkadot/2000-acala) | 10,219 | 1,534,704.53 $8,210,311.70 |   |    |   | $5.35 | `{"Token":"DOT"}` |
| [Parallel](/polkadot/2012-parallel) | 8,860 | 1,190,532.26 $6,369,070.23 |   |    |   | $5.35 | `{"Token":"101"}` |
| [Astar](/polkadot/2006-astar) | 1,475 | 148,372.95 $793,760.71 |   |    |   | $5.35 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 471 | 125,528.77 $671,549.67 | 509.63 $2,726.38 |    |   | $5.35 | `{"Token2":"0"}` |
| [HydraDX](/polkadot/2034-hydradx) | 1,547 | 113,112.78 $605,127.00 |   |    |   | $5.35 | `{"Token":"5"}` |
| [Interlay](/polkadot/2032-interlay) | 163 | 41,436.33 $221,674.70 | 632,344.81 $3,382,897.41 |    |   | $5.35 | `{"Token":"DOT"}` |
| [Statemint](/polkadot/1000-statemint) | 583 | 3,375.03 $18,055.60 | 7,909.55 $42,314.24 |    |   | $5.35 | `{"Token":"DOT"}` |
| [Collectives](/polkadot/1001-collectives) | 11 | 34.25 $183.22 | 0.4 $2.15 |    |   | $5.35 | `{"Token":"DOT"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "DOT" and date(ts) = "2023-03-09"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json) | See [Definitions](/DEFINITIONS.md) for details
