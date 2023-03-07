# USDT on kusama substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: 2023-03-06


*XCM Interior Keys*:
* `[{"parachain":1000},{"palletInstance":50},{"generalIndex":1984}]~kusama`


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Karura](/kusama/2000-karura) | 165 | 205,943.63 $206,054.71 |   |    |   | $1.00 | `{"ForeignAsset":"7"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 97 | 47,783.55 $47,809.32 |   |    |   | $1.00 | `{"Token2":"0"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 119 | 39,878.69 $39,900.20 |   |    |   | $1.00 | `{"Token":"102"}` |
| [Basilisk](/kusama/2090-basilisk) | 43 | 21,082.64 $21,094.01 |   |    |   | $1.00 | `{"Token":"14"}` |
| [Moonriver](/kusama/2023-moonriver) | 30 | 706.43 $706.43 |   |    |   | $1.00 | `{"Token":"311091173110107856861649819128533077277"}` |
| [Shiden](/kusama/2007-shiden) | 7 | 7.78 $7.78 |   |    |   | $1.00 | `{"Token":"4294969280"}` |
| [Kintsugi](/kusama/2092-kintsugi) | 4 | 5.56 $5.57 |   |    |   | $1.00 | `{"ForeignAsset":"3"}` |

## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "USDT" and date(ts) = "2023-03-06"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/USDT.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/USDT.json) | See [Definitions](/DEFINITIONS.md) for details
