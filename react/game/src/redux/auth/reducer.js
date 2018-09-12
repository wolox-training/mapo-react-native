const initialState = { loggedin: false };

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CORRECT_AUTH':
      state = { ...initialState, loggedin: true };
      break;
    default:
      break;
  }
  return state;
};

export default stateReducer;
