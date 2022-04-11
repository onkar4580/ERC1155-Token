/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("@nomiclabs/hardhat-waffle");

 const ALCHEMY_API_KEY = "______________________";
 const RINKEBY_PRIVATE_KEY = "_____________________________";
 module.exports = {
   solidity: "0.8.1",
 
   networks: {
     rinkeby: {
       url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
       accounts: [`0x${RINKEBY_PRIVATE_KEY}`],
       gasPrice: 8000000000,
     },
   },
 };;
