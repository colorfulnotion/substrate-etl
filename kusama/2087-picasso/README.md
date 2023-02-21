# Picasso substrate-etl Summary (Monthly)

_Source_: [picasso.polkaholic.io](https://picasso.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2087



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-21](/kusama/2087-picasso/2023-02-28.md) | 1,684,783 | 1,830,618 | 145,836 |   | 3,256 | 45 | 2,626 | - | 
| [2023-01-01 to 2023-01-31](/kusama/2087-picasso/2023-01-31.md) | 1,466,510 | 1,684,782 | 218,273 |   | 4,935 | 51 | 2,438 | - | 
| [2022-12-01 to 2022-12-31](/kusama/2087-picasso/2022-12-31.md) | 1,263,478 | 1,466,509 | 203,032 |   | 4,585 | 43 | 1,950 | - | 
| [2022-11-01 to 2022-11-30](/kusama/2087-picasso/2022-11-30.md) | 1,130,308 | 1,263,477 | 133,170 |   | 218 | 4 | 1,066 | - | 
| [2022-10-01 to 2022-10-31](/kusama/2087-picasso/2022-10-31.md) | 980,690 | 1,130,307 | 149,618 |   | 18 |  | 20 | - | 
| [2022-09-01 to 2022-09-30](/kusama/2087-picasso/2022-09-30.md) | 842,142 | 980,689 | 138,548 |   | 8 |  | 18 | - | 
| [2022-08-01 to 2022-08-31](/kusama/2087-picasso/2022-08-31.md) | 702,817 | 842,141 | 139,325 |   | 30 |  | 18 | - | 
| [2022-07-01 to 2022-07-31](/kusama/2087-picasso/2022-07-31.md) | 538,460 | 702,816 | 164,357 |   | 47 | 1 | 18 | - | 
| [2022-06-01 to 2022-06-30](/kusama/2087-picasso/2022-06-30.md) | 380,021 | 538,459 | 158,439 |   |  |  | 8 | - | 
| [2022-05-01 to 2022-05-31](/kusama/2087-picasso/2022-05-31.md) | 254,885 | 380,020 | 125,136 |   | 1 |  | 8 | - | 
| [2022-04-01 to 2022-04-30](/kusama/2087-picasso/2022-04-30.md) | 174,270 | 254,884 | 80,615 |   | 1 |  | 8 | - | 
| [2022-03-01 to 2022-03-31](/kusama/2087-picasso/2022-03-31.md) | 94,798 | 174,269 | 79,472 |   | 2 |  | 8 | - | 
| [2022-02-01 to 2022-02-28](/kusama/2087-picasso/2022-02-28.md) | 40,395 | 94,797 | 54,403 |   |  |  | 8 | - | 
| [2022-01-01 to 2022-01-31](/kusama/2087-picasso/2022-01-31.md) | 10,005 | 40,394 | 30,390 |   | 13 | 1 | 8 | - | 
| [2021-12-28 to 2021-12-31](/kusama/2087-picasso/2021-12-31.md) | 1 | 10,004 | 10,004 |   | 1 |  | 6 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.kusama.blocks2087` group by monthDT order by monthDT desc
```



Report source: [https://cdn.polkaholic.io/substrate-etl/kusama/2087.json](https://cdn.polkaholic.io/substrate-etl/kusama/2087.json) | See [Definitions](/DEFINITIONS.md) for details
