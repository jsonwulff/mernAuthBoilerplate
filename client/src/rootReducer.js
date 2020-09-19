import { combineReducers } from 'redux'

import authReducers from './auth/state/authReducers';
import userReducer from './userPlaceholder/userReducer'

export default combineReducers({
  auth: authReducers,
  users: userReducer
});