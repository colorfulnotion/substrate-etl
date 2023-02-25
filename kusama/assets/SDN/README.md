# SDN substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io)

*Relay Chain*: kusama
*Report Date*: 2023-02-24
*XCM Interior Keys*:
* `{"parachain":2007}~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Shiden](/kusama/2007-shiden) | 638,197 | 77,346,811.48 $45,316,582.10 | 963,888.2 $564,730.70 | 18,385,704.32  $10,771,966.72 | 15,861,899.5 $9,293,299.32 | $0.59 | `{"Token":"SDN"}` |
| [Moonriver](/kusama/2023-moonriver) | 46 | 32,535.98 $19,062.45 |   |    |   | $0.59 | `{"Token":"16797826370226091782818345603793389938"}` |
| [Karura](/kusama/2000-karura) | 40 | 7,739.17 $4,534.29 |   |    |   | $0.59 | `{"ForeignAsset":"18"}` |
| [Khala](/kusama/2004-khala) | 9 | 29.99 $17.57 |   |    |   | $0.59 | `{"Token":"12"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 3 | 0.6 $0.35 |   |    |   | $0.59 | `{"Token2":"3"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "SDN" and date(ts) = "2023-02-24"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/SDN.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/SDN.json) | See [Definitions](/DEFINITIONS.md) for details
