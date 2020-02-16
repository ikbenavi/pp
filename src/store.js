import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducer';

export const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}) {
  return createStore(
    createReducer,
    {},
    compose(applyMiddleware(sagaMiddleware))
  );
}