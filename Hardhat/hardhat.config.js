require('dotenv').config();
require('@nomiclabs/hardhat-waffle');
require("@nomiclabs/hardhat-etherscan");

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const API_KEY = process.env.API_KEY;

module.exports = {
	solidity: '0.8.17',
	settings: {
		optimizer: {
			enabled: true,
			runs: 200
		}
	},
	networks: {
		mainnet: {
			url: `https://rpcapi.fantom.network`,
			chainId: 250,
			accounts: [`${PRIVATE_KEY}`]
		},
		testnet: {
			url: `https://rpc.testnet.fantom.network`,
			chainId: 4002,
			accounts: [`${PRIVATE_KEY}`]
		},
		coverage: {
			url: 'http://localhost:8555'
		},
		fakenet: {
			url: `http://127.0.0.1:4000`
		}
	},
	etherscan: {
		apiKey: {
			ftmTestnet: API_KEY,
			opera: API_KEY,
			fakenet: API_KEY
		},
		customChains: [
			{
				network: 'fakenet',
				chainId: 4003,
				urls: {
					apiURL: 'http://localhost:4444/api',
					browserURL: 'http://localhost:4444/',
				},
			},
		],
	}
};
