import { push } from 'connected-react-router';

import Services from '../../services/authServices';
import localServices from '../../services/localService';
import userInfo from '../../services/userInfo';
import routes from '../../constants/routes';

const CHECK_AUTH_SUCCESS = 'CHECK_AUTH_SUCCESS';
const CHECK_AUTH_FAILURE = 'CHECK_AUTH_FAILURE';
const LOGOUT = 'LOGOUT';
const LOCAL_DATA = localServices.get;

const actionCreators = {
  login: values => async dispatch => {
    const response = await Services.loginAPI(values);
    if (response.ok) {
      const userData = await userInfo.get(response.data.userId, response.data.id);
      localServices.set({ status: true, token: response.data, user: userData.data });
      dispatch({ type: CHECK_AUTH_SUCCESS, payload: response.data, user: userData.data });
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
      dispatch({ type: CHECK_AUTH_SUCCESS, payload: LOCAL_DATA.token, user: LOCAL_DATA.user });
    }
  }
};

export default actionCreators;
