import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';

import booksTypes from '../../../../../../../../../types/booksTypes';
import styles from '../../styles';

class RenderItem extends Component {
  getImage = url =>
    url !== null ? (
      <Image
        source={{
          uri: url
        }}
        style={styles.image}
        resizeMode="cover"
      />
    ) : (
      <Icon name="cross" type="entypo" color="#fff" />
    );

  render() {
    const { item } = this.props;
    return (
      <View style={styles.item} key={item.id}>
        <View style={styles.imageContainer}>{this.getImage(item.image_url)}</View>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.author}>{item.author}</Text>
        </View>
      </View>
    );
  }
}

RenderItem.propTypes = {
  item: booksTypes.book
};

export default RenderItem;
