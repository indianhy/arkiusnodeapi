const express = require("express");
const router  = express.Router();

const { CertificationABI } = require('./../abi/Certification');
const { chain, web3 } = require('./../config');

var certification = new web3.eth.Contract(CertificationABI, chain.Certifiaction);

router.get('/', (req, res) => {
    res.send('Arkius Certification : Welcome to Arkius ;)')
});

router.get('/isValidCertification/:id', async(req, res) => {
    var response = await certification.methods.certificationExists(req.params.id).call();
    res.send(response);
})

router.get('/allCertifications', async(req, res) => {
    var response = await certification.methods.getAllCertifications().call();
    res.send(response);
});

router.get('/dynamicCertificaion/:id', async(req, res) => {
    var response = await certification.methods.getDynamicCertification(req.params.id).call();
    res.send(response);
});

router.get('/subscriptions/:address', async(req, res) => {
    var response = await certification.methods.getMemberSubscriptions(req.params.address).call();
    res.send(response);
});


module.exports = router;