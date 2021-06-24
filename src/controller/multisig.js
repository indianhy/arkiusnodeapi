const { MultisigABI } = require('../services/abi/Multisig');
const { chain, web3 } = require('../../config');

var Multisig = new web3.eth.Contract(MultisigABI, chain.Multisig);

const index = async(req, res) => {
    res.send("Multisig: Welcome to arkius")
}

const balance = async(req, res) => {
    var response = await Multisig.methods.balance().call();
    res.send(response);
}

const confirmation = async(req, res) => {
    var response = await Multisig.methods.c_numConfirmationsRequired().call();
    res.send(response);
}

const owners = async(req, res) => {
    var response = await Multisig.methods.getOwners().call();
    res.send(response);
}

const getTransaction = async(req, res) => {
    var response = await Multisig.methods.getTransaction(req.params.id).call();
    res.send(response);
}

const transactionCount = async(req, res) => {
    var response = await Multisig.methods.getTransactionCount().call();
    res.send(response);
}

const isConfirmed = async(req, res) => {
    var response = await Multisig.methods.m_isConfirmed(req.params.id, req.params.address).call();
    res.send(response);
}

const isOwner = async(req,res) => {
    var response = await Multisig.methods.m_isOwner(req.params.address).call();
    res.send(response);
}

const owner = async(req, res) => {
    var response = await Multisig.methods.m_owners(req.params.id).call();
    res.send(response);
}

module.exports = { index, balance, confirmation, owner, owners, getTransaction, transactionCount, isOwner, isConfirmed }

/**
 * function executeTransaction(uint256 txIndex)
 * function confirmTransaction(uint256 txIndex)
 * function revokeConfirmation(uint256 txIndex)
 * function submitTransaction(address to, uint128 value, bytes memory data)
 */