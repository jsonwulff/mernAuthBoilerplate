import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { verifyEmail } from './sessionActions';

function VerifyEmail({ verifyEmailErrors, verifyEmail }) {
  const { token } = useParams();

  useEffect(() => {
    verifyEmail({ token });
  }, [token, verifyEmail]);

  return <div>{verifyEmailErrors.Error}</div>;
}

const mapStateToProps = (state) => {
  return {
    verifyEmailErrors: state.session.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    verifyEmail: (token) => dispatch(verifyEmail(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
