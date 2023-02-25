# GLMR substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io)

*Relay Chain*: polkadot


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Moonbeam](/polkadot/2004-moonbeam) | 2,685,569 | 1,054,908,722.01 $528,636,392.68 | 1,968,131.75 $986,271.18 | 277,538,493.72  $139,080,230.44 | 275,397,974.27 $138,007,572.25 | $0.50 | `{"Token":"GLMR"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 186 | 401,277.16 $201,088.21 |   |    |   | $0.50 | `{"Token2":"1"}` |
| [Parallel](/polkadot/2012-parallel) | 605 | 122,718.28 $61,496.65 |   |    |   | $0.50 | `{"Token":"114"}` |
| [Astar](/polkadot/2006-astar) | 234 | 26,120.24 $13,089.39 |   |    |   | $0.50 | `{"Token":"18446744073709551619"}` |
| [Acala](/polkadot/2000-acala) | 578 | 22,015.95 $11,032.64 |   |    |   | $0.50 | `{"ForeignAsset":"0"}` |
| [Phala](/polkadot/2035-phala) | 11 | 36.57 $18.33 |   |    |   | $0.50 | `{"Token":"1"}` |
## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "GLMR" and date(ts) = "2023-02-23"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/GLMR.json) | See [Definitions](/DEFINITIONS.md) for details
