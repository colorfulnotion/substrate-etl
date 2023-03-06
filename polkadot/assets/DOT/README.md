# DOT on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-04


*XCM Interior Keys*:
* `here~polkadot`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Polkadot](/polkadot/0-polkadot) | 1,009,953 | 1,080,701,266.75 $6,356,913,165.81 | 121,103,443.09 $712,356,037.23 | 642,632,126.54  $3,780,097,934.22 | 637,782,874.06 $3,751,573,606.69 | $5.88 | `{"Token":"DOT"}` |
| [Acala](/polkadot/2000-acala) | 10,209 | 2,897,494.75 $17,043,676.24 |   |    |   | $5.88 | `{"Token":"DOT"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 7,525 | 1,659,689.18 $9,762,642.38 |   |    |   | $5.88 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Parallel](/polkadot/2012-parallel) | 8,843 | 840,197.41 $4,942,218.68 |   |    |   | $5.88 | `{"Token":"101"}` |
| [Astar](/polkadot/2006-astar) | 1,460 | 146,293.03 $860,526.53 |   |    |   | $5.88 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 461 | 123,139.05 $724,329.91 |   |    |   | $5.88 | `{"Token2":"0"}` |
| [HydraDX](/polkadot/2034-hydradx) | 1,514 | 111,509.14 $655,920.32 |   |    |   | $5.88 | `{"Token":"5"}` |
| [Interlay](/polkadot/2032-interlay) | 163 | 41,613.32 $244,778.33 | 629,403.59 $3,702,284.90 |    |   | $5.88 | `{"Token":"DOT"}` |
| [Statemint](/polkadot/1000-statemint) | 612 | 3,357.83 $19,479.68 | 7,909.55 $45,885.37 |    |   | $5.80 | `{"Token":"DOT"}` |
| [Collectives](/polkadot/1001-collectives) | 20 | 34.25 $201.46 | 0.4 $2.36 |    |   | $5.88 | `{"Token":"DOT"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "DOT" and date(ts) = "2023-03-04"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json) | See [Definitions](/DEFINITIONS.md) for details
