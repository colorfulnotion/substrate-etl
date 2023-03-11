# DOT on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-10


*XCM Interior Keys*:
* `here~polkadot`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Polkadot](/polkadot/0-polkadot) | 1,077,950 | 1,170,054,650.43 $6,511,117,081.38 | 121,304,845.24 $675,036,887.92 | 683,235,993.3  $3,802,069,881.90 | 676,968,245.08 $3,767,191,132.92 | $5.56 | `{"Token":"DOT"}` |
| [Acala](/polkadot/2000-acala) | 10,230 | 1,532,340.23 $8,527,162.93 |   |    |   | $5.56 | `{"Token":"DOT"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 7,536 | 1,368,522.8 $7,615,552.11 |   |    |   | $5.56 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Parallel](/polkadot/2012-parallel) | 8,855 | 1,192,183.3 $6,634,258.52 |   |    |   | $5.56 | `{"Token":"101"}` |
| [Astar](/polkadot/2006-astar) | 1,479 | 147,637.37 $821,572.06 |   |    |   | $5.56 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 474 | 126,673.69 $704,913.40 |   |    |   | $5.56 | `{"Token2":"0"}` |
| [HydraDX](/polkadot/2034-hydradx) | 1,551 | 112,251.42 $624,656.43 |   |    |   | $5.56 | `{"Token":"5"}` |
| [Statemint](/polkadot/1000-statemint) | 589 | 3,375.92 $18,786.33 | 7,909.55 $44,015.03 |    |   | $5.56 | `{"Token":"DOT"}` |
| [Interlay](/polkadot/2032-interlay) | 164 | 1,437.28 $7,998.20 | 622,344.81 $3,463,222.76 |    |   | $5.56 | `{"Token":"DOT"}` |
| [Collectives](/polkadot/1001-collectives) | 11 | 34.25 $190.59 | 0.4 $2.23 |    |   | $5.56 | `{"Token":"DOT"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "DOT" and date(ts) = "2023-03-10"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json) | See [Definitions](/DEFINITIONS.md) for details
