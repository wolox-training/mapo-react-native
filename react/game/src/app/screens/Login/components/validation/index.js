import validator from 'validator';

export const required = value => (value ? undefined : 'Value is required');

export const email = value => {
  if (!validator.isEmail(value)) {
    return `${value} is not a valid email.`;
  }
};

export const minLength = value => (value.length < 8 ? 'Password too short' : undefined);
