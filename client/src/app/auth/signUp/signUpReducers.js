import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './signUpTypes';

const intialState = {
  loading: false,
  errors: '',
  message: '',
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
    default:
      return state;
  }
};
