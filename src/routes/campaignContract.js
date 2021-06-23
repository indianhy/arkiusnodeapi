const express = require("express");
const router = express.Router();

const controller = require('../controller/campaignContract.js');

router.get('/', controller.index)

router.get('/seeker-campaign/:address', controller.seekerCampaigns)

router.get('/all-campaign/:address', controller.allCampaigns)

router.get('/get-campaign/:id', controller.getCampaign)



router.get('/is-owner', controller.isOwner)

router.get('marketplace-address', controller.marketPlace)

module.exports = router;