require('dotenv').config({ path: './../.env'})
const express = require('express');
const app     = express();
const cors    = require('cors');

//Routes
const indexRouter          = require("./routes/index");
const arkiusTokenRouter    = require("./routes/arkiusToken");
const rolesRouter          = require("./routes/roles");
const certificationsRouter = require("./routes/certifications");
const campaignRouter       = require("./routes/campaignContract");

app.use(express.json());
app.use(cors());

app.use("/", indexRouter);
app.use("/token", arkiusTokenRouter);
app.use("/NFT", rolesRouter);
app.use("/certification", certificationsRouter);
app.use("/campaign", campaignRouter);

// Start listening
app.listen(process.env.PORT, () => {
    console.log(`now listening for requests on port ${process.env.PORT}`);
});