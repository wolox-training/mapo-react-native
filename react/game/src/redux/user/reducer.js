import { createReducer, completeState, completeReducer, onReadValue } from 'redux-recompose';

import { actions } from './actions';

const initialStateDescription = { user: null };

const initialState = completeState(initialStateDescription);

const reducerDescription = {
  primaryActions: [actions.SET_INFO],
  override: {
    [actions.DELETE_INFO]: onReadValue()
  }
};

const reducer = createReducer(initialState, completeReducer(reducerDescription));

export default reducer;
