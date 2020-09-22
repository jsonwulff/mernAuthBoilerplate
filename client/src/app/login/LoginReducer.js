import {
  POST_LOGIN_REQUEST,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILURE,
} from './LoginTypes';

const intialState = {
  loading: false,
  error: '',
  isAuthenticated: false,
};

export default (state = intialState, action) => {
  switch (action.type) {
    case POST_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
      };
    case POST_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
