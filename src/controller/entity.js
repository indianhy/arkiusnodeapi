const { EntityABI } = require('../services/abi/Entity');
const { chain, web3 } = require('../../config');

var Entity = new web3.eth.Contract(EntityABI, chain.Entity);

const index = async(req, res) => {
    res.send("Entity: Welcome to arkius")
}

const owner = async(req, res) => {
    var response = await Entity.methods.c_owner().call();
    res.send(response);
}

const allEntities = async(req, res) => {
    var response = await Entity.methods.getAllEntities().call();
    res.send(response);
}

const campaignContractAddress = async(req, res) => {
    var response = await Entity.methods.m_campaignContractAddress().call();
    res.send(response);
}

const getEntity = async(req, res) => {
    var response = await Entity.methods.getEntity(req.params.id).call();
    res.send(response);
}

////////////////////// Not Working  ///////////////////////////////////

const seekerEntities = async(req,res) => {
    var response = await Entity.methods.getAttentionSeekerEntities(req.params.address).call();
    res.send(response);
}

module.exports = { index, owner, allEntities, campaignContractAddress, getEntity, seekerEntities }

/**
 * function createEntity(uint256 id,
                          string memory title,
                          EntityType types,
                          string memory description,
                          string memory metadata,
                          address attentionSeekerAddress
                         )
 * function editEntity(uint256 id,
                         string memory title,
                         string memory description,
                         string memory metadata,
                         address attentionSeekerAddress
                        )
 * function deleteEntity(uint256 id, address attentionSeekerAddress)
 * function setCampaignContractAddress(address campaignAddress)
 *  
 */