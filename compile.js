const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

var input = {
    language: 'Solidity',
    sources: {
        'Inbox.sol' : {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ "abi", "evm.bytecode" ]
            }
        }
    }
};

//console.log(solc.compile(JSON.stringify(input)));

module.exports = solc.compile(JSON.stringify(input));
