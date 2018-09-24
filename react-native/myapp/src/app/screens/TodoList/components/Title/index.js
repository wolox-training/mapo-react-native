import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class Title extends Component {
  render() {
    const { children } = this.props;

    return (
      <View style={styles.header}>
        <Text style={styles.title}>{children}</Text>
      </View>
    );
  }
}

Title.propTypes = {
  children: PropTypes.string.isRequired
};

export default Title;
