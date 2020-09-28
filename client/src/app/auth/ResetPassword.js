import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { resetPassword } from './resetPassword/resetPasswordActions';
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
import { Alert } from '@material-ui/lab/';

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
  warning: {
    margin: theme.spacing(3, 0, 0),
  },
}));

function ResetPassword({ errors, resetPassword, message, history }) {
  const classes = useStyles();
  const { token } = useParams();
  const [values, setValues] = useState({
    password: '',
    password2: '',
    token,
  });

  useEffect(() => {
    if (message) {
      history.push('/auth/login');
    }
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    resetPassword(values);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Reset password
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
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
            Reset password
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/auth/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
        {errors.error ? (
          <Alert severity="error" className={classes.warning}>
            {errors.error}
          </Alert>
        ) : null}
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    errors: state.auth.resetPassword.errors,
    message: state.auth.resetPassword.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetPassword: (resetData) => dispatch(resetPassword(resetData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
