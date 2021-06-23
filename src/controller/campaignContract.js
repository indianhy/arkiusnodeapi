const { CampaignABI } = require('../services/abi/Campaign');
const { chain, web3 } = require('../../config');

var Campaign = new web3.eth.Contract(CampaignABI, chain.Campaign);

const index = async (req, res) => {
    res.send("Campaign: Welcome to arkius")
}

const seekerCampaigns = async(req, res) => {
    var response = await Campaign.methods.getAttentionSeekerCampaigns(req.params.address).call();
    res.send(response);
}

const allCampaigns = async(req, res) => {
    var response = await Campaign.methods.getAllCampaigns().call();
    res.send(response)
}

const getCampaign = async(req, res) => {
    var response = await Campaign.methods.getCampaign(req.params.id).call();
    res.send(response);
}

const owner = async (req, res) => {
    var response = await Campaign.methods.owner().call();
    res.send(response)
}

const isOwner = async (req, res) => {
    var response = await Campaign.methods.isOwner().call();
    res.send(response)
}

////////////// Not Working  //////////////////////////////
const marketPlace = async(req, res) => {
    var response = await Campaign.methods.m_marketplaceControllerContract().call();
    res.send(response)
}

module.exports = { index, allCampaigns, seekerCampaigns, getCampaign, owner, isOwner, marketPlace }

/**
 * function updateMarketplaceController(address newMarketplaceControllerAddress)
 * function adClicked(uint campaignID)
 * function editCampaign(uint id,
        uint target,
        string memory title,
        string memory content,
        string memory imageUrl,
        string memory destinationUrl,
        string memory metadata)
 * function deleteCampaign(uint id)
 * function fundCampaign(uint256[] memory id, uint256[] memory replenish)
 * function addCampaign(uint id,
                        string memory title,
                        string memory content,
                        string memory imageUrl,
                        string memory destinationUrl,
                        string memory metadata,
                        uint96 target,
                        uint96 amountPerAd,
                        uint96 totalFunding)
 */