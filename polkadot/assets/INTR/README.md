# INTR on polkadot substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-13


*XCM Interior Keys*:
* `[{"network":"polkadot"},{"parachain":2032},{"generalKey":"0x0002"}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Interlay](/polkadot/2032-interlay) | 11,413 | 999,998,468.34 $26,082,017.98 | 1,397.8 $36.46 |    | 72,290,102.22 $1,885,474.63 | $0.03 | `{"Token":"INTR"}` |
| [Acala](/polkadot/2000-acala) | 409 | 1,209,028.56 $31,544.58 |   |    |   | $0.03 | `{"ForeignAsset":"4"}` |
| [Parallel](/polkadot/2012-parallel) | 219 | 243,244.79 $6,346.46 |   |    |   | $0.03 | `{"Token":"120"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "INTR" and date(ts) = "2023-03-13"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/INTR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/INTR.json) | See [Definitions](/DEFINITIONS.md) for details
