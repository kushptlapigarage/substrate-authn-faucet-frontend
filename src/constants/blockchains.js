export const ETH_BLOCKCHAIN = 'ethereum';

export const AION_BLOCKCHAIN = 'aion';

export const BITCOIN_BLOCKCHAIN = 'bitcoin';

export const POLKADOT_BLOCKCHAIN = 'polkadot';
export const DOT_TOKEN = 'DOT';

export const KUSAMA_BLOCKCHAIN = 'kusama';
export const KSM_TOKEN = 'KSM';

export const EDGEWARE_BLOCKCHAIN = 'edgeware';
export const EDG_TOKEN = 'EDG';

export const UTXO_BLOCKCHAIN = 'utxo';

export const BLOCKCHAIN_LIST = [
  POLKADOT_BLOCKCHAIN,
  ETH_BLOCKCHAIN,
  AION_BLOCKCHAIN,
  BITCOIN_BLOCKCHAIN,
  KUSAMA_BLOCKCHAIN,
  EDGEWARE_BLOCKCHAIN
];

export const BLOCKCHAIN_MENU_LIST = [
  BITCOIN_BLOCKCHAIN,
  ETH_BLOCKCHAIN,
  POLKADOT_BLOCKCHAIN
];

export const BLOCKCHAIN_SELECTION = [
  {
    text: POLKADOT_BLOCKCHAIN,
    value: POLKADOT_BLOCKCHAIN
  },
  {
    text: ETH_BLOCKCHAIN,
    value: ETH_BLOCKCHAIN
  },
  {
    text: BITCOIN_BLOCKCHAIN,
    value: BITCOIN_BLOCKCHAIN
  },
  {
    text: KUSAMA_BLOCKCHAIN,
    value: KUSAMA_BLOCKCHAIN
  },
  {
    text: EDGEWARE_BLOCKCHAIN,
    value: EDGEWARE_BLOCKCHAIN
  }
];

export const TEST_NET_PREFERENCES = [
  {
    blockchain: BITCOIN_BLOCKCHAIN,
    keypairType: 'bech32',
    network: 'Testnet3'
  },
  { blockchain: ETH_BLOCKCHAIN, network: 'ropsten' }
];

export const MAIN_NET_PREFERENCES = [
  {
    blockchain: BITCOIN_BLOCKCHAIN,
    keypairType: 'bech32',
    network: 'mainnet'
  },
  { blockchain: ETH_BLOCKCHAIN, network: 'homestead' }
];

export const NETWORK_PREFERENCES = TEST_NET_PREFERENCES;
