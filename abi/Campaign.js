const CampaignABI = [
	{
		"inputs": [
			{
				"internalType": "contract IArkiusAttentionSeekerToken",
				"name": "attentionSeekerAddress",
				"type": "address"
			},
			{
				"internalType": "contract IEntity",
				"name": "entityContractAddress",
				"type": "address"
			},
			{
				"internalType": "contract IERC20",
				"name": "token",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "campaignId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "totalClick",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "escrowBalance",
				"type": "uint256"
			}
		],
		"name": "AdClicks",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amountPerAd",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "totalFunding",
				"type": "uint256"
			}
		],
		"name": "AddCampaign",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "DeleteCampaign",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "target",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "content",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "imageUrl",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "destinationUrl",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "metadata",
				"type": "string"
			}
		],
		"name": "EditCampaign",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256[]",
				"name": "id",
				"type": "uint256[]"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "replenish",
				"type": "uint256[]"
			}
		],
		"name": "FundCampaign",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "campaignID",
				"type": "uint256"
			}
		],
		"name": "adClicked",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "content",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "imageUrl",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "destinationUrl",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "metadata",
				"type": "string"
			},
			{
				"internalType": "uint96",
				"name": "target",
				"type": "uint96"
			},
			{
				"internalType": "uint96",
				"name": "amountPerAd",
				"type": "uint96"
			},
			{
				"internalType": "uint96",
				"name": "totalFunding",
				"type": "uint96"
			}
		],
		"name": "addCampaign",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "deleteCampaign",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "target",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "content",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "imageUrl",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "destinationUrl",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "metadata",
				"type": "string"
			}
		],
		"name": "editCampaign",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "id",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "replenish",
				"type": "uint256[]"
			}
		],
		"name": "fundCampaign",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllCampaigns",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "attentionSeeker",
				"type": "address"
			}
		],
		"name": "getAttentionSeekerCampaigns",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getCampaign",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "_id",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "_campaignOwner",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "_adServed",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "_totalClick",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "_amountPerAd",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "_totalFunding",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "_escrowBalance",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "_title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "_content",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "_imageUrl",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "_destinationUrl",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "_metadata",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "_target",
						"type": "uint256"
					}
				],
				"internalType": "struct CampaignContract.CampaignInfo",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isOwner",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "m_campaigns",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_campaignOwner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_adServed",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_totalClick",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_amountPerAd",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_totalFunding",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_escrowBalance",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_content",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_imageUrl",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_destinationUrl",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_metadata",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_target",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "m_marketplaceControllerContract",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newMarketplaceControllerAddress",
				"type": "address"
			}
		],
		"name": "updateMarketplaceController",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

module.exports = {CampaignABI}