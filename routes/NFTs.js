const express = require("express");
const router = express.Router();

const { MemberABI } = require('./../abi/MemberNFT');
const { CertifierABI } = require('./../abi/CertifierNFT');
const { SeekerABI } = require('./../abi/SeekerNFT');
const { chain, web3 } = require('./../config');

var MemberNFT    = new web3.eth.Contract(MemberABI, chain.MemberNFT);
var CertifierNFT = new web3.eth.Contract(CertifierABI, chain.CertifierNFT);
var SeekerNFT    = new web3.eth.Contract(SeekerABI, chain.SeekerNFT);

router.get('/', (req, res) => {
    res.send('NFT : Welcome to Arkius ;)')
});

router.get('/memberIdOf/:address', async (req, res) => {
        var response = await MemberNFT.methods.memberIdOf(req.params.address).call();
        res.send(response);
});

router.get('/addressOfMember/:id', async (req, res) => {
        var response = await MemberNFT.methods.m_creators(req.params.id).call();
        res.send(response);
});


router.get('/certifierIdOf/:address', async (req, res) => {
        var response = await CertifierNFT.methods.certifierIdOf(req.params.address).call();
        res.send(response);
});

router.get('/addressOfCertifier/:id', async (req, res) => {
        var response = await CertifierNFT.methods.m_creators(req.params.id).call();
        res.send(response);
});

router.get('/seekerIdOf/:address', async (req, res) => {
        var response = await SeekerNFT.methods.attentionSeekerIdOf(req.params.address).call();
        res.send(response);
});

router.get('/addressOfSeeker/:id', async (req, res) => {
        var response = await SeekerNFT.methods.m_creators(req.params.id).call();
        res.send(response);
});


module.exports = router;
