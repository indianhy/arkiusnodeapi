
const { MemberABI } = require('../services/abi/MemberNFT');
const { CertifierABI } = require('../services/abi/CertifierNFT');
const { SeekerABI } = require('../services/abi/SeekerNFT');
const { chain, web3 } = require('../../config');

var MemberNFT    = new web3.eth.Contract(MemberABI, chain.MemberNFT);
var CertifierNFT = new web3.eth.Contract(CertifierABI, chain.CertifierNFT);
var SeekerNFT    = new web3.eth.Contract(SeekerABI, chain.SeekerNFT);

const index = async (req, res) =>  { 
        return res.send('NFT : Welcome to Arkius ;)');
    }
    
const memberIdOf = async (req, res) =>  { 
    var response = await MemberNFT.methods.memberIdOf(req.params.address).call();
    return res.send(response);
}

const addressOfMember = async (req, res) =>  { 
    var response = await MemberNFT.methods.m_creators(req.params.id).call();
    return res.send(response);
}

const certifierIdOf = async (req, res) =>  { 
    var response = await CertifierNFT.methods.certifierIdOf(req.params.address).call();
    return res.send(response);
}

const addressOfCertifier = async (req, res) =>  { 
    var response = await CertifierNFT.methods.m_creators(req.params.id).call();
    return res.send(response);
}

const seekerIdOf = async (req, res) =>  { 
    var response = await SeekerNFT.methods.attentionSeekerIdOf(req.params.address).call();
    return res.send(response);
}

const addressOfSeeker = async (req, res) =>  { 
    var response = await SeekerNFT.methods.m_creators(req.params.id).call();
    return res.send(response);
}

module.exports = { index, memberIdOf, addressOfMember, certifierIdOf, addressOfCertifier, seekerIdOf, addressOfSeeker }