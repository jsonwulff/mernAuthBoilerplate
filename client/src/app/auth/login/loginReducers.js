import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './loginTypes';

const intialState = {
  loading: false,
  errors: '',
  message: '',
};

export default (state = intialState, action) => {
  switch (action.type) {
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
        errors: '',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};
