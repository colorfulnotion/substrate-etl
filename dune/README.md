
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


### Materialized View
A list of useful queries that we have '[materialized](https://dune.com/queries?category=third_party_data&catalog=dune&schema=substrate)' for usability. Some complex dashboards can be constructed more efficiently by referencing these materialized views. Forks are welcomed!


| Materialized View                                        | Query ID                                           | Description                                                                                                 |
|----------------------------------------------------------|----------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| dune.substrate.result_polkadot_validators                | [query_3302709](https://dune.com/queries/3302709)  | Analyzes Polkadot validators' performance and staking rewards, including nominator associations and APR calculations. |
| dune.substrate.result_polkadot_nominationpools           | [query_3327350](https://dune.com/queries/3327350)  | Tracks and assesses Nomination Pool rewards, fees, and APR within the Polkadot ecosystem.                   |
| dune.substrate.result_polkadot_nominators                | [query_3326829](https://dune.com/queries/3326829)  | Summarizes active nominator contributions, rewards, and their share in validators' stakes in Polkadot.      |
| dune.substrate.result_polkadot_poolmembers               | [query_3327479](https://dune.com/queries/3327479)  | Details individual Nomination Pool member contributions, rewards, and unclaimed amounts in Polkadot.        |
| dune.substrate.result_polkadot_identity                  | [query_3420617](https://dune.com/queries/3420617)  | A mapping between Polkadot and Kusama identities, linking addresses and verifying authenticity.             |
| dune.substrate.result_polkadot_referenda_total_voting_power | [query_3394422](https://dune.com/queries/3394422) | Summarizes Polkadot referenda votes, detailing direct and delegated voting power and convictions.           |
| dune.substrate.result_polkadot_staking_nomination_total  | [query_3426963](https://dune.com/queries/3426963)  | Displays Polkadot nominators, their staked totals per validator, and validator identities by era.           |
| dune.substrate.result_polkadot_open_gov_delegation       | [query_3393179](https://dune.com/queries/3393179)  | Details staked totals by Polkadot nominators across validators and eras, including validator names.         |
| dune.substrate.result_polkadot_vote_record               | [query_3415321](https://dune.com/queries/3415321)  | Polkadot referenda vote information, integrating direct, proxy, and delegated votes with dynamic links and voter identities. |
| dune.substrate.result_polkadot_proposals_proposed        | [query_3394156](https://dune.com/queries/3394156)  | Tracks Polkadot referenda statuses including proposer details, timelines, and outcome, with direct links to further information. |
| dune.substrate.result_polkadot_referenda_direct_vote     | [query_3391225](https://dune.com/queries/3391225)  | All Polkadot referendum direct votes (filter expired votes).                                               |
| dune.substrate.result_polkadot_each_vote_record          | [query_3393684](https://dune.com/queries/3393684)  | Aggregates Polkadot referendum voting details, showing voter identities, vote types, convictions, and power, including direct and delegated votes. |
| dune.substrate.result_polkadot_referenda_origin_map      | [query_3399352](https://dune.com/queries/3399352)  | Associates Polkadot referenda with their origins.                                                           |
| dune.substrate.result_polkadot_failed_calls_in_batch     | [query_3457139](https://dune.com/queries/3457139)  | Finds some failed calls hidden in a utility batch on Polkadot.                                             |
| dune.substrate.result_kusama_validators                  | [query_3477509](https://dune.com/queries/3477509)  | Analyzes Kusama validators' performance and staking rewards, including nominator associations and APR calculations. |
| dune.substrate.result_kusama_nominationpools             | [query_3477568](https://dune.com/queries/3477568)  | Tracks and assesses Nomination Pool rewards, fees, and APR within the Kusama ecosystem.                     |
| dune.substrate.result_kusama_nominators                  | [query_3477192](https://dune.com/queries/3477192)  | Summarizes active nominator contributions, rewards, and their share in validators' stakes in Kusama.        |
| dune.substrate.result_kusama_poolmembers                 | [query_3477877](https://dune.com/queries/3477877)  | Details individual Nomination Pool member contributions, rewards, and unclaimed amounts in Kusama.          |
| dune.substrate.result_kusama_referenda_total_voting_power| [query_3480624](https://dune.com/queries/3480624)  | Summarizes Kusama referenda votes, detailing direct and delegated voting power and convictions.             |
| dune.substrate.result_kusama_open_gov_delegation         | [query_3480477](https://dune.com/queries/3480477)  | Details staked totals by Kusama nominators across validators and eras, including validator names.           |
| dune.substrate.result_kusama_vote_record                 | [query_3480405](https://dune.com/queries/3480405)  | Kusama referenda vote information, integrating direct, proxy, and delegated votes with dynamic links and voter identities. |
| dune.substrate.result_kusama_proposals_proposed          | [query_3480370](https://dune.com/queries/3480370)  | Tracks Kusama referenda statuses including proposer details, timelines, and outcome, with direct links to further information. |
| dune.substrate.result_kusama_referenda_direct_vote       | [query_3480617](https://dune.com/queries/3480617)  | All Kusama referendum direct votes (filter expired votes).                                                  |
| dune.substrate.result_kusama_each_vote_record            | [query_3480878](https://dune.com/queries/3480878)  | Aggregates Kusama referendum voting details, showing voter identities, vote types, convictions, and power, including direct and delegated votes. |
| dune.substrate.result_kusama_referenda_origin_map        | [query_3480454](https://dune.com/queries/3480454)  | Associates Kusama referenda with their origins.                                                            |
| dune.substrate.result_kusama_failed_calls_in_batch       | [query_3480469](https://dune.com/queries/3480469)  | Finds some failed calls hidden in a utility batch on Kusama.                                               |
| dune.substrate.result_interlay_oracle                    |                                                    | All graphs that use a price on Interlay                                                                    |
| dune.substrate.result_interlay_vault_creation            |                                                    | All graphs that show vaults with their collateral                                                          |
| dune.substrate.result_hydradx_liquidity_ibtc_fine        |                                                    | TEMPORARY: uses old method of calculating liquidity -- replace with a better one and make it more generic  |
| dune.substrate.result_hydradx_oracle                     |                                                    | All graphs that use trade volume or prices on HydraDX.


### Request for Dune Wizards


Please join [Substrate Dune Wizards on Telegram](https://t.me/+Wb7A7tcKhD5iMTlh)

### Acknowledgments

Polkadot+Kusama is supported by [Polkadot OpenGov Ref #366](https://polkadot.polkassembly.io/referenda/366).

Thank you DOT Tokenholders for your support!
