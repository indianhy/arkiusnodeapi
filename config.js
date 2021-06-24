const Web3 = require('web3');

const testnet = {
    provider_node: "https://api.avax-test.network/ext/bc/C/rpc",
    chain_name   : 'fuji',

    ArkiusToken   : "0xa3d0d2489BEd6A551ca84f296dcb2D8fc6dd3eF3",
    MemberNFT     : "0x4f5A9c586621d47bAAbc3a0EfD519027d173Ce45",
    SeekerNFT     : "0x60465133DD3f8518bFa61FeA4C2D412DBd7E17df",
    CertifierNFT  : "0x6ea16312A9656CFA49DE58CB5E606eD99f2D0200",
    Certifiaction : "0x162e4b45c1D266185dbA855Ea5fB0Ae172F1c739",
    Campaign      : "0x8DC0fAF4778076A8a6700078A500C59960880F0F",
    Entity        : "0xc4e1dEc4CAC6082Bc426A9AF3AD0c23b4031c29C",
    TokenManager  : "0xE5fD449E216B9E23a5D966345C0968BD72Ade07A",
    Timelock      : "0x6261b6B565978C5E1343Db9ECCe9d66c23c5E274",
    Multisig      : "0xa7eA3f78a6badb2E3D6Da7859f27b5dD61014F0f",
    Rewards       : "0x2676E21B741B131685D2775D53927daf0C73e56e"
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

// const myPrivateKey = "0xf394fb63726c2f8ac52928a7e4524adea2084ecbe87a5d87f63c2ec54e66fa1e"
// const myAddress = "0x287A135702555F69BA6eE961f69ee60Fbb87A0e8";
// const testAddress = "0x122008FCb819B484206A30E3DE50eC99c7bf7307";
// web3.eth.accounts.wallet.add(myPrivateKey);



module.exports = {chain, web3};
