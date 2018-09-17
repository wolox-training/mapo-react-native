import localServices from '../../services/localService';
import userInfo from '../../services/userinfo';

const SET_INFO = 'SET_INFO';
const DELETE_INFO = 'DELETE_INFO';
const LOCAL_DATA = localServices.get;

const actionCreators = {
  set: (id, token) => async dispatch => {
    const response = await userInfo.get(id, token);
    if (response.ok) {
      localServices.set({ ...LOCAL_DATA, user: response.data });
      dispatch({ type: SET_INFO, payload: response.data });
    }
  },
  local: () => async dispatch => {
    dispatch({ type: SET_INFO, payload: LOCAL_DATA.user });
  },
  delete: () => async dispatch => {
    dispatch({ type: DELETE_INFO });
  }
};

export default actionCreators;
