import { push } from 'connected-react-router';

import Services from '../../services/authServices';
import localServices from '../../services/localService';
import routes from '../../constants/routes';
import userActions from '../user/actions';

const CHECK_AUTH_SUCCESS = 'CHECK_AUTH_SUCCESS';
const CHECK_AUTH_FAILURE = 'CHECK_AUTH_FAILURE';
const LOGOUT = 'LOGOUT';
const LOCAL_DATA = localServices.get;

const actionCreators = {
  login: values => async dispatch => {
    const response = await Services.loginAPI(values);
    if (response.ok) {
      await localServices.set({ status: true, token: response.data });
      dispatch(userActions.set(response.data.userId, response.data.id));
      dispatch({ type: CHECK_AUTH_SUCCESS, payload: response.data });
      dispatch(push(routes.GAME.path));
    } else dispatch({ type: CHECK_AUTH_FAILURE, payload: response.data });
  },
  logout: () => async dispatch => {
    localServices.delete({});
    dispatch({ type: LOGOUT, payload: {} });
    dispatch(userActions.delete());
    dispatch(push(routes.LOGIN.path));
  },
  localCheck: () => async dispatch => {
    if (LOCAL_DATA !== null && LOCAL_DATA.status) {
      dispatch({ type: CHECK_AUTH_SUCCESS, payload: LOCAL_DATA.token });
      dispatch(userActions.local());
    }
  }
};

export default actionCreators;
