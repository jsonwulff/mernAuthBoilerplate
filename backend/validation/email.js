const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateEmail(email) {
  const errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.email = !isEmpty(data.email) ? data.email : '';

  // Email checks
  if (Validator.isEmpty(email)) {
    errors.email = 'Email field is required';
  } else if (!Validator.isEmail(email)) {
    errors.email = 'Email is invalid';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
