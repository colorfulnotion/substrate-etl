# PHA substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io)

*Relay Chain*: polkadot


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Phala](/polkadot/2035-phala) | 3,110 | 541,799,866.8 $102,716,359.27 | 133.15 $25.24 | 11,331,368.34  $2,148,241.39 |   | $0.19 | `{"Token":"PHA"}` |
| [Astar](/polkadot/2006-astar) | 29 | 930,075.25 $176,327.00 |   |    |   | $0.19 | `{"Token":"18446744073709551622"}` |
| [Parallel](/polkadot/2012-parallel) | 340 | 51,820.49 $9,824.31 |   |    |   | $0.19 | `{"Token":"115"}` |
| [Acala](/polkadot/2000-acala) | 2 | 11 $2.09 |   |    |   | $0.19 | `{"ForeignAsset":"9"}` |
## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "PHA" and date(ts) = "2023-02-22"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/PHA.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/PHA.json) | See [Definitions](/DEFINITIONS.md) for details
