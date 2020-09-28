import { AUTHENTICATED, LOGOUT_USER } from './authenticatedTypes';

const intialState = false;

export default (state = intialState, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return action.payload;
    case LOGOUT_USER:
      return false;
    default:
      return state;
  }
};
