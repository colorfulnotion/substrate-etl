# DOT on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-07


*XCM Interior Keys*:
* `[{"network":"polkadot"},"here"]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Polkadot](/polkadot/0-polkadot) | 1,075,545 | 1,168,983,725.97 $6,809,479,766.38 | 121,302,278.27 $706,699,248.71 | 682,013,664.29  $3,972,096,881.19 | 675,799,425.35 $3,935,894,167.83 | $5.82 | `{"Token":"DOT"}` |
| [Acala](/polkadot/2000-acala) | 10,213 | 1,538,873.46 $8,954,519.96 |   |    |   | $5.82 | `{"Token":"DOT"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 7,524 | 1,521,431.24 $8,853,025.74 |   |    |   | $5.82 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Parallel](/polkadot/2012-parallel) | 8,866 | 1,213,488.75 $7,061,145.35 |   |    |   | $5.82 | `{"Token":"101"}` |
| [Astar](/polkadot/2006-astar) | 1,471 | 147,082.58 $855,855.85 |   |    |   | $5.82 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 466 | 126,033.77 $733,375.36 |   |    |   | $5.82 | `{"Token2":"0"}` |
| [HydraDX](/polkadot/2034-hydradx) | 1,537 | 111,228.04 $649,792.08 |   |    |   | $5.84 | `{"Token":"5"}` |
| [Interlay](/polkadot/2032-interlay) | 163 | 41,523.1 $242,577.18 | 630,377.81 $3,682,655.20 |    |   | $5.84 | `{"Token":"DOT"}` |
| [Statemint](/polkadot/1000-statemint) | 581 | 3,373.37 $19,629.23 | 7,909.55 $46,024.71 |    |   | $5.82 | `{"Token":"DOT"}` |
| [Collectives](/polkadot/1001-collectives) | 11 | 34.25 $199.29 | 0.4 $2.34 |    |   | $5.82 | `{"Token":"DOT"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "DOT" and date(ts) = "2023-03-07"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json) | See [Definitions](/DEFINITIONS.md) for details
