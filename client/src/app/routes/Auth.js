import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Login from '../auth/Login';
import SignUp from '../auth/SignUp';
import ForgotPassword from '../auth/ForgotPassword';
import ResetPassword from '../auth/ResetPassword';
import VerifyEmail from '../auth/VerifyEmail';
import NotFound from '../common/NotFound';

function Auth() {
  const { path } = useRouteMatch();
  return (
    <React.Fragment>
      <Switch>
        <Route path={`${path}/signup`} component={SignUp} />
        <Route path={`${path}/verify-email/:token`} component={VerifyEmail} />
        <Route path={`${path}/login`} component={Login} />
        <Route path={`${path}/forgot-password`} component={ForgotPassword} />
        <Route path={`${path}/reset-password/:token`} component={ResetPassword} />
        <Route path={`${path}/*`} component={NotFound} />
      </Switch>
    </React.Fragment>
  );
}

export default Auth;
