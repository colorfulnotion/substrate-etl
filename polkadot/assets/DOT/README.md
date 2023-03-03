# DOT on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-01


*XCM Interior Keys*:
* `here~polkadot`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Polkadot](/polkadot/0-polkadot) | 1,073,133 | 1,167,195,265.71 $7,582,640,212.23 | 121,434,594.16 $788,895,280.74 | 682,646,497.6  $4,434,787,336.32 | 676,429,867.79 $4,394,401,234.25 | $6.50 | `{"Token":"DOT"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 7,546 | 2,010,890.9 $13,063,677.24 |   |    |   | $6.50 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Acala](/polkadot/2000-acala) | 10,176 | 1,545,611.95 $10,041,009.96 |   |    |   | $6.50 | `{"Token":"DOT"}` |
| [Parallel](/polkadot/2012-parallel) | 8,829 | 867,460.9 $5,635,427.13 |   |    |   | $6.50 | `{"Token":"101"}` |
| [Astar](/polkadot/2006-astar) | 1,454 | 144,963.76 $941,751.64 |   |    |   | $6.50 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 459 | 124,223.27 $807,011.79 |   |    |   | $6.50 | `{"Token2":"0"}` |
| [HydraDX](/polkadot/2034-hydradx) | 1,500 | 109,004.3 $708,142.33 |   |    |   | $6.50 | `{"Token":"5"}` |
| [Interlay](/polkadot/2032-interlay) | 160 | 41,597.58 $270,237.09 | 630,829.87 $4,098,162.56 |    |   | $6.50 | `{"Token":"DOT"}` |
| [Statemint](/polkadot/1000-statemint) | 601 | 3,350.63 $21,767.26 | 7,899.05 $51,315.86 |    |   | $6.50 | `{"Token":"DOT"}` |
| [Collectives](/polkadot/1001-collectives) | 20 | 34.25 $222.49 | 0.4 $2.61 |    |   | $6.50 | `{"Token":"DOT"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "DOT" and date(ts) = "2023-03-01"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json) | See [Definitions](/DEFINITIONS.md) for details
