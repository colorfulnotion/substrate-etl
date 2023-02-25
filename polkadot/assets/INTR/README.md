# INTR substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io)

*Relay Chain*: polkadot


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Interlay](/polkadot/2032-interlay) | 11,308 | 999,998,647 $36,752,730.86 | 1,319.12 $48.48 |    | 70,441,651.64 $2,588,926.57 | $0.04 | `{"Token":"INTR"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 360 | 2,629,106.2 $96,626.96 |   |    |   | $0.04 | `{"Token":"101170542313601871197860408087030232491"}` |
| [Acala](/polkadot/2000-acala) | 403 | 1,228,584.01 $45,153.88 |   |    |   | $0.04 | `{"ForeignAsset":"4"}` |
| [Parallel](/polkadot/2012-parallel) | 218 | 260,490.23 $9,573.74 |   |    |   | $0.04 | `{"Token":"120"}` |
| [Astar](/polkadot/2006-astar) | 67 | 176,546.29 $6,488.57 |   |    |   | $0.04 | `{"Token":"18446744073709551621"}` |
## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "INTR" and date(ts) = "2023-02-23"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/INTR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/INTR.json) | See [Definitions](/DEFINITIONS.md) for details
