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

  console.log(`\nDeploying JUSDT...`)

  const jUSDT: DeployResult = await deploy('JUSDT', {
    from: deployer,
    skipIfAlreadyDeployed: true,
  })

  console.log(`JUSDT deployed at ${jUSDT.address}`)


  console.log(`\nDeploying JDAI...`)

  const jDAI: DeployResult = await deploy('JDAI', {
    from: deployer,
    skipIfAlreadyDeployed: true,
  })

  console.log(`JDAI deployed at ${jDAI.address}`)


  console.log(`\nDeploying JWBTC...`)

  const jWBTC: DeployResult = await deploy('JWBTC', {
    from: deployer,
    skipIfAlreadyDeployed: true,
  })

  console.log(`JWBTC deployed at ${jWBTC.address}`)
}

export default deployFunction
