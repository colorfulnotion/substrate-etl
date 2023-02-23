# IBTC substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io)

*Relay Chain*: polkadot


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Interlay](/polkadot/2032-interlay) | 363 | 76.39 $1,370,435.62 | 0.02 $312.06 |    |   | $17,940.32 | `{"Token":"IBTC"}` |
| [Astar](/polkadot/2006-astar) | 30 | 1.4 $24,893.87 |   |    |   | $17,841.21 | `{"Token":"18446744073709551620"}` |
| [Acala](/polkadot/2000-acala) | 82 | 1.14 $20,326.28 |   |    |   | $17,841.21 | `{"ForeignAsset":"3"}` |
| [Parallel](/polkadot/2012-parallel) | 114 | 0.17 $3,119.16 |   |    |   | $17,841.21 | `{"Token":"122"}` |
## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "IBTC" and date(ts) = "2023-02-22"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/IBTC.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/IBTC.json) | See [Definitions](/DEFINITIONS.md) for details
