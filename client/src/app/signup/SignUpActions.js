import axios from 'axios';
import {
  POST_SIGNUP_REQUEST,
  POST_SIGNUP_SUCCESS,
  POST_SIGNUP_FAILURE,
} from './SignUpTypes';

export const signUpUser = (userData, history) => {
  return (dispatch) => {
    dispatch(postSignUpRequest());
    axios
      .post('/api/signup', userData)
      .then((res) => {
        const successMessage = res.data;
        dispatch(postSignUpSuccess(successMessage));
      })
      .catch((err) => {
        const failuresMessages = err.response.data;
        dispatch(postSignUpFailure(failuresMessages));
      });
  };
};

export const postSignUpRequest = () => {
  return {
    type: POST_SIGNUP_REQUEST,
  };
};

export const postSignUpSuccess = (successMessage) => {
  return {
    type: POST_SIGNUP_SUCCESS,
    payload: successMessage,
  };
};

export const postSignUpFailure = (err) => {
  return {
    type: POST_SIGNUP_FAILURE,
    payload: err,
  };
};
