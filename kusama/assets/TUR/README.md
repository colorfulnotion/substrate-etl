# TUR substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io)

*Relay Chain*: kusama


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Turing](/kusama/2114-turing) | 7,581 | 412,934,574.13  | 464.64  | 32,181,480.68   | 32,177,994.43  |  | `{"Token":"TUR"}` |
| [Mangatax](/kusama/2110-mangatax) | 537 | 5,597,678.1  |   |    |   |  | `{"Token":"7"}` |
| [Karura](/kusama/2000-karura) | 2 | 26.26  |   |    |   |  | `{"ForeignAsset":"16"}` |
| [Khala](/kusama/2004-khala) | 2 | 1.06  |   |    |   |  | `{"Token":"10"}` |
## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "TUR" and date(ts) = "2023-02-23"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/TUR.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/TUR.json) | See [Definitions](/DEFINITIONS.md) for details
