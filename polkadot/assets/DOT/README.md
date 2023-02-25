# DOT on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-02-24


*XCM Interior Keys*:
* `here~polkadot`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Polkadot](/polkadot/0-polkadot) | 1,070,648 | 1,165,676,371.55 $8,734,933,663.90 | 121,171,539.68 $907,992,464.16 | 668,123,640.09  $5,006,548,831.14 | 661,894,736.55 $4,959,872,874.99 | $7.49 | `{"Token":"DOT"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 7,473 | 2,104,874.27 $15,772,762.95 |   |    |   | $7.49 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Acala](/polkadot/2000-acala) | 10,189 | 1,544,075.96 $11,570,450.76 |   |    |   | $7.49 | `{"Token":"DOT"}` |
| [Parallel](/polkadot/2012-parallel) | 8,808 | 827,229.34 $6,198,798.92 |   |    |   | $7.49 | `{"Token":"101"}` |
| [Astar](/polkadot/2006-astar) | 1,444 | 152,640.07 $1,143,800.23 |   |    |   | $7.49 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 448 | 121,373.3 $909,504.35 |   |    |   | $7.49 | `{"Token2":"0"}` |
| [HydraDX](/polkadot/2034-hydradx) | 1,466 | 57,837.56 $433,402.65 |   |    |   | $7.49 | `{"Token":"5"}` |
| [Interlay](/polkadot/2032-interlay) | 159 | 41,511.11 $311,061.29 | 630,348.51 $4,723,482.90 |    |   | $7.49 | `{"Token":"DOT"}` |
| [Statemint](/polkadot/1000-statemint) | 585 | 3,333.56 $24,979.84 | 7,898.85 $59,189.58 |    |   | $7.49 | `{"Token":"DOT"}` |
| [Collectives](/polkadot/1001-collectives) | 19 | 34.25 $256.64 | 0.4 $3.01 |    |   | $7.49 | `{"Token":"DOT"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "DOT" and date(ts) = "2023-02-24"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json) | See [Definitions](/DEFINITIONS.md) for details
