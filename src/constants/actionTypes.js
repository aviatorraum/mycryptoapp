import constants from 'flux-constants';

const syncActionTypes = [];

const basicAsyncActionTypes = [
  'INITIAL_APP',
  'GET_COINS',
  'GET_MORE_COINS',
  'GET_COIN_DETAIL',
];

const asyncActionTypes = basicAsyncActionTypes.reduce((result, actionType) => {
  return [
    ...result,
    actionType,
    `${actionType}_SUCCESS`,
    `${actionType}_ERROR`
  ];
}, []);

export default constants([...asyncActionTypes, ...syncActionTypes]);