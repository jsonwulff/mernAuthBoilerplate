import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../auth/authenticated/authenticatedActions';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

function LogoutButton({ display, className, logoutUser }) {
  const onClick = (e) => {
    e.preventDefault();
    logoutUser();
  };

  if (display) {
    return null;
  }
  return (
    <Button
      to="#"
      variant="outlined"
      color="primary"
      component={NavLink}
      activeClassName="active"
      className={className}
      onClick={onClick}
    >
      Logout
    </Button>
  );
}

const mapDispathToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser()),
  };
};

export default connect(null, mapDispathToProps)(LogoutButton);
