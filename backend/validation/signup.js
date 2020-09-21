const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateSignUpInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = 'Firstname field is required';
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = 'Lastname field is required';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  } else if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invald';
  }

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
