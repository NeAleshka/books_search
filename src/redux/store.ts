import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { rootReducer } from './reducers/rootReducer';
import { sagaWatcher } from './sagas';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const saga = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(saga), composeEnhancers()
  )
);

saga.run(sagaWatcher);
