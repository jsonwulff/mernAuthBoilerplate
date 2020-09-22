import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { isAuthenticatedCheck } from '../session/sessionActions';

function PrivateRoute({
  component: Component,
  isAuthenticated,
  isAuthenticatedCheck,
  ...rest
}) {
  useEffect(() => isAuthenticatedCheck());
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

const mapStateToProps = (state) => ({
  isAuthenticated: state.session.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => {
  return {
    isAuthenticatedCheck: () => dispatch(isAuthenticatedCheck()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
