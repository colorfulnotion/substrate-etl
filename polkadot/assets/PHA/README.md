# PHA on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-02-26


*XCM Interior Keys*:
* `{"parachain":2035}~polkadot`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Phala](/polkadot/2035-phala) | 3,121 | 541,799,866.8 $102,716,359.27 | 133.15 $25.24 | 11,328,574.94  $2,147,711.81 |   | $0.19 | `{"Token":"PHA"}` |
| [Astar](/polkadot/2006-astar) | 43 | 954,145.49 $180,890.32 |   |    |   | $0.19 | `{"Token":"18446744073709551622"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 114 | 389,375.36 $73,819.18 |   |    |   | $0.19 | `{"Token":"132685552157663328694213725410064821485"}` |
| [Parallel](/polkadot/2012-parallel) | 340 | 51,691.93 $9,799.94 |   |    |   | $0.19 | `{"Token":"115"}` |
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
 where symbol = "PHA" and date(ts) = "2023-02-26"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/PHA.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/PHA.json) | See [Definitions](/DEFINITIONS.md) for details
