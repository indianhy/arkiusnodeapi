
const { CertificationABI } = require('./../abi/Certification');
const { chain, web3 } = require('./../config');

var certification = new web3.eth.Contract(CertificationABI, chain.Certifiaction);

const index = async (req, res) =>  { 
    return res.send('Arkius Certification : Welcome to Arkius ;)')
}

const isValidCertification = async(req, res) => {
    var response = await certification.methods.certificationExists(req.params.id).call();
    res.send(response);
}

const allCertifications = async(req, res) => {
    var response = await certification.methods.getAllCertifications().call();
    res.send(response);
}

const dynamicCertification = async(req, res) => {
    var response = await certification.methods.getDynamicCertification(req.params.id).call();
    res.send(response);
}

const subscriptions = async(req, res) => {
    var response = await certification.methods.getMemberSubscriptions(req.params.address).call();
    res.send(response);
}

const certificationScore = async(req, res) => {
    var response = await certification.methods.getStaticCertificate(req.params.certificationId, req.params.entityId).call();
    res.send(response);
}

const staticCertification = async(req, res) => {
    var response = await certification.methods.getStaticCertification(req.params.id).call();
    res.send(response);
}

const subscribers = async(req, res) => {
    var response = await certification.methods.getSubscribers(req.params.certificationId).call();
    res.send(response);
}


module.exports = {index, isValidCertification, allCertifications, dynamicCertification, subscriptions, certificationScore, staticCertification, subscribers}