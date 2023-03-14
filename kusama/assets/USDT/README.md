# USDT on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-13


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":1000},{"palletInstance":50},{"generalIndex":1984}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Karura](/kusama/2000-karura) | 170 | 277,381.35 $278,352.68 |   |    |   | $1.00 | `{"ForeignAsset":"7"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 95 | 37,803.34 $37,935.72 |   |    |   | $1.00 | `{"Token2":"0"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 108 | 32,895.38 $33,010.58 |   |    |   | $1.00 | `{"Token":"102"}` |
| [Basilisk](/kusama/2090-basilisk) | 42 | 20,784.01 $20,856.80 |   |    |   | $1.00 | `{"Token":"14"}` |
| [Kintsugi](/kusama/2092-kintsugi) | 4 | 5.56 $5.59 |   |    |   | $1.01 | `{"ForeignAsset":"3"}` |
| [Statemine](/kusama/1000-statemine) | 2 | 10,000,000  |   |    |   |  | `{"Token":"19840"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "USDT" and date(ts) = "2023-03-13"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/USDT.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/USDT.json) | See [Definitions](/DEFINITIONS.md) for details
