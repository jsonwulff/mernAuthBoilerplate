import axios from 'axios';
import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
} from './resetPasswordTypes';

export const resetPassword = (resetData) => {
  console.log(resetData);
  return (dispatch) => {
    dispatch(resetPasswordRequest());
    axios
      .post('/api/reset-password', resetData)
      .then((res) => {
        const successMessage = res.data.message;
        dispatch(resetPasswordSuccess(successMessage));
      })
      .catch((err) => {
        const failuresMessages = err.response.data;
        dispatch(resetPasswordFailure(failuresMessages));
      });
  };
};

export const resetPasswordRequest = () => {
  return {
    type: RESET_PASSWORD_REQUEST,
  };
};

export const resetPasswordSuccess = (successMessage) => {
  return {
    type: RESET_PASSWORD_SUCCESS,
    payload: successMessage,
  };
};

export const resetPasswordFailure = (errors) => {
  return {
    type: RESET_PASSWORD_FAILURE,
    payload: errors,
  };
};
