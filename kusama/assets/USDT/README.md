# USDT on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-15


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":1000},{"palletInstance":50},{"generalIndex":1984}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Karura](/kusama/2000-karura) | 172 | 279,731.06 $281,409.62 |   |    |   | $1.01 | `{"ForeignAsset":"7"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 107 | 42,221.31 $42,474.66 |   |    |   | $1.01 | `{"Token":"102"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 97 | 40,496.93 $40,739.94 |   |    |   | $1.01 | `{"Token2":"0"}` |
| [Basilisk](/kusama/2090-basilisk) | 44 | 21,425.87 $21,566.94 |   |    |   | $1.01 | `{"Token":"14"}` |
| [Moonriver](/kusama/2023-moonriver) | 30 | 706.45 $706.45 |   |    |   | $1.00 | `{"Token":"311091173110107856861649819128533077277"}` |
| [Shiden](/kusama/2007-shiden) | 7 | 7.78 $7.83 |   |    |   | $1.01 | `{"Token":"4294969280"}` |
| [Kintsugi](/kusama/2092-kintsugi) | 5 | 6.56 $6.61 |   |    |   | $1.01 | `{"ForeignAsset":"3"}` |
| [Statemine](/kusama/1000-statemine) | 1 | 69,000,000,000  |   |    |   |  | `{"Token":"11"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "USDT" and date(ts) = "2023-03-15"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/USDT.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/USDT.json) | See [Definitions](/DEFINITIONS.md) for details
