const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validatePassword(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password fields is required';
  } else if (!Validator.isLength(data.password, { min: 6, max: 32 })) {
    errors.password = 'Password must be between 6 and 32 characters';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Password fields is required';
  } else if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
