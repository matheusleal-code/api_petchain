const Web3 = require('web3');
const contractConfig = require('./config');

const web3 = new Web3("http://localhost:7545");
const contract = new web3.eth.Contract(contractConfig.CONTRACT_ABI, contractConfig.CONTRACT_ADDRESS);

module.exports = {
    web3,
    contract
}