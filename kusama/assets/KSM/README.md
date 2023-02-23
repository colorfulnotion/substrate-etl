# KSM substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io)

*Relay Chain*: kusama


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Kusama](/kusama/0-kusama) | 284,868 | 12,968,461.39 $593,294,178.41 | 309,226.62 $14,146,809.58 | 7,699,542.53  $352,246,393.88 | 7,069,461.43 $323,420,811.88 | $45.75 | `{"Token":"KSM"}` |
| [Moonriver](/kusama/2023-moonriver) | 1,393 | 98,032.91 $4,484,907.73 |   |    |   | $45.75 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 3,109 | 93,140.44 $4,261,082.17 | 0.1 $4.57 |    |   | $45.75 | `{"Token":"KSM"}` |
| [Karura](/kusama/2000-karura) | 8,114 | 61,246.11 $2,801,948.47 |   |    |   | $45.75 | `{"Token":"KSM"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 3,612 | 19,018.05 $870,056.92 |   |    |   | $45.75 | `{"Token":"100"}` |
| [Basilisk](/kusama/2090-basilisk) | 1,866 | 4,068.23 $186,117.54 | 1.44 $65.88 |    |   | $45.75 | `{"Token":"1"}` |
| [Kintsugi](/kusama/2092-kintsugi) | 211 | 1,266.4 $57,936.52 | 30,350.19 $1,388,490.74 |    |   | $45.75 | `{"Token":"KSM"}` |
| [Robonomics](/kusama/2048-robonomics) | 6 | 536.43 $24,541.14 |   |    |   | $45.75 | `{"Token":"4294967295"}` |
| [Encointer](/kusama/1001-encointer) | 950 | 12.72 $581.85 |   |    |   | $45.75 | `{"Token":"KSM"}` |
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
 where symbol = "KSM" and date(ts) = "2023-02-22"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KSM.json) | See [Definitions](/DEFINITIONS.md) for details
