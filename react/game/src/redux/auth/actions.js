import { push } from 'connected-react-router';

import Services from '../../services/authServices';
import localServices from '../../services/localService';
import routes from '../../constants/routes';

const CHECK_AUTH_SUCCESS = 'CHECK_AUTH_SUCCESS';
const CHECK_AUTH_FAILURE = 'CHECK_AUTH_FAILURE';
const LOGOUT = 'LOGOUT';
const LOCAL_DATA = localServices.get;

const actionCreators = {
  login: values => async dispatch => {
    const response = await Services.loginAPI(values);
    if (response.ok) {
      localServices.set({ status: true, user: response.data });
      dispatch({ type: CHECK_AUTH_SUCCESS, payload: response.data });
      dispatch(push(routes.GAME.path));
    } else dispatch({ type: CHECK_AUTH_FAILURE, payload: response.data });
  },
  logout: () => async dispatch => {
    localServices.delete({});
    dispatch({ type: LOGOUT, payload: {} });
    dispatch(push(routes.LOGIN.path));
  },
  localCheck: () => async dispatch => {
    if (LOCAL_DATA !== null && LOCAL_DATA.status) {
      dispatch({ type: CHECK_AUTH_SUCCESS, payload: LOCAL_DATA.user });
    }
  }
};

export default actionCreators;
