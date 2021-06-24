const express = require("express");
const router  = express.Router();

const controller = require('../controller/certifications.js');

router.get('/', controller.index);

router.get('/is/valid/certification/:id', controller.isValidCertification);

router.get('/all/certifications', controller.allCertifications);

router.get('/dynamic/certification/:id', controller.dynamicCertification);

router.get('/subscriptions/:address', controller.subscriptions);

router.get('/certification/score/:certificationId/:entityId', controller.certificationScore);

router.get('/static/certification/:id', controller.staticCertification);

router.get('/subscribers/:certificationId', controller.subscribers);

module.exports = router;