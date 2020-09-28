import axios from 'axios';
import { AUTHENTICATED, LOGOUT_USER } from './authenticatedTypes';

export const authenticatedCheck = () => {
  return (dispatch) => {
    axios
      .get('/api/authenticated')
      .then((res) => {
        const answer = res.data.authenticated;
        dispatch(authenticated(answer));
      })
      .catch((err) => {
        const answer = err.response.data.authenticated;
        dispatch(authenticated(answer));
      });
  };
};

export const authenticated = (answer) => {
  return {
    type: AUTHENTICATED,
    payload: answer,
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    axios
      .get('/api/logout')
      .then((res) => {
        console.log(res.data);
        dispatch(logoutUserRequest());
      })
      .catch((err) => console.log(err));
  };
};

export const logoutUserRequest = () => {
  return {
    type: LOGOUT_USER,
  };
};
