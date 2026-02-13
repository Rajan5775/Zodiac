import { ethers, network } from "hardhat";

async function main() {
  const currentNetwork = network.name;
  console.log(`🚀 Starting deployment to: ${currentNetwork}...`);

  // IF we are on Fhenix (Network B), deploy the Logic Contract
  if (currentNetwork === "fhenixHelium") {
    console.log("Deploying BlindZodiacLogic...");
    const Logic = await ethers.deployContract("BlindZodiacLogic");
    await Logic.waitForDeployment();
    console.log(`✅ Fhenix Logic deployed to: ${Logic.target}`);
  } 
  
  // IF we are on Base (Network A), deploy the NFT Contract
  else if (currentNetwork === "baseSepolia") {
    console.log("Deploying BlindZodiacNFT...");
    const NFT = await ethers.deployContract("BlindZodiacNFT");
    await NFT.waitForDeployment();
    console.log(`✅ Base NFT deployed to: ${NFT.target}`);
  }
  
  else {
    console.log("❌ Wrong Network! Use 'fhenixHelium' or 'baseSepolia'");
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});