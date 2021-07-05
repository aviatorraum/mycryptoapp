import types from '../constants/actionTypes';
import { fromJS } from 'immutable';
import { coinDetailState } from './initialState';

const getCoinDetailSuccess = (coinDetail, payload) =>
  coinDetail.merge(fromJS(payload));

export default function reducer(coinDetail = coinDetailState, { type, payload }) {
  switch (type) {
    case types.GET_COIN_DETAIL_SUCCESS:
      return getCoinDetailSuccess(coinDetail, payload);
    case types.GET_COIN_DETAIL:
    case types.GET_COIN_DETAIL_ERROR:
    default:
      return coinDetail;
  }
}
