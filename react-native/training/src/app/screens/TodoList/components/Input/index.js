import React, { Component, Fragment } from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';

import CustomButton from '../../../../components/CustomButton';

import styles from './styles';

class Input extends Component {
  state = {
    text: ''
  };

  onChangeText = text => this.setState({ text });

  onSubmitEditing = () => {
    const { onSubmitEditing } = this.props;
    const { text } = this.state;

    if (!text) return;

    onSubmitEditing(text);
    this.setState({ text: '' });
  };

  render() {
    const { placeholder } = this.props;
    const { text } = this.state;

    return (
      <Fragment>
        <TextInput
          autoFocus
          style={styles.input}
          value={text}
          placeholder={placeholder}
          onChangeText={this.onChangeText}
          onSubmitEditing={this.onSubmitEditing}
        />
        <CustomButton onPress={this.onSubmitEditing} green title="Add" style={styles.addButton} />
      </Fragment>
    );
  }
}

Input.propTypes = {
  onSubmitEditing: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default Input;
