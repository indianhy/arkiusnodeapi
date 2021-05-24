require('dotenv').config()
const express = require('express');
var bodyParser = require('body-parser')
const Web3 = require('web3');
const cors = require('cors');
const { RoyaNFTABI, RoyaleLPABI, RPTABI } = require('./abi');

const app = express();
//app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const testnet = {
    provider_infura: 'https://ropsten.infura.io/v3/718f7ebaae36495d8f2178f215e2857e',
    chain_name: 'ropsten',
    RPToken: "0x6c6CfbE790b0e6382C071973A336C09E0eFE4505",
}
const mainnet = {
    RPToken: "0xee7C29f912760611365108aCe4AE86Bc76b8488e",

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

var RPT = new web3.eth.Contract(RPTABI, chain.RPToken);


app.get('/', (req, res) => {
    res.send('Arkius Home : Welcome to Arkius ;)')
})

app.get('/getAll', (req, res) => {
    ;
});



async function avaxtest(){
        var allowance = await RPT.methods.allowance(myAddress,testAddress).call();
        console.log({allowance});

        const receipt = await RPT.methods
                      .approve(testAddress,123456789456123)
                      .send({ from: myAddress, gas:30000 });
        console.log("Completed:", receipt);
}

app.listen(process.env.PORT, () => {
    console.log(`now listening for requests on port ${process.env.PORT}`);//` ${process.env.MongoID} ${process.env.ETHAPI} ${process.env.INFURA}`);
    avaxtest();
});
