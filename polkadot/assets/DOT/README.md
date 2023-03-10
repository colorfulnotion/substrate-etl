# DOT on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-08


*XCM Interior Keys*:
* `[{"network":"polkadot"},"here"]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Polkadot](/polkadot/0-polkadot) | 1,076,113 | 1,169,333,856.65 $6,556,683,350.36 | 121,302,431 $680,166,425.65 | 682,284,716.23  $3,825,703,680.49 | 676,020,699.13 $3,790,580,113.04 | $5.61 | `{"Token":"DOT"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 7,528 | 1,561,339.17 $8,754,733.74 |   |    |   | $5.61 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Acala](/polkadot/2000-acala) | 10,216 | 1,535,906.79 $8,612,129.40 |   |    |   | $5.61 | `{"Token":"DOT"}` |
| [Parallel](/polkadot/2012-parallel) | 8,867 | 1,221,963.24 $6,851,786.56 |   |    |   | $5.61 | `{"Token":"101"}` |
| [Astar](/polkadot/2006-astar) | 1,470 | 148,499.62 $832,666.39 |   |    |   | $5.61 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 463 | 125,259.18 $702,352.69 |   |    |   | $5.61 | `{"Token2":"0"}` |
| [HydraDX](/polkadot/2034-hydradx) | 1,543 | 116,496.07 $653,216.22 |   |    |   | $5.61 | `{"Token":"5"}` |
| [Interlay](/polkadot/2032-interlay) | 163 | 41,510 $232,754.67 | 632,305.81 $3,545,462.17 |    |   | $5.61 | `{"Token":"DOT"}` |
| [Statemint](/polkadot/1000-statemint) | 582 | 3,372.73 $18,911.56 | 7,909.55 $44,350.38 |    |   | $5.61 | `{"Token":"DOT"}` |
| [Collectives](/polkadot/1001-collectives) | 11 | 34.25 $192.04 | 0.4 $2.25 |    |   | $5.61 | `{"Token":"DOT"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "DOT" and date(ts) = "2023-03-08"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json) | See [Definitions](/DEFINITIONS.md) for details
