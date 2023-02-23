# USDT substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io)

*Relay Chain*: polkadot


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Statemint](/polkadot/1000-statemint) | 273 | 7,998,764.14 $8,002,462.54 |   |    |   | $1.00 | `{"Token":"1984"}` |
| [Astar](/polkadot/2006-astar) | 389 | 1,465,830.45 $1,466,508.20 |   |    |   | $1.00 | `{"Token":"4294969280"}` |
| [Parallel](/polkadot/2012-parallel) | 295 | 84,033.25 $84,072.10 |   |    |   | $1.00 | `{"Token":"102"}` |
| [Interlay](/polkadot/2032-interlay) | 14 | 304.35 $304.49 | 12,365.77 $12,371.49 |    |   | $1.00 | `{"ForeignAsset":"2"}` |
## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "USDT" and date(ts) = "2023-02-22"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/USDT.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/USDT.json) | See [Definitions](/DEFINITIONS.md) for details
