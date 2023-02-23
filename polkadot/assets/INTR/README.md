# INTR substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io)

*Relay Chain*: polkadot


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Interlay](/polkadot/2032-interlay) | 11,292 | 999,998,649.35 $36,752,730.94 | 1,316.77 $48.39 |    | 70,363,355.84 $2,586,048.98 | $0.04 | `{"Token":"INTR"}` |
| [Acala](/polkadot/2000-acala) | 404 | 1,236,261.49 $45,436.05 |   |    |   | $0.04 | `{"ForeignAsset":"4"}` |
| [Parallel](/polkadot/2012-parallel) | 217 | 267,801.98 $9,842.47 |   |    |   | $0.04 | `{"Token":"120"}` |
| [Astar](/polkadot/2006-astar) | 65 | 186,747.08 $6,863.47 |   |    |   | $0.04 | `{"Token":"18446744073709551621"}` |
## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "INTR" and date(ts) = "2023-02-22"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/INTR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/INTR.json) | See [Definitions](/DEFINITIONS.md) for details
