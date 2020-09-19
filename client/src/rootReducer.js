import { combineReducers } from 'redux'

import authReducers from './app/auth/state/authReducers';
import userReducer from './app/userPlaceholder/userReducer'

export default combineReducers({
  auth: authReducers,
  users: userReducer
});