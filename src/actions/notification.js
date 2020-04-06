import * as NotificationTypes from '../constants/notification';
import * as NotificationApi from '../api/notification';

const setKeepIDToken = (token) => ({
  type: NotificationTypes.KEEP_ID_TOKEN,
  payload: token
});

const setNotificationPreferences = (preferences) => ({
  type: NotificationTypes.NOTIFICATION_PREFERENCES,
  payload: preferences
});

export const updateKeepIDToken = (keepIDToken,address) => async dispatch => {
  await NotificationApi.regesterKeepIDToken(keepIDToken, address);
  dispatch(setKeepIDToken(keepIDToken));
};

export const sendNotification = () => async (dispatch, getState)=> {
  const { keepIDToken } = getState().notificationReducer;

  if (keepIDToken !== undefined) {
    await NotificationApi.notify({ keepIDToken });
  }
};

export const updateNotificationPreferences = notificationPreferences => async dispatch => {
  dispatch(setNotificationPreferences(notificationPreferences));
};
