import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'
import 'hardhat-deploy'
import 'hardhat-deploy-ethers'
import 'hardhat-gas-reporter'
import 'solidity-coverage'

import networks from './hardhat.network';

import { HardhatUserConfig } from 'hardhat/types';

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 100,
    enabled: process.env.REPORT_GAS ? true : false,
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    maxMethodDiff: 10,
  },
  mocha: {
    timeout: 30000,
  },
  solidity: {
    version: '0.8.1',
    settings: {},
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  networks,
  typechain: {
    outDir: 'types',
    target: 'ethers-v5',
  },
}

export default config
