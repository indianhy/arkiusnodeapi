const express = require("express");
const router = express.Router();

const controller = require('../controller/multisig.js');

router.get('/', controller.index)

router.get('/balance', controller.balance)

router.get('/confirmations',controller.confirmation)

router.get('/owners',controller.owners)

/////////////////// Need to be discussed  ////////////////////////////
router.get('/transaction/:id',controller.getTransaction)

router.get('/transaction/count',controller.transactionCount)

router.get('/is/confirmed/:id/:address',controller.isConfirmed)

router.get('/is/owner/:address',controller.isOwner)

router.get('/owner/:id',controller.owner)

module.exports = router;