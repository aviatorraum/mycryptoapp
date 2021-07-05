import { fromJS } from 'immutable';

export const settingState = fromJS({
  isInitialed: false,
});

export const coinState = fromJS({
  list: [],
  page: 1,
});

export const coinDetailState = fromJS({
  id: '',
  symbol: '',
  name: '',
  hashing_algorithm: '',
  description: '',
  image: {
    'thumb': '',
    'small': '',
    'large': '',
  },
  genesis_date: '',
  market_cap_rank: 0,
  coingecko_rank: 0,
});
