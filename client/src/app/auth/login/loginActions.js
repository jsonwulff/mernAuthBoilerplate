import axios from 'axios';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './loginTypes';
import { authenticated } from '../authenticated/authenticatedActions';

export const loginUser = (loginData, history, from) => {
  return (dispatch) => {
    dispatch(loginRequest());
    axios
      .post('/api/login', loginData)
      .then(() => {
        dispatch(loginSuccess());
        dispatch(authenticated(true));
        history.push(from);
      })
      .catch((err) => {
        const failuresMessages = err.response.data;
        dispatch(loginFailure(failuresMessages));
      });
  };
};

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};

export const loginFailure = (errors) => {
  return {
    type: LOGIN_FAILURE,
    payload: errors,
  };
};
