# DOT on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-16


*XCM Interior Keys*:
* `[{"network":"polkadot"},"here"]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Polkadot](/polkadot/0-polkadot) | 1,071,459 | 1,171,944,945.56 $7,162,978,014.53 | 121,308,230.21 $741,441,131.08 | 687,789,815.47  $4,203,800,993.83 | 681,525,638.78 $4,165,514,075.90 | $6.11 | `{"Token":"DOT"}` |
| [Acala](/polkadot/2000-acala) | 10,250 | 1,519,387.93 $9,286,564.48 |   |    |   | $6.11 | `{"Token":"DOT"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 7,539 | 1,216,484.43 $7,435,205.26 |   |    |   | $6.11 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Parallel](/polkadot/2012-parallel) | 8,851 | 1,107,097.87 $6,766,629.87 |   |    |   | $6.11 | `{"Token":"101"}` |
| [Astar](/polkadot/2006-astar) | 1,491 | 151,683.99 $927,099.09 |   |    |   | $6.11 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 522 | 139,870.52 $854,894.65 |   |    |   | $6.11 | `{"Token2":"0"}` |
| [HydraDX](/polkadot/2034-hydradx) | 1,586 | 116,467.01 $711,851.41 |   |    |   | $6.11 | `{"Token":"5"}` |
| [Statemint](/polkadot/1000-statemint) | 604 | 3,381.77 $20,669.53 | 7,909.55 $48,343.50 |    |   | $6.11 | `{"Token":"DOT"}` |
| [Interlay](/polkadot/2032-interlay) | 165 | 1,444.04 $8,826.06 | 624,029.39 $3,814,094.50 |    |   | $6.11 | `{"Token":"DOT"}` |
| [Collectives](/polkadot/1001-collectives) | 11 | 34.25 $209.33 | 0.4 $2.45 |    |   | $6.11 | `{"Token":"DOT"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "DOT" and date(ts) = "2023-03-16"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json) | See [Definitions](/DEFINITIONS.md) for details
