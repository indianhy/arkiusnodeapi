const express = require("express");
const router = express.Router();

const controller = require('../controller/roles.js');
router.get('/'                         ,  controller.index);
router.get('/member/id/:address'       ,  controller.memberIdOf);
router.get('/address/of/member/:id'    ,  controller.addressOfMember);
router.get('/certifier/id/of/:address' ,  controller.certifierIdOf);
router.get('/address/of/certifier/:id' ,  controller.addressOfCertifier);
router.get('/seeker/id/of/:address'    ,  controller.seekerIdOf);
router.get('/address/of/seeker/:id'    ,  controller.addressOfSeeker);


module.exports = router;
