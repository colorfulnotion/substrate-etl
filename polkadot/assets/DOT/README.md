# DOT on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-18


*XCM Interior Keys*:
* `[{"network":"polkadot"},"here"]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Polkadot](/polkadot/0-polkadot) | 1,072,291 | 1,172,512,575.32 $7,474,276,834.05 | 121,308,630.56 $773,291,737.98 | 688,239,772.45  $4,387,240,440.57 | 681,989,655.98 $4,347,398,564.48 | $6.37 | `{"Token":"DOT"}` |
| [Acala](/polkadot/2000-acala) | 10,255 | 1,520,653.84 $9,693,531.66 |   |    |   | $6.37 | `{"Token":"DOT"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 7,585 | 1,260,898.43 $8,037,699.69 |   |    |   | $6.37 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Parallel](/polkadot/2012-parallel) | 8,829 | 1,066,857.23 $6,800,768.24 |   |    |   | $6.37 | `{"Token":"101"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 534 | 180,237.25 $1,148,937.01 |   |    |   | $6.37 | `{"Token2":"0"}` |
| [Astar](/polkadot/2006-astar) | 1,494 | 152,304.29 $970,876.07 |   |    |   | $6.37 | `{"Token":"340282366920938463463374607431768211455"}` |
| [HydraDX](/polkadot/2034-hydradx) | 1,591 | 113,955.74 $726,420.15 |   |    |   | $6.37 | `{"Token":"5"}` |
| [Statemint](/polkadot/1000-statemint) | 604 | 3,381.74 $21,557.18 | 7,909.55 $50,420.06 |    |   | $6.37 | `{"Token":"DOT"}` |
| [Interlay](/polkadot/2032-interlay) | 167 | 1,544.3 $9,844.25 | 624,001.52 $3,977,748.48 |    |   | $6.37 | `{"Token":"DOT"}` |
| [Collectives](/polkadot/1001-collectives) | 11 | 34.25 $218.32 | 0.4 $2.56 |    |   | $6.37 | `{"Token":"DOT"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "DOT" and date(ts) = "2023-03-18"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json) | See [Definitions](/DEFINITIONS.md) for details
