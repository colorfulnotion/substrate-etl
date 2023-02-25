# AIR substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io)

*Relay Chain*: kusama


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Altair](/kusama/2088-altair) | 29,452 | 476,512,530.04 $5,155,655.66 | 511,804.05 $5,537.49 | 79,024,664.05  $855,012.05 | 13,427,659 $145,281.36 | $0.01 | `{"Token":"AIR"}` |
| [Karura](/kusama/2000-karura) | 281 | 3,376,765.28 $36,535.11 |   |    |   | $0.01 | `{"ForeignAsset":"12"}` |
## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "AIR" and date(ts) = "2023-02-23"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/AIR.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/AIR.json) | See [Definitions](/DEFINITIONS.md) for details
