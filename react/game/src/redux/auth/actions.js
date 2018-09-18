import { push } from 'connected-react-router';

import Services from '../../services/authServices';
import localServices from '../../services/localService';
import routes from '../../constants/routes';
import userActions from '../user/actions';

const CHECK_AUTH_SUCCESS = 'CHECK_AUTH_SUCCESS';
const CHECK_AUTH_FAILURE = 'CHECK_AUTH_FAILURE';
const INITIAL_LOADING_SUCCESS = 'INITIAL_LOADING_SUCCESS';
const LOGOUT = 'LOGOUT';
const STORAGE_KEY = 'AUTH';

const actionCreators = {
  login: values => async dispatch => {
    const response = await Services.loginAPI(values);
    if (response.ok) {
      await localServices.set(STORAGE_KEY, { status: true, token: response.data });
      dispatch(userActions.set(response.data.userId, response.data.id));
      dispatch({ type: CHECK_AUTH_SUCCESS, payload: response.data });
      dispatch(push(routes.GAME.path));
    } else dispatch({ type: CHECK_AUTH_FAILURE, payload: response.data });
  },
  logout: () => async dispatch => {
    localServices.delete(STORAGE_KEY);
    dispatch({ type: LOGOUT, payload: {} });
    dispatch(userActions.delete());
    dispatch(push(routes.LOGIN.path));
  },
  localCheck: () => async dispatch => {
    const LOCAL_DATA = localServices.get(STORAGE_KEY);
    if (LOCAL_DATA !== null && LOCAL_DATA.status) {
      dispatch(userActions.local());
      dispatch({ type: CHECK_AUTH_SUCCESS, payload: LOCAL_DATA.token });
    }
    dispatch({ type: INITIAL_LOADING_SUCCESS });
  }
};

export default actionCreators;
