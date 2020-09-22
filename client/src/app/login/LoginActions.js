import axios from 'axios';
import {
  POST_LOGIN_REQUEST,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILURE,
} from './LoginTypes';

export const isAuthenticatedCheck = () => {
  return (dispatch) => {
    axios
      .get('/api/isAuthenticated')
      .then((res) => {
        console.log('Check is authenticated');
        console.log(res.data);
        dispatch(postLoginSucces());
      })
      .catch((err) => {
        console.log('is not authenticated');
        // dispatch(postLoginFailure());
        return;
      });
    // .catch((err) => console.log('hej'));
  };
};

export const loginUser = (loginData, history, from) => {
  return (dispatch) => {
    dispatch(postLoginRequest);
    axios
      .post('/api/login', loginData)
      .then((res) => {
        const successMessage = res.data;
        dispatch(postLoginSucces(successMessage));
        history.push(from);
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
