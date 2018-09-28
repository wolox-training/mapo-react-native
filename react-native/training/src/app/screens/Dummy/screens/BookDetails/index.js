import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

import Picture from '../../../../components/Picture';

import styles from './styles';

const DetailsScreen = ({ navigation }) => {
  const item = navigation.getParam('item', 'No item');

  return (
    <View style={styles.container}>
      <Picture imgUrl={item.image_url} size={200} />
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.about}>
        <Text style={styles.author}>Author: {item.author}</Text>
        <Text style={styles.genre}>{item.genre}</Text>
        <Text style={styles.publisher}>{item.publisher}</Text>
        <Text style={styles.year}>{item.year}</Text>
      </View>
    </View>
  );
};

DetailsScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired
};

export default withNavigation(DetailsScreen);
