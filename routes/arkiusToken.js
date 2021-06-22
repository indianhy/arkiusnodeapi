const express = require("express");
const router  = express.Router();

const controller = require('../controller/arkiusToken.js');

router.get('/', controller.index);
router.get('/name',controller.name);
router.get('/symbol',controller.symbol);
router.get('/decimals',controller.decimals);
router.get('/totalSupply',controller.totalSupply);
router.get('/balanceOf/:address',controller.balanceOf);
router.get('/allowanceOf/:owner/:spender',controller.allowanceOf);

/*async function avaxtest(){
        const receipt = await RPT.methods
                      .approve(testAddress,123456789456123)
                      .send({ from: myAddress, gas:30000 });
        console.log("Completed:", receipt);
}

// Reusable function to perform transactions on any contract
async function transact (data, contractAddress) {
	try {

		var bal = await web3.eth.getBalance(holderAddress);
		var gasFee = ( gas_limit * gas_price ) / 1E18;
		if(gasFee > bal){
			throw new Error('You do not have enough AVAX to complete this transaction. Please deposit more or go to your Settings to change your gas fee.');
		}

		var count = await web3.eth.getTransactionCount(holderAddress);
		var txData = {
			nonce: web3.utils.toHex(count),
			gasLimit: web3.utils.toHex(gas_limit),
			gasPrice: web3.utils.toHex(gas_price),
			to: contractAddress,
			from: holderAddress,
			data: data
		}
		var transaction = new TX(txData,{chain:chain.chain_name, hardfork:'petersburg'});
		transaction.sign(privateKey);
		var serialisedTransaction = transaction.serialize().toString('hex');

		var receipt = await web3.eth.sendSignedTransaction('0x' + serialisedTransaction);
		return receipt;
	} catch(e) {
		throw new Error(e);
	}
}

async function transactCallerExample(param1, param2) {
	try {
		const data   = await ArkiusToken.methods.approve(param1, param2).encodeABI();
		const result = await transact(data, chain.ArkiusToken);
		return result;
	} catch(e) {
		// #CHANGE 2 (throw this error)
		throw new Error('Not elegible for rewards yet!');
	}
}*/


module.exports = router;
