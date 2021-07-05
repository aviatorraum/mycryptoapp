
import { combineReducers } from 'redux';
import setting from './settingReducer';
import coin from './coinReducer';
import coinDetail from './coinDetailReducer';

export default combineReducers({
  setting,
  coin,
  coinDetail,
});
