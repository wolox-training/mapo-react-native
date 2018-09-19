import { createReducer, completeState, completeReducer, onSetValue } from 'redux-recompose';

import { actions } from './actions';

const initialStateDescription = { auth: null, initialLoading: true };

const initialState = completeState(initialStateDescription, ['initialLoading']);

const onLogout = state => ({ ...state, auth: null, authError: '' });

const reducerDescription = {
  primaryActions: [actions.CHECK_AUTH],
  override: {
    [actions.LOGOUT]: onLogout(),
    [actions.INITIAL_LOADING_SUCCESS]: onSetValue(false)
  }
};

const reducer = createReducer(initialState, completeReducer(reducerDescription));

export default reducer;
