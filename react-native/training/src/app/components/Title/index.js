import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Title = props => {
  const { children } = props;

  return (
    <View style={styles.header}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

Title.propTypes = {
  children: PropTypes.string.isRequired
};

export default Title;
