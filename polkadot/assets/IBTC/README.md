# IBTC on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-02-26


*XCM Interior Keys*:
* `[{"parachain":2032},{"generalKey":"0x0001"}]~polkadot`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Interlay](/polkadot/2032-interlay) | 363 | 82.84 $1,477,889.43 | 0.02 $310.33 |    |   | $17,841.21 | `{"Token":"IBTC"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 98 | 20.33 $362,766.06 |   |    |   | $17,841.21 | `{"Token":"120637696315203257380661607956669368914"}` |
| [Astar](/polkadot/2006-astar) | 30 | 1.35 $24,148.89 |   |    |   | $17,841.21 | `{"Token":"18446744073709551620"}` |
| [Acala](/polkadot/2000-acala) | 80 | 1.13 $20,203.36 |   |    |   | $17,841.21 | `{"ForeignAsset":"3"}` |
| [Parallel](/polkadot/2012-parallel) | 114 | 0.15 $2,599.45 |   |    |   | $17,841.21 | `{"Token":"122"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "IBTC" and date(ts) = "2023-02-26"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/IBTC.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/IBTC.json) | See [Definitions](/DEFINITIONS.md) for details
