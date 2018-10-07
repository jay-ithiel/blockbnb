/**
 * This is the settings config that will be injected into node env
 * 
 * @author @jay_ithiel
 * 
 * TODO: 
 * Fill in empty addresses & api keys
 */

module.exports = {
  development: {
    BLOCKBNB_HOST: 'http://localhost:7000',
    BLOCKBNB_HOST_API: 'http://localhost:3333',
    BLOCKBNB_ADDRESS: '',
    BLOCKBNB_PAYMENT_ADDRESS: '',
    ETH_PAYMENT_ADDRESS: '',
    GOOGLE_MAPS_KEY: '',
  },
  production: {
    BLOCKBNB_HOST: 'http://www.blockbnb.xyz',
    BLOCKBNB_HOST_API: 'http://api.blockbnb.xyz',
    BLOCKBNB_ADDRESS: '',
    BLOCKBNB_PAYMENT_ADDRESS: '',
    ETH_PAYMENT_ADDRESS: '',
    GOOGLE_MAPS_KEY: '',
  },
  testnet: {
    BLOCKBNB_HOST: 'http://testnet.blockbnb.xyz',
    BLOCKBNB_HOST_API: 'https://api-testnet.blockbnb.xyz',
    BLOCKBNB_ADDRESS: '',
    BLOCKBNB_PAYMENT_ADDRESS: '',
    ETH_PAYMENT_ADDRESS: '',
    GOOGLE_MAPS_KEY: '',
  },
};
