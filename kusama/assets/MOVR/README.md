# MOVR substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io)

*Relay Chain*: kusama


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Moonriver](/kusama/2023-moonriver) | 584,797 | 10,656,906.17 $117,695,127.82 | 23,885.8 $263,795.32 | 2,213,258.47  $24,443,279.71 | 2,110,128.51 $23,304,309.97 | $11.04 | `{"Token":"MOVR"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 454 | 5,106.42 $56,395.48 |   |    |   | $11.04 | `{"Token":"MOVR"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 145 | 1,229.68 $13,580.60 |   |    |   | $11.04 | `{"Token":"113"}` |
| [Karura](/kusama/2000-karura) | 114 | 619.73 $6,844.29 |   |    |   | $11.04 | `{"ForeignAsset":"3"}` |
| [Khala](/kusama/2004-khala) | 11 | 0.44 $4.82 |   |    |   | $11.04 | `{"Token":"6"}` |
| [Crust Shadow](/kusama/2012-shadow) | 4 | 0.1 $1.12 |   |    |   | $11.04 | `{"Token":"232263652204149413431520870009560565298"}` |
## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "MOVR" and date(ts) = "2023-02-22"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/MOVR.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/MOVR.json) | See [Definitions](/DEFINITIONS.md) for details
