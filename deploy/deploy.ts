import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction, DeployResult } from 'hardhat-deploy/types'

const deployFunction: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  console.log('\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
  console.log('Smart Contracts - Dev Started Kit')
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n')

  const { getNamedAccounts, deployments, getChainId } = hre
  const { deploy } = deployments

  let { deployer } = await getNamedAccounts()

  const chainId = parseInt(await getChainId())

  console.log(`network: ${chainId}`)
  console.log(`deployer: ${deployer}`)

  console.log(`\nDeploying Counter...`)

  const counterResult: DeployResult = await deploy('Counter', {
    from: deployer,
    skipIfAlreadyDeployed: true,
  })

  console.log(`Counter deployed at ${counterResult.address}`)
}

export default deployFunction
