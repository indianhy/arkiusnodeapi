require('dotenv').config()
const express           = require('express');
var bodyParser          = require('body-parser')
const Web3              = require('web3');
const cors              = require('cors');
const indexRouter       = require("./routes/index");
const NFTRouter         = require("./routes/NFTs");
const arkiusTokenRouter = require("./routes/arkiusToken");

const app = express();
//app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/", indexRouter);
app.use("/token", arkiusTokenRouter);
app.use("/NFT", NFTRouter);



app.listen(process.env.PORT, () => {
    console.log(`now listening for requests on port ${process.env.PORT}`);
});
