import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { isAuthenticatedCheck } from './session/sessionActions';

import Header from './common/Header';
import PrivateRoute from './common/PrivateRoute';
import Protected from './common/protectedPage';
import Public from './common/pubilicPage';
import Login from './session/login';
import SignUp from './session/signUp';
import ForgotPassword from './session/ForgotPassword';
import ResetPassword from './session/ResetPassword';
import VerifyEmail from './session/verifyEmail';
import NotFound from './common/NotFound';
// import UsersContainer from './userPlaceholder/user';

import CssBaseline from '@material-ui/core/CssBaseline';

function App({ isAuthenticated, isAuthenticatedCheck }) {
  useEffect(() => {
    isAuthenticatedCheck();
  }, [isAuthenticatedCheck]);

  return (
    <Router>
      <CssBaseline />
      <Header isAuthenticated={isAuthenticated} />
      <Switch>
        <Route exact path="/" component={Public} />
        <Route exact path="/public" component={Public} />
        <PrivateRoute
          exact
          path="/protected"
          component={Protected}
          isAuthenticated={isAuthenticated}
        />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/reset-password/:token" component={ResetPassword} />
        <Route path="/verify-email/:token" component={VerifyEmail} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.session.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => {
  return {
    isAuthenticatedCheck: () => dispatch(isAuthenticatedCheck()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
