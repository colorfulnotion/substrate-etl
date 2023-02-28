# DOT on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-02-26


*XCM Interior Keys*:
* `here~polkadot`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Polkadot](/polkadot/0-polkadot) | 1,071,562 | 1,166,381,816.52 $8,740,219,878.15 | 121,172,824.25 $908,002,090.03 | 668,561,026.08  $5,009,826,359.71 | 662,337,556.48 $4,963,191,122.51 | $7.49 | `{"Token":"DOT"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 7,493 | 2,203,970.88 $16,515,338.10 |   |    |   | $7.49 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Acala](/polkadot/2000-acala) | 10,187 | 1,544,233.18 $11,571,628.88 |   |    |   | $7.49 | `{"Token":"DOT"}` |
| [Parallel](/polkadot/2012-parallel) | 8,812 | 850,106.94 $6,370,230.99 |   |    |   | $7.49 | `{"Token":"101"}` |
| [Astar](/polkadot/2006-astar) | 1,448 | 150,251.7 $1,125,903.10 |   |    |   | $7.49 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 456 | 122,323.67 $916,625.90 |   |    |   | $7.49 | `{"Token2":"0"}` |
| [HydraDX](/polkadot/2034-hydradx) | 1,479 | 108,369.54 $812,061.35 |   |    |   | $7.49 | `{"Token":"5"}` |
| [Interlay](/polkadot/2032-interlay) | 159 | 41,505.05 $311,015.84 | 630,386.51 $4,723,767.65 |    |   | $7.49 | `{"Token":"DOT"}` |
| [Statemint](/polkadot/1000-statemint) | 593 | 3,342.43 $25,046.29 | 7,898.85 $59,189.58 |    |   | $7.49 | `{"Token":"DOT"}` |
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
 where symbol = "DOT" and date(ts) = "2023-02-26"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json) | See [Definitions](/DEFINITIONS.md) for details
