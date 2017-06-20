import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { getRequest } from 'utils/request';

import {
  fetchItemSuccess,
  fetchItemError,
} from './actions';

import {
  FETCH_ITEMS,
} from './constants';

export function* getItems() {
  try {
    const { data } = yield call(getRequest, 'products');
    yield put(fetchItemSuccess(data));
  } catch (err) {
    yield put(fetchItemError(err));
  }
}

export function* watchGetItems() {
  const watcher = yield takeLatest(FETCH_ITEMS, getItems);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Sagas to be loaded
export default [
  watchGetItems,
];
