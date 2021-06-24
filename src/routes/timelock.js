const express = require("express");
const router = express.Router();

const controller = require('../controller/timelock.js');

router.get('/', controller.index)

router.get('/balance', controller.balance)

router.get('/owner', controller.owner)

router.get('/is/owner', controller.isOwner)

router.get('/detail/:address', controller.detail)

module.exports = router;
