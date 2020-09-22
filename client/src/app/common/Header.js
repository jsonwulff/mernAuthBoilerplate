import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

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

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
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
          <Link
            to="/signup"
            variant="button"
            color="textPrimary"
            component={NavLink}
            activeClassName="active"
            className={classes.link}
          >
            Sign up
          </Link>
          <Button
            to="/login"
            variant="outlined"
            color="primary"
            component={NavLink}
            activeClassName="active"
            className={classes.link}
          >
            Login
          </Button>
        </nav>
      </Toolbar>
    </AppBar>
  );
}
