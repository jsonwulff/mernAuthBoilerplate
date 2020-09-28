import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authenticatedCheck } from '../auth/authenticated/authenticatedActions';

function PrivateRoute({ component: Component, isAuthenticated, authenticatedCheck, ...rest }) {
  useEffect(() => authenticatedCheck(), [authenticatedCheck]);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          <Component {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticatedCheck: () => dispatch(authenticatedCheck()),
  };
};

export default connect(null, mapDispatchToProps)(PrivateRoute);
