import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import booksTypes from '../../../../../../../types/booksTypes';
import styles from '../../styles';

import Picture from './components/Picture';

const RenderItem = ({ item, navigation }) => (
  <TouchableOpacity
    style={styles.item}
    key={item.id}
    onPress={() => {
      navigation.navigate('BookDetails', {
        item
      });
    }}
  >
    <Picture imgUrl={item.image_url} />
    <View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.author}>{item.author}</Text>
    </View>
  </TouchableOpacity>
);

RenderItem.propTypes = {
  item: booksTypes.book,
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired
};

export default withNavigation(RenderItem);
