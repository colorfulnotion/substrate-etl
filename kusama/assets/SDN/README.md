# SDN substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io)

*Relay Chain*: kusama


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Moonriver](/kusama/2023-moonriver) | 46 | 30,468.5 $17,851.13 |   |    |   | $0.59 | `{"Token":"16797826370226091782818345603793389938"}` |
| [Karura](/kusama/2000-karura) | 40 | 7,739.17 $4,534.29 |   |    |   | $0.59 | `{"ForeignAsset":"18"}` |
| [Khala](/kusama/2004-khala) | 9 | 29.99 $17.57 |   |    |   | $0.59 | `{"Token":"12"}` |
| [Crust Shadow](/kusama/2012-shadow) | 11 | 3.61 $2.11 |   |    |   | $0.59 | `{"Token":"16797826370226091782818345603793389938"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 3 | 0.6 $0.35 |   |    |   | $0.59 | `{"Token2":"3"}` |
## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "SDN" and date(ts) = "2023-02-22"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/SDN.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/SDN.json) | See [Definitions](/DEFINITIONS.md) for details
