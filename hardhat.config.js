require('@nomiclabs/hardhat-waffle');
require("dotenv").config({ path: ".env" });

module.exports = {
  solidity: '0.8.1',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/NZQdadkhol7JP10Cv6q339K3YsoIJqtg',
      accounts: ["6fbc4c2c7483535bc6e5ca96e2d6526194a2c910f8f5443ed51421ac548b5e11"]
    },
  },
};