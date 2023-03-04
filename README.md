
# Substrate ETL

***Status: As of February 2023, this is under active development, but we welcome feedback.***

Using Substrate ETL, users can query [Polkadot](/polkadot) and [Kusama](/kusama) networks for
large scale analysis data of blocks, extrinsics, events, balances, logs,
transfers and xcmtransfers.  Substrate ETL relies on Colorful Notion's
[Polkaholic.io indexing](https://github.com/colorfulnotion/polkaholic/)
of Polkadot + Kusama networks into public Google BigQuery datasets
(one dataset for each relay chain).

Network Summary: (All-time, Monthly, Daily)
* [Polkadot](/polkadot)
* [Kusama](/kusama)
* [All Networks (Polkadot+Kusama)](SUMMARY.md)

Chain data is appended daily.  Included in each summary are sample queries.  See also this [XCM Transfers blog post](https://colorfulnotion.medium.com/polkaholic-ios-2022-xcm-transfers-in-bigquery-public-dataset-substrate-etl-polkadot-xcmtransfers-dfa6f2261ce9).  

### Quick Start

You can access Substrate ETL data using the [Google Cloud BigQuery](https://cloud.google.com/bigquery) console.

_Get blocks of paraid 2007_ ([Schema](#blocksjson)):
```bash
select * from `substrate-etl.kusama.blocks2007` where DATE(block_time) >= "2022-12-25" and DATE(block_time) <= "2022-12-31"
```

_Get extrinsics of paraid 2007_ ([Schema](#extrinsicsjson)):
```bash
select * from `substrate-etl.kusama.extrinsics2007` where DATE(block_time) >= "2022-12-25" and DATE(block_time) <= "2022-12-31"
```

_Get XCM Transfers of Polkadot Network_ ([Schema](#xcmtransfersjson)):
```bash
select * from `substrate-etl.polkadot.xcmtransfers` where DATE(block_time) >= "2022-12-25" and DATE(block_time) <= "2022-12-31"
```


### Public Datasets in BigQuery

Substrate data for each chain is held in 9 tables in one of 2 public
datasets, with one dataset for each relay chain and all its
parachains.  By convention, relaychain data is considered "paraid=0".

Project: (Location: us-central1)
* `substrate-etl`

Datasets: 
* `polkadot`
* `kusama`

Tables: (replace `{paraID}` with a specific para ID, e.g. `2000` for `acala`)

* _Blocks_: `substrate-etl.${relayChain}.blocks${paraID}` (date-partitioned by `block_time`) - [Schema](/schema/balances.json)
* _Extrinsics_: `substrate-etl.${relayChain}.extrinsics${paraID}` (date-partitioned by `block_time`) - [Schema](/schema/extrinsics.json)
* _Events_: `substrate-etl.${relayChain}.events${paraID}` (date-partitioned by `block_time`) - [Schema](/schema/events.json)
* _Transfers_: `substrate-etl.${relayChain}.transfers${paraID}` (date-partitioned by `block_time`) - [Schema](/schema/transfers.json)
* _Balances_: `substrate-etl.${relayChain}.balances${paraID}` (date-partitioned by `ts`) - [Schema](/schema/balances.json)
* _Active Accounts_: `substrate-etl.${relayChain}.accountsactive${paraID}` (date-partitioned by `ts`) - [Schema](/schema/accountsactive.json)
* _Passive Accounts_: `substrate-etl.${relayChain}.accountspassive${paraID}` (date-partitioned by `ts`) - [Schema](/schema/accountspassive.json)
* _New Accounts_: `substrate-etl.${relayChain}.accountsnew${paraID}` (date-partitioned by `ts`)  - [Schema](/schema/accountsnew.json)
* _Reaped Accounts_: `substrate-etl.${relayChain}.accountsreaped${paraID}` (date-partitioned by `ts`) - [Schema](/schema/accountsreaped.json)
* _Assets_: `substrate-etl.${relayChain}.assets` (relaychain-wide table: filter on `para_id` as needed) - [Schema](/schema/assets.json)
* _XCM Assets_: `substrate-etl.${relayChain}.xcmassets` (relaychain-wide table: filter on `para_id` as needed) - [Schema](/schema/xcmassets.json)
* _XCM Transfers_: `substrate-etl.${relayChain}.xcmtransfers` (relaychain-wide table: filter on `origination_para_id` or `destination_para_id` as needed; date-partitioned by `origination_ts`) - [Schema](/schema/xcmtransfers.json)
* _XCM Messages_: `substrate-etl.${relayChain}.xcm` (relaychain-wide table: filter on  `origination_para_id` or `destination_para_id` as needed; date-partitioned by `origination_ts`) - [Schema](/schema/xcm.json)

Thus [polkadot](/polkadot/0-polkadot) relay chain blocks are held in `substrate-etl.polkadot.blocks0`, [acala](/polkadot/2000-polkadot) blocks are stored in `substrate-etl.polkadot.blocks2000`, and similarly for any chain / table name.  

See [Definitions](/DEFINITIONS.md) for how the tables are constructed and tentative definitions.

Every chain has a auto generated README with the chains tables explicitly enumerated, and includes sample queries.

Notes:
* System tables (`chains`, `assets`, `xcmassets`, `xcmtransfers`, `xcm`) are not specific to any parachain and apply to the whole relay chain.
* All tables (except for `chains`, `assets` and `xcmassets`) are date-partitioned to support low cost, high speed scans.
* If a parachain has a renewal, the first paraid assigned is used for subsequent renewals.

Schemas for several of the most common source tables are listed below -- a full list of schemas can be found [here](/schema).

Substrate has preliminary EVM support:

* _EVM Transactions_: `substrate-etl.${relayChain}.evmtxs{paraID}` (date-partitioned by `block_time`) - [Schema](/schema/evmtxs.json)
* _EVM Transfers_: `substrate-etl.${relayChain}.evmtransfers${paraID}` (date-partitioned by `block_time`) - [Schema](/schema/evmtransfers.json)
* _Active Accounts_: `substrate-etl.${relayChain}.accountsevmactive${paraID}` (date-partitioned by `ts`) - [Schema](/schema/accountsevmactive.json)
* _Passive Accounts_: `substrate-etl.${relayChain}.accountsevmpassive${paraID}` (date-partitioned by `ts`) - [Schema](/schema/accountsevmpassive.json)

### chains.json

See:
* [chains.json BigQuery schema](https://github.com/colorfulnotion/substrate-etl/tree/main/schema/chains.json)

Field               | Type            | BigQuery Type             |
--------------------|-----------------|---------------------------|
para_id             | bigint          | INTEGER |
chain_name          | string          | STRING  |
id                  | hex_string      | STRING  |
ss58_prefix         | bigint          | INTEGER |
symbol              | string          | INTEGER |
decimals            | string          | INTEGER |

### blocks.json

See:
* [blocks.json BigQuery schema](https://github.com/colorfulnotion/substrate-etl/tree/main/schema/blocks.json)

Field               | Type            | BigQuery Type             |
--------------------|-----------------|---------------------------|
hash                | hex_string      | STRING                    |
parent_hash         | hex_string      | STRING |
number              | bigint          | INTEGER |
state_root          | hex_string      | STRING |
extrinsics_root     | hex_string      | STRING |
block_time          | bigint          | TIMESTAMP   |
author_ss58         | string          | STRING | 
author_pub_key         | string          | STRING | 
spec_version        | bigint          | INTEGER |
relay_block_number  | bigint          | INTEGER |
relay_state_root    | hex_string      | STRING |
extrinsic_count     | bigint          | INTEGER |
event_count         | bigint          | INTEGER |
transfer_count      | bigint          | INTEGER |

### extrinsics.json

See:
* [extrinsics.json BigQuery schema](https://github.com/colorfulnotion/substrate-etl/tree/main/schema/extrinsics.json)

Field                   | Type                  | BigQuery Type |
------------------------|-----------------------|---------|
hash                    | hex_string            | STRING |
extrinsic_id            | string                | STRING |
block_time              | bigint                | TIMESTAMP |
block_number            | bigint                | INTEGER |
block_hash              | hex_string            | STRING |
lifetime                | JSON                  | JSON |
section                 | string                | STRING |
method                  | string                | STRING |
params                  | JSON                  | JSON |
fee                     | bigint                | INTEGER |
weight                  | bigint                | INTEGER |
signed                  | boolean               | BOOLEAN |
signer_ss58             | string                | STRING |
signer_pub_key          | hex_string            | STRING |

### events.json

* [events.json BigQuery Schema](https://github.com/colorfulnotion/substrate-etl/tree/main/schema/events.json)

Field                   | Type                  | BigQuery  Type                 |
------------------------|-----------------------|---------|
event_id                | string                | STRING  |
section                 | string                | STRING  |
method                  | string                | STRING  |
data                    | JSON                  | JSON    |
extrinsic_id            | string                | STRING  | 
extrinsic_hash          | hex_string            | STRING  |
block_time              | bigint                | TIMESTAMP |
block_number            | bigint                | INTEGER                  |
block_hash              | hex_string            | STRING |

### transfers.json

* [transfers.json BigQuery schema](https://github.com/colorfulnotion/substrate-etl/tree/main/schema/transfers.json)

Field                   | Type                  | BigQuery Type       |
------------------------|-----------------------|-------------------------------|
event_id                | string                | STRING |
section                 | string                | STRING |
method                  | string                | STRING |
data                    | JSON                  | JSON |
extrinsic_id            | string                | STRING | 
extrinsic_hash          | hex_string            | STRING | 
block_time              | bigint                | TIMESTAMP |
block_number            | bigint                | INTEGER | 
block_hash              | hex_string            | STRING |
from_ss58               | string                | STRING |
to_ss58                 | string                | STRING |
from_pub_key            | string                | STRING | 
to_pub_key              | string                | STRING |
asset                   | string                | STRING |
price_usd               | float                | FLOAT64 |
amount_usd              | float                | FLOAT64 |
symbol                  | string                | STRING  |
decimals                | int8                  | INTEGER | 
amount                  | float                 | FLOAT64 |
raw_amount              | bigint                | INTEGER |

### balances.json

* [balances.json BigQuery Schema](https://github.com/colorfulnotion/substrate-etl/tree/main/schema/balances.json)

Field                   | Type                  | BigQuery Type         |
------------------------|-----------------------|-----------------------|
symbol                  | string                | STRING                |
address_ss58            | string                | STRING                |
address_pubkey          | string                | STRING                |
ts                      | bigint                | TIMESTAMP             |
id                      | string                | STRING  |
chain_name              | string                | STRING  |
para_id                 | int                   | INTEGER |
free                    | bigint                | FLOAT |
free_usd                | float                 | FLOAT |
reserved                | float                 | FLOAT |
reserved_usd            | float                 | FLOAT |
misc_frozen             | float                 | FLOAT |
misc_frozen_usd         | float                 | FLOAT |
frozen                  | float                 | FLOAT |
frozen_usd              | float                 | FLOAT |



### xcmtransfers.json

* [xcmtransfers.json BigQuery Schema](https://github.com/colorfulnotion/substrate-etl/tree/main/schema/xcmtransfers.json)

Field                   | Type                  | BigQuery Type         |
------------------------|-----------------------|-----------------------|
symbol             | string            | STRING |
price_usd          | float            | FLOAT |
origination_ts     | bigint                | TIMESTAMP |
origination_chain_name  | string            | STRING |
origination_id          | string            | STRING |
origination_extrinsic_hash          | hex_string            | STRING |
origination_extrinsic_id            | string                | STRING |
origination_transfer_index          | bigint                | INTEGER               |
origination_xcm_index               | bigint                | INTEGER               |
origination_transaction_hash        | hex_string            | STRING               |
origination_msg_hash                | hex_string            | STRING           |
origination_is_msg_sent             | boolean               | BOOLEAN           |
origination_block_number            | bigintn               | INTEGER          |
origination_section                 | string                | STRING |
origination_method                  | string                | STRING |
origination_para_id                 | bigint                | INTEGER               |
origination_sender_ss58             | string                | STRING               |
origination_sender_pub_key          | string                | STRING               |
destination_para_id                 | bigint                | INTEGER               |
origination_amount_sent             | float                 | FLOAT |
origination_amount_sent_usd         | float                 | FLOAT |
origination_tx_fee                  | float                 | FLOAT |
origination_tx_fee_usd      | float                 | FLOAT |
origination_tx_fee_symbol   | string                 | STRING |
origination_is_fee_item     | boolean                 | BOOLEAN |
origination_sent_at         | bigint                 | INTEGER |
destination_execution_status     | string                 | STRING |
destination_chain_name           | string                 | STRING |
destination_para_id              | integer                 |INTEGER |
destination_beneficiary_ss58     | string                 | STRING |
destination_beneficiary_pub_key  | string                 | STRING |
destination_extrinsic_id         | string                 | STRING |
destination_event_id             | string                 | STRING |
destination_block_number         | bigint                 | INTEGER |
destination_ts                   | bigint                 | TIMESTAMP |
destination_amount_received      | float                 | FLOAT |
destination_amount_received_usd  | float                 | FLOAT |
destination_teleport_fee         | float                 | FLOAT |
destination_teleport_fee_usd     | float                 | FLOAT |
destination_teleport_fee_symbol  | string                | STRING |
xcm_info                         | JSON                  | JSON  |
xcm_info_last_update_time        | bigint                  | TIMESTAMP  |

**Notes**:

See [this blog post](https://colorfulnotion.medium.com/polkaholic-ios-2022-xcm-transfers-in-bigquery-public-dataset-substrate-etl-polkadot-xcmtransfers-dfa6f2261ce9)
for a tutorial with representative queries covering the above.


### Reporting / Missing data

Generally the data is complete as can be, but the sole data source is the Polkaholic.io indexer.  

From this single source, the primary causes of missing data stem from:
* Chains that do not provide a public RPC node.  Most of the time, these chains are new with very little actual activity.  
* Chains that have a public RPC node, but no RPC Endpoint is an _archive_ nodes
* Chains that are being onboarded 
* Some blocks fail decoding due to chain halting, or are missing an up-to-date node.js API package for type definitions.

A daily/hourly github actions process summarizes the state of the index for:
* [polkadot](/polkadot)
* [kusama](/kusama)

and for every single chain that is being indexed.  See the report **Issues** column for chains with systemic issues or blocks that are missing.  Generally the last 24 hrs have blocks that are missing that are filled in by the end of the day.

### Design choices:

* All temporal BigQuery datasets are date-partitioned and split into multiple tables by {paraId} to enable low-cost low-latency BigQuery scans for specific date, parachain combinations. Timestamped data use BigQuery TIMESTAMP date types.
* Addresses are provided in “public key” (signer_pub_key) and SS58 Address (signer_ss58) form to support multi-chain queries with wild card table selection eg`select * from polkadot.extrinsics* where signer_pub_key='<pubkey>' ` aggregates multi-chain transactional history for a given account. 
* When assets are mentioned (transfers, xcmtransfers), we "decimalize" the output and include basic USD price valuation if possible.  Many assets are not valued with USD values in this way.

### Roadmap

Spring/Summer 2023
* Full XCMv3 Multilocation support
* EVM Chain Support: Transaction / Transfers, Contracts, Tokens
* GKE systematization, Reliability Improvements
* New functionality based on community feedback

Fall/Winter 2023-2024
* Bridgehub integration 
* Reporting on Comparison to other ecosystems also modelled in BigQuery
* New functionality based on community feedback

Your feedback is important -- please [submit an issue](https://github.com/colorfulnotion/substrate-etl/issues).

### Contributions

Contributions are welcome.  Contributors will be invited to a
dedicated Telegram group and are held to the [Polkadot communities' Code of Conduct](https://github.com/paritytech/polkadot/blob/master/CODE_OF_CONDUCT.md).

