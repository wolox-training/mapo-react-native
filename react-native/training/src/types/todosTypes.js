import PropTypes from 'prop-types';

const types = {
  todo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    key: PropTypes.number.isRequired,
    checked: PropTypes.bool.isRequired
  })
};

export default types;
