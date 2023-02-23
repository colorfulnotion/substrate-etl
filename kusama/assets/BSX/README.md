# BSX substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io)

*Relay Chain*: kusama


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Basilisk](/kusama/2090-basilisk) | 18,344 | 49,499,916,021.67 $7,473,608.26 | 58,352.66 $8.81 | 23,190,033,475.24  $3,501,283.23 | 23,150,401,096.49 $3,495,299.44 | - | `{"Token":"BSX"}` |
| [Karura](/kusama/2000-karura) | 116 | 5,891,771.39 $889.55 |   |    |   | - | `{"ForeignAsset":"11"}` |
| [Khala](/kusama/2004-khala) | 6 | 6,770.26 $1.02 |   |    |   | - | `{"Token":"9"}` |
## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "BSX" and date(ts) = "2023-02-22"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/BSX.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/BSX.json) | See [Definitions](/DEFINITIONS.md) for details
