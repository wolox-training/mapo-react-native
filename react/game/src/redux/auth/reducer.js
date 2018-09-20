import { createReducer, completeState, completeReducer, onSetValue, onReadValue } from 'redux-recompose';

import { actions } from './actions';

const initialStateDescription = { auth: null, initialLoading: true };

const initialState = completeState(initialStateDescription, ['initialLoading']);

const reducerDescription = {
  primaryActions: [actions.CHECK_AUTH],
  override: {
    [actions.LOGOUT]: onReadValue(),
    [actions.INITIAL_LOADING_SUCCESS]: onSetValue(false)
  }
};

const reducer = createReducer(initialState, completeReducer(reducerDescription));

export default reducer;
