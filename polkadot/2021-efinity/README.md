# Efinity substrate-etl Summary (Monthly)

_Source_: [efinity.polkaholic.io](https://efinity.polkaholic.io)

*Relay Chain*: polkadot
*Para ID*: 2021



| Month | Start Block | End Block | # Blocks | # Missing | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |
| ----- | ----------- | --------- | -------- | --------- | --------------------------- | ----------------------- | ------------------------------- | ------ |
| [2023-02-01 to 2023-02-15](/polkadot/2021-efinity/2023-02-28.md) | 2,089,532 | 2,177,882 | 88,351 | none  | 7,989 | 30 | 16,064 | - | 
| [2023-01-01 to 2023-01-31](/polkadot/2021-efinity/2023-01-31.md) | 1,895,402 | 2,089,531 | 194,130 | none  | 3,132 | 22 | 15,989 | - | 
| [2022-12-01 to 2022-12-31](/polkadot/2021-efinity/2022-12-31.md) | 1,689,841 | 1,895,401 | 205,561 | none  | 9,933 | 16 | 15,846 | - | 
| [2022-11-01 to 2022-11-30](/polkadot/2021-efinity/2022-11-30.md) | 1,489,730 | 1,689,840 | 200,111 | none  | 1,325 | 17 | 15,760 | - | 
| [2022-10-01 to 2022-10-31](/polkadot/2021-efinity/2022-10-31.md) | 1,285,086 | 1,489,729 | 204,644 | none  | 888 | 12 | 15,635 | - | 
| [2022-09-01 to 2022-09-30](/polkadot/2021-efinity/2022-09-30.md) | 1,097,430 | 1,285,085 | 187,656 | none  | 723 | 10 | 15,571 | - | 
| [2022-08-01 to 2022-08-31](/polkadot/2021-efinity/2022-08-31.md) | 905,358 | 1,097,429 | 192,072 | none  | 412 | 9 | 15,549 | - | 
| [2022-07-01 to 2022-07-31](/polkadot/2021-efinity/2022-07-31.md) | 716,102 | 905,357 | 189,256 | none  | 434 | 11 | 15,534 | - | 
| [2022-06-01 to 2022-06-30](/polkadot/2021-efinity/2022-06-30.md) | 534,582 | 716,101 | 181,520 | none  | 945 | 15 | 15,515 | - | 
| [2022-05-01 to 2022-05-31](/polkadot/2021-efinity/2022-05-31.md) | 339,781 | 534,581 | 194,801 | none  | 13 |  | 10 | - | 
| [2022-04-01 to 2022-04-30](/polkadot/2021-efinity/2022-04-30.md) | 135,189 | 339,780 | 204,592 | none  |  |  | 3 | - | 
| [2022-03-12 to 2022-03-31](/polkadot/2021-efinity/2022-03-31.md) | 1 | 135,188 | 135,188 | none  |  |  | 3 | - | 

## # Blocks
```
SELECT LAST_DAY( date(block_time)) as monthDT, Min(date(block_time)) startBN, max(date(block_time)) endBN, min(number) minBN, max(number) maxBN, count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing FROM `substrate-etl.polkadot.blocks2021` group by monthDT order by monthDT desc```

