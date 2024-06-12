require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("solidity-coverage");
require("hardhat-gas-reporter");
require("./tasks");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    /* README: https://hardhat.org/hardhat-network/docs/metamask-issue */
    hardhat: {
      chainId: 1337
    },
    sibrt: {
      url: 'https://rpc.test.siberium.net',
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  gasReporter: {
    enabled: (process.env.REPORT_GAS) ? true : false,
  }
};
