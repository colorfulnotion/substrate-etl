# DOT on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-03


*XCM Interior Keys*:
* `[{"network":"polkadot"},"here"]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Polkadot](/polkadot/0-polkadot) | 1,074,342 | 1,167,890,284.97 $7,046,639,077.48 | 121,437,597.09 $732,711,735.13 | 682,096,383.56  $4,115,529,594.60 | 675,881,930.32 $4,078,033,770.19 | $6.03 | `{"Token":"DOT"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 7,528 | 1,800,064.02 $10,860,952.99 |   |    |   | $6.03 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Acala](/polkadot/2000-acala) | 10,195 | 1,540,839.39 $9,296,882.79 |   |    |   | $6.03 | `{"Token":"DOT"}` |
| [Parallel](/polkadot/2012-parallel) | 8,837 | 804,540.05 $4,854,311.59 |   |    |   | $6.03 | `{"Token":"101"}` |
| [Astar](/polkadot/2006-astar) | 1,454 | 146,250.3 $882,422.82 |   |    |   | $6.03 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 460 | 123,158 $743,025.08 |   |    |   | $6.03 | `{"Token2":"0"}` |
| [HydraDX](/polkadot/2034-hydradx) | 1,511 | 108,479.32 $654,526.07 |   |    |   | $6.03 | `{"Token":"5"}` |
| [Interlay](/polkadot/2032-interlay) | 162 | 41,607.58 $251,045.50 | 629,409.33 $3,797,634.46 |    |   | $6.03 | `{"Token":"DOT"}` |
| [Statemint](/polkadot/1000-statemint) | 611 | 3,356.78 $20,253.62 | 7,909.55 $47,723.43 |    |   | $6.03 | `{"Token":"DOT"}` |
| [Collectives](/polkadot/1001-collectives) | 20 | 34.25 $206.63 | 0.4 $2.42 |    |   | $6.03 | `{"Token":"DOT"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "DOT" and date(ts) = "2023-03-03"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json) | See [Definitions](/DEFINITIONS.md) for details
