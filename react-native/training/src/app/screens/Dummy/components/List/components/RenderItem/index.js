import React from 'react';
import { View, Text } from 'react-native';

import booksTypes from '../../../../../../../types/booksTypes';
import styles from '../../styles';

import Picture from './components/Picture';

const RenderItem = ({ item }) => (
  <View style={styles.item} key={item.id}>
    <Picture imgUrl={item.image_url} />
    <View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.author}>{item.author}</Text>
    </View>
  </View>
);

RenderItem.propTypes = {
  item: booksTypes.book
};

export default RenderItem;
