# DOT substrate-etl Summary

_Source_: [polkaholic.io](https://polkaholic.io)

*Relay Chain*: polkadot


| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |
| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |
| [Polkadot](/polkadot/0-polkadot) | 1,070,137 | 1,165,347,673.95 $8,732,470,585.99 | 121,168,682.24 $907,971,052.11 | 668,753,737.26  $5,011,270,430.67 | 662,522,498.71 $4,964,576,977.22 | $7.49 | `{"Token":"DOT"}` |
| [Moonbeam](/polkadot/2004-moonbeam) | 7,449 | 2,110,356.41 $15,813,843.09 |   |    |   | $7.49 | `{"Token":"42259045809535163221576417993425387648"}` |
| [Acala](/polkadot/2000-acala) | 10,181 | 1,544,010.93 $11,569,963.46 |   |    |   | $7.49 | `{"Token":"DOT"}` |
| [Parallel](/polkadot/2012-parallel) | 8,810 | 823,768.16 $6,172,862.71 |   |    |   | $7.49 | `{"Token":"101"}` |
| [Astar](/polkadot/2006-astar) | 1,444 | 154,198.82 $1,155,480.62 |   |    |   | $7.49 | `{"Token":"340282366920938463463374607431768211455"}` |
| [Bifrost-Polkadot](/polkadot/2030-bifrost-dot) | 452 | 121,806.62 $912,751.42 |   |    |   | $7.49 | `{"Token2":"0"}` |
| [HydraDX](/polkadot/2034-hydradx) | 1,459 | 57,530.46 $431,101.41 |   |    |   | $7.49 | `{"Token":"5"}` |
| [Interlay](/polkadot/2032-interlay) | 159 | 41,511.11 $311,061.27 | 630,256.86 $4,722,796.17 |    |   | $7.49 | `{"Token":"DOT"}` |
| [Statemint](/polkadot/1000-statemint) | 577 | 3,330.63 $24,957.88 | 7,898.85 $59,189.58 |    |   | $7.49 | `{"Token":"DOT"}` |
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
 where symbol = "DOT" and date(ts) = "2023-02-23"
 group by para_id
 order by free_usd desc
```


Report source: [https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json](https://cdn.polkaholic.io/substrate-etl/polkadot/assets/DOT.json) | See [Definitions](/DEFINITIONS.md) for details
