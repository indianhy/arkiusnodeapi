const CertificationABI = [
	{
		"inputs": [
			{
				"internalType": "contract IArkiusMembershipToken",
				"name": "memberContract",
				"type": "address"
			},
			{
				"internalType": "contract IArkiusCertifierToken",
				"name": "certifierContract",
				"type": "address"
			},
			{
				"internalType": "contract IArkiusAttentionSeekerToken",
				"name": "attentionSeekerContract",
				"type": "address"
			},
			{
				"internalType": "contract EntityContract",
				"name": "entityContract",
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
				"name": "certificationID",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256[]",
				"name": "entityID",
				"type": "uint256[]"
			},
			{
				"indexed": true,
				"internalType": "uint256[]",
				"name": "certification",
				"type": "uint256[]"
			}
		],
		"name": "CertifyStaticEntity",
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
				"internalType": "string",
				"name": "apiLink",
				"type": "string"
			}
		],
		"name": "CreateDynamicCertification",
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
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "creator",
				"type": "address"
			}
		],
		"name": "CreateStaticCertification",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256[]",
				"name": "certificationID",
				"type": "uint256[]"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "deleted",
				"type": "uint256[]"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "CertificateCreator",
				"type": "address"
			}
		],
		"name": "DeleteCertification",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "memberID",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256[]",
				"name": "certificationID",
				"type": "uint256[]"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "subscribed",
				"type": "uint256[]"
			}
		],
		"name": "SubscribeCertification",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "memberID",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256[]",
				"name": "certificationID",
				"type": "uint256[]"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "unsubscribed",
				"type": "uint256[]"
			}
		],
		"name": "UnsubscribeCertification",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "certificationID",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "string",
				"name": "apiLink",
				"type": "string"
			}
		],
		"name": "UpdateDynamicEntity",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "certificationExists",
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
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "enum Certifications.EntityType",
				"name": "types",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "metadata",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "apiLink",
				"type": "string"
			}
		],
		"name": "createDynamicCertification",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
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
				"internalType": "enum Certifications.EntityType",
				"name": "types",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "metadata",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			}
		],
		"name": "createStaticCertification",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "Id",
				"type": "uint256[]"
			}
		],
		"name": "deleteCertification",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllCertifications",
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
				"name": "certificationID",
				"type": "uint256"
			}
		],
		"name": "getDynamicCertificateLink",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "certificationID",
				"type": "uint256"
			}
		],
		"name": "getDynamicCertification",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "_certificationId",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "_certifier",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "_title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "_description",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "_metadataLink",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "_apiLink",
						"type": "string"
					},
					{
						"internalType": "enum Certifications.EntityType",
						"name": "_entityType",
						"type": "uint8"
					}
				],
				"internalType": "struct Certifications.DynamicCertification",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "memberAddress",
				"type": "address"
			}
		],
		"name": "getMemberSubscriptions",
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
				"name": "certificationID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "entityID",
				"type": "uint256"
			}
		],
		"name": "getStaticCertificate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "certificationID",
				"type": "uint256"
			}
		],
		"name": "getStaticCertification",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "_certificationId",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "_certifier",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "_title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "_description",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "_metadataLink",
						"type": "string"
					},
					{
						"internalType": "enum Certifications.EntityType",
						"name": "_entityType",
						"type": "uint8"
					}
				],
				"internalType": "struct Certifications.ReturnStaticCertification",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "certificationID",
				"type": "uint256"
			}
		],
		"name": "getSubscribers",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
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
		"name": "m_dynamicCertifications",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_certificationId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_certifier",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_metadataLink",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_apiLink",
				"type": "string"
			},
			{
				"internalType": "enum Certifications.EntityType",
				"name": "_entityType",
				"type": "uint8"
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
		"name": "m_staticCertifications",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_certificationId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_certifier",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_metadataLink",
				"type": "string"
			},
			{
				"internalType": "enum Certifications.EntityType",
				"name": "_entityType",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "certificationID",
				"type": "uint256[]"
			}
		],
		"name": "subscribeCertification",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "certificationId",
				"type": "uint256[]"
			}
		],
		"name": "unsubscribeCertification",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "certificationID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "apiLink",
				"type": "string"
			}
		],
		"name": "updateDynamicEntity",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "certificationId",
				"type": "uint256"
			},
			{
				"internalType": "uint256[]",
				"name": "entityIds",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "scores",
				"type": "uint256[]"
			}
		],
		"name": "updateStaticEntity",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

module.exports = {CertificationABI}