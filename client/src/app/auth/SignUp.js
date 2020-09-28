import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { signUpUser } from './signUp/signUpActions';
import Copyright from '../common/Copyright';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  makeStyles,
  Container,
} from '@material-ui/core/';
import SuccessMessage from './components/SuccessMessage';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignUp({ errors, message, authenticated, signUpUser }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  useEffect(() => {
    if (authenticated === true) {
      history.push(from);
    }
  });

  useEffect(() => {
    if (message) {
      clearValues();
    }
  }, [message]);

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
  });

  // console.log(values);
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    signUpUser(values);
  };

  const clearValues = () => {
    setValues({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                value={values.firstName}
                error={errors.firstName ? true : false}
                helperText={errors.firstName ? errors.firstName : false}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={values.lastName}
                error={errors.lastName ? true : false}
                helperText={errors.lastName ? errors.lastName : false}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={values.email}
                error={errors.email ? true : false}
                helperText={errors.email ? errors.email : false}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={values.password}
                error={errors.password ? true : false}
                helperText={errors.password ? errors.password : false}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={values.password2}
                error={errors.password2 ? true : false}
                helperText={errors.password2 ? errors.password2 : false}
                variant="outlined"
                required
                fullWidth
                name="password2"
                label="Repeat Password"
                type="password"
                id="password2"
                onChange={onChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/auth/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
        {message ? <SuccessMessage message={message} /> : null}
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated,
    errors: state.auth.signUp.errors,
    message: state.auth.signUp.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUpUser: (newUser) => dispatch(signUpUser(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
