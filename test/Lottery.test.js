const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compile = require('../compile');
const interface = JSON.parse(compile).contracts["Lottery.sol"].Lottery.abi;
const bytecode = JSON.parse(compile).contracts["Lottery.sol"].Lottery.evm.bytecode.object;

let lottery;
let accounts;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    lottery = await new web3.eth.Contract(interface)
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: 1000000});
});

describe('Lottery Contract', () => {
    it('deploys a contract', () => {
        assert.ok(lottery.options.address);
    });

    
});