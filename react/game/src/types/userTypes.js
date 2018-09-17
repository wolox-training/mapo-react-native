import PropTypes from 'prop-types';

const types = {
  user: {
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    date_of_birth: PropTypes.string.isRequired
  }
};

export default types;
