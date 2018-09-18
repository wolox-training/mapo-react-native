const initialState = { loggedin: false, error: '', initialLoading: true };

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK_AUTH_SUCCESS':
      state = { ...initialState, loggedin: true, token: action.payload };
      return state;
    case 'CHECK_AUTH_FAILURE':
      state = { ...initialState, error: action.payload.error.message };
      return state;
    case 'LOGOUT':
      state = { loggedin: false, error: '' };
      return state;
    case 'INITIAL_LOADING_SUCCESS':
      return { ...state, initialLoading: false };
    default:
      return state;
  }
};

export default stateReducer;
