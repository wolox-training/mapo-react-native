import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './auth/reducer';

const reducers = {
  form: formReducer,
  auth
};

const reducer = combineReducers(reducers);
const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducer);

export default store;
