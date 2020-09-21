import { combineReducers } from 'redux';

import authReducers from './app/auth/state/authReducers';
import userReducer from './app/userPlaceholder/userReducer';
import SignUpReducer from './app/signup/SignUpReducer';

export default combineReducers({
  auth: authReducers,
  signUp: SignUpReducer,
  users: userReducer,
});
