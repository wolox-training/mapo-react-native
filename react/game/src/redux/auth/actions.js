import Services from '../../services/authServices';

const CHECK_AUTH_SUCCESS = 'CHECK_AUTH_SUCCESS';
const CHECK_AUTH_FAILURE = 'CHECK_AUTH_FAILURE';

const actionCreators = {
  login: values => async dispatch => {
    const response = await Services.loginAPI(values);
    if (response.ok) {
      dispatch({ type: CHECK_AUTH_SUCCESS, payload: response.data });
    } else dispatch({ type: CHECK_AUTH_FAILURE, payload: response.data });
  }
};

export default actionCreators;
