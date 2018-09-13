import Services from '../../services/authServices';
import localServices from '../../services/localService';

const CHECK_AUTH_SUCCESS = 'CHECK_AUTH_SUCCESS';
const CHECK_AUTH_FAILURE = 'CHECK_AUTH_FAILURE';
const LOGOUT = 'LOGOUT';

const actionCreators = {
  login: values => async dispatch => {
    const response = await Services.loginAPI(values);
    if (response.ok) {
      localServices.set({ status: true, id: response.data.id });
      dispatch({ type: CHECK_AUTH_SUCCESS, payload: response.data });
    } else dispatch({ type: CHECK_AUTH_FAILURE, payload: response.data });
  },
  logout: () => async dispatch => {
    localServices.set({});
    dispatch({ type: LOGOUT, payload: {} });
  }
};

export default actionCreators;
