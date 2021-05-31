const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Arkius Home : Welcome to Arkius ;)')
});

module.exports = router;
