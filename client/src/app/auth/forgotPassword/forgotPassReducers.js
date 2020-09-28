import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
} from './forgotPassTypes';

const initialState = {
  loading: false,
  errors: '',
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
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
        message: action.payload,
      };
    case FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};
