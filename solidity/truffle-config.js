module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // Match any network id
      gasPrice: 2200000000,
      gas: 22000000
    }
  }
}
