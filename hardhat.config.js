require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const {
	ALCHEMY_API_URL,
	PRIVATE_KEY
} = process.env;

module.exports = {
	solidity: "0.8.7",
	defaultNetwork: "goerli",
	networks: {
		goerli: {
			url: ALCHEMY_API_URL,
			accounts: [`0x${PRIVATE_KEY}`]
		}
	},
}