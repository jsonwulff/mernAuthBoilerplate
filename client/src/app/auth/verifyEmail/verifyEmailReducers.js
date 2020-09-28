import {
  VERIFY_EMAIL_REQUEST,
  VERIFY_EMAIL_SUCCESS,
  VERIFY_EMAIL_FAILURE,
  RESEND_VERIFY_EMAIL_REQUEST,
  RESEND_VERIFY_EMAIL_SUCCESS,
  RESEND_VERIFY_EMAIL_FAILURE,
} from './verifyEmailTypes';

const intialState = {
  loading: true,
  error: '',
  message: '',
};

export default (state = intialState, action) => {
  switch (action.type) {
    case VERIFY_EMAIL_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case VERIFY_EMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: '',
      };
    case VERIFY_EMAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RESEND_VERIFY_EMAIL_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case RESEND_VERIFY_EMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: '',
      };
    case RESEND_VERIFY_EMAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
