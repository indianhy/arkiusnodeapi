const express = require("express");
const router  = express.Router();

const controller = require('../controller/certifications.js');

router.get('/', controller.index);

router.get('/isValidCertification/:id', controller.isValidCertification);

router.get('/allCertifications', controller.allCertifications);

router.get('/dynamicCertification/:id', controller.dynamicCertification);

router.get('/subscriptions/:address', controller.subscriptions);

router.get('/certificationScore/:certificationId/:entityId', controller.certificationScore);

router.get('/staticCertification/:id', controller.staticCertification);

router.get('/subscribers/:certificationId', controller.subscribers);

module.exports = router;