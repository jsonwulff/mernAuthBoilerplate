import { combineReducers } from 'redux';

import authenticatedReducers from './authenticated/authenticatedReducers';
import forgotPasswordReducers from './forgotPassword/forgotPassReducers';
import loginReducers from './login/loginReducers';
import resetPasswordReducers from './resetPassword/resetPasswordReducers';
import signUpReducers from './signUp/signUpReducers';
import verifyEmailReducers from './verifyEmail/verifyEmailReducers';

export default combineReducers({
  authenticated: authenticatedReducers,
  forgotPassword: forgotPasswordReducers,
  login: loginReducers,
  resetPassword: resetPasswordReducers,
  signUp: signUpReducers,
  verifyEmail: verifyEmailReducers,
});
