import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import LogoutButton from './components/LogoutButton';

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

function LoginButton(props) {
  if (props.display) {
    return null;
  }
  return (
    <Button
      to="/login"
      variant="outlined"
      color="primary"
      component={NavLink}
      activeClassName="active"
      className={props.className}
    >
      Login
    </Button>
  );
}

function SignUpButton(props) {
  if (props.display) {
    return null;
  }
  return (
    <Link
      to="/signup"
      variant="button"
      color="textPrimary"
      component={NavLink}
      activeClassName="active"
      className={props.className}
    >
      Sign up
    </Link>
  );
}

function Header(props) {
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
          // component={Typography}
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
          {props.isAuthenticated ? (
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
          <SignUpButton className={classes.link} display={props.isAuthenticated} />
          <LoginButton className={classes.link} display={props.isAuthenticated} />
          <LogoutButton className={classes.link} display={!props.isAuthenticated} />
        </nav>
      </Toolbar>
    </AppBar>
  );
}

// const mapStateToProps = (state) => ({
//   isAuthenticated: state.session.isAuthenticated,
// });

export default connect()(withRouter(Header));
