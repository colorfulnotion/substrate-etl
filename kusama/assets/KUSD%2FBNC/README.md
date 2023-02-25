# KUSD/BNC substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io)

*Relay Chain*: kusama
*Report Date*: 2023-02-24

| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Karura](/kusama/2000-karura) | 86 | 348,235.82 $73,237.72 |   |    |   | $0.21 | `[{"Token":"KUSD"},{"Token":"BNC"}]` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "KUSD/BNC" and date(ts) = "2023-02-24"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KUSD%252FBNC.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KUSD%252FBNC.json) | See [Definitions](/DEFINITIONS.md) for details
