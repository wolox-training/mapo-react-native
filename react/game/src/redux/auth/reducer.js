const initialState = { loggedin: false };

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CORRECT_AUTH':
      state = { ...initialState, loggedin: true };
      break;
    case 'INCORRECT_AUTH':
      state = { ...initialState, error: 'authentication error' };
      break;
    default:
      break;
  }
  return state;
};

export default stateReducer;
