# DOT on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-02


*XCM Interior Keys*:
* `[{"network":"polkadot"},"here"]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Polkadot](/polkadot/0-polkadot) | 1,073,720 | 1,167,532,135.79 $7,378,277,545.97 | 121,436,187.25 $767,422,040.23 | 682,734,874.33  $4,314,577,079.88 | 676,520,447.73 $4,275,304,701.17 | $6.32 | `{"Token":"DOT"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 7,531 | 1,812,416.78 $11,453,658.23 |   |    |   | $6.32 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Acala](/polkadot/2000-acala) | 10,189 | 1,545,946.6 $9,769,686.65 |   |    |   | $6.32 | `{"Token":"DOT"}` |
| [Parallel](/polkadot/2012-parallel) | 8,833 | 870,520.23 $5,501,295.99 |   |    |   | $6.32 | `{"Token":"101"}` |
| [Astar](/polkadot/2006-astar) | 1,455 | 144,747.36 $914,738.16 |   |    |   | $6.32 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 459 | 124,440.61 $786,408.64 |   |    |   | $6.32 | `{"Token2":"0"}` |
| [HydraDX](/polkadot/2034-hydradx) | 1,504 | 107,658.49 $680,746.63 |   |    |   | $6.32 | `{"Token":"5"}` |
| [Interlay](/polkadot/2032-interlay) | 162 | 41,607.58 $262,941.17 | 630,866.7 $3,986,793.56 |    |   | $6.32 | `{"Token":"DOT"}` |
| [Statemint](/polkadot/1000-statemint) | 608 | 3,354.23 $21,197.22 | 7,909.55 $49,984.78 |    |   | $6.32 | `{"Token":"DOT"}` |
| [Collectives](/polkadot/1001-collectives) | 20 | 34.25 $216.44 | 0.4 $2.54 |    |   | $6.32 | `{"Token":"DOT"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "DOT" and date(ts) = "2023-03-02"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json) | See [Definitions](/DEFINITIONS.md) for details
