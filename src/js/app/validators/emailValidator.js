const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const emailValidatorCreator = (message) => (email) => {
  const valid = emailRegexp.test((email || '').toLowerCase());
  return valid ? undefined : message
};

export const emailValidator = emailValidatorCreator('Valid email required');