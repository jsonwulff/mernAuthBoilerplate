import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { loginUser } from './sessionActions';
import {
  Button,
  Grid,
  Checkbox,
  Link,
  makeStyles,
  Paper,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
} from '@material-ui/core/';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'calc(100vh - 64px)',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    width: '100%',
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login({ login, loginUser }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  useEffect(() => {
    if (login.isAuthenticated === true) {
      history.push(from);
    }
  });

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    loginUser(values, history, from.pathname);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} lg={9} className={classes.image} />
      <Grid
        container
        item
        alignItems="center"
        xs={12}
        sm={8}
        md={5}
        lg={3}
        component={Paper}
        elevation={6}
        square
      >
        <div className={classes.paper}>
          <p>You must log in to view the page at {from.pathname}</p>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={onSubmit}>
            <TextField
              onChange={onChange}
              error={login.errors.email ? true : false}
              helperText={login.errors.email ? login.errors.email : false}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              error={login.errors.password ? true : false}
              helperText={login.errors.password ? login.errors.password : false}
              onChange={onChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forgot-password" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    login: state.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (loginData, history, from) => dispatch(loginUser(loginData, history, from)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
