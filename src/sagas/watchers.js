import types from '../constants/actionTypes';
import { takeLatest } from 'redux-saga/effects';
import { initialAppSaga } from './initialAppSaga';
import { getCoinsSaga, getMoreCoinsSaga, getCoinDetailSaga } from './coinSaga';

export function* watchInitialAppSaga() {
  yield takeLatest(types.INITIAL_APP, initialAppSaga);
}

export function* watchGetCoinsSaga() {
  yield takeLatest(types.GET_COINS, getCoinsSaga);
}

export function* watchGetMoreCoins() {
  yield takeLatest(types.GET_MORE_COINS, getMoreCoinsSaga);
}

export function* watchGetCoinDetailSaga() {
  yield takeLatest(types.GET_COIN_DETAIL, getCoinDetailSaga);
}