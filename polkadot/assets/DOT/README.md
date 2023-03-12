# DOT on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-11


*XCM Interior Keys*:
* `[{"network":"polkadot"},"here"]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Polkadot](/polkadot/0-polkadot) | 1,079,175 | 1,170,339,523.72 $6,354,188,932.18 | 121,304,817.78 $658,606,938.34 | 683,581,358.63  $3,711,405,976.83 | 677,301,010.66 $3,677,307,737.18 | $5.43 | `{"Token":"DOT"}` |
| [Acala](/polkadot/2000-acala) | 10,250 | 1,533,462.14 $8,325,710.56 |   |    |   | $5.43 | `{"Token":"DOT"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 7,543 | 1,305,180.99 $7,086,291.13 |   |    |   | $5.43 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Parallel](/polkadot/2012-parallel) | 8,859 | 1,171,320.63 $6,359,515.70 |   |    |   | $5.43 | `{"Token":"101"}` |
| [Astar](/polkadot/2006-astar) | 1,482 | 146,481.58 $795,300.55 |   |    |   | $5.43 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 489 | 133,537.67 $725,023.45 |   |    |   | $5.43 | `{"Token2":"0"}` |
| [HydraDX](/polkadot/2034-hydradx) | 1,559 | 116,763.91 $633,952.72 |   |    |   | $5.43 | `{"Token":"5"}` |
| [Statemint](/polkadot/1000-statemint) | 596 | 3,377.99 $18,340.31 | 7,909.55 $42,943.74 |    |   | $5.43 | `{"Token":"DOT"}` |
| [Interlay](/polkadot/2032-interlay) | 164 | 1,437.97 $7,807.24 | 622,344.12 $3,378,927.27 |    |   | $5.43 | `{"Token":"DOT"}` |
| [Collectives](/polkadot/1001-collectives) | 11 | 34.25 $185.95 | 0.4 $2.18 |    |   | $5.43 | `{"Token":"DOT"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "DOT" and date(ts) = "2023-03-11"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json) | See [Definitions](/DEFINITIONS.md) for details
