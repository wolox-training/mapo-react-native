import { push } from 'connected-react-router';
import { withSuccess, completeTypes, createTypes } from 'redux-recompose';

import Services from '../../services/authServices';
import localServices from '../../services/localService';
import routes from '../../constants/routes';
import userActions from '../user/actions';

const completedTypes = completeTypes(['CHECK_AUTH'], ['INITIAL_LOADING_SUCCESS', 'LOGOUT']);

export const actions = createTypes(completedTypes, '@@AUTH');

const STORAGE_KEY = 'AUTH';

export const actionCreators = {
  login: values => ({
    type: actions.CHECK_AUTH,
    service: Services.loginAPI,
    payload: values,
    target: 'auth',
    injections: [
      withSuccess((dispatch, response) => {
        setTimeout(() => {
          dispatch({ type: actions.CHECK_AUTH_SUCCESS, payload: response.data, target: 'auth' });
          localServices.set(STORAGE_KEY, { status: true, token: response.data });
          dispatch(userActions.set(response.data.userId, response.data.id));
          dispatch(push(routes.GAME.path));
        }, 2000);
      })
    ],
    successSelector: response => ({ status: response.ok, token: response.data }),
    failureSelector: response => response.data.error.message
  }),
  logout: () => async dispatch => {
    localServices.delete(STORAGE_KEY);
    dispatch({ type: actions.LOGOUT, target: 'auth', payload: null });
    dispatch(userActions.delete());
    dispatch(push(routes.LOGIN.path));
  },
  localCheck: () => async dispatch => {
    const LOCAL_DATA = localServices.get(STORAGE_KEY);
    if (LOCAL_DATA !== null) {
      dispatch(userActions.local());
      dispatch({ type: actions.CHECK_AUTH_SUCCESS, target: 'auth', payload: LOCAL_DATA });
    }
    setTimeout(() => {
      dispatch({ type: actions.INITIAL_LOADING_SUCCESS, target: 'initialLoading' });
    }, 2000);
  }
};
