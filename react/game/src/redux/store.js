import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ReduxThunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import auth from './auth/reducer';
import user from './user/reducer';

export const history = createBrowserHistory();

const reducers = {
  form: formReducer,
  auth,
  user
};

const reducer = combineReducers(reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const store = createStore(
  connectRouter(history)(reducer),
  composeEnhancers(applyMiddleware(routerMiddleware(history), ReduxThunk))
);

export default store;
