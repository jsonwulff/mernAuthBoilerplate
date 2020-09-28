import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
} from './resetPasswordTypes';

const intialState = {
  loading: false,
  errors: '',
  message: '',
};

export default (state = intialState, action) => {
  switch (action.type) {
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
        message: action.payload,
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
