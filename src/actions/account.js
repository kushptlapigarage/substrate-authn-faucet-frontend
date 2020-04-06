import * as Types from '../constants/account';
import { NOTIFICATION_PREFERENCES } from '../constants/notification';
import { UTXO_BLOCKCHAIN } from '../constants/blockchains';
import { getBalance } from '../services/balance';
import { updateCurrentBlockchain } from './blockchain';
import { USER_LOGOUT } from '../constants/app';

const setAccounts = accounts => ({
  type: Types.SET_ACCOUNTS,
  payload: accounts
});

const setWalletName = walletName => ({
  type: Types.SET_WALLET_NAME,
  payload: walletName
});

const selectAccount = account => ({
  type: Types.SELECT_ACCOUNT,
  payload: account
});

const setFirestoreConnection = connection => ({
  type: Types.SAVE_FIRESTORE_CONNECTION,
  payload: connection
});

const setNotificationPreferencs = notificationPreference => ({
  type: NOTIFICATION_PREFERENCES,
  payload: notificationPreference
});

const setUserLogout = () => ({
  type: USER_LOGOUT
});

export const propagateUpdates = async dispatch => {
  // TODO: KHP Add loading screen and then use updateAppLoading;
  //dispatch(updateAppLoading(true));
  dispatch(fetchAndSetBalances());
  // dispatch(updateAppLoading(false));
};

export const setAccount = account => async dispatch => {
  dispatch(selectAccount(account));
  dispatch(updateCurrentBlockchain(account.blockchain));
};

export const dispatchAccounts = results => async dispatch => {
  const { data } = results;
  if (data) {
    //TODO should handle set wallets instead of set accounts 
    const { notificationPreferences, wallets } = data;
    const { accounts, walletName } = wallets[0];
    if (accounts) {
      dispatch(setAccounts(accounts));
      dispatch(setWalletName(walletName));
      dispatch(setAccount(accounts[0]));
    }
    if (notificationPreferences) {
      dispatch(setNotificationPreferencs(notificationPreferences));
    }
  } else {
    dispatch(setAccounts([]));
  }
};

export const clearAccounts = () => async dispatch => {
  dispatch(setUserLogout());
};

// set isDappConnected as true
export const saveFirestoreConnection = firestoreConnection => async dispatch => {
  dispatch(setFirestoreConnection(firestoreConnection));
};

export const updateAccountBalances = balances => ({
  type: Types.UPDATE_ACCOUNT_BALANCE,
  balances
});

export const updateSelectedAccountBalance = balance => ({
  type: Types.UPDATE_SELECTED_ACCOUNT_BALANCE,
  balance
});

export const fetchAndSetBalances = () => async (dispatch, getState) => {
  // don't pull balances for bitcoin
  const { accounts, account, balances } = getState().accountReducer;
  const newAccounts = accounts.filter(
    account => account.blockchainType !== UTXO_BLOCKCHAIN
  );
  const oldBalances = balances.filter(
    balance => balance.blockchainType === UTXO_BLOCKCHAIN
  );
  const newBalances = await Promise.all(
    newAccounts.map(async account => {
      const { address, token, blockchain } = account;
      const result = await getBalance({
        address,
        blockchain,
        token
      });
      return result;
    })
  );
  const allBalances = [...newBalances, ...oldBalances];
  const balance = allBalances.find(
    currentAccount => currentAccount.address === account.address
  );
  dispatch(updateAccountBalances(allBalances));
  dispatch(updateSelectedAccountBalance(balance));
};
