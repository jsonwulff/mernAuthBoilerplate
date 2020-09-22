import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { isAuthenticatedCheck } from './login/LoginActions';

import Header from './common/Header';
import PrivateRoute from './common/PrivateRoute';
import Login from './login/Login';
import Protected from './common/protectedPage';
import Public from './common/pubilicPage';
// import UsersContainer from './userPlaceholder/user';
import SignUp from './signup/SignUp';

import CssBaseline from '@material-ui/core/CssBaseline';

function App({ isAuthenticatedCheck }) {
  useEffect(() => {
    console.log('frontpage');
    isAuthenticatedCheck();
  });
  return (
    <Router>
      <CssBaseline />
      <Header />
      <Switch>
        <Route exact path="/public" component={Public} />
        <PrivateRoute exact path="/protected">
          <Protected />
        </PrivateRoute>
        <Route exact path="/signup" component={SignUp} />
        {/* <Route exact path="/users" component={UsersContainer} /> */}
        <Route exact path="/login" component={Login} />
        <Route path="*"></Route> 404 no match
      </Switch>
    </Router>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    isAuthenticatedCheck: () => dispatch(isAuthenticatedCheck()),
  };
};

export default connect(null, mapDispatchToProps)(App);
