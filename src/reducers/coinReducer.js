import types from '../constants/actionTypes';
import { coinState } from './initialState';
import { fromJS } from 'immutable';

const getMoreCoinsSucess = (coin, { list, page }) =>
  coin
  .update('page', ()=>fromJS(page))
  .update('list', prev => prev.concat(fromJS(list)));

const getCoinsSuccess = (coin, payload) =>
  coin.merge(fromJS(payload))

export default function reducer(coin = coinState, { type, payload }) {
  switch (type) {
    case types.GET_COINS_SUCCESS:
      return getCoinsSuccess(coin, payload);
    case types.GET_MORE_COINS_SUCCESS:
      return getMoreCoinsSucess(coin, payload);
    case types.GET_MORE_COINS:
    case types.GET_MORE_COINS_ERROR:
    case types.GET_COINS:
    case types.GET_COINS_ERROR:
    default:
      return coin;
  }
}
