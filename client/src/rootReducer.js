import { combineReducers } from 'redux';

import userReducer from './app/userPlaceholder/userReducer';
import SignUpReducer from './app/signup/SignUpReducer';
import loginReducers from './app/login/LoginReducer';

export default combineReducers({
  login: loginReducers,
  signUp: SignUpReducer,
  users: userReducer,
});
