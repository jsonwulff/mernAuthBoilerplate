import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  VERIFY_EMAIL_REQUEST,
  VERIFY_EMAIL_SUCCESS,
  VERIFY_EMAIL_FAILURE,
  IS_AUTHENTICATED,
  LOGOUT_USER,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
} from './sessionTypes';

const intialState = {
  loading: false,
  errors: '',
  message: '',
  isAuthenticated: false,
};

export default (state = intialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        errors: '',
        message: '',
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: '',
        message: action.payload,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
        message: '',
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
    case VERIFY_EMAIL_REQUEST:
      return {
        ...state,
        loading: true,
        errors: '',
      };
    case VERIFY_EMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: '',
      };
    case VERIFY_EMAIL_FAILURE:
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
    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
      };
    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        errors: '',
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: '',
      };
    case FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        errors: '',
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: '',
      };
    case RESET_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};
