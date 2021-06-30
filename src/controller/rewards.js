const { RewardsABI } = require('../services/abi/Rewards');
const { chain, web3 } = require('../../config');
const { response } = require('express');

var Rewards = new web3.eth.Contract(RewardsABI, chain.Rewards);

const index = async(req, res) => {
    res.send("Rewards: Welcome to arkius")
}

const owner = async(req, res) => {
    var reasponse = await Rewards.method.c_owner().call();
    res.send(response)
}


module.exports = { index }