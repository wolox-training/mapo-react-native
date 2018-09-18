import localServices from '../../services/localService';
import userInfo from '../../services/userinfo';

const SET_INFO = 'SET_INFO';
const DELETE_INFO = 'DELETE_INFO';
const STORAGE_KEY = 'USER';

const actionCreators = {
  set: (id, token) => async dispatch => {
    const response = await userInfo.get(id, token);
    if (response.ok) {
      localServices.set(STORAGE_KEY, response.data);
      dispatch({ type: SET_INFO, payload: response.data });
    }
  },
  local: () => async dispatch => {
    const LOCAL_DATA = localServices.get(STORAGE_KEY);
    dispatch({ type: SET_INFO, payload: LOCAL_DATA });
  },
  delete: () => async dispatch => {
    localServices.delete(STORAGE_KEY);
    dispatch({ type: DELETE_INFO });
  }
};

export default actionCreators;
