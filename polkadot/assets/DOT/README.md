# DOT on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-05


*XCM Interior Keys*:
* `[{"network":"polkadot"},"here"]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Polkadot](/polkadot/0-polkadot) | 1,074,402 | 1,168,271,349.29 $6,962,195,993.39 | 121,301,446.33 $722,883,809.60 | 680,558,831.39  $4,055,722,133.43 | 674,344,206.39 $4,018,686,698.75 | $5.96 | `{"Token":"DOT"}` |
| [Acala](/polkadot/2000-acala) | 10,204 | 1,544,084.17 $9,201,814.85 |   |    |   | $5.96 | `{"Token":"DOT"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 7,536 | 1,499,448.03 $8,935,810.21 |   |    |   | $5.96 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Parallel](/polkadot/2012-parallel) | 8,864 | 1,349,910.91 $8,044,658.77 |   |    |   | $5.96 | `{"Token":"101"}` |
| [Astar](/polkadot/2006-astar) | 1,461 | 148,398.44 $884,365.65 |   |    |   | $5.96 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 465 | 124,324.74 $740,900.81 |   |    |   | $5.96 | `{"Token2":"0"}` |
| [HydraDX](/polkadot/2034-hydradx) | 1,525 | 110,826.1 $660,457.03 |   |    |   | $5.96 | `{"Token":"5"}` |
| [Interlay](/polkadot/2032-interlay) | 153 | 41,613.32 $247,990.40 | 629,435.59 $3,751,058.31 |    |   | $5.96 | `{"Token":"DOT"}` |
| [Statemint](/polkadot/1000-statemint) | 573 | 3,379.2 $20,138.03 | 7,909.55 $47,136.16 |    |   | $5.96 | `{"Token":"DOT"}` |
| [Collectives](/polkadot/1001-collectives) | 11 | 34.25 $204.10 | 0.4 $2.39 |    |   | $5.96 | `{"Token":"DOT"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "DOT" and date(ts) = "2023-03-05"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json) | See [Definitions](/DEFINITIONS.md) for details
