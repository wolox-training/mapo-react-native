const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_INFO':
      state = { ...initialState, ...action.payload };
      break;
    case 'DELETE_INFO':
      state = { ...initialState };
      break;
    default:
      break;
  }
  return state;
};

export default userReducer;
