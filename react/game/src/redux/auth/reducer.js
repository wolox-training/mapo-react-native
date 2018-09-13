const initialState = { loggedin: false, error: '' };

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK_AUTH_SUCCESS':
      state = { ...initialState, loggedin: true, user: action.payload };
      break;
    case 'CHECK_AUTH_FAILURE':
      state = { ...initialState, error: action.payload.error.message };
      break;
    default:
      break;
  }
  return state;
};

export default stateReducer;
