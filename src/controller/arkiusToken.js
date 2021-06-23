
const { TokenABI } = require('../services/abi/ArkiusToken');
const { chain, web3 } = require('../../config');

var ArkiusToken = new web3.eth.Contract(TokenABI, chain.ArkiusToken);

const index = async (req, res) =>  { 
    return res.send('Arkius Token : Welcome to Arkius ;)')
}

const name = async (req, res) =>  { 
    var response = await ArkiusToken.methods.name().call();
     return  res.send(response);
}

const symbol = async (req, res) =>  { 
    var response = await ArkiusToken.methods.symbol().call();
      return  res.send(response);
}

const decimals = async (req, res) =>  { 
    var response = await ArkiusToken.methods.decimals().call();
     return   res.send(response);
}

const totalSupply = async (req, res) =>  { 
    var response = await ArkiusToken.methods.totalSupply().call();
    return res.send(response);
}

const balanceOf = async (req, res) =>  { 
    var balance = await ArkiusToken.methods.balanceOf(req.params.address).call();
      return  res.send(balance);
}

const allowanceOf = async (req, res) =>  { 
    var allowance = await ArkiusToken.methods.allowance(req.params.owner, req.params.sender).call();
    return res.send(allowance);
}



module.exports = {index, name, symbol, decimals, totalSupply, balanceOf, allowanceOf}