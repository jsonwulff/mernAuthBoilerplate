import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { isAuthenticatedCheck } from './session/sessionActions';

import Header from './common/Header';
import PrivateRoute from './common/PrivateRoute';
import Protected from './common/protectedPage';
import Public from './common/pubilicPage';
import Login from './session/login';
import SignUp from './session/signUp';
// import UsersContainer from './userPlaceholder/user';

import CssBaseline from '@material-ui/core/CssBaseline';

function App({ props, isAuthenticatedCheck }) {
  useEffect(() => {
    console.log('frontpage');
    isAuthenticatedCheck();
  });
  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Header />
      </Switch>
      <Switch>
        <Route exact path="/public" component={Public} />
        <PrivateRoute exact path="/protected" component={Protected} />
        <Route exact path="/signup" component={SignUp} />
        {/* <Route exact path="/users" component={UsersContainer} /> */}
        <Route exact path="/login" component={Login} />
        <Route path="*"></Route> 404 no match
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
