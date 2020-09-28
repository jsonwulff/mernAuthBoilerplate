import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { verifyEmail, resendVerificationEmail } from './verifyEmail/verifyEmailActions';
import { Button, makeStyles, Container } from '@material-ui/core';
import { Alert, Skeleton } from '@material-ui/lab/';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function VerifyEmail({
  error,
  verifyEmail,
  message,
  authenticated,
  history,
  location,
  resendVerificationEmail,
  loading,
}) {
  const classes = useStyles();
  const { token } = useParams();
  const { from } = location.state || { from: { pathname: '/' } };

  useEffect(() => {
    verifyEmail({ token });
    console.log('useEffect called');
  }, [token, verifyEmail]);

  useEffect(() => {
    if (message) {
      history.push('/auth/login');
    }
    if (authenticated) {
      history.push(from);
    }
  });

  const onSubmit = (e) => {
    e.preventDefault();
    resendVerificationEmail({ token });
  };

  return loading ? (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Skeleton />
      </div>
    </Container>
  ) : (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Alert severity="error">{error}</Alert>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={onSubmit}
        >
          Resend activation email
        </Button>
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    error: state.auth.verifyEmail.error,
    loading: state.auth.verifyEmail.loading,
    message: state.auth.verifyEmail.message,
    authenticated: state.auth.authenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    verifyEmail: (token) => dispatch(verifyEmail(token)),
    resendVerificationEmail: (token) => dispatch(resendVerificationEmail(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
