export const SUCCESS = 200;
export const UNAUTHORIZED = 401;
export const BAD_REQUEST = 400;
export const FAILURE = 500;
export const DUPLICATE_ALIAS = 409;

// keypair type

export const KEYPAIR_EDWARDS = {
  text: 'Edwards',
  value: 'ed25519'
};
export const KEYPAIR_SCHNORRKEL = {
  text: 'Schnorrkel',
  value: 'sr25519'
};

export const KEYPAIR_LEGACY = {
  text: 'legacy',
  value: 'legacy'
};

export const KEYPAIR_P2SH = {
  text: 'P2SH',
  value: 'p2sh-segwit'
};

export const KEYPAIR_BECH32 = {
  text: 'bech32',
  value: 'bech32'
};

// KEYPAIR_BECH32 removed temporarily
export const KEYPAIR_TYPES = [KEYPAIR_P2SH];
