import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Toolbar, Link, AppBar, makeStyles } from '@material-ui/core';

import LogoutButton from './components/LogoutButton';
import LoginButton from './components/LoginButton';
import SignUpButton from './components/SignUpButton';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

function Header({ authenticated }) {
  const classes = useStyles();

  return (
    <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      <Toolbar>
        <Link
          to="/"
          variant="h6"
          color="inherit"
          component={NavLink}
          noWrap
          className={classes.toolbarTitle}
        >
          e-Xercise
        </Link>
        <nav>
          <Link
            to="/public"
            variant="button"
            color="textPrimary"
            component={NavLink}
            activeClassName="active"
            className={classes.link}
          >
            Public
          </Link>
          {authenticated ? (
            <Link
              to="/protected"
              variant="button"
              color="textPrimary"
              component={NavLink}
              activeClassName="active"
              className={classes.link}
            >
              Protected
            </Link>
          ) : null}
          <SignUpButton to="/auth/signup" className={classes.link} display={authenticated} />
          <LoginButton to="/auth/login" className={classes.link} display={authenticated} />
          <LogoutButton className={classes.link} display={!authenticated} />
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default connect()(withRouter(Header));
