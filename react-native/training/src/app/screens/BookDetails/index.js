import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

import styles from './styles';

class DetailsScreen extends Component {
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
      <Icon style={styles.title} name="cross" type="entypo" color="#fff" />
    );

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('item', 'No item');

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>{this.getImage(item.image_url)}</View>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.about}>
          <Text style={styles.author}>Author: {item.author}</Text>
          <Text style={styles.genre}>{item.genre}</Text>
          <Text style={styles.publisher}>{item.publisher}</Text>
          <Text style={styles.year}>{item.year}</Text>
        </View>
      </View>
    );
  }
}

DetailsScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired
};

export default withNavigation(DetailsScreen);
