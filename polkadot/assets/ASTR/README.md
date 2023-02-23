# ASTR substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io)

*Relay Chain*: polkadot


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Astar](/polkadot/2006-astar) | 514,323 | 7,626,719,413.05 $797,038,610.42 | 153,630,382.03 $16,055,310.23 | 4,084,979,464.63  $426,905,223.56 | 3,267,861,484.58 $341,511,420.00 | $0.10 | `{"Token":"ASTR"}` |
| [Acala](/polkadot/2000-acala) | 102 | 44,285.35 $4,628.09 |   |    |   | $0.10 | `{"ForeignAsset":"2"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 13 | 169.25 $17.69 |   |    |   | $0.10 | `{"Token2":"3"}` |
| [Phala](/polkadot/2035-phala) | 11 | 105.33 $11.01 |   |    |   | $0.10 | `{"Token":"6"}` |
| [Clover](/polkadot/2002-clover) | 2 | 2.3 $0.24 |   |    |   | $0.10 | `{"Token":"12"}` |
## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "ASTR" and date(ts) = "2023-02-22"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/ASTR.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/ASTR.json) | See [Definitions](/DEFINITIONS.md) for details
