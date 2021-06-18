const Web3 = require('web3');

const testnet = {
    provider_node: "https://api.avax-test.network/ext/bc/C/rpc",
    chain_name   : 'fuji',

    ArkiusToken  : "0x6c6CfbE790b0e6382C071973A336C09E0eFE4505",
    MemberNFT    : "0xAE8530aC046E1d52E77F0Cd4DA4F157F12098259"
}
const mainnet = {
    provider_node : process.env.INFURA,
    chain_name      : 'mainnet',

    ArkiusToken     : "0xee7C29f912760611365108aCe4AE86Bc76b8488e",

}

var chain = testnet;


const web3 = new Web3(
    new Web3.providers.HttpProvider(chain.provider_node,
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



module.exports = {chain, web3, myPrivateKey, myAddress, testAddress};
