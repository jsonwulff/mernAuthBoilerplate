import axios from 'axios';
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  VERIFY_EMAIL_REQUEST,
  VERIFY_EMAIL_SUCCESS,
  VERIFY_EMAIL_FAILURE,
  IS_AUTHENTICATED,
  LOGOUT_USER,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
} from './sessionTypes';

// ! SIGN UP ACTIONS
export const signUpUser = (userData) => {
  return (dispatch) => {
    dispatch(signUpRequest());
    axios
      .post('/api/signup', userData)
      .then((res) => {
        // Insert redirect or succes messages for signup page
        const successMessages = res.data;
        console.log(successMessages);
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

// ! LOGIN IN ACTIONS
export const loginUser = (loginData, history, from) => {
  return (dispatch) => {
    dispatch(loginRequest());
    axios
      .post('/api/login', loginData)
      .then(() => {
        dispatch(loginSuccess());
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

// ! VERIFY EMAIl ACTIONS
export const verifyEmail = (token) => {
  return (dispatch) => {
    dispatch(verifyEmailRequest());
    axios
      .post('/api/activate-email', token)
      .then(() => {
        dispatch(verifyEmailSuccess());
        // history.push(from);
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

export const verifyEmailSuccess = () => {
  return {
    type: VERIFY_EMAIL_SUCCESS,
  };
};

export const verifyEmailFailure = (errors) => {
  return {
    type: VERIFY_EMAIL_FAILURE,
    payload: errors,
  };
};

// ! IS AUTHENTICATED CHECK
export const isAuthenticatedCheck = () => {
  return (dispatch) => {
    axios
      .get('/api/isAuthenticated')
      .then((res) => {
        const answer = res.data.isAuthenticated;
        dispatch(isAuthenticated(answer));
      })
      .catch((err) => {
        const answer = err.response.data.isAuthenticated;
        dispatch(isAuthenticated(answer));
      });
  };
};

export const isAuthenticated = (answer) => {
  return {
    type: IS_AUTHENTICATED,
    payload: answer,
  };
};

// ! LOGOUT USER
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

// ! FORGOT PASSWORD
export const forgotPassword = (email) => {
  return (dispatch) => {
    dispatch(forgotPasswordRequest());
    axios
      .post('/api/forgot-password', email)
      .then(() => {
        dispatch(forgotPasswordSuccess());
        // history.push(from);
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

export const forgotPasswordSuccess = () => {
  return {
    type: FORGOT_PASSWORD_SUCCESS,
  };
};

export const forgotPasswordFailure = (errors) => {
  return {
    type: FORGOT_PASSWORD_FAILURE,
    payload: errors,
  };
};

// ! RESET PASSWORD
export const resetPassword = (resetData) => {
  return (dispatch) => {
    dispatch(resetPasswordRequest());
    axios
      .post('/api/reset-password', resetData)
      .then(() => {
        dispatch(resetPasswordSuccess());
        // history.push(from);
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

export const resetPasswordSuccess = () => {
  return {
    type: RESET_PASSWORD_SUCCESS,
  };
};

export const resetPasswordFailure = (errors) => {
  return {
    type: RESET_PASSWORD_FAILURE,
    payload: errors,
  };
};
