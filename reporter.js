const util = require('util');
const exec = util.promisify(require('child_process').exec);
const path = require("path");
const fs = require('fs');

const NL = "\r\n";
const dir = ".";

function currencyFormat(c, _maximumFractionDigits = 2) {
    try {
        if (c < .01) _maximumFractionDigits = 5;
        if (c < .001) _maximumFractionDigits = 43;
        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: _maximumFractionDigits
        });
        return formatter.format(c);
    } catch (e) {
        return '-'
    }
}

function tokenCount(c, _maximumFractionDigits = 2) {
    try {
        if (c < .01) _maximumFractionDigits = 3;
        if (c < .001) _maximumFractionDigits = 43;
        var formatter = new Intl.NumberFormat('en-US', {
            currency: 'USD',
            maximumFractionDigits: _maximumFractionDigits
        });
        return formatter.format(c);
    } catch (e) {
        return '-'
    }
}


module.exports = class Reporter {
    async fetch_networklog(url) {
	try {
            let cmd = `curl --silent -H "Content-Type: application/json" --max-time 30 ${url}`
            let {
		stdout,
		stderr
            } = await exec(cmd, {
		maxBuffer: 1024 * 64000
            });
	    let networklog = JSON.parse(stdout);
	    let dotsamalog = networklog["dotsama"].daily;
	    return dotsamalog;
	} catch (err) {
	    console.log(err);
	    return null
	}
    }
    
    async generateNetworksSummary() {
	let dir = "."
	let dotsamaurl = "https://cdn.polkaholic.io/substrate-etl/networks.json";
	let dotsamalog = await this.fetch_networklog(dotsamaurl);
	
	let url = "https://cdn.polkaholic.io/substrate-etl/polkaholic.json";
        let cmd = `curl --silent -H "Content-Type: application/json" --max-time 30 ${url}`
        let {
            stdout,
            stderr
        } = await exec(cmd, {
            maxBuffer: 1024 * 64000
        });

	let polkaholic = JSON.parse(stdout);
	let chains = {};
	let o = {};
	let summary = [];
	summary.push(`# Summary (All-time, All Networks)\r\n\r\nSource: [Polkaholic.io](https://polkaholic.io)\r\n\r\n`);
	summary.push(`| Network          | Indexed up until | # Chains Indexed | # Chains Not Indexed | # Blocks Across Network   | # Blocks Missing |`);
	summary.push(`| ---------------- | ---------------- | ---------------- | -------------------- | ------------------------- | ---------------- |`);
	for (const relayChain of Object.keys(polkaholic)) {
	    if ( ! ["polkadot","kusama"].includes(relayChain) ) continue;
            if (o[relayChain] == undefined) {
		o[relayChain] = [];
		o[relayChain].push(`# ${relayChain} Network-wide Summary (All-time)\r\n\r\nSource: [Polkaholic.io](https://polkaholic.io)\r\n\r\n`);
		o[relayChain].push(`| Chain            | Start Date | End Date | End Block | # Addresses with Balances | Missing Blocks / Status |`);
		o[relayChain].push(`| ---------------- | ---------- | ---------| --------- | ------------------------- | ----------------------- |`);
            }
	    let rc = polkaholic[relayChain]
            for ( const r of rc.chains ) {
		let desc = `[${r.chainName} Para ID ${r.paraID}](/${relayChain}/${r.paraID}-${r.id})`
		let startDT = r.startDT ? r.startDT : "";
		let endDT = r.endDT ? r.endDT : "";
		let startBN = r.startBN ? r.startBN.toLocaleString('en-US') : "";
		let endBN = r.endBN ? r.endBN.toLocaleString('en-US').toLocaleString('en-US') : "";
		let numBlocks_total = r.numBlocks_total ? r.numBlocks_total.toLocaleString('en-US') : "";
		let numBlocks_missing = r.numBlocks_missing ? r.numBlocks_missing.toLocaleString('en-US') : "";
		let percent_missing = r.numBlocks_missing > 0 ? "(" + Number(r.numBlocks_missing / r.endBN).toLocaleString(undefined, {
		    style: 'percent',
		    minimumFractionDigits: 2
		}) + ")" : "";
		let numAddresses = r.numAddresses ? r.numAddresses.toLocaleString('en-US') : "";
		o[relayChain].push(`| ${desc} | ${startDT} | ${endDT} | ${endBN} |  ${numAddresses} | ${numBlocks_missing} ${percent_missing} ${r.crawlingStatus} |`)
		r.relayChain = relayChain;
		chains[r.chainID] = r;
	    }
	    let numChains_missing = rc.missing ? rc.missing.length : 0;
	    let numBlocks_total = rc.numBlocks_total ? rc.numBlocks_total.toLocaleString('en-US') : "";
	    let numBlocks_missing = rc.numBlocks_missing ? rc.numBlocks_missing.toLocaleString('en-US') : "";
	    summary.push(`| [${rc.relayChain}](${rc.relayChain}) | ${rc.endDT} | ${rc.numChains} | ${numChains_missing} | ${numBlocks_total} | ${numBlocks_missing} |`);
	    if ( rc.missing ) {
		o[relayChain].push(`\r\nMissing chains\r\n\r\n`);
		if ( numChains_missing > 0 ) {
		    for (const c of rc.missing) {
			o[relayChain].push(`* *${c.chainName}* Para ID ${c.paraID}; ${c.crawlingStatus}`);
		    }
		} else {
		    o[relayChain].push(`None`);
		}
	    }

	    let assets = rc.assets;
	    if ( assets && assets.length > 0 ) {
		let logDT = assets[0].logDT;
		o[relayChain].push(`# Assets\r\n\r\nSource: [Polkaholic.io](https://polkaholic.io)\r\nLast Updated: ${logDT}\r\n`);
		o[relayChain].push(`| Symbol | # Holders | # Chains | Free | Reserved | Misc Frozen | Frozen | Recent Price |`);
		o[relayChain].push(`| ------ | --------- | -------- | ---- | -------- | ----------- | ------ | ------------ |`);
		for ( const l of assets ) {
		    let numHolders = l.numHolders.toLocaleString('en-US');
		    let numChains = l.numChains.toLocaleString('en-US');
		    let free = l.free > 0 ? tokenCount(l.free) : 0;
		    let freeUSD = l.freeUSD > 0 ? currencyFormat(l.freeUSD) : "";
		    let reserved = l.reserved > 0 ? tokenCount(l.reserved) : 0;
		    let reservedUSD = l.reservedUSD > 0 ? currencyFormat(l.reservedUSD) : "";
		    let miscFrozen = l.miscFrozen > 0 ? tokenCount(l.miscFrozen) : 0;
		    let miscFrozenUSD = l.miscFrozenUSD > 0 ? currencyFormat(l.miscFrozenUSD) : "";
		    let frozen = l.frozen > 0 ? tokenCount(l.frozen) : 0;
		    let frozenUSD = l.frozenUSD > 0 ? currencyFormat(l.frozenUSD) : "";
		    let priceUSD = l.priceUSD > 0 ? currencyFormat(l.priceUSD) : "";
		    o[relayChain].push(`| [${l.symbol}](/${rc.relayChain}/assets/${encodeURIComponent(encodeURIComponent(l.symbol))}) | ${numHolders} | ${numChains} | ${free} ${freeUSD} | ${reserved} ${reservedUSD} | ${miscFrozen} ${miscFrozenUSD} | ${frozen} ${frozenUSD} | ${priceUSD} |`);
		    
		    await this.asset_report_summary(relayChain, l.symbol, l.url);
		}
	    }
	    o[relayChain].push(`\r\nReport source: [${url}](${url}) | See [Definitions](/DEFINITIONS.md) for details`);
	}
	summary.push(`\r\nReport source: [${url}](${url}) | See [Definitions](/DEFINITIONS.md) for details\r\n\r\n`);
	
	if ( dotsamalog ) {
	    summary.push(`# Dotsama Daily Log (2023)\r\n\r\nSource: [Polkaholic.io](https://polkaholic.io)\r\n\r\n`);
	    summary.push(`| Date            | # Addresses | # Active Accounts | # New Accounts | # Reaped Accounts |`);
	    summary.push(`| ---------------- | ----------- | ----------------- | -------------- | ----------------- |`);
	    for ( const l of dotsamalog ) {
		let numAddresses = l.numAddresses.toLocaleString('en-US');
		let numActiveAccounts = l.numActiveAccounts.toLocaleString('en-US');
		let numNewAccounts = l.numNewAccounts.toLocaleString('en-US');
		let numReapedAccounts = l.numReapedAccounts.toLocaleString('en-US');
		summary.push(`| ${l.logDT} | ${numAddresses} | ${numActiveAccounts} | ${numNewAccounts} | ${numReapedAccounts} |`);
	    }
	}
	
	summary.push(`\r\nReport source: [${dotsamaurl}](${dotsamaurl}) | See [Definitions](/DEFINITIONS.md) for details`);
	
        let fn = path.join(dir, `SUMMARY.md`);
        let f = fs.openSync(fn, 'w', 0o666);
        fs.writeSync(f, summary.join(NL) + NL);
        console.log("generated", fn);

        for (const relayChain of Object.keys(o)) {
            let fn = path.join(dir, relayChain, `README.md`);
            let f = fs.openSync(fn, 'w', 0o666);
            fs.writeSync(f, o[relayChain].join(NL) + NL);
            console.log("generated", fn);
        }

	for (const chainID of Object.keys(chains) ) {
	    try {
		await this.chain_report_summary(chainID, chains[chainID]);
	    } catch (err) {
		console.log(err);
	    }
	}
    }
    
    get_relayChain_dataset(relayChain) {
	return `crypto_${relayChain}`;
    }
    
    async asset_report_summary(relayChain, symbol, url) {
	// fetch chains where symbol appears
	try {
	    let bqDataset = this.get_relayChain_dataset(relayChain);
	    let cmd = `curl --silent -H "Content-Type: application/json" --max-time 30 ${url}`
            const {
		stdout,
		stderr
            } = await exec(cmd, {
		maxBuffer: 1024 * 64000
            });
	    let assetdata = JSON.parse(stdout);
	    // compile chains using asset
            let desc = `# ${symbol} on ${relayChain} Summary\r\n\r\n_Source_: [polkaholic.io](https://polkaholic.io) *Report Date*: ${assetdata.logDT}\r\n\r\n\r\n`;
	    console.log(assetdata);
	    if ( assetdata.xcmInteriorKeys && assetdata.xcmInteriorKeys.length > 0 ) {
		desc += "*XCM Interior Keys*:\r\n";
		for ( const xik of assetdata.xcmInteriorKeys) {
		    desc += `* \`${xik}\`\r\n`;
		}
		desc += "\r\n";
	    }
	    let j = [];
            j.push(desc);
            j.push(`| Chain | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID |`);
            j.push(`| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | ------- |`);
	    let logDT = assetdata.logDT;
	    let chains = assetdata.chains;
	    if ( chains.length > 0 ) {
		for ( const c of chains ) {
		    let url = `/${relayChain}/${c.paraID}-${c.id}`
		    let asset = c.asset ? c.asset : "";
		    let numHolders = c.numHolders > 0 ? c.numHolders.toLocaleString('en-US') : ""
		    let free = c.free > 0 ? tokenCount(c.free) : ""
		    let freeUSD = c.freeUSD > 0 ? currencyFormat(c.freeUSD) : ""
		    let reserved = c.reserved > 0 ? tokenCount(c.reserved) : ""
		    let reservedUSD = c.reservedUSD > 0 ? currencyFormat(c.reservedUSD) : ""
		    let miscFrozen = c.miscFrozen > 0 ? tokenCount(c.miscFrozen) : ""
		    let miscFrozenUSD = c.miscFrozenUSD > 0 ? currencyFormat(c.miscFrozenUSD) : ""
		    let frozen = c.frozen > 0 ? tokenCount(c.frozen) : ""
		    let frozenUSD = c.frozenUSD > 0 ? currencyFormat(c.frozenUSD) : ""
		    let priceUSD = c.priceUSD > 0 ? currencyFormat(c.priceUSD) : ""
		    j.push(`| [${c.chainName}](${url}) | ${numHolders} | ${free} ${freeUSD} | ${reserved} ${reservedUSD} | ${miscFrozen}  ${miscFrozenUSD} | ${frozen} ${frozenUSD} | ${priceUSD} | \`${asset}\` |`)
		}
		
		let docs = [];
		let subdir = path.join(dir, relayChain, `assets`, encodeURIComponent(symbol));
		if (!fs.existsSync(subdir)) {
		    fs.mkdirSync(subdir, {
			recursive: true
		    });
		}
		j.push(`\r\n## Queries:\r\nYou can generate the above summary data using the following queries using the public dataset \`bigquery-public-data.crypto_polkadot\` in Google BigQuery:
\`\`\`bash
select para_id, count(distinct address_pubkey) numHolders, 
 sum(free) as free, sum(free_usd) free_usd,
 sum(reserved) as reserved, sum(free_usd) reserved_usd,
 sum(misc_frozen) as misc_frozen, sum(misc_frozen_usd) misc_frozen_usd,
 sum(frozen) as frozen, sum(frozen_usd) frozen_usd
 from \`bigquery-public-data.${bqDataset}.balances*\` 
 where symbol = "${symbol}" and date(ts) = "${logDT}"
 group by para_id
 order by free_usd desc
\`\`\`
`);		
		j.push(`\r\nReport source: [${url}](${url}) | See [Definitions](/DEFINITIONS.md) for details`);
		let fn_chain = path.join(subdir, `README.md`);
		let f = fs.openSync(fn_chain, 'w', 0o666);
		console.log("writing", fn_chain);
		fs.writeSync(f, j.join(NL) + NL);
	    } else {
		// delete it?
	    }
	} catch (err) {
	    console.log("asset_report_summary ERROR fetching", url);
	    console.log(err);
	}
    }
    
    async chain_report_summary(chainID, chain) {
	// fetch monthly + daily summary for chainID
        let paraID = chain.paraID;
        let relayChain = chain.relayChain;
	let bqDataset = this.get_relayChain_dataset(relayChain);
        let id = chain.id;
	let chainName = chain.chainName;
        let url = `https://cdn.polkaholic.io/substrate-etl/${relayChain}/${paraID}.json`;
	let cmd = `curl --silent -H "Content-Type: application/json" --max-time 30 ${url}`
	let chaindata = null;
	try { 
            const {
		stdout,
		stderr
            } = await exec(cmd, {
		maxBuffer: 1024 * 64000
            });
	    chaindata = JSON.parse(stdout);
	} catch (err) {
	    console.log(err);
	}
	// compile monthly summary
        let j = [];
	let docs = [];
        let desc = `# ${chain.chainName} Summary (Monthly)\r\n\r\n_Source_: [${id}.polkaholic.io](https://${id}.polkaholic.io)\r\n\r\n*Relay Chain*: ${relayChain}\r\n*Para ID*: ${paraID}\r\n`;
        if (chain.crawlingStatus) desc += `Status: ${chain.crawlingStatus}`
        desc += `\r\n\r\n`

	j.push(desc);
        j.push(`| Month | Start Block | End Block | # Blocks | # Signed Extrinsics (total) | # Active Accounts (avg) | # Addresses with Balances (max) | Issues |`);
        j.push(`| ----- | ----------- | --------- | -------- | --------------------------- | ----------------------- | ------------------------------- | ------ |`);
        docs = [];

	docs.push(`\r\n## Tables:\r\n`)
	docs.push(`* _Blocks_: \`bigquery-public-data.${bqDataset}.blocks${paraID}\` (date-partitioned by \`block_time\`) - [Schema](/schema/balances.json)`)
	docs.push(`* _Extrinsics_: \`bigquery-public-data.${bqDataset}.extrinsics${paraID}\` (date-partitioned by \`block_time\`) - [Schema](/schema/extrinsics.json)`)
	docs.push(`* _Events_: \`bigquery-public-data.${bqDataset}.events${paraID}\` (date-partitioned by \`block_time\`) - [Schema](/schema/events.json)`)
	docs.push(`* _Transfers_: \`bigquery-public-data.${bqDataset}.transfers${paraID}\` (date-partitioned by \`block_time\`) - [Schema](/schema/transfers.json)`)
	docs.push(`* _Balances_: \`bigquery-public-data.${bqDataset}.balances${paraID}\` (date-partitioned by \`ts\`) - [Schema](/schema/balances.json)`)
	docs.push(`* _Active Accounts_: \`bigquery-public-data.${bqDataset}.accountsactive${paraID}\` (date-partitioned by \`ts\`) - [Schema](/schema/accountsactive.json)`)
	docs.push(`* _Passive Accounts_: \`bigquery-public-data.${bqDataset}.accountspassive${paraID}\` (date-partitioned by \`ts\`) - [Schema](/schema/accountspassive.json)`)
	docs.push(`* _New Accounts_: \`bigquery-public-data.${bqDataset}.accountsnew${paraID}\` (date-partitioned by \`ts\`) - [Schema](/schema/accountsnew.json)`)
	docs.push(`* _Reaped Accounts_: \`bigquery-public-data.${bqDataset}.accountsreaped${paraID}\` (date-partitioned by \`ts\`) - [Schema](/schema/accountsreaped.json)`)
	docs.push(`* _Assets_: \`bigquery-public-data.${bqDataset}.assets\` (filter on \`${paraID}\`) - [Schema](/schema/assets.json)`)
	docs.push(`* _XCM Assets_: \`bigquery-public-data.${bqDataset}.xcmassets\` (filter on \`para_id\`) - [Schema](/schema/xcmassets.json)`)
	docs.push(`* _XCM Transfers_: \`bigquery-public-data.${bqDataset}.xcmtransfers\` (filter on \`origination_para_id\` or \`destination_para_id\`, date-partitioned by \`origination_ts\`) - [Schema](/schema/xcmtransfers.json)`)
	docs.push(`* _XCM Messages_: \`bigquery-public-data.${bqDataset}.xcm\` (filter on \`origination_para_id\` or \`destination_para_id\`, date-partitioned by \`origination_ts\`) - [Schema](/schema/xcm.json)`)

        docs.push(`\r\n### # Blocks
\`\`\`bash
SELECT LAST_DAY( date(block_time)) as monthDT,
  Min(date(block_time)) startBN, max(date(block_time)) endBN, 
 min(number) minBN, max(number) maxBN, 
 count(*) numBlocks, max(number)-min(number)+1-count(*) as numBlocks_missing 
FROM \`bigquery-public-data.${bqDataset}.blocks${paraID}\` 
group by monthDT 
order by monthDT desc
\`\`\`
`);
	let broken = [];
	let chainInfo = chaindata.chain;

	let isWASM = chainInfo.isWASM;
	
	let prevStartBN = null;
        for (const r of chaindata.monthly) {
            let monthDT = r.monthDT ? r.monthDT : "";
            let startDT = r.startDT ? r.startDT : "";
            let endDT = r.endDT ? r.endDT : "";
            let desc = `${startDT} to ${endDT}`;
            let startBN = r.startBN ? r.startBN.toLocaleString('en-US') : "";
            let endBN = r.endBN ? r.endBN.toLocaleString('en-US') : "";
            let numBlocks_total = r.numBlocks_total ? r.numBlocks_total.toLocaleString('en-US') : "";
            let numBlocks_missing = r.numBlocks_missing ? r.numBlocks_missing.toLocaleString('en-US') : "";
            let percent_missing = r.numBlocks_missing > 0 ? "(" + Number(r.numBlocks_missing / (r.endBN - r.startBN)).toLocaleString(undefined, {
                style: 'percent',
                minimumFractionDigits: 2
            }) + ")" : "";
            // if chain broken, show it
	    if (prevStartBN && (prevStartBN != (r.endBN + 1)) && (prevStartBN > r.endBN)) {
		broken.push(monthDT);
                numBlocks_missing = " **BROKEN**";
            }
	    
            prevStartBN = r.startBN;
            let numSignedExtrinsics = r.numSignedExtrinsics ? r.numSignedExtrinsics.toLocaleString('en-US') : ""
            let numActiveAccounts = r.numActiveAccounts ? r.numActiveAccounts.toLocaleString('en-US') : "";
            let numAddresses = r.numAddresses ? r.numAddresses.toLocaleString('en-US') : "";
            let issues = r.issues ? r.issues : "-";
            let url = `/${relayChain}/${paraID}-${id}/${monthDT}.md`
            j.push(`| [${desc}](${url}) | ${startBN} | ${endBN} | ${numBlocks_total} | ${numSignedExtrinsics} | ${numActiveAccounts} | ${numAddresses} | ${issues} ${numBlocks_missing} ${percent_missing} |   `)
        }

	if ( chaindata.assets && chaindata.assets.logDT ) {
            let desc = `\r\n## ${chain.chainName} Assets as of ${chaindata.assets.logDT}\r\n`;
            j.push(desc);
            j.push(`\r\n\r\n| Symbol | # Holders | Free | Reserved | Misc Frozen | Frozen | Price | AssetID | `);
            j.push(`| ----- | --------- | ---- | -------- | ----------- | ------ | ----- | --- |`);
	    let assets = chaindata.assets;
	    
            for (const c of chaindata.assets.assets) {
		let symbol = c.symbol ? c.symbol : null;
		if ( symbol ) {
		    let url = `/${relayChain}/assets/${encodeURIComponent(encodeURIComponent(symbol))}`
		    let asset = c.asset ? c.asset : "";
		    let numHolders = c.numHolders > 0 ? c.numHolders.toLocaleString('en-US') : ""
		    let free = c.free > 0 ? tokenCount(c.free) : ""
		    let freeUSD = c.freeUSD > 0 ? currencyFormat(c.freeUSD) : ""
		    let reserved = c.reserved > 0 ? tokenCount(c.reserved) : ""
		    let reservedUSD = c.reservedUSD > 0 ? currencyFormat(c.reservedUSD) : ""
		    let miscFrozen = c.miscFrozen > 0 ? tokenCount(c.miscFrozen) : ""
		    let miscFrozenUSD = c.miscFrozenUSD > 0 ? currencyFormat(c.miscFrozenUSD) : ""
		    let frozen = c.frozen > 0 ? tokenCount(c.frozen) : ""
		    let frozenUSD = c.frozenUSD > 0 ? currencyFormat(c.frozenUSD) : ""
		    let priceUSD = c.priceUSD > 0 ? currencyFormat(c.priceUSD) : ""
		    j.push(`| [${symbol}](${url}) | ${numHolders} | ${free} ${freeUSD} | ${reserved} ${reservedUSD} | ${miscFrozen}  ${miscFrozenUSD} | ${frozen} ${frozenUSD} | ${priceUSD} |   \`${asset}\` | `)
		}
            }
	}

	docs.push(`\r\nReport source: [${url}](${url}) | See [Definitions](/DEFINITIONS.md) for details | [Submit Issue](https://github.com/colorfulnotion/substrate-etl/issues)`);
        j = j.concat(docs);


        let subdir = path.join(dir, relayChain, `${paraID}-${id}`);
        if (!fs.existsSync(subdir)) {
            fs.mkdirSync(subdir, {
                recursive: true
            });
        }
        let fn_chain = path.join(subdir, `README.md`);
        console.log("writing", fn_chain);
        let f = fs.openSync(fn_chain, 'w', 0o666);
        fs.writeSync(f, j.join(NL) + NL);

	// compile daily summmary
        prevStartBN = null;
        j = {};
        fn_chain = {};
        for (const r of chaindata.daily) {
            let monthDT = r.monthDT;
            let k = `${monthDT}`;
            if (j[k] == undefined) {
                let subdir = path.join(dir, relayChain, `${paraID}-${id}`);
                if (!fs.existsSync(subdir)) {
                    fs.mkdirSync(subdir, {
                        recursive: true
                    });
                }
                fn_chain[k] = path.join(subdir, `${k}.md`);
                j[k] = [];
                docs[k] = [];
                let desc = `# ${chainName} Summary (Daily)\r\n\r\n_Source_: [${id}.polkaholic.io](https://${id}.polkaholic.io)\r\n\r\n*Relay Chain*: ${relayChain}\r\n*Para ID*: ${paraID}\r\n`;
                if (r.crawlingStatus) desc += `Status: ${r.crawlingStatus}`
                desc += `\r\n\r\n`
                j[k].push(desc);
                j[k].push(`### Daily Summary for Month ending in ${monthDT}\r\n\r\n`);
	    j[k].push(`| Date    | Start Block | End Block | # Blocks | # Extrinsics | # Active Accounts | # Passive Accounts | # New Accounts | # Addresses | # Events  | # Transfers ($USD) | # XCM Transfers In ($USD) | # XCM Transfers Out ($USD) | # XCM In | # XCM Out | Issues |`)
	    j[k].push(`|---------|-------------|-----------|----------|--------------|-------------------|--------------------|----------------|-------------|-----------|--------------------|---------------------------|----------------------------|----------|-----------|--------|`)
		
                docs[k].push(`\r\n## Sample Queries:\r\nYou can generate the above summary data using the following queries using the public dataset \`bigquery-public-data.${bqDataset}\` in Google BigQuery:`);
		
		docs[k].push(`\r\n
### Blocks 

[Schema](https://github.com/colorfulnotion/substrate-etl/blob/main/schema/blocks.json)

\`\`\`bash
SELECT date(block_time) as logDT, MIN(number) startBN, MAX(number) endBN, COUNT(*) numBlocks 
 FROM \`bigquery-public-data.${bqDataset}.blocks${paraID}\`  
 where LAST_DAY(date(block_time)) = "${monthDT}" 
 group by logDT 
 order by logDT
\`\`\`

### Signed Extrinsics 

[Schema](https://github.com/colorfulnotion/substrate-etl/blob/main/schema/extrinsics.json)

\`\`\`bash
SELECT date(block_time) as logDT, 
COUNT(*) numSignedExtrinsics 
FROM \`bigquery-public-data.${bqDataset}.extrinsics${paraID}\`  
where signed and LAST_DAY(date(block_time)) = "${monthDT}" 
group by logDT 
order by logDT
\`\`\`

### Active Accounts 

[Schema](https://github.com/colorfulnotion/substrate-etl/blob/main/schema/accountsactive.json)

\`\`\`bash
SELECT date(ts) as logDT, 
 COUNT(*) numActiveAccounts 
 FROM \`bigquery-public-data.${bqDataset}.accountsactive${paraID}\` 
 where LAST_DAY(date(ts)) = "${monthDT}" 
 group by logDT 
 order by logDT
\`\`\`

### Passive Accounts 

[Schema](https://github.com/colorfulnotion/substrate-etl/blob/main/schema/accountspassive.json)

\`\`\`bash
SELECT date(ts) as logDT, 
 COUNT(*) numPassiveAccounts 
 FROM \`bigquery-public-data.${bqDataset}.accountspassive${paraID}\` 
 where LAST_DAY(date(ts)) = "${monthDT}" 
 group by logDT 
 order by logDT
\`\`\`

### New Accounts 

[Schema](https://github.com/colorfulnotion/substrate-etl/blob/main/schema/accountsnew.json)

\`\`\`bash
SELECT date(ts) as logDT, 
 COUNT(*) numNewAccounts 
 FROM \`bigquery-public-data.${bqDataset}.accountsnew${paraID}\` 
 where LAST_DAY(date(ts)) = "${monthDT}" 
 group by logDT
 order by logDT
\`\`\`

### Addresses with Balances 

[Schema](https://github.com/colorfulnotion/substrate-etl/blob/main/schema/balances.json)

\`\`\`bash
SELECT date(ts) as logDT,
 COUNT(distinct address_pubkey) numAddress 
 FROM \`bigquery-public-data.${bqDataset}.balances${paraID}\` 
 where LAST_DAY(date(ts)) = "${monthDT}" 
 group by logDT 
 order by logDT
\`\`\`

### Events 

[Schema](https://github.com/colorfulnotion/substrate-etl/blob/main/schema/events.json)

\`\`\`bash
SELECT date(block_time) as logDT, 
 COUNT(*) numEvents 
 FROM \`bigquery-public-data.${bqDataset}.events${paraID}\` 
 where LAST_DAY(date(block_time)) = "${monthDT}" 
 group by logDT 
 order by logDT
\`\`\`

### Transfers:

[Schema](https://github.com/colorfulnotion/substrate-etl/blob/main/schema/transfers.json)

\`\`\`bash
SELECT date(block_time) as logDT, 
 COUNT(*) numEvents 
 FROM \`bigquery-public-data.${bqDataset}.transfers${paraID}\` 
 where LAST_DAY(date(block_time)) = "${monthDT}" 
 group by logDT 
 order by logDT
\`\`\`

### XCM Transfers In: 

[Schema](https://github.com/colorfulnotion/substrate-etl/blob/main/schema/xcmtransfers.json)

\`\`\`bash
SELECT date(origination_ts) as logDT, 
 COUNT(*) numXCMTransfersOut 
 FROM \`bigquery-public-data.${bqDataset}.xcmtransfers\` 
 where destination_para_id = ${paraID} and LAST_DAY(date(origination_ts)) = "${monthDT}" 
 group by logDT order by logDT
\`\`\`

### XCM Transfers Out: 

[Schema](https://github.com/colorfulnotion/substrate-etl/blob/main/schema/xcmtransfers.json)

\`\`\`bash
SELECT date(origination_ts) as logDT, 
 COUNT(*) numXCMTransfersIn 
 FROM \`bigquery-public-data.${bqDataset}.xcmtransfers\` 
 where origination_para_id = ${paraID} and LAST_DAY(date(origination_ts)) = "${monthDT}" 
 group by logDT 
order by logDT
\`\`\`

### XCM Messages In: 

[Schema](https://github.com/colorfulnotion/substrate-etl/blob/main/schema/xcm.json)

\`\`\`bash
SELECT date(origination_ts) as logDT, 
 COUNT(*) numXCMMessagesOut 
 FROM \`bigquery-public-data.${bqDataset}.xcm\` 
 where destination_para_id = ${paraID} and LAST_DAY(date(origination_ts)) = "${monthDT}" 
 group by logDT order by logDT
\`\`\`

### XCM Messages Out: 

[Schema](https://github.com/colorfulnotion/substrate-etl/blob/main/schema/xcm.json)

\`\`\`bash
SELECT date(origination_ts) as logDT, 
 COUNT(*) numXCMMessagesIn 
 FROM \`bigquery-public-data.${bqDataset}.xcm\` 
 where origination_para_id = ${paraID} and LAST_DAY(date(origination_ts)) = "${monthDT}" 
 group by logDT 
order by logDT
\`\`\`
`);
		docs[k].push(`\r\nReport source: [${url}](${url}) | See [Definitions](/DEFINITIONS.md) for details`);
            }
            let logDT = r.logDT ? r.logDT : "";
            let startBN = r.startBN ? r.startBN.toLocaleString('en-US') : "";
            let endBN = r.endBN ? r.endBN.toLocaleString('en-US') : "";
            let issues = r.issues ? r.issues : "-";
            let valueTransfersUSD = r.valueTransfersUSD > 0 ? `(${currencyFormat(r.valueTransfersUSD)})` : ""
            let numBlocks = r.numBlocks ? r.numBlocks.toLocaleString('en-US') : "";
            let numBlocks_missing = r.numBlocks_missing ? r.numBlocks_missing.toLocaleString('en-US') : "";
            let percent_missing = r.numBlocks_missing > 0 ? "(" + Number(r.numBlocks_missing / (r.endBN - r.startBN)).toLocaleString(undefined, {
                style: 'percent',
                minimumFractionDigits: 2
            }) + ")" : "";
	    let missing = numBlocks_missing > 0 ? `${numBlocks_missing} missing ${percent_missing}` : "";
            let numSignedExtrinsics = r.numSignedExtrinsics ? r.numSignedExtrinsics.toLocaleString('en-US') : "";
            let numActiveAccounts = r.numActiveAccounts ? r.numActiveAccounts.toLocaleString('en-US') : "";
            let numPassiveAccounts = r.numPassiveAccounts ? r.numPassiveAccounts.toLocaleString('en-US') : "";
            let numNewAccounts = r.numNewAccounts ? r.numNewAccounts.toLocaleString('en-US') : "";
            let numAddresses = r.numAddresses ? r.numAddresses.toLocaleString('en-US') : ""
            let numEvents = r.numEvents ? r.numEvents.toLocaleString('en-US') : "";
            let numTransfers = r.numTransfers ? r.numTransfers.toLocaleString('en-US') : "";
            let numXCMTransfersIn = r.numXCMTransfersIn ? r.numXCMTransfersIn.toLocaleString('en-US') : "";
            let numXCMTransfersOut = r.numXCMTransfersOut ? r.numXCMTransfersOut.toLocaleString('en-US') : "";
            let valXCMTransferIncomingUSD = r.valXCMTransferIncomingUSD > 0 ? `(${currencyFormat(r.valXCMTransferIncomingUSD)})` : ""
            let valXCMTransferOutgoingUSD = r.valXCMTransferOutgoingUSD > 0 ? `(${currencyFormat(r.valXCMTransferOutgoingUSD)})` : ""
            let numXCMMessagesIn = r.numXCMMessagesIn ? r.numXCMMessagesIn.toLocaleString('en-US') : "";
            let numXCMMessagesOut = r.numXCMMessagesOut ? r.numXCMMessagesOut.toLocaleString('en-US') : "";

            if (prevStartBN && (prevStartBN != (r.endBN + 1)) && (r.endBN < prevStartBN)) {
                broken.push(logDT);
		console.log(logDT, prevStartBN, r.endBN)
                numBlocks_missing = " **BROKEN**";
            }
            j[k].push(`| ${logDT} | ${startBN} | ${endBN} | ${numBlocks} | ${numSignedExtrinsics} | ${numActiveAccounts} | ${numPassiveAccounts} | ${numNewAccounts} | ${numAddresses} | ${numEvents} | ${numTransfers} ${valueTransfersUSD} | ${numXCMTransfersIn} ${valXCMTransferIncomingUSD} | ${numXCMTransfersOut} ${valXCMTransferOutgoingUSD} | ${numXCMMessagesIn} | ${numXCMMessagesOut} | ${missing} |`)
            prevStartBN = r.startBN;
        }
	
        for (const k of Object.keys(j)) {
            j[k] = j[k].concat(docs[k]);
            //console.log("writing", fn_chain[k]);
            let f = fs.openSync(fn_chain[k], 'w', 0o666);
            fs.writeSync(f, j[k].join(NL) + NL);
        }
	if( broken.length > 0 ) {
	    console.log("BROKEN CHAIN", chainID, broken);
	}
    }
}
