import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

function LoginButton({ display, to, className }) {
  if (display) {
    return null;
  }
  return (
    <Button
      to={to}
      variant="outlined"
      color="primary"
      component={NavLink}
      activeClassName="active"
      className={className}
    >
      Login
    </Button>
  );
}

export default LoginButton;
