# DOT on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-12


*XCM Interior Keys*:
* `[{"network":"polkadot"},"here"]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Polkadot](/polkadot/0-polkadot) | 1,080,228 | 1,170,571,825.16 $6,892,058,594.21 | 121,306,844.73 $713,549,155.11 | 683,768,360.66  $4,025,393,750.71 | 677,488,341.75 $3,988,387,305.90 | $5.89 | `{"Token":"DOT"}` |
| [Acala](/polkadot/2000-acala) | 10,243 | 1,530,239.97 $9,000,634.03 |   |    |   | $5.88 | `{"Token":"DOT"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 7,546 | 1,273,997.68 $7,493,456.60 |   |    |   | $5.88 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Parallel](/polkadot/2012-parallel) | 8,857 | 1,188,827.85 $6,992,500.87 |   |    |   | $5.88 | `{"Token":"101"}` |
| [Astar](/polkadot/2006-astar) | 1,486 | 148,271.16 $872,107.95 |   |    |   | $5.88 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 494 | 132,521.15 $779,468.83 |   |    |   | $5.88 | `{"Token2":"0"}` |
| [HydraDX](/polkadot/2034-hydradx) | 1,566 | 118,504.44 $697,024.75 |   |    |   | $5.88 | `{"Token":"5"}` |
| [Statemint](/polkadot/1000-statemint) | 599 | 3,379.94 $19,880.27 | 7,909.55 $46,522.73 |    |   | $5.88 | `{"Token":"DOT"}` |
| [Interlay](/polkadot/2032-interlay) | 164 | 1,438.02 $8,458.21 | 622,455.12 $3,661,184.42 |    |   | $5.88 | `{"Token":"DOT"}` |
| [Collectives](/polkadot/1001-collectives) | 11 | 34.25 $201.44 | 0.4 $2.36 |    |   | $5.88 | `{"Token":"DOT"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "DOT" and date(ts) = "2023-03-12"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json) | See [Definitions](/DEFINITIONS.md) for details
