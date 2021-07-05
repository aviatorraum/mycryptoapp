import {
  fetchGet,
  fetchPost,
} from './libs/fetch';

export const registryResult = ({ payload }) => fetchPost('user', payload);

export const getMarketsCoinResult = (payload) =>
  fetchGet('coins/markets', payload);


export const getCoinDetailResult = ({ id, ...payload }) =>
  fetchGet(`coins/${id}`, payload);
