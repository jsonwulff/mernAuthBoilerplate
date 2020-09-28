import axios from 'axios';
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './signUpTypes';

export const signUpUser = (userData) => {
  return (dispatch) => {
    dispatch(signUpRequest());
    axios
      .post('/api/signup', userData)
      .then((res) => {
        const successMessages = res.data;
        dispatch(signUpSuccess(successMessages));
      })
      .catch((err) => {
        const failuresMessages = err.response.data;
        dispatch(signUpFailure(failuresMessages));
      });
  };
};

export const signUpRequest = () => {
  return {
    type: SIGNUP_REQUEST,
  };
};

export const signUpSuccess = (payload) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: payload.message,
  };
};

export const signUpFailure = (errors) => {
  return {
    type: SIGNUP_FAILURE,
    payload: errors,
  };
};
