const initialState = { loggedin: false, error: '' };

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK_AUTH_SUCCESS':
      state = { ...initialState, loggedin: true, token: action.payload };
      break;
    case 'CHECK_AUTH_FAILURE':
      state = { ...initialState, error: action.payload.error.message };
      break;
    case 'LOGOUT':
      state = { loggedin: false, error: '' };
      break;
    default:
      break;
  }
  return state;
};

export default stateReducer;
