import * as BlockchainActionTypes from '../constants/blockchain';

export function updateCurrentBlockchain(blockchain) {
  return {
    type: BlockchainActionTypes.UPDATE_CURRENT_BLOCKCHAIN,
    payload: blockchain
  };
}

export const switchNetwork = blockchain => async dispatch => {
  dispatch(updateCurrentBlockchain(blockchain));
};
