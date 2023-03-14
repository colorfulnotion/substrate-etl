# DOT on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-13


*XCM Interior Keys*:
* `[{"network":"polkadot"},"here"]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Polkadot](/polkadot/0-polkadot) | 1,080,919 | 1,170,981,043.28 $7,134,324,103.24 | 121,306,805.9 $739,074,363.51 | 683,952,054.07  $4,167,049,204.43 | 677,672,032.68 $4,128,787,519.27 | $6.09 | `{"Token":"DOT"}` |
| [Acala](/polkadot/2000-acala) | 10,239 | 1,525,811.64 $9,296,166.52 |   |    |   | $6.09 | `{"Token":"DOT"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 7,556 | 1,281,673.83 $7,808,731.42 |   |    |   | $6.09 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Parallel](/polkadot/2012-parallel) | 8,851 | 1,183,673.87 $7,211,656.44 |   |    |   | $6.09 | `{"Token":"101"}` |
| [Astar](/polkadot/2006-astar) | 1,485 | 147,910.48 $901,160.04 |   |    |   | $6.09 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 500 | 133,461.24 $813,126.51 |   |    |   | $6.09 | `{"Token2":"0"}` |
| [HydraDX](/polkadot/2034-hydradx) | 1,571 | 120,036.07 $731,332.26 |   |    |   | $6.09 | `{"Token":"5"}` |
| [Statemint](/polkadot/1000-statemint) | 599 | 3,380.22 $20,633.20 | 7,909.55 $48,280.67 |    |   | $6.10 | `{"Token":"DOT"}` |
| [Interlay](/polkadot/2032-interlay) | 164 | 1,438.31 $8,779.56 | 622,529.12 $3,799,979.79 |    |   | $6.10 | `{"Token":"DOT"}` |
| [Collectives](/polkadot/1001-collectives) | 11 | 34.25 $208.66 | 0.4 $2.45 |    |   | $6.09 | `{"Token":"DOT"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "DOT" and date(ts) = "2023-03-13"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json) | See [Definitions](/DEFINITIONS.md) for details
