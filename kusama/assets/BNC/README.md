# BNC substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io)

*Relay Chain*: kusama


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 101,447 | 41,797,898.86 $17,384,334.23 | 38,965,834.47 $16,206,438.81 | 23,664,499.96  $9,842,398.49 | 7,790,316.65 $3,240,102.31 | $0.42 | `{"Token":"BNC"}` |
| [Karura](/kusama/2000-karura) | 1,175 | 864,257.49 $359,456.85 |   |    |   | $0.42 | `{"Token":"BNC"}` |
| [Mangatax](/kusama/2110-mangatax) | 145 | 76,004.79 $31,611.46 |   |    |   | $0.42 | `{"Token":"14"}` |
| [Moonriver](/kusama/2023-moonriver) | 69 | 1,171.9 $487.41 |   |    |   | $0.42 | `{"Token":"319623561105283008236062145480775032445"}` |
| [Khala](/kusama/2004-khala) | 10 | 25.92 $10.78 |   |    |   | $0.42 | `{"Token":"2"}` |
| [Shiden](/kusama/2007-shiden) | 4 | 0.1 $0.04 |   |    |   | $0.42 | `{"Token":"18446744073709551627"}` |
## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "BNC" and date(ts) = "2023-02-23"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/BNC.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/BNC.json) | See [Definitions](/DEFINITIONS.md) for details
