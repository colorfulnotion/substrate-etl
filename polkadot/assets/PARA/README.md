# PARA on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-02-24


*XCM Interior Keys*:
* `[{"parachain":2012},{"generalKey":"0x50415241"}]~polkadot`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Parallel](/polkadot/2012-parallel) | 47,218 | 9,999,999,709.1 $125,048,010.24 | 201.95 $2.53 | 7,579,015,137.54  $94,774,079.01 | 7,578,998,714.68 $94,773,873.64 | $0.01 | `{"Token":"PARA"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 79 | 29,430.46 $368.02 |   |    |   | $0.01 | `{"Token":"32615670524745285411807346420584982855"}` |
| [Acala](/polkadot/2000-acala) | 15 | 1,412.76 $17.67 |   |    |   | $0.01 | `{"ForeignAsset":"1"}` |
| [Phala](/polkadot/2035-phala) | 5 | 55.56 $0.69 |   |    |   | $0.01 | `{"Token":"2"}` |
| [Clover](/polkadot/2002-clover) | 2 | 14 $0.18 |   |    |   | $0.01 | `{"Token":"11"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "PARA" and date(ts) = "2023-02-24"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/PARA.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/PARA.json) | See [Definitions](/DEFINITIONS.md) for details
