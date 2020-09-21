import axios from 'axios';
import {
  POST_LOGIN_REQUEST,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILURE,
} from './LoginTypes';

export const loginUser = (loginData, history) => {
  return (dispatch) => {
    dispatch(postLoginRequest);
    axios
      .post('/api/login', loginData)
      .then((res) => {
        const successMessage = res.data;
        dispatch(postLoginSucces(successMessage));
        history.push('/');
      })
      .catch((err) => {
        const failuresMessages = err.response.data;
        dispatch(postLoginFailure(failuresMessages));
      });
  };
};

export const postLoginRequest = () => {
  return {
    type: POST_LOGIN_REQUEST,
  };
};

export const postLoginSucces = () => {
  return {
    type: POST_LOGIN_SUCCESS,
  };
};

export const postLoginFailure = (err) => {
  return {
    type: POST_LOGIN_FAILURE,
    payload: err,
  };
};
