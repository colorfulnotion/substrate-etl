export DATASET=polkadot
bq mk --schema=xcmtransfers.json --time_partitioning_field block_time --time_partitioning_type DAY   --table $DATASET.xcmtransfers

export PARAID=2000
bq mk --schema=blocks.json --time_partitioning_field block_time --time_partitioning_type DAY   --table $DATASET.blocks$PARAID
bq mk --schema=events.json --time_partitioning_field block_time --time_partitioning_type DAY   --table $DATASET.events$PARAID
bq mk --schema=extrinsics.json --time_partitioning_field block_time --time_partitioning_type DAY   --table $DATASET.extrinsics$PARAID
bq mk --schema=transfers.json --time_partitioning_field block_time --time_partitioning_type DAY   --table $DATASET.transfer$PARAID
bq mk --schema=logs.json --time_partitioning_field block_time --time_partitioning_type DAY   --table $DATASET.logs$PARAID
bq mk --schema=traces.json --time_partitioning_field block_time --time_partitioning_type DAY   --table $DATASET.traces$PARAID
bq mk --schema=specversions.json  --table $DATASET.specversions$PARAID
