import axios from 'axios';
import {
  VERIFY_EMAIL_REQUEST,
  VERIFY_EMAIL_SUCCESS,
  VERIFY_EMAIL_FAILURE,
  RESEND_VERIFY_EMAIL_REQUEST,
  RESEND_VERIFY_EMAIL_SUCCESS,
  RESEND_VERIFY_EMAIL_FAILURE,
} from './verifyEmailTypes';

export const verifyEmail = (token) => {
  return (dispatch) => {
    dispatch(verifyEmailRequest());
    axios
      .post('/api/verify-email', token)
      .then((res) => {
        const successMessages = res.data.message;
        dispatch(verifyEmailSuccess(successMessages));
      })
      .catch((err) => {
        const failuresMessages = err.response.data;
        dispatch(verifyEmailFailure(failuresMessages));
      });
  };
};

export const verifyEmailRequest = () => {
  return {
    type: VERIFY_EMAIL_REQUEST,
  };
};

export const verifyEmailSuccess = (message) => {
  return {
    type: VERIFY_EMAIL_SUCCESS,
    payload: message,
  };
};

export const verifyEmailFailure = (error) => {
  return {
    type: VERIFY_EMAIL_FAILURE,
    payload: error.Error,
  };
};

export const resendVerificationEmail = (token) => {
  return (dispatch) => {
    dispatch(resendVerificationEmailRequest());
    axios
      .post('/api/resend-verification-email', token)
      .then((res) => {
        const successMessages = res.data.message;
        dispatch(resendVerificationEmailSuccess(successMessages));
      })
      .catch((err) => {
        const failuresMessages = err.response.data;
        dispatch(resendVerificationEmailFailure(failuresMessages));
      });
  };
};

export const resendVerificationEmailRequest = () => {
  return {
    type: RESEND_VERIFY_EMAIL_REQUEST,
  };
};

export const resendVerificationEmailSuccess = (message) => {
  return {
    type: RESEND_VERIFY_EMAIL_SUCCESS,
    payload: message,
  };
};

export const resendVerificationEmailFailure = (error) => {
  return {
    type: RESEND_VERIFY_EMAIL_FAILURE,
    payload: error.Error,
  };
};
