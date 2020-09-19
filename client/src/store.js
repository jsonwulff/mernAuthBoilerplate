import { createStore, combineReducers } from 'redux';
import authReducers from './auth/state/authReducers';

const rootReducer = combineReducers({
  auth: authReducers,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Set up Redux develop tools
);

export default store;
