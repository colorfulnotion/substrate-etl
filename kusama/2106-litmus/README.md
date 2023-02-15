# Litmus substrate-etl Summary (Monthly)

_Source_: [litmus.polkaholic.io](https://litmus.polkaholic.io)

*Relay Chain*: kusama
*Para ID*: 2106



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-15](/kusama/2106-litmus/2023-02-28.md) | 1,890,699 | 1,993,149 | 102,451 | none  | 64 | 3 | 13,905 | - | 
| [2023-01-01 to 2023-01-31](/kusama/2106-litmus/2023-01-31.md) | 1,673,284 | 1,890,698 | 217,415 | none  | 133 | 3 | 13,906 | - | 
| [2022-12-01 to 2022-12-31](/kusama/2106-litmus/2022-12-31.md) | 1,463,117 | 1,673,283 | 210,167 | none  | 206 | 5 | 13,905 | - | 
| [2022-11-01 to 2022-11-30](/kusama/2106-litmus/2022-11-30.md) | 1,255,236 | 1,463,116 | 207,881 | none  | 244 | 5 | 13,906 | - | 
| [2022-10-01 to 2022-10-31](/kusama/2106-litmus/2022-10-31.md) | 1,043,677 | 1,255,235 | 211,559 | none  | 301 | 7 | 13,904 | - | 
| [2022-09-01 to 2022-09-30](/kusama/2106-litmus/2022-09-30.md) | 865,675 | 1,043,676 | 178,002 | none  | 343 | 6 | 13,889 | - | 
| [2022-08-01 to 2022-08-31](/kusama/2106-litmus/2022-08-31.md) | 712,305 | 865,674 | 153,370 | none  | 245 | 4 | 11,918 | - | 
| [2022-07-01 to 2022-07-31](/kusama/2106-litmus/2022-07-31.md) | 567,814 | 712,304 | 144,491 | none  | 150 | 4 | 3,832 | - | 
| [2022-06-01 to 2022-06-30](/kusama/2106-litmus/2022-06-30.md) | 407,276 | 567,813 | 160,538 | none  | 97 | 2 | 3,831 | - | 
| [2022-05-01 to 2022-05-31](/kusama/2106-litmus/2022-05-31.md) | 257,647 | 407,275 | 149,629 | none  | 92 | 3 | 3,827 | - | 
| [2022-04-01 to 2022-04-30](/kusama/2106-litmus/2022-04-30.md) | 154,229 | 257,646 | 103,418 | none  | 156 | 4 | 3,824 | - | 
| [2022-03-01 to 2022-03-31](/kusama/2106-litmus/2022-03-31.md) | 32,417 | 154,228 | 121,812 | none  | 94 | 2 | 3,821 | - | 
| [2022-02-20 to 2022-02-28](/kusama/2106-litmus/2022-02-28.md) | 1 | 32,416 | 32,416 | none  | 2 |  | 16 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.kusama.blocks2106` group by monthDT order by monthDT desc```

