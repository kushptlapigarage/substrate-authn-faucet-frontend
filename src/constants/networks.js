export const ETH_MAINNET_NETWORK = {
  displayName: 'Main Network',
  text: 'Main Network',
  value: 'homestead',
  name: 'homestead',
  networkURL: '',
  networkPort: '',
  networkFullUrl: '',
  type: 'mainnet',
  transactionsUrl: 'https://etherscan.io/address/',
  transactionUrl: 'https://etherscan.io/tx/',
  enable: true
};
export const ETH_KOVAN_NETWORK = {
  displayName: 'Kovan Test Network',
  text: 'Kovan Test Network',
  value: 'kovan',
  name: 'kovan',
  networkURL: '',
  networkPort: '',
  networkFullUrl: '',
  type: 'testnet',
  transactionsUrl: 'https://kovan.etherscan.io/address/',
  transactionUrl: 'https://kovan.etherscan.io/tx/',
  enable: false
};
export const ETH_ROPSTEN_NETWORK = {
  displayName: 'Ropsten Test Network',
  text: 'Ropsten Test Network',
  value: 'ropsten',
  name: 'ropsten',
  networkURL: '',
  networkPort: '',
  networkFullUrl: '',
  type: 'testnet',
  transactionsUrl: 'https://ropsten.etherscan.io/address/',
  transactionUrl: 'https://ropsten.etherscan.io/tx/',
  enable: true
};
export const ETH_RINKEBY_NETWORK = {
  displayName: 'RinkeBy Test Network',
  text: 'Rinkeby Test Network',
  value: 'rinkeby',
  name: 'rinkeby',
  networkURL: '',
  networkPort: '',
  networkFullUrl: '',
  type: 'testnet',
  transactionsUrl: 'https://rinkeby.etherscan.io/address/',
  transactionUrl: 'https://rinkeby.etherscan.io/tx/',
  enable: false
};
export const ETH_LOCALHOST_NETWORK = {
  displayName: 'Localhost',
  text: 'Localhost',
  value: 'localhost',
  name: 'localhost',
  url: 'http://localhost',
  networkPort: '8545',
  networkFullUrl: 'http://localhost:8545',
  type: 'testnet',
  enable: false
};
export const ETH_CUSTOM_NETWORK = {
  displayName: 'Custom',
  text: 'Custom',
  value: 'ethcustom',
  name: 'ethcustom',
  networkURL: '',
  networkPort: '',
  networkFullUrl: '',
  type: 'custom',
  enable: true
};
export const ETH_NETWORK_LIST = [
  ETH_MAINNET_NETWORK,
  ETH_ROPSTEN_NETWORK,
  ETH_KOVAN_NETWORK,
  ETH_RINKEBY_NETWORK,
  ETH_LOCALHOST_NETWORK,
  ETH_CUSTOM_NETWORK
];

export const BTC_MAINNET_NETWORK = {
  displayName: 'Mainnet',
  text: 'Mainnet',
  value: 'mainnet',
  name: 'mainnet',
  networkPort: '',
  networkFullUrl: 'https://blockstream.info/api',
  network: 'bitcoin',
  type: 'mainnet',
  enable: true
};
export const BTC_TESTNET3_NETWORK = {
  displayName: 'Testnet3',
  text: 'Testnet3',
  name: 'Testnet3',
  value: 'Testnet3',
  networkPort: '',
  networkFullUrl: 'https://blockstream.info/testnet/api',
  transactionUrl: 'https://blockstream.info/testnet/tx/',
  transactionsUrl: 'https://blockstream.info/testnet/address/',
  faucetUrl: '',
  faucetText: '',
  type: 'testnet',
  enable: true,
  network: 'bitcoin_testnet',
};

export const BTC_LOCALHOST_NETWORK = {
  displayName: 'Localhost',
  text: 'Localhost',
  value: 'localhost',
  name: 'localhost',
  networkURL: 'http://127.0.0.1',
  networkPort: '',
  networkFullUrl: 'http://127.0.0.1:',
  type: '',
  enable: false
};

export const BTC_CUSTOM_NETWORK = {
  displayName: 'Custom',
  text: 'Custom',
  value: 'custom',
  name: 'custom',
  networkURL: '',
  networkPort: '',
  networkFullUrl: '',
  type: 'custom',
  enable: true
};

export const BITCOIN_NETWORK_LIST = [
  BTC_MAINNET_NETWORK,
  BTC_TESTNET3_NETWORK,
  BTC_LOCALHOST_NETWORK,
  BTC_CUSTOM_NETWORK
];

export const getDefaultNetwork = () => BTC_TESTNET3_NETWORK;
