import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  IS_AUTHENTICATED,
} from './sessionTypes';

const intialState = {
  loading: false,
  errors: '',
  isAuthenticated: false,
};

export default (state = intialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        errors: '',
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: '',
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        errors: '',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        errors: '',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    default:
      return state;
  }
};
