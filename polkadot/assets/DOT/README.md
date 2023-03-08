# DOT on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-06


*XCM Interior Keys*:
* `[{"network":"polkadot"},"here"]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Polkadot](/polkadot/0-polkadot) | 1,074,845 | 1,168,650,678.13 $6,930,181,459.09 | 121,302,207.53 $719,330,699.35 | 681,687,856.26  $4,042,457,366.20 | 675,473,409.93 $4,005,605,258.43 | $5.93 | `{"Token":"DOT"}` |
| [Acala](/polkadot/2000-acala) | 10,205 | 1,540,565.92 $9,135,665.24 |   |    |   | $5.93 | `{"Token":"DOT"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 7,532 | 1,509,651.39 $8,952,339.90 |   |    |   | $5.93 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Parallel](/polkadot/2012-parallel) | 8,868 | 1,244,730.6 $7,381,340.79 |   |    |   | $5.93 | `{"Token":"101"}` |
| [Astar](/polkadot/2006-astar) | 1,468 | 146,790.65 $870,478.98 |   |    |   | $5.93 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 463 | 126,183.37 $748,276.36 |   |    |   | $5.93 | `{"Token2":"0"}` |
| [HydraDX](/polkadot/2034-hydradx) | 1,529 | 111,124.73 $658,977.55 |   |    |   | $5.93 | `{"Token":"5"}` |
| [Interlay](/polkadot/2032-interlay) | 163 | 41,523.1 $246,234.93 | 629,525.81 $3,733,132.73 |    |   | $5.93 | `{"Token":"DOT"}` |
| [Statemint](/polkadot/1000-statemint) | 577 | 3,371.26 $19,991.83 | 7,909.55 $46,904.18 |    |   | $5.93 | `{"Token":"DOT"}` |
| [Collectives](/polkadot/1001-collectives) | 11 | 34.25 $203.10 | 0.4 $2.38 |    |   | $5.93 | `{"Token":"DOT"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "DOT" and date(ts) = "2023-03-06"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json) | See [Definitions](/DEFINITIONS.md) for details
