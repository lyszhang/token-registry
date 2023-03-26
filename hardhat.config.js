require('@nomicfoundation/hardhat-toolbox')
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.17',
  networks: {
    hardhat: {
      blockGasLimit: 50000000000
    }
  }
}
