import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { authenticatedCheck } from './auth/authenticated/authenticatedActions';

import Header from './common/Header';
import PrivateRoute from './common/PrivateRoute';
import Protected from './common/protectedPage';
import Public from './common/pubilicPage';
import NotFound from './common/NotFound';
import Auth from './routes/Auth';
// import UsersContainer from './userPlaceholder/user';

import CssBaseline from '@material-ui/core/CssBaseline';

function App({ authenticated, authenticatedCheck }) {
  useEffect(() => {
    authenticatedCheck();
  }, [authenticatedCheck]);

  return (
    <Router>
      <CssBaseline />
      <Header authenticated={authenticated} />
      <Switch>
        <Route exact path="/" component={Public} />
        <Route exact path="/public" component={Public} />
        <PrivateRoute exact path="/protected" component={Protected} authenticated={authenticated} />
        <Route path="/auth" component={Auth} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
});

const mapDispatchToProps = (dispatch) => {
  return {
    authenticatedCheck: () => dispatch(authenticatedCheck()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
