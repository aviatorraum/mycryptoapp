import { put, call } from 'redux-saga/effects';
import types from '~/constants/actionTypes';
import { getMarketsCoinResult, getCoinDetailResult } from '~/apis/api';

const okGetCoins = (payload) => ({
  type: types.GET_COINS_SUCCESS,
  payload,
});

const errGetCoins = (message) => {
  return {
    type: types.GET_COINS_ERROR,
    payload: {
      message
    }
  };
};

export function* getCoinsSaga({ payload }) {
  try {
    const { result } = yield call(getMarketsCoinResult, payload);
    const newPayload = {
      list: result,
      page: payload.page
    };

    yield put(okGetCoins(newPayload));
  } catch (error) {
    const errorAction = errGetCoins(error);
    yield put(errorAction);
  }
}

const okGetMoreCoins = (payload) => ({
  type: types.GET_MORE_COINS_SUCCESS,
  payload,
});

const errGetMoreCoins = (message) => {
  return {
    type: types.GET_MORE_COINS_ERROR,
    payload: {
      message
    }
  };
};

export function* getMoreCoinsSaga({ payload }) {
  try {
    const { result } = yield call(getMarketsCoinResult, payload);

    const newPayload = {
      list: result,
      page: payload.page
    };

    yield put(okGetMoreCoins(newPayload));
  } catch (error) {
    const errorAction = errGetMoreCoins(error);
    yield put(errorAction);
  }
}

const okGetDetail = (payload) => ({
  type: types.GET_COIN_DETAIL_SUCCESS,
  payload,
});

const errGetDetail = (message) => {
  return {
    type: types.GET_COIN_DETAIL_ERROR,
    payload: {
      message
    }
  };
};

export function* getCoinDetailSaga({ payload }) {
  try {
    const { result } = yield call(getCoinDetailResult, payload);
    yield put(okGetDetail(result));
  } catch (error) {
    const errorAction = errGetDetail(error);
    yield put(errorAction);
  }
}