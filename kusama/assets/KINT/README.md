# KINT substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io)

*Relay Chain*: kusama


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Kintsugi](/kusama/2092-kintsugi) | 16,116 | 9,999,315.49 $9,832,952.59 | 433.32 $426.11 |    | 2,529,940.02 $2,487,848.32 | $0.98 | `{"Token":"KINT"}` |
| [Moonriver](/kusama/2023-moonriver) | 232 | 16,822.87 $16,542.98 |   |    |   | $0.98 | `{"Token":"175400718394635817552109270754364440562"}` |
| [Karura](/kusama/2000-karura) | 364 | 13,657.93 $13,430.70 |   |    |   | $0.98 | `{"Token":"KINT"}` |
| [Parallel Heiko](/kusama/2085-parallel-heiko) | 89 | 10,541.35 $10,365.97 |   |    |   | $0.98 | `{"Token":"119"}` |
| [Bifrost-Kusama](/kusama/2001-bifrost-ksm) | 35 | 2,582.04 $2,539.08 |   |    |   | $0.98 | `{"Token2":"1"}` |
## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "KINT" and date(ts) = "2023-02-22"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/assets/KINT.json](https://cdn.polkaholic.io/substrate-etl/kusama/assets/KINT.json) | See [Definitions](/DEFINITIONS.md) for details
