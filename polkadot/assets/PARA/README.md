# PARA on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-09


*XCM Interior Keys*:
* `[{"network":"polkadot"},{"parachain":2012},{"generalKey":"0x50415241"}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Parallel](/polkadot/2012-parallel) | 46,786 | 9,999,999,692.15 $101,868,170.23 | 217.58 $2.22 | 50,607,560,189,440.71  $515,529,971,511.62 | 50,607,560,166,792.05 $515,529,971,280.90 | $0.01 | `{"Token":"PARA"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 80 | 30,164.54 $307.28 |   |    |   | $0.01 | `{"Token":"32615670524745285411807346420584982855"}` |
| [Acala](/polkadot/2000-acala) | 15 | 1,412.76 $14.39 |   |    |   | $0.01 | `{"ForeignAsset":"1"}` |
| [Phala](/polkadot/2035-phala) | 5 | 55.56 $0.57 |   |    |   | $0.01 | `{"Token":"2"}` |
| [Clover](/polkadot/2002-clover) | 2 | 14 $0.14 |   |    |   | $0.01 | `{"Token":"11"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "PARA" and date(ts) = "2023-03-09"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/PARA.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/PARA.json) | See [Definitions](/DEFINITIONS.md) for details
