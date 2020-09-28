import axios from 'axios';
import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
} from './forgotPassTypes';

export const forgotPassword = (email) => {
  return (dispatch) => {
    dispatch(forgotPasswordRequest());
    axios
      .post('/api/forgot-password', email)
      .then((res) => {
        const successMessages = res.data.message;
        dispatch(forgotPasswordSuccess(successMessages));
      })
      .catch((err) => {
        const failuresMessages = err.response.data;
        dispatch(forgotPasswordFailure(failuresMessages));
      });
  };
};

export const forgotPasswordRequest = () => {
  return {
    type: FORGOT_PASSWORD_REQUEST,
  };
};

export const forgotPasswordSuccess = (message) => {
  return {
    type: FORGOT_PASSWORD_SUCCESS,
    payload: message,
  };
};

export const forgotPasswordFailure = (errors) => {
  return {
    type: FORGOT_PASSWORD_FAILURE,
    payload: errors,
  };
};
