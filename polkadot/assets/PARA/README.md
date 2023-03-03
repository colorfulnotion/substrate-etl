# PARA on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-02


*XCM Interior Keys*:
* `[{"network":"polkadot"},{"parachain":2012},{"generalKey":"0x50415241"}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Parallel](/polkadot/2012-parallel) | 47,270 | 9,999,999,692.21 $119,928,283.13 | 217.58 $2.61 | 7,574,246,948.54  $90,836,646.05 | 7,574,224,350.74 $90,836,375.04 | $0.01 | `{"Token":"PARA"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 80 | 29,619.5 $355.22 |   |    |   | $0.01 | `{"Token":"32615670524745285411807346420584982855"}` |
| [Acala](/polkadot/2000-acala) | 15 | 1,412.76 $16.94 |   |    |   | $0.01 | `{"ForeignAsset":"1"}` |
| [Phala](/polkadot/2035-phala) | 5 | 55.56 $0.67 |   |    |   | $0.01 | `{"Token":"2"}` |
| [Clover](/polkadot/2002-clover) | 2 | 14 $0.17 |   |    |   | $0.01 | `{"Token":"11"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "PARA" and date(ts) = "2023-03-02"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/PARA.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/PARA.json) | See [Definitions](/DEFINITIONS.md) for details
