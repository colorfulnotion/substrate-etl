# USDT on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-18


*XCM Interior Keys*:
* `[{"network":"kusama"},{"parachain":1000},{"palletInstance":50},{"generalIndex":1984}]`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Karura](/kusama/2000-karura) | 171 | 280,135.32 $282,995.47 |   |    |   | $1.01 | `{"ForeignAsset":"7"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 97 | 42,026.98 $42,456.07 |   |    |   | $1.01 | `{"Token2":"0"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 108 | 38,909.43 $39,306.69 |   |    |   | $1.01 | `{"Token":"102"}` |
| [Basilisk](/kusama/2090-basilisk) | 49 | 25,723.81 $25,986.45 |   |    |   | $1.01 | `{"Token":"14"}` |
| [Moonriver](/kusama/2023-moonriver) | 29 | 704.53 $704.53 |   |    |   | $1.00 | `{"Token":"311091173110107856861649819128533077277"}` |
| [Shiden](/kusama/2007-shiden) | 7 | 7.78 $7.86 |   |    |   | $1.01 | `{"Token":"4294969280"}` |
| [Kintsugi](/kusama/2092-kintsugi) | 5 | 6.56 $6.63 |   |    |   | $1.01 | `{"ForeignAsset":"3"}` |
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
 where symbol = "USDT" and date(ts) = "2023-03-18"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/USDT.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/USDT.json) | See [Definitions](/DEFINITIONS.md) for details
