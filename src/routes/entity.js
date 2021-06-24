const express = require("express");
const router = express.Router();

const controller = require('../controller/entity.js');

router.get('/', controller.index)

router.get('/owner', controller.owner);

router.get('/all/entities', controller.allEntities);

router.get('/seeker/all/entities/:address', controller.seekerEntities);

router.get('/campaign/contract', controller.campaignContractAddress);

router.get('/get/:id', controller.getEntity);

module.exports = router