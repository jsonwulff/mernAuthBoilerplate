import axios from 'axios';
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  IS_AUTHENTICATED,
} from './sessionTypes';

// ! SIGN UP ACTIONS

export const signUpUser = (userData, history) => {
  return (dispatch) => {
    dispatch(signUpRequest());
    axios
      .post('/api/signup', userData)
      .then(() => {
        // Insert redirect or succes messages for signup page
        dispatch(signUpSuccess());
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

export const signUpSuccess = () => {
  return {
    type: SIGNUP_SUCCESS,
  };
};

export const signUpFailure = (errors) => {
  return {
    type: SIGNUP_FAILURE,
    payload: errors,
  };
};

// ! LOGIN IN ACTIONS
export const loginUser = (loginData, history, from) => {
  return (dispatch) => {
    dispatch(loginRequest());
    axios
      .post('/api/login', loginData)
      .then(() => {
        dispatch(loginSucces());
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

export const loginSucces = () => {
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

// ! IS AUTHENTICATED CHECK
export const isAuthenticatedCheck = () => {
  return (dispatch) => {
    axios
      .get('/api/isAuthenticated')
      .then((res) => {
        // console.log('Check is authenticated');
        // console.log(res.data.isAuthenticated);
        const answer = res.data.isAuthenticated;
        dispatch(isAuthenticated(answer));
      })
      .catch((err) => {
        const answer = err.response.data.isAuthenticated;
        dispatch(isAuthenticated(answer));
        // console.log('is not authenticated');
        // console.log(err);
        // dispatch(isAuthenticated(err.response.data));
        // dispatch(loginFailure());
      });
  };
};

export const isAuthenticated = (answer) => {
  return {
    type: IS_AUTHENTICATED,
    payload: answer,
  };
};
