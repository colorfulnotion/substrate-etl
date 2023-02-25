# USDT substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io)

*Relay Chain*: kusama


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Karura](/kusama/2000-karura) | 167 | 218,356.63 $218,457.59 |   |    |   | $1.00 | `{"ForeignAsset":"7"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 122 | 71,904.96 $71,938.21 |   |    |   | $1.00 | `{"Token":"102"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 103 | 46,981.09 $47,002.82 |   |    |   | $1.00 | `{"Token2":"0"}` |
| [Basilisk](/kusama/2090-basilisk) | 33 | 20,878.25 $20,887.91 |   |    |   | $1.00 | `{"Token":"14"}` |
| [Moonriver](/kusama/2023-moonriver) | 29 | 753.81 $753.81 |   |    |   | $1.00 | `{"Token":"311091173110107856861649819128533077277"}` |
| [Shiden](/kusama/2007-shiden) | 7 | 7.78 $7.78 |   |    |   | $1.00 | `{"Token":"4294969280"}` |
| [Kintsugi](/kusama/2092-kintsugi) | 4 | 5.56 $5.57 |   |    |   | $1.00 | `{"ForeignAsset":"3"}` |
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
 where symbol = "USDT" and date(ts) = "2023-02-23"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/USDT.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/USDT.json) | See [Definitions](/DEFINITIONS.md) for details
