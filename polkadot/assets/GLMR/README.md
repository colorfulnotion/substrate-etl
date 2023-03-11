# GLMR on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-10


*XCM Interior Keys*:
* `[{"parachain":2004},{"palletInstance":10}]~polkadot`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Moonbeam](/polkadot/2004-moonbeam) | 1,064,463 | 1,057,031,574.82 $376,593,784.59 | 1,906,523.01 $679,246.23 | 285,518,959.72  $101,723,229.63 | 283,392,244.93 $100,965,534.60 | $0.36 | `{"Token":"GLMR"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 197 | 402,236.9 $143,306.90 |   |    |   | $0.36 | `{"Token2":"1"}` |
| [Parallel](/polkadot/2012-parallel) | 625 | 121,899.98 $43,429.90 |   |    |   | $0.36 | `{"Token":"114"}` |
| [Astar](/polkadot/2006-astar) | 259 | 23,481.88 $8,366.00 |   |    |   | $0.36 | `{"Token":"18446744073709551619"}` |
| [Acala](/polkadot/2000-acala) | 579 | 20,229.29 $7,207.19 |   |    |   | $0.36 | `{"ForeignAsset":"0"}` |
| [Phala](/polkadot/2035-phala) | 11 | 36.52 $13.01 |   |    |   | $0.36 | `{"Token":"1"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "GLMR" and date(ts) = "2023-03-10"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json) | See [Definitions](/DEFINITIONS.md) for details
