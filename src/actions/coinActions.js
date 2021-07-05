import types from '../constants/actionTypes';

export const getCoinsAction = payload => ({
  type: types.GET_COINS,
  payload,
});

export const getMoreCoinsAction = payload => ({
  type: types.GET_MORE_COINS,
  payload,
});

export const getCoinDetailsAction = payload => ({
  type: types.GET_COIN_DETAIL,
  payload,
});
