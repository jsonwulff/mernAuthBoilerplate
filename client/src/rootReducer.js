import { combineReducers } from 'redux';

import authReducer from './app/auth/authReducers';

export default combineReducers({
  auth: authReducer,
});
