import {
  POST_SIGNUP_REQUEST,
  POST_SIGNUP_SUCCESS,
  POST_SIGNUP_FAILURE,
} from './SignUpTypes';

const initialState = {
  loading: false,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case POST_SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
