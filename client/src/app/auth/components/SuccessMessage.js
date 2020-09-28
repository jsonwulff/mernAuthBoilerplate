import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SuccessMessage({ message }) {
  const classes = useStyles();
  return (
    <Alert severity="success" className={classes.submit}>
      {message}
    </Alert>
  );
}

export default SuccessMessage;
