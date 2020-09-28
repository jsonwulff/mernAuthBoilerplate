import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from '@material-ui/core';

function LoginButton({ display, to, className }) {
  if (display) {
    return null;
  }
  return (
    <Link
      to={to}
      variant="button"
      color="textPrimary"
      component={NavLink}
      activeClassName="active"
      className={className}
    >
      Sign up
    </Link>
  );
}

export default LoginButton;
