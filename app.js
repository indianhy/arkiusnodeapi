require('dotenv').config()
const express = require('express');
var bodyParser = require('body-parser')
const Web3 = require('web3');
const cors = require('cors');
const indexRouter = require("./routes/index");
//const memberRouter = require("./routes/memberNFT");
const arkiusTokenRouter = require("./routes/arkiusToken");
const config = require("./config");

const app = express();
//app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
//app.use(app.router);
//routes.initialize(app);
app.use("/", indexRouter);
//app.use("/member", memberRouter);
app.use("/token", arkiusTokenRouter);



app.listen(process.env.PORT, () => {
    console.log(`now listening for requests on port ${process.env.PORT}`);
    //avaxtest();
});
