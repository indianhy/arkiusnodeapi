require('dotenv').config()
const express = require('express');
const app     = express();
const cors    = require('cors');

//Routes
const indexRouter       = require("./routes/index");
const arkiusTokenRouter = require("./routes/arkiusToken");
const NFTRouter         = require("./routes/NFTs");
const certifications    = require("./routes/certifications");

app.use(express.json());
app.use(cors());

app.use("/", indexRouter);
app.use("/token", arkiusTokenRouter);
app.use("/NFT", NFTRouter);
app.use("/certification", certifications);

app.get('/healthcheck', (req, res) => {return res.send("healthy")})


// Start listening
app.listen(process.env.PORT, () => {
    console.log(`now listening for requests on port ${process.env.PORT}`);
    //avaxtest();
});

//app.use(app.router);
//routes.initialize(app);

//app.use("/member", memberRouter);
