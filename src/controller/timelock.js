const { TimelockABI } = require('../services/abi/Timelock');
const { chain, web3 } = require('../../config');

var Timelock = new web3.eth.Contract(TimelockABI, chain.Timelock);

const index = async(req, res) => {
    res.send("Timelock: Welcome to arkius")
}

const balance = async(req, res) => {
    var response = await Timelock.methods.checkBalance().call();
    res.send(response);
}

const isOwner = async(req, res) => {
    var response = await Timelock.methods.isOwner().call();
    res.send(response);
}

const detail = async(req, res) => {
    var response = await Timelock.methods.lockerDetail(req.params.address).call();
    res.send(response);
}

const owner = async(req, res) => {
    var response = await Timelock.methods.owner().call();
    res.send(response);
}
 
module.exports = { index, balance, isOwner, detail, owner }

/**
 * function createLocker(address add, uint256 amount, uint256 timeInSeconds)
 * function addAmount(address add, uint256 amount)
 * function withdrawTokens()
 * function renounceOwnership()
 * function transferOwnership(address newOwner)
 */