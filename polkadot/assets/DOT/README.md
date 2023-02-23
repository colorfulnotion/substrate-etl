# DOT substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io)

*Relay Chain*: polkadot


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Polkadot](/polkadot/0-polkadot) | 1,069,630 | 1,164,977,503.82 $8,729,696,735.90 | 121,167,559.32 $907,962,637.55 | 668,541,920.46  $5,009,683,192.80 | 662,310,695.93 $4,962,989,844.40 | $7.49 | `{"Token":"DOT"}` |
| [Acala](/polkadot/2000-acala) | 10,184 | 1,543,884.55 $11,569,016.49 |   |    |   | $7.49 | `{"Token":"DOT"}` |
| [Parallel](/polkadot/2012-parallel) | 8,806 | 826,686.91 $6,194,734.24 |   |    |   | $7.49 | `{"Token":"101"}` |
| [Astar](/polkadot/2006-astar) | 1,443 | 154,701.84 $1,159,249.98 |   |    |   | $7.49 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 456 | 123,324.95 $924,128.90 |   |    |   | $7.49 | `{"Token2":"0"}` |
| [HydraDX](/polkadot/2034-hydradx) | 1,455 | 56,980.9 $426,983.36 |   |    |   | $7.49 | `{"Token":"5"}` |
| [Interlay](/polkadot/2032-interlay) | 159 | 41,593.52 $311,678.80 | 628,422.8 $4,709,052.72 |    |   | $7.49 | `{"Token":"DOT"}` |
| [Statemint](/polkadot/1000-statemint) | 572 | 3,326.92 $24,930.11 | 7,898.85 $59,189.58 |    |   | $7.49 | `{"Token":"DOT"}` |
| [Collectives](/polkadot/1001-collectives) | 19 | 34.25 $256.64 | 0.4 $3.01 |    |   | $7.49 | `{"Token":"DOT"}` |
## Substrate-etl Queries:
You can generate the above summary data using the following queries using the public dataset `substrate-etl` in Google BigQuery:
```bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from `substrate-etl.kusama.balances*` 
 where symbol = "DOT" and date(ts) = "2023-02-22"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json) | See [Definitions](/DEFINITIONS.md) for details
