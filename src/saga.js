import { all } from 'redux-saga/effects';
import showSaga from './containers/TVShow/saga';

// combine all sagas
export default function* rootSaga() {
  yield all([
    showSaga(),
  ]);
}