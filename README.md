
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

Included in each summary are sample queries.  See also this [XCM Transfers blog post](https://colorfulnotion.medium.com/polkaholic-ios-2022-xcm-transfers-in-bigquery-public-dataset-substrate-etl-polkadot-xcmtransfers-dfa6f2261ce9)

A `substrateetl` command line interface supports querying the
data by relaychain + parachain id combination (e.g. is "-r polkadot -p
2000").  Blockchain data is appended daily.

Install Substrate ETL:

```
git clone git@github.com:colorfulnotion/substrate-etl.git
npm install 
```
Then, set up a Google Cloud Platform (GCP) account to access the project/datasets/tables

### Quick Start

You can access Substrate ETL data using the GCP BigQuery console.

_Get XCM transfers of polkadot_ ([Schema](#xcmtransfersjson), [Reference](#xcmtransfers)):

```bash
# ./substrateetl xcmtransfers  --r polkadot --start-date 2022-12-25 --end-date 2022-12-31  --xcmtransfers-output xcmtransfers.json
```

This exports XCM transfers of polkadot network from 2022-12-25 to 2022-12-31 to a file "xcmtransfers.json"

*Using the GCP BigQuery console*

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

## Table of Contents

- [Substrate ETL](#substrate-etl)
  - [Table of Contents](#table-of-contents)
  - [Schema](#schema)
    - [chains.json](#chainsjson)
    - [blocks.json](#blocksjson)
    - [events.json](#eventsjson)
    - [extrinsics.json](#extrinsicsjson)
    - [balances.json](#balancesjson)
    - [transfers.json](#transfersjson)
    - [logs.json](#logsjson)
    - [xcmtransfers.json](#xcmtransfersjson)
  - [Public Datasets in BigQuery](#public-datasets-in-bigquery)
  - [Exporting the Blockchain](#exporting-the-blockchain)
    - [Command Reference](#command-reference)
      - [chains](#chains)
      - [export](#export)
      - [xcmtransfers](#xcmtransfers)
    - [Running Tests](#running-tests)

### Public Datasets in BigQuery

Substrate data for each chain is held in 7 tables in one of 2 public
datasets, with one dataset for each relay chain and all its
parachains.  By convention, relaychain data is considered "paraid=0".

Project: (Location: us-central1)
* `substrate-etl`

Datasets: 
* `polkadot`
* `kusama`

Tables: (replace `{paraid}` with a specific paraid, e.g. `2000` for `acala`)
* `blocks{paraid}`
* `extrinsics{paraid}`
* `transfers{paraid}`
* `events{paraid}`
* `logs{paraid}`
* `accountsactive{paraid}`
* `accountspassive{paraid}`
* `accountsnew{paraid}`
* `accountsreaped{paraid}`
* `chains` (system)
* `assets` (system)
* `xcmassets` (system)
* `xcmtransfers` (system)

Thus polkadot relay chain blocks are held in `substrate-etl.polkadot.blocks0`, acala blocks are stored in `substrate-etl.polkadot.blocks2000`, and so on.  

See [Definitions](/DEFINITIONS.md) for how the tables are constructed and tentative definitions.

Every chains has a auto generated README with the chains tables explicitly enumerated, and includes sample queries.

Notes:
* System tables (`chains`, `assets`, `xcmassets`, `xcmtransfers`) are not specific to any parachain and apply to the whole relay chain.
* All tables (except for `chains`, `assets` and `xcmassets`) are date-partitioned  to support low cost, high speed scans.
* If a parachain has a renewal, the first paraid is used for subsequent renewals.

Schemas for several of the most common source tables are listed below -- a full list of schemas can be found [here](/schemas).

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

From this single source the primary causes of missing data stem from:
* Chains that do not provide a public node.  Most of the time, there are new with very little actual activity.  
* Chains that have a public node, but these nodes are not _archive_ nodes
* Chains that are being onboarded.
* Some blocks fail decoding due to chain halting, missing APIs with type.

A daily/hourly github actions process summarizes the state of the index for:
* [polkadot](/polkadot)
* [kusama](/kusama)
and for every single chain that is being indexed.

See the **Crawling Status** column for chains with systemic issues, and the **# Missing** column for blocks that are missing


### Design choices:

* All temporal BigQuery datasets are date-partitioned and split into multiple tables by {paraId} to enable low-cost low-latency BigQuery scans for specific date, parachain combinations. Timestamped data use BigQuery TIMESTAMP date types.
* Addresses are provided in “public key” (signer_pub_key) and SS58 Address (signer_ss58) form to support multi-chain queries with wild card table selection eg`select * from polkadot.extrinsics* where signer_pub_key='<pubkey>' ` aggregates multi-chain transactional history for a given account. 
* When assets are mentioned (transfers, xcmtransfers), we “decimalize” the output and include basic USD price valuation if possible.
* EVM Transaction / Transfers support is under active development and is planned for Q2. 

### Contributions

Contributions are welcome.  Contributors will be invited to a
dedicated Telegram group and are held to the [Polkadot communities' Code of Conduct](https://github.com/paritytech/polkadot/blob/master/CODE_OF_CONDUCT.md).

