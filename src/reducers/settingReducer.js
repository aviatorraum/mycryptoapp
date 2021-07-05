import types from '../constants/actionTypes';
import { settingState } from './initialState';

const initialSuccess = (setting) =>
  setting.merge({ isInitialed: true });

export default function reducer(setting = settingState, { type, payload }) {
  switch (type) {
    case types.INITIAL_APP_SUCCESS:
      return initialSuccess(setting);
    case types.INITIAL_APP:
    case types.INITIAL_APP_ERROR:
    default:
      return setting;
  }
}
