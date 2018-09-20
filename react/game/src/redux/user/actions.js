import { withPostSuccess, completeTypes, createTypes } from 'redux-recompose';

import localServices from '../../services/localService';
import userInfo from '../../services/userinfo';

const completedTypes = completeTypes(['SET_INFO'], ['DELETE_INFO']);

export const actions = createTypes(completedTypes, '@@USER');

const STORAGE_KEY = 'USER';

const actionCreators = {
  set: (id, token) => ({
    type: actions.SET_INFO,
    service: userInfo.get,
    payload: { id, token },
    target: 'user',
    injections: [
      withPostSuccess((dispatch, response) => {
        localServices.set(STORAGE_KEY, response.data);
      })
    ]
  }),
  local: () => async dispatch => {
    const LOCAL_DATA = localServices.get(STORAGE_KEY);
    dispatch({ type: actions.SET_INFO_SUCCESS, target: 'user', payload: LOCAL_DATA });
  },
  delete: () => async dispatch => {
    localServices.delete(STORAGE_KEY);
    dispatch({ type: actions.DELETE_INFO, target: 'user' });
  }
};

export default actionCreators;
