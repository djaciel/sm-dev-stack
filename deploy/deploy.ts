import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction, DeployResult } from 'hardhat-deploy/types'

const deployFunction: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  console.log('\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
  console.log('Smart Contracts - Dev Started Kit')
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n')

  const { getNamedAccounts, deployments, getChainId, ethers, upgrades } = hre
  const { deploy } = deployments

  let { deployer } = await getNamedAccounts()

  const chainId = parseInt(await getChainId())

  console.log(`network: ${chainId}`)
  console.log(`deployer: ${deployer}`)

  // const Counter = await ethers.getContractFactory('Counter')

  // console.log(`\nDeploying Counter...`)

  // const counter = await upgrades.deployProxy(Counter, [0], { initializer: 'initialize' })
  // counter.deployed()

  // console.log(`Counter deployed at ${counter.address}`)

  // Updagrade

  const CounterV2 = await ethers.getContractFactory('CounterV2')

  console.log(`\nUpgrading Counter...`)

  await upgrades.upgradeProxy('0x9A676e781A523b5d0C0e43731313A708CB607508', CounterV2)

  console.log(`Counter upgraded`)
}

export default deployFunction
