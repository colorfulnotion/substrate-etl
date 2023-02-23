# GLMR substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io)

*Relay Chain*: polkadot


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 186 | 400,691.87 $200,794.91 |   |    |   | $0.50 | `{"Token2":"1"}` |
| [Parallel](/polkadot/2012-parallel) | 603 | 128,006.67 $64,146.77 |   |    |   | $0.50 | `{"Token":"114"}` |
| [Astar](/polkadot/2006-astar) | 231 | 25,604.97 $12,831.18 |   |    |   | $0.50 | `{"Token":"18446744073709551619"}` |
| [Acala](/polkadot/2000-acala) | 575 | 18,915.74 $9,479.06 |   |    |   | $0.50 | `{"ForeignAsset":"0"}` |
| [Phala](/polkadot/2035-phala) | 11 | 36.59 $18.34 |   |    |   | $0.50 | `{"Token":"1"}` |
## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "GLMR" and date(ts) = "2023-02-22"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json) | See [Definitions](/DEFINITIONS.md) for details
