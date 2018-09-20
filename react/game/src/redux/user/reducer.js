import { createReducer, completeState, completeReducer, onSetValue } from 'redux-recompose';

import DEFAULT_USER from '../../constants/defaultUser';

import { actions } from './actions';

const initialStateDescription = { user: DEFAULT_USER };

const initialState = completeState(initialStateDescription);

const reducerDescription = {
  primaryActions: [actions.SET_INFO],
  override: {
    [actions.DELETE_INFO]: onSetValue(DEFAULT_USER)
  }
};

const reducer = createReducer(initialState, completeReducer(reducerDescription));

export default reducer;
