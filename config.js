const Web3 = require('web3');

const testnet = {
    provider_infura: 'https://ropsten.infura.io/v3/718f7ebaae36495d8f2178f215e2857e',
    chain_name: 'ropsten',
    ArkiusToken: "0x6c6CfbE790b0e6382C071973A336C09E0eFE4505",
}
const mainnet = {
    ArkiusToken: "0xee7C29f912760611365108aCe4AE86Bc76b8488e",

    provider_infura: process.env.INFURA,
    chain_name: 'mainnet'
}

var chain = testnet;

const web3 = new Web3(
    new Web3.providers.HttpProvider("https://api.avax-test.network/ext/bc/C/rpc",//process.env.INFURA,
        {
                clientConfig: {
                    keepalive: true,
                    keepaliveInterval: 6000
                },

                reconnect: {
                auto: true,
                delay: 1000,
                maxAttempts: 10,
                }
       })
);

const myPrivateKey = "0xf394fb63726c2f8ac52928a7e4524adea2084ecbe87a5d87f63c2ec54e66fa1e"
const myAddress = "0x287A135702555F69BA6eE961f69ee60Fbb87A0e8";
const testAddress = "0x122008FCb819B484206A30E3DE50eC99c7bf7307";
web3.eth.accounts.wallet.add(myPrivateKey);


module.exports = {chain,web3, myPrivateKey, myAddress, testAddress};
