import { takeLatest, call, put } from 'redux-saga/effects';
import {
  fetchShowSuccess,
  fetchShowError,
  fetchEpisodesSuccess,
} from './actions';

export default function* watcherSaga() {
  yield takeLatest('FETCH_SHOW', fetchShowSaga);
  yield takeLatest('FETCH_EPISODES', fetchEpisodesSaga);
}

export function* fetchShowSaga() {
  const requestUrl = `http://localhost:9000/api/show`;
  try {
    const res = yield call(fetch, requestUrl, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
    const response = yield res.json();
    yield put(fetchShowSuccess(response));
  } catch (err) {
      yield put(fetchShowError());
  }
}

export function* fetchEpisodesSaga() {
  const requestUrl = `http://localhost:9000/api/episodes`;
  try {
    const res = yield call(fetch, requestUrl, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
    const response = yield res.json();
    yield put(fetchEpisodesSuccess(response));
  } catch (err) {
    yield put(fetchShowError());
  }
}