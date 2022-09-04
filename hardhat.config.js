require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const {
	ALCHEMY_API_URL,
	//Add Polygon Mumbai URL
	ALCHEMY_API_URL_MUMBAI,
	PRIVATE_KEY
} = process.env;

module.exports = {
	solidity: "0.8.7",
	defaultNetwork: "goerli",
	networks: {
		goerli: {
			url: ALCHEMY_API_URL,
			accounts: [`0x${PRIVATE_KEY}`]
		},
		// Add Polygon Mumbai network
		Mumbai: {
			url: ALCHEMY_API_URL_MUMBAI,
			accounts: [`0x${PRIVATE_KEY}`]
		},
	},
}