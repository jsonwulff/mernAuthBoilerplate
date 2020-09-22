import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { isAuthenticatedCheck } from '../login/LoginActions';

function PrivateRoute({
  children,
  isAuthenticated,
  // isAuthenticatedCheck,
  ...rest
}) {
  useEffect(() => isAuthenticatedCheck());
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
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

const mapStateToProps = (state) => ({
  isAuthenticated: state.login.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => {
  return {
    isAuthenticatedCheck: () => dispatch(isAuthenticatedCheck()),
  };
};

export default connect(mapStateToProps, null)(PrivateRoute);
