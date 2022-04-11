const hre = require("hardhat");

async function main() {
 
  // We get the contract to deploy
  const rockPaperScissors = await hre.ethers.getContractFactory("rockPaperScissors");
  const items = await rockPaperScissors.deploy();
  await items.deployed();

  console.log("The  collection of items deployed at the address: ", items.address);


}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
