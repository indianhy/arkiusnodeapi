const express = require("express");
const router = express.Router();

const controller = require('../controller/NFTs.js');
router.get('/'                       ,  controller.index);
router.get('/memberIdOf/:address'    ,  controller.memberIdOf);
router.get('/addressOfMember/:id'    ,  controller.addressOfMember);
router.get('/certifierIdOf/:address' ,  controller.certifierIdOf);
router.get('/addressOfCertifier/:id' ,  controller.addressOfCertifier);
router.get('/seekerIdOf/:address'    ,  controller.seekerIdOf);
router.get('/addressOfSeeker/:id'    ,  controller.addressOfSeeker);


module.exports = router;
