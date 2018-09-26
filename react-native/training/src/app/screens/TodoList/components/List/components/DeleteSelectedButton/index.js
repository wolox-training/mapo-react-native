import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CustomButton from '../../../../../../components/CustomButton';

import styles from './styles';

class Button extends Component {
  handleClick = () => {
    const { onDeleteChecked } = this.props;
    onDeleteChecked();
  };

  render() {
    return (
      <CustomButton
        style={styles.deleteButton}
        textStyle={styles.textWhite}
        onPress={this.handleClick}
        title="Delete selected ToDo's"
      />
    );
  }
}

Button.propTypes = {
  onDeleteChecked: PropTypes.func.isRequired
};

export default Button;
