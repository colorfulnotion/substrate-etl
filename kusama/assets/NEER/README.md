# NEER substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io)

*Relay Chain*: kusama


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Bit.Country Pioneer](/kusama/2096-bitcountrypioneer) | 24,877 | 94,432,982.59 $20,639,047.62 | 5,566,930.63 $1,216,695.09 | 73,653,480.45  $16,097,529.16 |   | $0.22 | `{"Token":"NEER"}` |
| [Karura](/kusama/2000-karura) | 13 | 11.29 $2.47 |   |    |   | $0.22 | `{"ForeignAsset":"9"}` |
## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "NEER" and date(ts) = "2023-02-23"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/NEER.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/NEER.json) | See [Definitions](/DEFINITIONS.md) for details
