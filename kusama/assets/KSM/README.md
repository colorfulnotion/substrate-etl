# KSM substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io)

*Relay Chain*: kusama


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Kusama](/kusama/0-kusama) | 284,900 | 12,975,432.83 $593,613,114.76 | 305,621.35 $13,981,871.92 | 7,701,893.43  $352,353,945.35 | 7,070,994.15 $323,490,932.10 | $45.75 | `{"Token":"KSM"}` |
| [Moonriver](/kusama/2023-moonriver) | 1,394 | 98,315.43 $4,497,832.91 |   |    |   | $45.75 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 3,106 | 92,997.46 $4,254,541.09 | 0.1 $4.57 |    |   | $45.75 | `{"Token":"KSM"}` |
| [Karura](/kusama/2000-karura) | 8,114 | 61,463.52 $2,811,894.89 |   |    |   | $45.75 | `{"Token":"KSM"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 3,606 | 18,565.59 $849,357.30 |   |    |   | $45.75 | `{"Token":"100"}` |
| [Mangatax](/kusama/2110-mangatax) | 859 | 13,220.47 $604,823.14 |   |    |   | $45.75 | `{"Token":"4"}` |
| [Basilisk](/kusama/2090-basilisk) | 1,872 | 4,050.52 $185,307.47 | 1.44 $65.88 |    |   | $45.75 | `{"Token":"1"}` |
| [Kintsugi](/kusama/2092-kintsugi) | 211 | 1,273.75 $58,272.67 | 30,312.69 $1,386,775.27 |    |   | $45.75 | `{"Token":"KSM"}` |
| [Robonomics](/kusama/2048-robonomics) | 6 | 536.43 $24,541.14 |   |    |   | $45.75 | `{"Token":"4294967295"}` |
| [Shiden](/kusama/2007-shiden) | 66 | 63.49 $2,904.76 |   |    |   | $45.75 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Encointer](/kusama/1001-encointer) | 953 | 12.72 $581.85 |   |    |   | $45.75 | `{"Token":"KSM"}` |
| [Turing](/kusama/2114-turing) | 5 | 5.36 $245.14 |   |    |   | $45.75 | `{"Token":"1"}` |
| [Amplitude](/kusama/2124-amplitude) | 1 | 1 $45.60 |   |    |   | $45.75 | `{"XCM":"KSM"}` |
| [Dora Factory](/kusama/2115-dorafactory) | 3 | 0.29 $13.27 |   |    |   | $45.75 | `{"Token":"KSM"}` |
| [Khala](/kusama/2004-khala) | 2 | 0.23 $10.74 |   |    |   | $45.75 | `{"Token":"0"}` |
| [BridgeHub](/kusama/1002-bridgehub) | 4 |   |   |    |   |  | `{"Token":"KSM"}` |
| [Statemine](/kusama/1000-statemine) | 1 | 85,000,000  |   |    |   |  | `{"Token":"1234"}` |
## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "KSM" and date(ts) = "2023-02-23"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json) | See [Definitions](/DEFINITIONS.md) for details
