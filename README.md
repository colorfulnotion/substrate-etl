
# Substrate ETL

***NOTE: As of February 2023, this is under active development.***

Using Substrate ETL, users can query [Polkadot](/polkadot) and [Kusama](/kusama) networks for
large scale analysis data of blocks, extrinsics, events, balances, logs,
transfers and xcmtransfers.  Substrate ETL relies on Colorful Notion's
[Polkaholic.io indexing](https://github.com/colorfulnotion/polkaholic/)
of Polkadot + Kusama networks into public Google BigQuery datasets
(one dataset for each relay chain).

Network Summary: (All-time, Monthly, Daily)
* [Polkadot](/polkadot)
* [Kusama](/kusama)
* [Both](/SUMMARY.md)

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

You can access Substrate ETL data  in one of two ways:
1. Using the `substrateetl` CLI

1. Using the GCP BigQuery console

The `substrateetl` CLI may be preferred in command line scripts whereas the GCP BigQuery console may be preferred for developing custom exploratory queries.

#### Using the `substrateetl` CLI

_Get blocks and extrinsics of paraid 2007_ ([Schema](#blocksjson), [Reference](#export)):

```bash
# ./substrateetl export \
 --start-date 2022-12-25 --end-date 2022-12-31 \
 --r kusama -p 2007 \
 --blocks-output blocks.json \
 --extrinsics-output extrinsics.json 
```

This exports blocks and extrinsics of kusama paraID 2007 (shiden) to files "blocks.json" and "extrinsics.json".

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

## Schema

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

### logs.json

* [logs.json BigQuery schema](https://github.com/colorfulnotion/substrate-etl/tree/main/schema/logs.json)

Field                   | Type                  | BigQuery Type                 |
------------------------|-----------------------|-------------------------------|
log_id                  | string                | STRING |
hash                    | hex_string            | STRING |
block_time              | bigint                | TIMESTAMP                  |
block_number            | bigint                | INTEGER                  |
block_hash              | hex_string            | STRING |
log                     | JSON                  | JSON |

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


### specversions.json

* [specversions.json BigQuery Schema](https://github.com/colorfulnotion/substrate-etl/tree/main/schema/specversions.json)

Field                   | Type                  | BigQuery Type         |
------------------------|-----------------------|-----------------------|
spec_version            | bigint                | INTEGER               |
block_number            | bigint                | INTEGER |
block_hash              | hex_string            | STRING |
block_time              | bigint                | TIMESTAMP |
spec                    | JSON                  | JSON  |

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


### Command Reference

- [chains](#chains)
- [export](#export)
- [xcmtransfers](#xcmtransfer)

All the commands accept `-h` parameter for help, e.g.:

```bash
# ./substrateetl --help
Usage: substrateetl [options] [command]

Substrate ETL CLI for Polkadot + Kusama Network Substrate chains (C) 2023 Colorful Notion, Inc.

Options:
  -V, --version                       output the version number
  -h, --help                          display help for command

Commands:
  chains [options]                    Dump all chains of relaychain
  export [options]                    Export chain data
  xcmtransfers [options]              Export xcmtransfers data
  help [command]                      display help for command
```


For all `output` parameters the default supported type is json, resulting in newline separated JSON data.  The format type is inferred from the output file name (.json).

#### chains

```bash
# ./substrateetl chains --help
Usage: substrateetl chains [options]

Dump all chains of relaychain

Options:
  -r, --relay-chain <relaychain>  relay chain (polkadot or kusama) (default: "polkadot")
  -h, --help                      display help for command
```

Example:
```bash
# ./substrateetl chains -r polkadot
{"para_id":0,"id":"polkadot","chain_name":"Polkadot","ss58_prefix":0,"symbol":"DOT"}
{"para_id":1000,"id":"statemint","chain_name":"Statemint","ss58_prefix":0,"symbol":"DOT"}
{"para_id":2000,"id":"acala","chain_name":"Acala","ss58_prefix":10,"symbol":"ACA"}
{"para_id":2002,"id":"clover","chain_name":"Clover","ss58_prefix":128,"symbol":"CLV"}
{"para_id":2004,"id":"moonbeam","chain_name":"Moonbeam","ss58_prefix":1284,"symbol":"GLMR"}
{"para_id":2006,"id":"astar","chain_name":"Astar","ss58_prefix":5,"symbol":"ASTR"}
...
{"para_id":2052,"id":"kylin","chain_name":"Kylin","ss58_prefix":42,"symbol":"KYL"}
```

#### export

Exports block chain data for the relay chain or a specific paraid.

```bash
# ./substrateetl export --help
Usage: substrateetl export [options]

Export chain data

Options:
  -r, --relay-chain <relaychain>  relay chain (polkadot or kusama) (default: "polkadot")
  -p, --para-id <paraid>          The paraid (if not supplied paraid=0 is the relaychain) (default: "0")
  -s, --start-date <startdate>    Start date (default: "2022-12-31")
  -e, --end-date <enddate>        End date (default: "2022-12-31")
  --start-block <startblock>      Start block
  --end-block <endblock>          End block
  --blocks-output <output>        The output file for blocks. If not provided blocks data will not be exported.
  --extrinsics-output <output>    The output file for extrinsics. If not provided extrinsics data will not be exported.
  --traces-output <output>        The output file for traces. If not provided traces data will not be exported.
  --events-output <output>        The output file for events. If not provided events data will not be exported.
  --logs-output <output>          The output file for logs. If not provided logs data will not be exported.
  --transfers-output <output>     The output file for logs. If not provided transfers data will not be exported.
  --specversions-output <output>  The output file for logs. If not provided spec versions data will not be exported.
  -h, --help                      display help for command
```

Example:
```bash
./substrateetl export \
  -r polkadot -p 2012 \
  --blocks-output blocks.json \
  --extrinsics-output extrinsics.json \
  --events-output events.json \
  --traces-output traces.json \
  --logs-output logs.json \
  --transfers-output transfers.json \
  --specversions-output specversions.json
```

Omit `--blocks-output`, `--extrinsics-output`, `--traces-output`, `--events-output`, etc. options if you want to export particular sets of data.

#### xcmtransfers

Exports XCM transfers for a relay chain network for a date range.

```
# ./substrateetl xcmtransfers -h
Usage: substrateetl xcmtransfers [options]

Export xcmtransfers data

Options:
  -r, --relay-chain <relaychain>  relay chain (polkadot or kusama) (default: "polkadot")
  -s, --start-date <startdate>    Start date (default: "2022-12-31")
  -e, --end-date <enddate>        End date (default: "2022-12-31")
  --xcmtransfers-output <output>  The output file for xcmtransfers. If not provided xcmtransfers data will not be exported. (default: "xcmtransfers.json")
  -h, --help                      display help for command
```

Example:
```bash
# ./substrateetl xcmtransfers \
  -r polkadot \
  --start-date 2022-12-25 --end-date 2022-12-31 \
  --xcmtransfers-output xcmtransfers.json 
```


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
* `chains`  (system)
* `blocks{paraid}`
* `extrinsics{paraid}`
* `traces{paraid}`
* `transfers{paraid}`
* `events{paraid}`
* `logs{paraid}`
* `specversions{paraid}`
* `xcmtransfers` (system)

Thus polkadot relay chain blocks are held in `substrate-etl.polkadot.blocks0`, acala blocks are stored in `substrate-etl.polkadot.blocks2000`, and so on.  

Notes:
* System tables `chains` and `xcmtransfers` are not specific to any parachain and apply to the whole network.
* All tables are date partitioned, to support low cost, high speed scans, with the exception of `chains` and `specversions{paraid}`
* If a parachain has a renewal, the first paraid is used for subsequent renewals.



### Design choices:

* At present, the sole data source is the Polkaholic.io indexer.  Data is limited to December 2022 data but will have increasing larger archive, then loaded in daily to hourly, and potentially streamed in real-time. 
* All temporal BigQuery datasets are date-partitioned and split into multiple tables by {paraId} to enable low-cost low-latency BigQuery scans for specific date, parachain combinations. Timestamped data use BigQuery TIMESTAMP date types.
* Addresses are provided in “public key” (signer_pub_key) and SS58 Address (signer_ss58) form to support multi-chain queries with wild card table selection eg`select * from polkadot.extrinsics* where signer_pub_key='<pubkey>' ` aggregates multi-chain transactional history for a given account. 
* When assets are mentioned (transfers, xcmtransfers), we “decimalize” the output and include basic USD price valuation if possible
Trace support is unavailable for some chains because the chain does not publish an compilable open source repo with bootnodes.

### Contributions

Contributions are welcome.  Contributors will be invited to a dedicated Telegram group and are held to the [Polkadot communities' Code of Conduct](https://github.com/paritytech/polkadot/blob/master/CODE_OF_CONDUCT.md).

