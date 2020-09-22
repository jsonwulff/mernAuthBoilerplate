import { combineReducers } from 'redux';

import sessionReducers from './app/session/sessionReducers';
import userReducer from './app/userPlaceholder/userReducer';

export default combineReducers({
  session: sessionReducers,
  users: userReducer,
});
