import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

import reducers from '../reducers';
import api from '../middleware/api';
import throttler from '../middleware/throttle';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

let middleware = [throttler, api];

process.env.NODE_ENV === 'development'
  ? (middleware = [logger, ...middleware])
  : null;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(reducers, enhancer);

export default store;
