const initialState = { loggedin: false, error: '', initialLoading: true, loggingLoading: false };

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK_AUTH_SUCCESS':
      state = { ...state, loggedin: true, token: action.payload };
      return state;
    case 'CHECK_AUTH_FAILURE':
      state = { ...state, error: action.payload.error.message };
      return state;
    case 'LOGOUT':
      state = { ...state, loggedin: false, error: '' };
      return state;
    case 'INITIAL_LOADING_SUCCESS':
      return { ...state, initialLoading: false };
    case 'LOGGING_LOADING_ACTIVE':
      return { ...state, loggingLoading: true };
    case 'LOGGING_LOADING_INACTIVE':
      return { ...state, loggingLoading: false };
    default:
      return state;
  }
};

export default stateReducer;
