
# Polkadot + Kusama on Dune

### Documentation

See _Substrate Table Documentation_ on Dune's website [here](https://dune.com/docs/data-tables/decoded/)

### Table Schema

Every substrate chain onboarded to Dune will, by default, include a list of _base_ tables: {balances, blocks, calls, events, extrinsics, transfers}.

Additional _add-on_ tables have also been developed to enable Dune wizards to build more complex dashboards. For example, both the Polkadot and Kusama chains have a *stakings* table for staking-related state and a *traces* table for all openGov-related information.

#### <_chainName_>  substrate chains that have already been on-boarded
| Namespace   | Status         | relayChain | paraID | first block  |
|-------------|----------------|------------|--------|--------------|
| polkadot    | OF1            | polkadot   | 0      | 2020-05-26   |
| kusama      | OF1            | kusama     | 0      | 2019-11-28   |
| interlay    | OF2POC March   | polkadot   | 2032   | 2022-03-12   |
| astar       | OF2POC March   | polkadot   | 2006   | 2021-12-18   |
| bifrost     | OF2POC March   | polkadot   | 2030   | 2022-06-04   |
| hydradx     | OF2POC March   | polkadot   | 2034   | 2022-03-12   |
| assethub    | OF2POC March   | polkadot   | 1000   | 2021-11-05   |
| centrifuge  | OF2POC March   | polkadot   | 2031   | 2022-03-12   |


####   <_namespace_>.balances
| Column Name        | Type       |
|--------------------|------------|
| ts                 | timestamp  |
| symbol             | string     |
| address_ss58       | string     |
| address_pubkey     | binary     |
| id                 | string     |
| chain_name         | string     |
| asset              | string     |
| para_id            | long       |
| free               | double     |
| free_usd           | double     |
| reserved           | double     |
| reserved_usd       | double     |
| misc_frozen        | double     |
| misc_frozen_usd    | double     |
| frozen             | double     |
| frozen_usd         | double     |
| price_usd          | double     |
| nonce              | long       |
| free_raw           | string     |
| reserved_raw       | string     |
| misc_frozen_raw    | string     |
| frozen_raw         | string     |
| flags_raw          | string     |
| year (partition)   | int        |
| month (partition)  | int        |
| day (partition)    | int        |

####   <_namespace_>.blocks
| Column Name          | Type       |
|----------------------|------------|
| block_time           | timestamp  |
| `number`             | long       |
| spec_version         | long       |
| relay_block_number   | long       |
| hash                 | binary     |
| parent_hash          | binary     |
| state_root           | binary     |
| extrinsics_root      | binary     |
| author_ss58          | string     |
| author_pub_key       | binary     |
| relay_state_root     | binary     |
| extrinsic_count      | long       |
| event_count          | long       |
| transfer_count       | long       |
| trace_count          | long       |
| year (partition)     | int        |
| month (partition)    | int        |
| day (partition)      | int        |


####   <_namespace_>.calls

| Column Name        | Type       |
|--------------------|------------|
| block_number       | bigint     |
| block_time         | timestamp  |
| extrinsic_id       | string     |
| relay_chain        | string     |
| para_id            | bigint     |
| id                 | string     |
| block_hash         | binary     |
| extrinsic_hash     | binary     |
| extrinsic_section  | string     |
| extrinsic_method   | string     |
| call_id            | string     |
| call_index         | binary     |
| call_args          | string     |
| call_args_def      | string     |
| root               | boolean    |
| leaf               | boolean    |
| fee                | double     |
| fee_usd            | double     |
| weight             | bigint     |
| signed             | boolean    |
| signer_ss58        | string     |
| signer_pub_key     | binary     |
| lifetime           | string     |
| year (partition)   | int        |
| month (partition)  | int        |
| call_section (partition) | string |
| call_method (partition)  | string |

####   <_namespace_>.events
| Column Name       | Type      |
|-------------------|-----------|
| block_time        | timestamp |
| block_number      | bigint    |
| extrinsic_id      | string    |
| event_id          | string    |
| data              | string    |
| extrinsic_hash    | binary    |
| block_hash        | binary    |
| data_decoded      | string    |
| year (partition)  | int       |
| month (partition) | int       |
| section (partition)| string   |
| method (partition) | string   |

####   <_namespace_>.extrinsics
| Column Name        | Type       |
|--------------------|------------|
| block_time         | timestamp  |
| block_number       | long       |
| extrinsic_id       | string     |
| hash               | binary     |
| block_hash         | binary     |
| lifetime           | string     |
| params             | string     |
| fee                | double     |
| weight             | long       |
| signed             | boolean    |
| signer_ss58        | string     |
| signer_pub_key     | binary     |
| fee_usd            | double     |
| year (partition)   | int        |
| month (partition)  | int        |
| section (partition)| string     |
| method (partition) | string     |

####   <_namespace_>.transfers
| Column Name        | Type          |
|--------------------|---------------|
| block_time         | timestamp     |
| block_number       | long          |
| event_id           | string        |
| extrinsic_id       | string        |
| section            | string        |
| method             | string        |
| extrinsic_hash     | binary        |
| block_hash         | binary        |
| from_ss58          | string        |
| from_pub_key       | binary        |
| to_ss58            | string        |
| to_pub_key         | binary        |
| asset              | string        |
| price_usd          | double        |
| amount_usd         | double        |
| symbol             | string        |
| decimals           | long          |
| amount             | double        |
| raw_amount         | decimal(38,9) |
| year (partition)   | int           |
| month (partition)  | int           |
| day (partition)    | int           |

####   <_namespace_>.traces [add-on tables, limited availability]
| Column Name      | Type       |
|------------------|------------|
| ts               | timestamp  |
| block_number     | long       |
| chain_name       | string     |
| block_hash       | binary     |
| address_ss58     | string     |
| address_pubkey   | binary     |
| track            | string     |
| track_val        | string     |
| kv               | string     |
| pv               | string     |
| source           | string     |
| year (partition) | int        |
| month (partition)| int        |
| section (partition) | string  |
| storage (partition) | string  |

####   <_namespace_>.stakings (add-on tables, only available for polkadot and kusama)
| Column Name                    | Type           |
|--------------------------------|----------------|
| block_number                   | long           |
| ts                             | timestamp      |
| era                            | long           |
| address_ss58                   | string         |
| address_pubkey                 | binary         |
| block_hash                     | binary         |
| submitted_in                   | long           |
| suppressed                     | boolean        |
| validator_total                | double         |
| validator_own                  | double         |
| validator_commission           | double         |
| validator_reward_shares        | double         |
| validator_reward_points        | long           |
| validator_staking_rewards      | double         |
| total_staked                   | double         |
| total_reward_points            | long           |
| total_staking_rewards          | double         |
| nominationpools_id             | long           |
| nominationpools_total          | double         |
| nominationpools_member_cnt     | long           |
| nominationpools_commission     | double         |
| nominationpools_rewardpools    | string         |
| member_bonded                  | double         |
| member_unbonded                | double         |
| member_share                   | double         |
| targets                        | array<string>  |
| pv                             | string         |
| year (partition)               | int            |
| month (partition)              | int            |
| section (partition)            | string         |
| storage (partition)            | string         |


### Request for Dune Wizards

Please join [Substrate Dune Wizards on Telegram](https://t.me/+Wb7A7tcKhD5iMTlh)

### Acknowledgments

Polkadot+Kusama is supported by [Polkadot OpenGov Ref #366](https://polkadot.polkassembly.io/referenda/366).

Thank you DOT Tokenholders for your support!
