import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ReduxThunk from 'redux-thunk';

import auth from './auth/reducer';

const reducers = {
  form: formReducer,
  auth
};

const reducer = combineReducers(reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const store = createStore(reducer, composeEnhancers(applyMiddleware(ReduxThunk)));

export default store;
