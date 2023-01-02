
# Substrate ETL

***NOTE: As of January 2023, this is under active development.  Data is only available for December 2022.***

Using Substrate ETL, users can query Polkadot and Kusama networks for
large scale analysis data of blocks, extrinsics, events, traces, logs,
transfers and xcmtransfers.  Substrate ETL relies on Colorful Notion's
[Polkaholic.io indexer dump](https://github.com/colorfulnotion/polkaholic/blob/main/substrate/dumpSubstrateETL)
of Polkadot + Kusama networks into public Google BigQuery datasets
(one dataset for each relay chain).


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
    - [traces.json](#tracesjson)
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

### traces.json

* [traces.json BigQuery Schema](https://github.com/colorfulnotion/substrate-etl/tree/main/schema/traces.json)

Field                   | Type                  | BigQuery Type         |
------------------------|-----------------------|-----------------------|
block_number            | bigint                | INTEGER               |
trace_id                | string                | STRING                |
k                       | hex_string            | STRING |
v                       | hex_string            | STRING |
section                 | string                | STRING |
storage                 | string                | STRING |
pk_extra                | JSON                  | JSON |
pv                      | JSON                  | JSON | 

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
extrinsic_hash          | hex_string            | STRING |
extrinsic_id            | bigint                | INTEGER |
transfer_index          | bigint                | INTEGER               |
xcm_index               | bigint                | INTEGER               |
para_id                 | bigint                | INTEGER               |
para_id_dest            | bigint                | INTEGER               |
block_time              | bigint                | TIMESTAMP |
symbol                  | string                | STRING |
price_usd               | float                 | FLOAT |
amount_sent_usd         | float                 | FLOAT |
amount_received_usd     | float                 | FLOAT |
xcm_info                | JSON                  | JSON  |

**Notes**:
1. relay_chain_block_number only available as of December 2022

1. parses of trace "k" (in `pk_extra`) and "v" (in `pv`) are best effort


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

Below we list the chains covered in Polkadot and Kusama networks and exhaustively list the tables that can be queried.

#### Polkadot

|chain|blocks|extrinsics|events|transfers|logs|traces|specversions|
|-----|------|----------|------|---------|----|------|------------|
0 - polkadot|polkadot.blocks0|polkadot.extrinsics0|polkadot.events0|polkadot.transfers0|polkadot.logs0|polkadot.traces0|polkadot.specversions0|
1000 - statemint|polkadot.blocks1000|polkadot.extrinsics1000|polkadot.events1000|polkadot.transfers1000|polkadot.logs1000|polkadot.traces1000|polkadot.specversions1000|
2000 - acala|polkadot.blocks2000|polkadot.extrinsics2000|polkadot.events2000|polkadot.transfers2000|polkadot.logs2000|polkadot.traces2000|polkadot.specversions2000|
2002 - clover|polkadot.blocks2002|polkadot.extrinsics2002|polkadot.events2002|polkadot.transfers2002|polkadot.logs2002|polkadot.traces2002|polkadot.specversions2002|
2004 - moonbeam|polkadot.blocks2004|polkadot.extrinsics2004|polkadot.events2004|polkadot.transfers2004|polkadot.logs2004|polkadot.traces2004|polkadot.specversions2004|
2006 - astar|polkadot.blocks2006|polkadot.extrinsics2006|polkadot.events2006|polkadot.transfers2006|polkadot.logs2006|polkadot.traces2006|polkadot.specversions2006|
2011 - equilibrium|polkadot.blocks2011|polkadot.extrinsics2011|polkadot.events2011|polkadot.transfers2011|polkadot.logs2011|polkadot.traces2011|polkadot.specversions2011|
2012 - parallel|polkadot.blocks2012|polkadot.extrinsics2012|polkadot.events2012|polkadot.transfers2012|polkadot.logs2012|polkadot.traces2012|polkadot.specversions2012|
2013 - litentry|polkadot.blocks2013|polkadot.extrinsics2013|polkadot.events2013|polkadot.transfers2013|polkadot.logs2013|polkadot.traces2013|polkadot.specversions2013|
2019 - composable|polkadot.blocks2019|polkadot.extrinsics2019|polkadot.events2019|polkadot.transfers2019|polkadot.logs2019|polkadot.traces2019|polkadot.specversions2019|
2021 - efinity|polkadot.blocks2021|polkadot.extrinsics2021|polkadot.events2021|polkadot.transfers2021|polkadot.logs2021|polkadot.traces2021|polkadot.specversions2021|
2026 - nodle|polkadot.blocks2026|polkadot.extrinsics2026|polkadot.events2026|polkadot.transfers2026|polkadot.logs2026|polkadot.traces2026|polkadot.specversions2026|
2030 - bifrost-dot|polkadot.blocks2030|polkadot.extrinsics2030|polkadot.events2030|polkadot.transfers2030|polkadot.logs2030|polkadot.traces2030|polkadot.specversions2030|
2031 - centrifuge|polkadot.blocks2031|polkadot.extrinsics2031|polkadot.events2031|polkadot.transfers2031|polkadot.logs2031|polkadot.traces2031|polkadot.specversions2031|
2032 - interlay|polkadot.blocks2032|polkadot.extrinsics2032|polkadot.events2032|polkadot.transfers2032|polkadot.logs2032|polkadot.traces2032|polkadot.specversions2032|
2034 - hydradx|polkadot.blocks2034|polkadot.extrinsics2034|polkadot.events2034|polkadot.transfers2034|polkadot.logs2034|polkadot.traces2034|polkadot.specversions2034|
2035 - phala|polkadot.blocks2035|polkadot.extrinsics2035|polkadot.events2035|polkadot.transfers2035|polkadot.logs2035|polkadot.traces2035|polkadot.specversions2035|
2037 - unique|polkadot.blocks2037|polkadot.extrinsics2037|polkadot.events2037|polkadot.transfers2037|polkadot.logs2037|polkadot.traces2037|polkadot.specversions2037|
2039 - integritee-shell|polkadot.blocks2039|polkadot.extrinsics2039|polkadot.events2039|polkadot.transfers2039|polkadot.logs2039|polkadot.traces2039|polkadot.specversions2039|
2043 - origintrail|polkadot.blocks2043|polkadot.extrinsics2043|polkadot.events2043|polkadot.transfers2043|polkadot.logs2043|polkadot.traces2043|polkadot.specversions2043|
2046 - darwinia|polkadot.blocks2046|polkadot.extrinsics2046|polkadot.events2046|polkadot.transfers2046|polkadot.logs2046|polkadot.traces2046|polkadot.specversions2046|
2052 - kylin|polkadot.blocks2052|polkadot.extrinsics2052|polkadot.events2052|polkadot.transfers2052|polkadot.logs2052|polkadot.traces2052|polkadot.specversions2052|


#### Kusama 

|chain|blocks|extrinsics|events|transfers|logs|traces|specversions|
|-----|------|----------|------|---------|----|------|------------|
0 - kusama|kusama.blocks0|kusama.extrinsics0|kusama.events0|kusama.transfers0|kusama.logs0|kusama.traces0|kusama.specversions0|
1000 - statemine|kusama.blocks1000|kusama.extrinsics1000|kusama.events1000|kusama.transfers1000|kusama.logs1000|kusama.traces1000|kusama.specversions1000|
2000 - karura|kusama.blocks2000|kusama.extrinsics2000|kusama.events2000|kusama.transfers2000|kusama.logs2000|kusama.traces2000|kusama.specversions2000|
2001 - bifrost-ksm|kusama.blocks2001|kusama.extrinsics2001|kusama.events2001|kusama.transfers2001|kusama.logs2001|kusama.traces2001|kusama.specversions2001|
2004 - khala|kusama.blocks2004|kusama.extrinsics2004|kusama.events2004|kusama.transfers2004|kusama.logs2004|kusama.traces2004|kusama.specversions2004|
2007 - shiden|kusama.blocks2007|kusama.extrinsics2007|kusama.events2007|kusama.transfers2007|kusama.logs2007|kusama.traces2007|kusama.specversions2007|
2011 - sora|kusama.blocks2011|kusama.extrinsics2011|kusama.events2011|kusama.transfers2011|kusama.logs2011|kusama.traces2011|kusama.specversions2011|
2012 - shadow|kusama.blocks2012|kusama.extrinsics2012|kusama.events2012|kusama.transfers2012|kusama.logs2012|kusama.traces2012|kusama.specversions2012|
2015 - integritee|kusama.blocks2015|kusama.extrinsics2015|kusama.events2015|kusama.transfers2015|kusama.logs2015|kusama.traces2015|kusama.specversions2015|
2023 - moonriver|kusama.blocks2023|kusama.extrinsics2023|kusama.events2023|kusama.transfers2023|kusama.logs2023|kusama.traces2023|kusama.specversions2023|
2024 - genshiro|kusama.blocks2024|kusama.extrinsics2024|kusama.events2024|kusama.transfers2024|kusama.logs2024|kusama.traces2024|kusama.specversions2024|
2048 - robonomics|kusama.blocks2048|kusama.extrinsics2048|kusama.events2048|kusama.transfers2048|kusama.logs2048|kusama.traces2048|kusama.specversions2048|
2084 - calamari|kusama.blocks2084|kusama.extrinsics2084|kusama.events2084|kusama.transfers2084|kusama.logs2084|kusama.traces2084|kusama.specversions2084|
2085 - parallel-heiko|kusama.blocks2085|kusama.extrinsics2085|kusama.events2085|kusama.transfers2085|kusama.logs2085|kusama.traces2085|kusama.specversions2085|
2086 - spiritnet|kusama.blocks2086|kusama.extrinsics2086|kusama.events2086|kusama.transfers2086|kusama.logs2086|kusama.traces2086|kusama.specversions2086|
2087 - picasso|kusama.blocks2087|kusama.extrinsics2087|kusama.events2087|kusama.transfers2087|kusama.logs2087|kusama.traces2087|kusama.specversions2087|
2088 - altair|kusama.blocks2088|kusama.extrinsics2088|kusama.events2088|kusama.transfers2088|kusama.logs2088|kusama.traces2088|kusama.specversions2088|
2090 - basilisk|kusama.blocks2090|kusama.extrinsics2090|kusama.events2090|kusama.transfers2090|kusama.logs2090|kusama.traces2090|kusama.specversions2090|
2092 - kintsugi|kusama.blocks2092|kusama.extrinsics2092|kusama.events2092|kusama.transfers2092|kusama.logs2092|kusama.traces2092|kusama.specversions2092|
2095 - quartz|kusama.blocks2095|kusama.extrinsics2095|kusama.events2095|kusama.transfers2095|kusama.logs2095|kusama.traces2095|kusama.specversions2095|
2096 - bitcountrypioneer|kusama.blocks2096|kusama.extrinsics2096|kusama.events2096|kusama.transfers2096|kusama.logs2096|kusama.traces2096|kusama.specversions2096|
2100 - subsocialx|kusama.blocks2100|kusama.extrinsics2100|kusama.events2100|kusama.transfers2100|kusama.logs2100|kusama.traces2100|kusama.specversions2100|
2101 - zeitgeist|kusama.blocks2101|kusama.extrinsics2101|kusama.events2101|kusama.transfers2101|kusama.logs2101|kusama.traces2101|kusama.specversions2101|
2102 - pichiu|kusama.blocks2102|kusama.extrinsics2102|kusama.events2102|kusama.transfers2102|kusama.logs2102|kusama.traces2102|kusama.specversions2102|
2105 - crab|kusama.blocks2105|kusama.extrinsics2105|kusama.events2105|kusama.transfers2105|kusama.logs2105|kusama.traces2105|kusama.specversions2105|
2106 - litmus|kusama.blocks2106|kusama.extrinsics2106|kusama.events2106|kusama.transfers2106|kusama.logs2106|kusama.traces2106|kusama.specversions2106|
2110 - mangatax|kusama.blocks2110|kusama.extrinsics2110|kusama.events2110|kusama.transfers2110|kusama.logs2110|kusama.traces2110|kusama.specversions2110|
2113 - kabocha|kusama.blocks2113|kusama.extrinsics2113|kusama.events2113|kusama.transfers2113|kusama.logs2113|kusama.traces2113|kusama.specversions2113|
2114 - turing|kusama.blocks2114|kusama.extrinsics2114|kusama.events2114|kusama.transfers2114|kusama.logs2114|kusama.traces2114|kusama.specversions2114|
2115 - dorafactory|kusama.blocks2115|kusama.extrinsics2115|kusama.events2115|kusama.transfers2115|kusama.logs2115|kusama.traces2115|kusama.specversions2115|
2118 - listen|kusama.blocks2118|kusama.extrinsics2118|kusama.events2118|kusama.transfers2118|kusama.logs2118|kusama.traces2118|kusama.specversions2118|
2119 - bajun|kusama.blocks2119|kusama.extrinsics2119|kusama.events2119|kusama.transfers2119|kusama.logs2119|kusama.traces2119|kusama.specversions2119|
2121 - imbue|kusama.blocks2121|kusama.extrinsics2121|kusama.events2121|kusama.transfers2121|kusama.logs2121|kusama.traces2121|kusama.specversions2121|
2222 - daoipci|kusama.blocks2222|kusama.extrinsics2222|kusama.events2222|kusama.transfers2222|kusama.logs2222|kusama.traces2222|kusama.specversions2222|

### Design choices:

* At present, the sole data source is the Polkaholic.io indexer.  Data is limited to December 2022 data but will have increasing larger archive, then loaded in daily to hourly, and potentially streamed in real-time. 
* All temporal BigQuery datasets are date-partitioned and split into multiple tables by {paraId} to enable low-cost low-latency BigQuery scans for specific date, parachain combinations. Timestamped data use BigQuery TIMESTAMP date types.
* Addresses are provided in “public key” (signer_pub_key) and SS58 Address (signer_ss58) form to support multi-chain queries with wild card table selection eg`select * from polkadot.extrinsics* where signer_pub_key='<pubkey>' ` aggregates multi-chain transactional history for a given account. 
* When assets are mentioned (transfers, xcmtransfers), we “decimalize” the output and include basic USD price valuation if possible
Trace support is unavailable for some chains because the chain does not publish an compilable open source repo with bootnodes.

### Contributions

Contributions are welcome.  Contributors will be invited to a dedicated Telegram group and are held to the [Polkadot communities' Code of Conduct](https://github.com/paritytech/polkadot/blob/master/CODE_OF_CONDUCT.md).

